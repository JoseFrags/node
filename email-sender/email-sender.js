const nodemailer = require('nodemailer');



const transporter = nodemailer.createTransport({
  service: 'gmail',  
  auth: {
    user: 'josefrags240@gmail.com',  
    pass: 'JFUSH23@LSA',        
  },
});



const mailOptions = {
  from: 'josefrags240@gmail.com',  
  to: 'hanineazizi19@gmail.com',    
  subject: 'Test Email',         
  text: 'This is a test email from Nodemailer.',  
 
};



transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending email:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
