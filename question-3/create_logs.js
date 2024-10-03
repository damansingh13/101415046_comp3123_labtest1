//Damanpreet Singh - 101415046
const fs = require('fs');
const path = require('path');
const process = require('process');
const createLogs = () => {
    const dirName = path.join(__dirname, "Logs");
    try {
      if (!fs.existsSync(dirName)) {
        fs.mkdirSync(dirName);  
        console.log("Logs directory created.");
      } else {
        console.log("Logs directory already exists.");
      }
      process.chdir(dirName);
      console.log(`Changed current directory to: ${process.cwd()}`);
      for (let i = 0; i < 10; i++) {
        const fileName = `log${i}.txt`;
        fs.writeFileSync(fileName, `This is the content for ${fileName}`);  // Create log files with content
        console.log(`${fileName}`);
      }
    } catch (err) {
      console.error("Error during file creation:", err);
    }
};
createLogs(); 