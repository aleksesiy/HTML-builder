const fs = require('fs');
const path = require('path');

const directoryPath = './03-files-in-folder/secret-folder';

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }

    files.forEach(file => {
        const filePath = path.join(directoryPath, file);

        fs.stat(filePath, (err, stats) => {
            if (err) {
                console.error(`Error reading file stats for ${file}:`, err);
                return;
            }

            if (stats.isFile()) {
                const fileSize = stats.size;
                const extCutout = path.basename(filePath).lastIndexOf('.');
                const fileName = path.basename(filePath).slice(0, extCutout);
                const fileExtension = path.extname(filePath).slice(1);

                console.log(`${fileName} - ${fileExtension} - ${fileSize}b`);
                
            }
        });
    });
});
