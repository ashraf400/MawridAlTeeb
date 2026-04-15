/**
 * Google Apps Script for handling B2B Oud Form Submissions
 * 
 * Instructions:
 * 1. Open your Google Sheet.
 * 2. Go to Extensions > Apps Script.
 * 3. Delete any existing code and paste this script.
 * 4. Click "Deploy" > "New Deployment".
 * 5. Select "Web App".
 * 6. Set "Execute as" to "Me".
 * 7. Set "Who has access" to "Anyone".
 * 8. Click "Deploy" and copy the Web App URL.
 * 9. Paste the URL into your .env file as SHEET_WEBHOOK_URL.
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    // Append data to the sheet
    // Order: Date, Name, Company, Email, Phone, Business Type, Volume, Interests
    sheet.appendRow([
      new Date(), 
      data.name, 
      data.company, 
      data.email, 
      data.phone, 
      data.businessType, 
      data.monthlyVolume, 
      data.interests ? data.interests.join(", ") : ""
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({ "result": "success" }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ "result": "error", "message": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
