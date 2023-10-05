const fs = require('fs');
const path = require('path');

const logsDirectory = path.join(__dirname, 'Logs');

// Check if the Logs directory exists
if (fs.existsSync(logsDirectory)) {
  // Read the files in the Logs directory
  fs.readdir(logsDirectory, (err, files) => {
    if (err) {
      console.error("Error reading directory:", err);
      return;
    }

    // Output the file names to delete
    console.log("Files to delete:");
    files.forEach(file => {
      const filePath = path.join(logsDirectory, file);
      console.log(filePath);
      // Remove the file
      fs.unlinkSync(filePath);
    });

    // Remove the Logs directory itself
    fs.rmdirSync(logsDirectory);
    console.log("Logs directory removed.");
  });
} else {
  console.log("Logs directory does not exist.");
}
