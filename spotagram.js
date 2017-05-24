// //setup from spotify walkthrough https://github.com/jmperez/spotify-web-api-js
// var Spotify = require('spotify-web-api-js');
// var s = new Spotify();
// var spotifyApi = new SpotifyWebApi();

  // get song from spotify

$(window).load(function() {

    var audio = new Audio();
    var songTitle =  $("img").click(function() {
        searchTracks(document.getElementById(this.id).alt);

     });
   var searchTracks = function(query) {
     $.ajax({
       url: 'https://api.spotify.com/v1/search',
       data: {
         q: query,
         type: 'track'
       },
       success: function (response) {
         var track = response.tracks.items[0];

          if (track === undefined) {
            failedApi()
          } else {

           audio.src = track.preview_url;
           audio.play()
      }},
    })
        this.addEventListener('click', function() {
            audio.pause()
          })
     }});




// function failedApi(){
//
//     //make a variable with some search queries and put it in an array. (you can create more search queries.
//     $getRandomSongsArray = ['%25a%25', 'a%25', '%25e%25', 'e%25', '%25i%25', 'i%25', '%25o%25', 'o%25'];
//
//     var array_rand = Math.floor(Math.random() * $getRandomSongsArray.length)
// //This will get a random result out of the array above
//     $getRandomSongs = $getRandomSongsArray[array_rand];
//
// //This will get a random offset number between 1 and 1000. So you get a random track. (you can change the numbers btw)
//     $getRandomOffset = Math.floor((Math.random() * 100) + 1);
//
// //This is the url that gets the results out of the Spotify API. You have to put in the variables you created above.
//
//     $.ajax({
//         url: 'https://api.spotify.com/v1/search?query=$getRandomSongs&offset=$getRandomOffset&limit=1&type=track&market=NL'
//     },
//     success: function(response) {
//       var badTrack = response.tracks.items[0];
//       audio.src = badTrack.preview_url;
//       audio.play()
//   })
// }
