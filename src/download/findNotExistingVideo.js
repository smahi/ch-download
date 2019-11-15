'use strict';

const path = require('path');
const fs = require('fs');
const normalizeFileName = require("src/download/helpers");

function findNotExistingVideo(videos, downloadFolder) {
  let i = 0;
  for (let video of videos) {
    let name = video.name.toString().replace(/[^A-Za-zА-Яа-я\d\s]/gmi, '').replace('Урок ', '');
    // normalize the file name
    name = normalizeFileName(name)
    let filename = `${downloadFolder}${path.sep}${name}.mp4`;
    if (fs.existsSync(filename) && isCompletelyDownloaded(name, downloadFolder)) {
      console.log(`File "${name}" already exists`.red);
      i++;
    } else {
      break ;
    }
  }
  return i;
}

function isCompletelyDownloaded(videoName, downloadFolder) {
  const downloadedVideos = findDownloadedVideos();
  if (typeof downloadedVideos === 'undefined' || downloadedVideos.length === 0) {
    return true;
  }
  for (let downloadedVideoName of downloadedVideos) {
    if (videoName === downloadedVideoName){
      console.log(videoName)
      console.log(downloadedVideoName)

      return true;
    }
  }
  return false;
}

function findDownloadedVideos(downloadFolder) {
  const logFile =`${downloadFolder}${path.sep}videos.txt`;
  if (!fs.existsSync(logFile)) return [];
  return fs.readFileSync(logFile).toString().split("\n");
}

module.exports = findNotExistingVideo;
