import { Injectable } from '@nestjs/common';
import { CreateEmailPdfDto } from './dto/create-email.dto';
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
        pass: 'dbcq ubyz epqh wfma',      // App Password
      },
       logger: true,        // 🔍 Enable logging
       debug: true
    });
  }

 async create(dto: CreateEmailPdfDto) {
  const emailData = dto.emailData;

  const email = emailData.email;
  const name = emailData.name;

  if (!email || !name) {
    throw new Error('Email and name are required');
  }

  // Ensure folder exists
  const pdfDir = path.join(process.cwd(), 'EmailPDF');
  await fs.ensureDir(pdfDir);

  // Generate PDF dynamically
  const pdfFilename = `welcome_${Date.now()}.pdf`;
  const pdfPath = path.join(pdfDir, pdfFilename);

  // ⬅ PASS emailData (not just name)
  await this.generatePDF(pdfPath, emailData);

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
  await this.transporter.sendMail(mailOptions);

  // Save log
  await this.emailLogRepo.save({
    receiver_email: email,
    receiver_name: name,
    subject,
    message: htmlMessage,
    attachment: pdfFilename,
  });

  return { message: 'Email sent with dynamically generated PDF attachment.' };
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



//   private async generatePDF(filePath: string, emailData: any) {
//   return new Promise<void>((resolve, reject) => {
//     const doc = new PDFDocument({ margin: 40 });
//     const stream = fs.createWriteStream(filePath);

//     doc.pipe(stream);

    
//     // ===== TOP BLUE STRIP (Optional) =====
//     doc.rect(0, 0, doc.page.width, 60)
//       .fill("#0A4C8A"); 

//     doc.fontSize(20).text("Admission Enquiry Details", { underline: true });
//     doc.moveDown();


//     // Loop through object and print key-value pairs
//     Object.entries(emailData).forEach(([key, value]) => {
//       doc.fontSize(14).text(`${key}: ${value}`);
//       doc.moveDown(0.3);
//     });

//     doc.end();

//     stream.on('finish', () => resolve());
//     stream.on('error', (err) => reject(err));
//   });
// }
// }









// private async generatePDF(filePath: string, emailData: any) {
//   return new Promise<void>((resolve, reject) => {
//     const doc = new PDFDocument({ size: "A4", margin: 40 });
//     const stream = fs.createWriteStream(filePath);
//     doc.pipe(stream);

//     // ===== TOP BLUE STRIP =====
//     doc.rect(0, 0, doc.page.width, 100).fill("#0A4C8A");

//     // ===== COMPANY NAME & ACADEMY =====
//     doc.fillColor("#FFFFFF")
//       .fontSize(15)
//       .text("QA and DEV Spark Pvt.Ltd", 50, 15);

//     doc.fontSize(10)
//       .text("Aaminah Academy", 50, 35);

//     // ===== ADDRESS & ESTABLISHED DATE =====
//     doc
//       .fontSize(10)
//       .text("Address: WB-MH-JH Alliance, country: India", 50, 55)
//       .text(`Established: 06-Dec-2025`, 50, 75);

//     // ===== DETAILS HEADER (Centered) =====
//     doc.fillColor("#000000");
//     doc.fillColor("#000000").fontSize(13)
//       .text(`Details of ${emailData.name}`, 0, 120, { align: "center", width: doc.page.width });

//     // ===== DATE (Right-Aligned) =====
//     const date = new Date().toLocaleString("en-GB", {
//       day: "2-digit", month: "long", year: "numeric",
//       hour: "2-digit", minute: "2-digit", second: "2-digit"
//     });
//     doc.fontSize(10)
//       .text(`Date: ${date}`, 0, 140, { align: "right", width: doc.page.width });

//     // ===== LEFT-ALIGNED DETAILS =====
//     let topMargin = 160;
//     const leftMargin = 50;
//     const lineHeight = 20;

//     const details = [
//       { key: "Name", value: emailData.name },
//       { key: "Email", value: emailData.email },
//       { key: "Phone", value: emailData.phone },
//       { key: "Address", value: emailData.address },
//       { key: "Class", value: emailData.class }
//     ];

//     details.forEach((item, index) => {
//       doc.fontSize(10)
//         .text(`${index + 1}. ${item.key} : ${item.value}`, leftMargin, topMargin);
//       topMargin += lineHeight;
//     });

//     // ===== SIGNATURE BLOCK =====
//     const sigY = doc.page.height - 100;
//     const sigWidth = (doc.page.width - 100) / 3;

//     doc.fontSize(10)
//       .text("_________________", 50, sigY, { width: sigWidth, align: "center" })
//       .text("_________________", 50 + sigWidth, sigY, { width: sigWidth, align: "center" })
//       .text("_________________", 50 + sigWidth * 2, sigY, { width: sigWidth, align: "center" });

//     doc.text("Director Signature", 50, sigY + 15, { width: sigWidth, align: "center" })
//       .text("Founder Signature", 50 + sigWidth, sigY + 15, { width: sigWidth, align: "center" })
//       .text("CEO Signature", 50 + sigWidth * 2, sigY + 15, { width: sigWidth, align: "center" });

//     doc.end();

//     stream.on("finish", resolve);
//     stream.on("error", reject);
//   });
// }
// }


private async generatePDF(filePath: string, emailData: any) {
  return new Promise<void>((resolve, reject) => {
    const doc = new PDFDocument({ size: "A4", margin: 40 });
    const stream = fs.createWriteStream(filePath);
    doc.pipe(stream);

    // ===== TOP BLUE STRIP =====
    doc.rect(0, 0, doc.page.width, 100).fill("#0A4C8A");

    // ===== COMPANY NAME & ACADEMY (WHITE) =====
    doc.fillColor("#FFFFFF")
      .fontSize(15)
      .text("QA and DEV Spark Pvt.Ltd", 50, 15);

    doc.fontSize(10)
      .text("Aaminah Academy", 50, 35);

    // ===== ADDRESS & ESTABLISHED DATE (WHITE) =====
    doc.fontSize(10)
      .text("Address: WB-MH-JH Alliance, country: India", 50, 55)
      .text("Established: 06-Dec-2025", 50, 75);

    // ===== RESET COLOR TO BLACK FOR ALL OTHER CONTENT =====
    doc.fillColor("#000000");

    // ===== DETAILS HEADER (Centered) =====
    doc.fontSize(13)
      .text(`Details of ${emailData.name}`, 0, 120, { 
        align: "center", 
        width: doc.page.width 
      });

    // ===== DATE (Right-Aligned) =====
    const date = new Date().toLocaleString("en-GB", {
      day: "2-digit", month: "long", year: "numeric",
      hour: "2-digit", minute: "2-digit", second: "2-digit"
    });

   doc.fontSize(10)
  .text(`Date: ${date}`, 0, 140, { 
    align: "right",
    width: doc.page.width - 40   // 40px right margin
  })

    // ===== LEFT-ALIGNED DETAILS =====
    let topMargin = 160;
    const leftMargin = 50;
    const lineHeight = 20;

    const details = [
      { key: "Name", value: emailData.name },
      { key: "Email", value: emailData.email },
      { key: "Phone", value: emailData.phone },
      { key: "Address", value: emailData.address },
      { key: "Class", value: emailData.class },
      { key: "Source", value: emailData.source },
      { key: "Assigned", value: emailData.assigned } ,
      { key: "Reference", value: emailData.reference } ,
      { key: "Number Of Child", value: emailData.number_of_child} ,
      { key: "Enquiry Date", value: emailData.date }, 
      { key: "Next Follow Up Date", value: emailData.next_follow_up_date }, 
      // { key: "Note", value: emailData.note }, 
      { key: "Description", value: emailData.description },   

    ];

   details.forEach((item, index) => {
  const numberX = leftMargin;        // 1. 2. 3.
  const keyX = leftMargin + 20;      // Name, Email, Phone
  const colonX = leftMargin + 120;   // :
  const valueX = leftMargin + 140;   // value text starts here

  doc.fontSize(10)
    .text(`${index + 1}.`, numberX, topMargin)
    .text(`${item.key}`, keyX, topMargin)
    .text(`:`, colonX, topMargin)
    .text(`${item.value}`, valueX, topMargin);

  topMargin += lineHeight;
});
    // ===== SIGNATURE BLOCK =====
    const sigY = doc.page.height - 100;
    const sigWidth = (doc.page.width - 100) / 3;

    doc.fontSize(10)
      .text("_________________", 50, sigY, { width: sigWidth, align: "center" })
      .text("_________________", 50 + sigWidth, sigY, { width: sigWidth, align: "center" })
      .text("_________________", 50 + sigWidth * 2, sigY, { width: sigWidth, align: "center" });

    doc.text("Director Signature", 50, sigY + 15, { width: sigWidth, align: "center" })
      .text("Founder Signature", 50 + sigWidth, sigY + 15, { width: sigWidth, align: "center" })
      .text("CEO Signature", 50 + sigWidth * 2, sigY + 15, { width: sigWidth, align: "center" });

    doc.end();

    stream.on("finish", resolve);
    stream.on("error", reject);
  });
}


}