# Next.js Project with Google Sheets Integration

This project integrates with a Google Sheets document to store form submissions. The form collects data including name, email, phone, and message from users and saves it to a Google Sheets spreadsheet.

## Setup Instructions

To set up this project:
1. Clone the repository to your local device.
2. Run `npm install` to install all dependencies.

## Running the Project Locally

To run the project locally:
- Use `npm run dev` to start the development server.
- Open [http://localhost:3000](http://localhost:3000) in your browser.

## Google Spread Sheet which is connected to webiste
- (https://docs.google.com/spreadsheets/d/14yxV9VjbtK2kECsY8sXxLOBDFSejlI8VNY-HUq8CQE4/edit#gid=0)

## Google Sheets Integration

The project uses Google Apps Script to connect with a Google Sheets spreadsheet. The spreadsheet is accessible [here](https://docs.google.com/spreadsheets/d/14yxV9VjbtK2kECsY8sXxLOBDFSejlI8VNY-HUq8CQE4/edit#gid=0), containing columns for name, email, phone, and message.

```javascript
function doPost(e){
  try {
    const sheets = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/14yxV9VjbtK2kECsY8sXxLOBDFSejlI8VNY-HUq8CQE4/edit?usp=sharing");
    const sheet = sheets.getSheetByName("ContactUs");
    
    let data = e.parameter;
    sheet.appendRow([data.name, data.email, data.phone, data.message]);

    // Return a JSON response indicating success
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: "Your message was successfully sent to the Google Sheet database!"
    })).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    // Return a JSON response indicating error
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      message: "An error occurred while processing your request."
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
