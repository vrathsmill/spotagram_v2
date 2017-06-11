$(document).ready(loadPics())


$(window).load(function() {
  var songTitle =  $("img").click(function() {
    spotifyRequest(document.getElementById(this.id).alt)

      pauseTrack()
      })

  })
