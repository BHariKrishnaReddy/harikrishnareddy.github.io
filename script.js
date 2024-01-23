// JavaScript to handle user interactions and dynamic content updates

// Function to update the views count
function updateViews() {
    const viewsElement = document.getElementById('views');
    let viewsCount = parseInt(viewsElement.innerText, 10);
    viewsCount++;
    viewsElement.innerText = viewsCount;
}

// Function to send email
function sendEmail() {
    const emailInput = document.getElementById('emailInput');
    const userEmail = emailInput.value.trim();
    
    // You can implement your email sending logic here
    
    // For now, let's just log the email to the console
    console.log(`Email sent to ${userEmail}`);
}

// Function to generate and download a PDF file
function downloadPDF() {
    const pdfContent = "This is your PDF content. Customize as needed.";
    
    const blob = new Blob([pdfContent], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    
    const downloadLink = document.getElementById('downloadLink');
    downloadLink.href = url;
    
    // Trigger a click on the download link
    downloadLink.click();
    
    // Clean up
    URL.revokeObjectURL(url);
}

// Handle favicon request (for Node.js with Express)
const isExpress = typeof module !== 'undefined' && module.exports;
if (isExpress) {
    const express = require('express');
    const app = express();

    // Serve the favicon.ico file from the root directory
    app.get('/favicon.ico', (req, res) => res.sendFile(__dirname + '/favicon.ico'));

    // Your other routes and middleware

    // Start the server
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
}

// Trigger updateViews on page load
document.addEventListener('DOMContentLoaded', function() {
    updateViews();
});
