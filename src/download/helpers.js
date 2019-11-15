 function normalizeFileName(videoName){

  // normalizing the number by adding padding to it ex: 1-foo.mp4 become 001-foo.mp4
  let list = videoName.split(" ");

  // Add padding from the start of the number
  list[0] = list[0].padStart(3, "0");

  // convert array to string
  // replace spaces with dashes, is useful in *nix OS system for easy copping via terminal
  videoName = list.join("-");

  return videoName
}

module.exports = normalizeFileName