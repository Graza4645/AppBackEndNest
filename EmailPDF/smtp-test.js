import nodemailer from "nodemailer";

async function testSMTP() {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "razamd260@gmail.com",
      pass: "dbcq ubyz epqh wfma", // your Gmail App Password
    },
    logger: true,  // logs SMTP details
    debug: true,   // detailed debug output
  });

  try {
    await transporter.verify();
    console.log("✅ SMTP connection successful!");
  } catch (err) {
    console.error("❌ SMTP ERROR:", err);
    if (err.response) console.error("❌ SMTP RESPONSE:", err.response);
  }
}

testSMTP();
