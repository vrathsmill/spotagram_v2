// const client_id = config.MY_CLIENT_ID
// const client_secret = config.MY_SECRET
// const credentials = btoa((client_id + ':' + client_secret))

function spotifyRequest(query) {
  $.ajax({
    url: 'https://accounts.spotify.com/api/token',
    type: 'POST',
    headers: {
      "Authorization": 'Basic ' + credentials
    },
    data: {
      grant_type:'client_credentials'
    }, success: function(response) {
      searchTracks(response.access_token)
    }
  });

  function searchTracks(token) {
    $.ajax({
      url: 'https://api.spotify.com/v1/search',
            headers: {
               'Authorization' : 'Bearer ' + token
            },
            data: {q: query, type: 'track'},
            success: function(response) {trackWasFound(response)}
    })
  }
}

function trackWasFound(response) {
  let track = response.tracks.items[0]
  if (track !== undefined) {
    audio.src = track.preview_url
    audio.play()
  } else {
    searchTracksAgain()
  }
}

function searchTracksAgain(query) {
  $.ajax({
    url: 'https://api.spotify.com/v1/search',
    data: {
      q: 'party',
      type: 'track'
    },
    success: function (response) {
      var test = response.tracks.items[0]
      audio.src = test.preview_url
      audio.play()
    }
})}
