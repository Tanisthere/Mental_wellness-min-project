// const express = require('express');
// const bodyParser = require('body-parser');
// const nodemailer = require('nodemailer');
// const path = require('path');

// const app = express();
// app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, 'public')));

// // Predefined Google Meet links
// const googleMeetLinks = [
//     'https://meet.google.com/abc-defg-hij',
//     'https://meet.google.com/jkl-mnop-qrt',
//     'https://meet.google.com/stu-vwxy-zab',
//     'https://meet.google.com/cde-fghi-jkl',
//     'https://meet.google.com/mno-pqrs-tuv'
// ];

// // Function to get a random Google Meet link
// function getRandomMeetLink() {
//     const randomIndex = Math.floor(Math.random() * googleMeetLinks.length);
//     return googleMeetLinks[randomIndex];
// }

// // Serve the Doctor Login page
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'Doctor_login.html'));
// });

// // Route to generate Google Meet link
// app.post('/generate-meet-link', (req, res) => {
//     try {
//         const meetLink = getRandomMeetLink(); // Generate random Meet link
//         res.json({ meetLink });
//     } catch (error) {
//         console.error('Error generating meet link:', error.message);
//         res.status(500).send('Error generating Meet link');
//     }
// });

// // Route to send email with the Google Meet link
// app.post('/send-email', (req, res) => {
//     const { patientEmail, meetingLink } = req.body;

//     // Configure Nodemailer transport
//     const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: 'nt4tanishqpace@gmail.com', // Replace with your email
//             pass: 'your-password' // Replace with your email password or app password
//         }
//     });

//     // Set up email options
//     const mailOptions = {
//         from: 'your-email@gmail.com',
//         to: patientEmail,
//         subject: 'Your Appointment Google Meet Link',
//         text: `Here is your Google Meet link for the appointment: ${meetingLink}`
//     };

//     // Send the email
//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             console.error('Error sending email:', error.message);
//             return res.status(500).send('Error sending email');
//         } else {
//             console.log('Email sent:', info.response);
//             res.status(200).send('Email sent successfully');
//         }
//     });
// });

// app.listen(4000, () => {
//     console.log('Doctor server running on http://localhost:4000');
// });




// const express = require('express');
// const bodyParser = require('body-parser');
// const nodemailer = require('nodemailer');
// const { google } = require('googleapis');
// const path = require('path');

// const app = express();
// app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, 'public')));

// // Predefined Google Meet links
// const googleMeetLinks = [
//     'https://meet.google.com/abc-defg-hij',
//     'https://meet.google.com/jkl-mnop-qrt',
//     'https://meet.google.com/stu-vwxy-zab',
//     'https://meet.google.com/cde-fghi-jkl',
//     'https://meet.google.com/mno-pqrs-tuv'
// ];

// // Function to get a random Google Meet link
// function getRandomMeetLink() {
//     const randomIndex = Math.floor(Math.random() * googleMeetLinks.length);
//     return googleMeetLinks[randomIndex];
// }

// // OAuth2 client setup
// const oauth2Client = new google.auth.OAuth2(
//     '108881995497-rthhf13436ojpp5brn83t68b5ha8n3po.apps.googleusercontent.com',
//     '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',
//     'https://developers.google.com/oauthplayground'
// );

// oauth2Client.setCredentials({
//     refresh_token: '1//04cWKlaFhVx5kCgYIARAAGAQSNwF-L9IrWBSVFtTX0_3f3upm56KMOrSAseTRrO75OJjPUMrTbjxhU4bcVzYeZVXhV4pSwccoTKw'
// });

// // Generate a new access token using the refresh token
// async function getAccessToken() {
//     const { token } = await oauth2Client.getAccessToken();
//     return token;
// }

// // Serve the Doctor Login page
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'Doctor_login.html'));
// });

// // Route to generate Google Meet link
// app.post('/generate-meet-link', (req, res) => {
//     try {
//         const meetLink = getRandomMeetLink();
//         res.json({ meetingLink: meetLink });
//     } catch (error) {
//         console.error('Error generating meet link:', error.message);
//         res.status(500).send('Error generating Meet link');
//     }
// });

// // Route to send email with the Google Meet link using OAuth2
// app.post('/send-email', async (req, res) => {
//     const { patientEmail, meetingLink } = req.body;

//     try {
//         // Get the access token
//         const accessToken = await getAccessToken();

//         // Configure Nodemailer transport using OAuth2
//         const transporter = nodemailer.createTransport({
//             service: 'gmail',
//             auth: {
//                 type: 'OAuth2',
//                 user: 'nt4tanishqpace@gmail.com', // Replace with your Gmail address
//                 clientId: '108881995497-rthhf13436ojpp5brn83t68b5ha8n3po.apps.googleusercontent.com',
//                 clientSecret: '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',
//                 refreshToken: '1//04cWKlaFhVx5kCgYIARAAGAQSNwF-L9IrWBSVFtTX0_3f3upm56KMOrSAseTRrO75OJjPUMrTbjxhU4bcVzYeZVXhV4pSwccoTKw',
//                 accessToken: 'ya29.a0AcM612xias93u7oWHAyfeJ2mrwqh8Sc6nY6WpdLzzSfk7IGsGdPRtp7OpWGChVMPAz2yJP_N1CZUPVicS54zkjEGWwc6hrWKcWG191uYcCNGRX9nb7iJDYfZe4mOnyJ0GP02ZWo9Gn98OkwBF-p_spqny3GHWv5AdeNDDd2ueAaCgYKAUYSARMSFQHGX2Mi982AlHGKddwIwdsDrgLP_A0177',
//             }
//         });

