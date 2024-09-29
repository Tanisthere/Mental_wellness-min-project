# WELCOME

**Follow the steps given below to integrate this project successfully in your device**

1. Watch video: [https://www.youtube.com/watch?v=-rcRf7yswfM](https://www.youtube.com/watch?v=-rcRf7yswfM) up to: 6:59 and accordingly follow the steps. *(Keep the developer's window open after creating tokens in a side tab)*
2. Download the zip file.
3. Replace client ID, client secret, refresh token ID, access token with yours generated.
4. Then in the terminal type the following commands. *(Make sure Node.js is properly configured in your device)*
    - `npm init -y` for installing dependencies
    - `npm install express body-parser nodemailer googleapis cors`
5. To run the project; we need to start the local ports first, so in the terminal type:
    - `node doctor_email_server.js`
    - `node sender_email_server.js`
    - { Make sure that both servers are running on the correct ports as mentioned in their server.js files }
6. Run the project from `main.html`.
7. If faced with any issues check whether tokens are expired or not; if yes then refresh and rewrite new refresh and token ID in server.js files.
8. If not solved, use Chrome Developer Tools + ChatGPT.

# THANK YOU

