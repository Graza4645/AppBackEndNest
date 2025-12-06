import { Injectable } from '@nestjs/common';
import { CreateEmailPdfDto } from './dto/create-email.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmailLog } from './entities/email.entity';
import * as nodemailer from 'nodemailer';
import * as PDFDocument from 'pdfkit';
import * as fs from 'fs-extra';
import * as path from 'path';

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
        user: 'razamd260@gmail.com',
        pass: 'your-app-password',
      },
    });
  }

  async create(dto: CreateEmailPdfDto) {
     const emailData = dto.emailData;
     const email = emailData.email;
     const name = emailData.name;
    if (!email || !name) throw new Error('Email and name are required');

    // -----------------------------
    // 🔥 Create dynamic folder name
    // -----------------------------
    const timestamp = Date.now();
    const folderName = `EmailPDF_${timestamp}`;
    const folderPath = path.join(process.cwd(), folderName);

    // Create folder dynamically
    await fs.ensureDir(folderPath);

    // PDF path inside the newly created folder
    const pdfPath = path.join(folderPath, `document-${timestamp}.pdf`);

    // Generate the PDF
    await this.generatePDF(pdfPath, `Hello ${name}, this is your dynamic PDF.`);

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
          filename: path.basename(pdfPath),
          path: pdfPath,
          contentType: 'application/pdf',
        },
      ],
    };

    // try {
    //   await this.transporter.sendMail(mailOptions);
    // } catch (err) {
    //   console.error('Error sending email:', err);
    //   throw new Error('Failed to send email: ' + err.message);
    // }


    // Log the mail options for debugging
console.log('Sending email with options:', mailOptions);

try {
  const info = await this.transporter.sendMail(mailOptions);
  console.log('Email sent successfully! Message ID:', info.messageId);
  console.log('Full info object:', info);
} catch (err) {
  console.error('Error sending email:', err);
  // Re-throw or handle gracefully
  throw new Error('Failed to send email: ' + err.message);
}

    // Save email log
    await this.emailLogRepo.save({
      receiver_email: email,
      receiver_name: name,
      subject,
      message: htmlMessage,
      attachment: path.basename(pdfPath),
      folder: folderName, // you can add this field if needed
    });

    // Optional: Remove folder after sending
    // await fs.remove(folderPath);

    return { message: 'Email sent with PDF attachment.', folder: folderName };
  }

  private generatePDF(filePath: string, text: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const doc = new PDFDocument();
      const stream = fs.createWriteStream(filePath);

      doc.pipe(stream);
      doc.text(text);
      doc.end();

      stream.on('finish', resolve);
      stream.on('error', reject);
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
