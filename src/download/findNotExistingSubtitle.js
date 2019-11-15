'use strict';

const path = require('path');
const fs = require('fs');
const normalizeFileName = require("src/download/helpers");

function findNotExistingSubtitle(videos, downloadFolder) {
    let i = 0;
    for (let video of videos) {
        let name = video.name.toString().replace(/[^A-Za-zА-Яа-я\d\s]/gmi, '').replace('Урок ', '');
        // normalize the filename
        name = normalizeFileName(name)
        let filename = `${downloadFolder}${path.sep}${name}.vtt`;
        if (fs.existsSync(filename)) {
            console.log(`File "${name}" already exists`.red);
            i++;
        } else {
            break ;
        }
    }
    return i;
}

module.exports = findNotExistingSubtitle;
