// ─────────────────────────────────────────────────────────────────────────────
// Google Apps Script — Contact Form → Google Sheets
// Hrudananda Das · harty1193.github.io
//
// SETUP:
// 1. Open your Google Sheet
// 2. Extensions → Apps Script → paste this code
// 3. Save, then Deploy → New deployment → Web app
//    · Execute as: Me
//    · Who has access: Anyone
// 4. Copy the Web App URL → paste into contact.html as APPS_SCRIPT_URL
// ─────────────────────────────────────────────────────────────────────────────

// ── CONFIG ──────────────────────────────────────────────────────────────────
const SPREADSHEET_ID = '1ZwOWJKBppwAo6E9TOZ18bQUog5f-lySY4y85tBYD7AA';
const SHEET_NAME     = 'Contacts';         // Sheet tab name — create this tab in your spreadsheet
const NOTIFY_EMAIL   = 'hrudananda.das@proton.me'; // You'll get an email on each submission
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Handles POST requests from the contact form.
 * Writes a new row to the spreadsheet and sends a notification email.
 */
function doPost(e) {
  try {
    // Parse incoming JSON
    const data = JSON.parse(e.postData.contents);

    const senderEmail = sanitize(data.email   || '');
    const subject     = sanitize(data.subject || '');
    const body        = sanitize(data.body    || '');
    const timestamp   = data.timestamp || new Date().toISOString();

    // Basic validation
    if (!senderEmail || !subject || !body) {
      return jsonResponse({ status: 'error', message: 'Missing required fields.' });
    }

    // ── Write to spreadsheet ──────────────────────────────────────────────
    const ss    = SpreadsheetApp.openById(SPREADSHEET_ID);
    let   sheet = ss.getSheetByName(SHEET_NAME);

    // Auto-create the sheet + header row if it doesn't exist
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow(['Timestamp', 'Sender Email', 'Subject', 'Message', 'Status']);
      sheet.getRange(1, 1, 1, 5).setFontWeight('bold').setBackground('#e6f1fb');
      sheet.setFrozenRows(1);
    }

    sheet.appendRow([
      new Date(timestamp),   // Timestamp (Date object for proper formatting)
      senderEmail,
      subject,
      body,
      'New'                  // Status column — update manually to "Replied", "Spam", etc.
    ]);

    // Auto-resize columns for readability
    sheet.autoResizeColumns(1, 5);

    // ── Send notification email to ProtonMail ─────────────────────────────
    const emailSubject = '[Blog Contact] ' + subject;
    const emailBody    =
      'New contact form submission from harty1193.github.io\n\n' +
      'From    : ' + senderEmail + '\n' +
      'Subject : ' + subject     + '\n' +
      'Time    : ' + new Date(timestamp).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }) + '\n\n' +
      '─────────────────────────────────\n\n' +
      body + '\n\n' +
      '─────────────────────────────────\n' +
      'Reply directly to: ' + senderEmail + '\n' +
      'View spreadsheet : https://docs.google.com/spreadsheets/d/' + SPREADSHEET_ID;

    MailApp.sendEmail({
      to: NOTIFY_EMAIL,
      subject: emailSubject,
      body: emailBody,
      replyTo: senderEmail
    });

    return jsonResponse({ status: 'ok', message: 'Message received.' });

  } catch (err) {
    Logger.log('Error: ' + err.message);
    return jsonResponse({ status: 'error', message: err.message });
  }
}

/**
 * Handles GET requests — used to verify the deployment is live.
 */
function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok', message: 'Contact form endpoint is live.' }))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Strip HTML tags and trim whitespace to prevent injection.
 */
function sanitize(str) {
  return str.replace(/<[^>]*>/g, '').trim();
}

/**
 * Return a JSON response with CORS headers.
 */
function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
