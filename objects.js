// var playlist = {artist: 'song'}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName]: songTitle})
}

// function removeFromPlaylist(playlist, artistName) {
//   delete playlist[artistName]
//   return(playlist)
// }


var playlist = {artistName: 'songTitle'}

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({}, {[artistName]:songTitle})
}


