$(document).ready(loadPics())


$(window).load(function() {
  var songTitle =  $("img").click(function() {
    searchTracks(document.getElementById(this.id).alt)
      pauseTrack()
      })

  })
