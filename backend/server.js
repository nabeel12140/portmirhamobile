const dotenv= require("dotenv");
const nodemailer = require('nodemailer');
dotenv.config();
const express =require("express");
const cors=require("cors");
const bodyparser = require("body-parser");


const app=express();


//midlewaer
app.use(express.json());
app.use(bodyparser.json());
app.use(cors());    


//route
app.get("/",(req,res)=>
{
    res.send("mirha")
})
app.post("/api/email",async(req,res)=>
{
    const {email}=req.body;
    
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL__USER,
      pass: process.env.EMAIL__PASS,
    },
    tls:{
      rejectUnauthorized:false,
    }
  });
  
  const mailOptions = {
    from: 'nabeelcs125@gmail.com',
    to: email,
    subject: 'Sending Email using irteza',
    text: 'That is !'
  };
  
  const info= await transporter.sendMail(mailOptions);
   console.log("message sent")
  res.send("allah hu akbar")
  

}  )

const port=process.env.PORT || 4000;
app.listen(port,()=>{
    console.log("connected:"+port);
})
