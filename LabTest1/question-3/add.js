const fs = require('fs');
const path = require('path');

const logsDirectory = path.join(__dirname, 'Logs');

// Create the Logs directory if it doesn't exist
if (!fs.existsSync(logsDirectory)) {
  fs.mkdirSync(logsDirectory);
}

// Change the current working directory to the Logs directory
process.chdir(logsDirectory);

// Create 10 log files and write some text into each file
console.log("Files created:");

for (let i = 1; i <= 10; i++) {
  const fileName = `log${i}.txt`;
  const filePath = path.join(logsDirectory, fileName);

  // Write some text into the file
  fs.writeFileSync(filePath, `This is log file ${i}`);

  // Output the file names to console
  console.log(filePath);
}

console.log("Log files created in Logs directory.");
