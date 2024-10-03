//Damanpreet Singh - 101415046
const fs = require('fs');
const path = require('path');
const process = require('process');
const removeLogs = () => {
    const dirName = path.join(__dirname, "Logs");
    try {
      if (fs.existsSync(dirName)) {
        const files = fs.readdirSync(dirName);
        console.log("Files to be deleted:");
        files.forEach((file) => {
          const filePath = path.join(dirName, file);
          fs.unlinkSync(filePath);
          console.log(`deleted files...${file}`);
        });
        fs.rmdirSync(dirName);
      } else {
        console.log("No Logs directory found.");
      }
    } catch (err) {
      console.error("Error during directory removal:", err);
    }
};
removeLogs();