//         // Set up email options
//         const mailOptions = {
//             from: 'nt4tanishqpace@gmail.com', // Replace with your Gmail address
//             to: patientEmail,
//             subject: 'Your Appointment Google Meet Link',
//             text: `Here is your Google Meet link for the appointment: ${meetingLink}`
//         };

//         // Send the email
//         transporter.sendMail(mailOptions, (error, info) => {
//             if (error) {
//                 console.error('Error sending email:', error.message);
//                 return res.status(500).send('Error sending email');
//             } else {
//                 console.log('Email sent:', info.response);
//                 res.status(200).send('Email sent successfully');
//             }
//         });
//     } catch (error) {
//         console.error('Error obtaining access token or sending email:', error.message);
//         res.status(500).send('Error sending email');
//     }
// });

// app.listen(4000, () => {
//     console.log('Doctor server running on http://localhost:4000');
// });





const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const cors = require('cors');  // CORS middleware
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(cors());  // Enable CORS for all routes
app.use(express.static(path.join(__dirname, 'public')));

// Predefined Google Meet links
const googleMeetLinks = [
    'https://meet.google.com/abc-defg-hij',
    'https://meet.google.com/jkl-mnop-qrt',
    'https://meet.google.com/stu-vwxy-zab',
    'https://meet.google.com/cde-fghi-jkl',
    'https://meet.google.com/mno-pqrs-tuv'
];

// Function to get a random Google Meet link
function getRandomMeetLink() {
    const randomIndex = Math.floor(Math.random() * googleMeetLinks.length);
    return googleMeetLinks[randomIndex];
}

// OAuth2 client setup
const oauth2Client = new google.auth.OAuth2(
  '108881995497-rthhf13436ojpp5brn83t68b5ha8n3po.apps.googleusercontent.com',
  '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',
  'https://developers.google.com/oauthplayground'
);

oauth2Client.setCredentials({
    refresh_token: '1//04cWKlaFhVx5kCgYIARAAGAQSNwF-L9IrWBSVFtTX0_3f3upm56KMOrSAseTRrO75OJjPUMrTbjxhU4bcVzYeZVXhV4pSwccoTKw'
});

// Generate a new access token using the refresh token
async function getAccessToken() {
    const { token } = await oauth2Client.getAccessToken();
    return token;
}

// Serve the Doctor Login page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Doctor_login.html'));
});

// Route to generate Google Meet link
app.post('/generate-meet-link', (req, res) => {
    try {
        const meetLink = getRandomMeetLink();  // Generate random Meet link
        res.json({ meetingLink: meetLink });
    } catch (error) {
        console.error('Error generating meet link:', error.message);
        res.status(500).send('Error generating Meet link');
    }
});

// Route to send email with the Google Meet link using OAuth2
app.post('/send-email', async (req, res) => {
    const { patientEmail, meetingLink } = req.body;

    try {
        // Get the access token
        const accessToken = await getAccessToken();

        // Configure Nodemailer transport using OAuth2
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: 'nt4tanishqpace@gmail.com',
                clientId: '108881995497-rthhf13436ojpp5brn83t68b5ha8n3po.apps.googleusercontent.com',
                clientSecret: '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',
                refreshToken: '1//04cWKlaFhVx5kCgYIARAAGAQSNwF-L9IrWBSVFtTX0_3f3upm56KMOrSAseTRrO75OJjPUMrTbjxhU4bcVzYeZVXhV4pSwccoTKw',
                accessToken: 'ya29.a0AcM612zfO8lcuPk1Z-OhRwwTkEPmiF3fhoJ0vMuzuL37-4MvrwZmgpJRSxH19Ym_-cyPyr68Rnv6NyBwzJKc3oKQ7tkfzmKRH6dT4XnwIcqHmBIywOeRLV-6SP472a9JJZ9P6FVltgc_115jKtOrsv2zW5owoocbqBIhwWKX1QaCgYKAXcSARMSFQHGX2MiXa0WKPk0MFrHF669BGazgA0177 ',
            }
        });

        // Set up email options
        const mailOptions = {
            from: 'nt4tanishqpace@gmail.com',
            to: patientEmail,
            subject: 'Your Appointment Google Meet Link',
            text: `Here is your Google Meet link for the appointment: ${meetingLink}`
        };

        // Send the email
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error.message);
                return res.status(500).send('Error sending email');
            } else {
                console.log('Email sent:', info.response);
                res.status(200).send('Email sent successfully');
            }
        });
    } catch (error) {
        console.error('Error obtaining access token or sending email:', error.message);
        res.status(500).send('Error sending email');
    }
});

app.listen(4000, () => {
    console.log('Doctor server running on http://localhost:4000');
});
