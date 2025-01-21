const fs = require('fs');
const path = require('path');

const copyFolder = './04-copy-directory/files-copy';
fs.mkdir(copyFolder, { recursive: true }, (err) => {
  if (err) throw err;

  const sourceFolder = './04-copy-directory/files';
  fs.readdir(sourceFolder, (err, files) => {
    if (err) {
      console.error(`fs.readdir eror: ${err.message}`);
      return;
    }

    files.forEach((file) => {
      const sourceFile = path.join(sourceFolder, file);
      const destinationFile = path.join(copyFolder, file);

      fs.stat(sourceFile, (err, stats) => {
        if (err) {
          console.error(`fs.stat fail: ${err.message}`);
          return;
        }

        if (stats.isFile()) {
          fs.copyFile(sourceFile, destinationFile, (err) => {
            if (err) console.error(`fs.copyFile error: ${err.message}`);
          });
        }
      });
    });

    console.log(`Files copied to '${copyFolder}'`);
  });
});
