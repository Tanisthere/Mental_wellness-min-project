const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');  // Import cors
const { google } = require('googleapis');

// Load your refresh token, client ID, and client secret from OAuth Playground
const CLIENT_ID = '108881995497-rthhf13436ojpp5brn83t68b5ha8n3po.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';  // Redirect URI set in Google OAuth Console
const REFRESH_TOKEN = '1//04cWKlaFhVx5kCgYIARAAGAQSNwF-L9IrWBSVFtTX0_3f3upm56KMOrSAseTRrO75OJjPUMrTbjxhU4bcVzYeZVXhV4pSwccoTKw';  // Token from OAuth Playground

// OAuth2 Client Setup
const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const app = express();
app.use(cors());  // Enable CORS
app.use(bodyParser.json());  // Parse JSON data from requests

// Send email route
app.post('/send-email', async (req, res) => {
    const { doctorEmail, userEmail } = req.body;  // Collect data from frontend

    try {
        // Get a new access token using the refresh token
        const accessToken = await oAuth2Client.getAccessToken();

        // Nodemailer transport configuration using OAuth2
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: 'nt4tanishqpace@gmail.com',  // Your Gmail address (sending email)
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken.token,
            },
        });

        // Email content
        const mailOptions = {
            from: 'nt4tanishqpace@gmail.com',  // Sender's email address
            to: doctorEmail,  // Doctor's email address selected by the user
            subject: 'New Appointment Request',
            text: `A user with email: ${userEmail} has requested an appointment. Please follow up accordingly.`,
        };

        // Send the email
        const result = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully:', result);
        res.status(200).send('Email sent successfully to the doctor!');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error sending email.');
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

