const express = require('express')
const path = require('path')
const dotenv = require('dotenv')
const cors = require('cors')
const bodyParser = require('body-parser');
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;
const nodemailer = require('nodemailer');
dotenv.config()


const app = express()
const port = process.env.PORT || 3000


const buildPath = path.join(__dirname, 'build')


app.use(express.static(buildPath))
app.use(express.json())
app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// gets the static files from the build folder
app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'))
})

const oauth2Client = new OAuth2(
  process.env.GMAIL_CLIENTID, // ClientID
  process.env.GMAIL_CLIENTSECRET, // Client Secret
  "https://developers.google.com/oauthplayground" // Redirect URL
);

oauth2Client.setCredentials({
  refresh_token: process.env.GMAIL_REFRESHTOKEN
});

const accessToken = oauth2Client.getAccessToken()

const validateFormInput = require("./validation/formValidation");

app.post("/api/form", (req, res, next) => {

  const { errors, isValid } = validateFormInput(req.body);

  if(!isValid) {
      return res.status(400).json(errors);
  }

  if (req.body.name.length === 0) {
      return res.status(400).json({
          name: "You must enter your name"
      })
  }

  else if (req.body.email.length === 0) {
      return res.status(400).json({
          email: "You must enter your email"
      })
  }

  else if (req.body.message.length === 0 ) {
      return res.status(400).json({
          message: "You must enter a message"
      })
  }

  else {
      const htmlEmail = `
      <h3>Contact Details</h3>
      <ul>
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
      </u>
      <h3>Message</h3>
      <p>${req.body.message}</p>
      `

      let transporter = nodemailer.createTransport({
          service: 'Gmail',
          tls: {
              rejectUnauthorized: false
          },
          auth: {
              type: 'OAuth2',
              user: 'bessygmartinez83@gmail.com',
              clientId: process.env.GMAIL_CLIENTID,
              clientSecret: process.env.GMAIL_CLIENTSECRET,
              refreshToken: process.env.GMAIL_REFRESHTOKEN,
              accessToken: accessToken
              }
      })

      transporter.verify((error, success) => {
          if (error) {
              console.log(error);
          } else {
              console.log("Server is ready to take messages");
          }
      });

      let mailOptions = {
          from: req.body.email,
          to: "bessygmartinez83@gmail.com",
          replyTo: req.body.email,
          subject: "New Message from Portfolio Form",
          text: req.body.message,
          html: htmlEmail
      }

      transporter.sendMail(mailOptions, (err, data) => {
          if (err) {
              console.log("error")
          res.json({
              msg: "fail",
              err: err
          })
          } else {
              console.log("successful")
              res.json({
                  msg: "success"
              })
          }
      })
      
      transporter.close();
  }
});


// Showing that the server is online and running and listening for changes
app.listen(port, () => {
  console.log(`Server is online on port: ${port}`)
})