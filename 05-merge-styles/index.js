const fs = require('fs');
const path = require('path');

const sourceFolder = './05-merge-styles/styles';
const outputFilePath = './05-merge-styles/project-dist/bundle.css';
let bundled = '';

fs.readdir(sourceFolder, (err, files) => {
    if (err) {
        console.error(`fs.readdir error: ${err.message}`);
        return;
    }

    let cssFiles = files.filter(file => path.extname(file) === '.css');
    let fileReadPromises = cssFiles.map(file => {
        return new Promise((resolve, reject) => {
            const filePath = path.join(sourceFolder, file);
            
            fs.readFile(filePath, 'utf-8', (err, content) => {
                if (err) {
                    reject(`Error reading file ${file}: ${err}`);
                    return;
                }
                bundled += content + '\n';
                resolve();
            });
        });
    });

    Promise.all(fileReadPromises)
        .then(() => {
            fs.writeFile(outputFilePath, bundled, (err) => {
                if (err) {
                    console.error(`Error writing to bundle.css: ${err}`);
                } else {
                    console.log('Bundle created successfully');
                }
            });
        })
        .catch(error => {
            console.error(`Error: ${error}`);
        });
});
