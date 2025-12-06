import { Injectable } from '@nestjs/common';
import { CreateEmailDto } from './dto/create-email.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmailLog } from './entities/email.entity';
import * as nodemailer from 'nodemailer';
import * as path from 'path';
import * as fs from 'fs-extra';
import PDFDocument from 'pdfkit';

@Injectable()
export class EmailService {
  private transporter;

  constructor(
    @InjectRepository(EmailLog)
    private emailLogRepo: Repository<EmailLog>,
  ) {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'razamd260@gmail.com',      // your Gmail
        pass: 'mucq obxt komx ghbz',      // App Password
      },
    });
  }

  async create(dto: CreateEmailDto) {
    const { email, name } = dto;

    if (!email || !name) {
      throw new Error('Email and name are required');
    }

    // Ensure folder exists
    const pdfDir = path.join(process.cwd(), 'EmailPDF');
    if (!fs.existsSync(pdfDir)) {
  console.log('Folder does not exist. Creating folder...');
  fs.mkdirSync(pdfDir, { recursive: true }); 
} else {
  console.log('Folder already exists.');
}
    await fs.ensureDir(pdfDir);

    // Generate PDF dynamically
    const pdfFilename = `welcome_${Date.now()}.pdf`;
    const pdfPath = path.join(pdfDir, pdfFilename);

    await this.generatePDF(pdfPath, name);

    const subject = 'Welcome';
    const htmlMessage = `<h3>Hello ${name}</h3><p>Please find attached your PDF.</p>`;
    const textMessage = `Hello ${name}, please find attached your PDF.`;

    const mailOptions = {
      from: 'razamd260@gmail.com',
      to: email,
      subject,
      html: htmlMessage,
      text: textMessage,
      attachments: [
        {
          filename: pdfFilename,
          path: pdfPath,
          contentType: 'application/pdf',
        },
      ],
    };

    // Send email
    try {
      await this.transporter.sendMail(mailOptions);
    } catch (error) {
      console.error('Error sending email:', error);
      throw new Error('Failed to send email: ' + error.message);
    }

    // Save email log in DB
    try {
      await this.emailLogRepo.save({
        receiver_email: email,
        receiver_name: name,
        subject,
        message: htmlMessage,
        attachment: pdfFilename,
      });
    } catch (error) {
      console.error('Error saving email log:', error);
      throw new Error('Failed to save email log: ' + error.message);
    }

    return { message: 'Email sent with dynamically generated PDF attachment.' };
  }

  // Helper to generate PDF
  private async generatePDF(filePath: string, name: string) {
    return new Promise<void>((resolve, reject) => {
      const doc = new PDFDocument();
      const stream = fs.createWriteStream(filePath);

      doc.pipe(stream);
      doc.fontSize(25).text(`Hello ${name}`, 100, 100);
      doc.text('Welcome to our service! Here is your PDF attachment.', { align: 'left' });
      doc.end();

      stream.on('finish', () => resolve());
      stream.on('error', (err) => reject(err));
    });
  }

  findAll() {
    return this.emailLogRepo.find();
  }

  findOne(id: number) {
    return this.emailLogRepo.findOneBy({ id });
  }

  update(id: number) {
    return `This action updates a #${id} email`;
  }

  remove(id: number) {
    return this.emailLogRepo.delete(id);
  }
}
