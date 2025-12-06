import { Injectable } from '@nestjs/common';
import { CreateEmailDto } from './dto/create-email.dto';
import { UpdateEmailDto } from './dto/update-email.dto';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  
   private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'razamd260@gmail.com',      // your Gmail
        pass: 'mucq obxt komx ghbz'          // app password here
      },
    });
  }


 async sendMail(to: string, name: string) {
    const mailOptions = {
      from: 'YOUR_GMAIL@gmail.com',
      to,
      subject: 'Welcome to My App',
      html: `<h2>Hello ${name},</h2>
             <p>Your registration was successful.</p>`
    };

    return await this.transporter.sendMail(mailOptions);
  }

  create(createEmailDto: CreateEmailDto) {
    return 'This action adds a new email';
  }

  findAll() {
    return `This action returns all email`;
  }

  findOne(id: number) {
    return `This action returns a #${id} email`;
  }

  update(id: number, updateEmailDto: UpdateEmailDto) {
    return `This action updates a #${id} email`;
  }

  remove(id: number) {
    return `This action removes a #${id} email`;
  }
}
