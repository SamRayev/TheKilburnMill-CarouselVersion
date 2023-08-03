const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());

app.post('/api/store-email', (req, res) => {
  const { email } = req.body;

  // Append the email to a text file
  fs.appendFile('emails.txt', email + '\n', (err) => {
    if (err) {
      console.error('Error storing email:', err);
      res.status(500).json({ error: 'Failed to store email' });
    } else {
      console.log('Email stored successfully:', email);
      res.json({ success: true });
    }
  });
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});