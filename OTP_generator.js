function onOpen() {
    const ui = SpreadsheetApp.getUi();
    ui.createMenu('OTP Generator') // This creates the custom menu
      .addItem('Generate OTPs', 'bulkGenerateOTPs') // This adds a clickable item
      .addToUi();
  }
  
  // This function will run when you click the menu item
  function bulkGenerateOTPs() {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const headerRow = 1;
    const numberColumn = 1;
    const otpColumn = 2;
    
    const lastRow = sheet.getLastRow();
    
    for (let row = headerRow + 1; row <= lastRow; row++) {
      const numberCell = sheet.getRange(row, numberColumn).getValue();
      
      if (numberCell && !isNaN(numberCell)) {
        const otp = generateOTP();
        sheet.getRange(row, otpColumn).setValue(otp);
      } else {
        sheet.getRange(row, otpColumn).clearContent();
      }
    }
  }
  
  // Your OTP generator function
  function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000);
  }
  