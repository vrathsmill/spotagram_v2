
$("document").ready(function() {
  var url = "https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=1d8d38fe92286045c8cd4e4c48cdf529&safe_search=1&per_page=50";
  var src;
  var images = []

function imageCreator(images) {$(images).each(function (i, item) {item.prependTo(".flickrDiv")})}

$.getJSON(url + "&format=json&jsoncallback=?", function(data){

    $.each(data.photos.photo, function(i,item){

        src = "http://farm"+ item.farm +".static.flickr.com/"+ item.server +"/"+ item.id +"_"+ item.secret +"_m.jpg";
        alt = item.title.replace(/\W/g, ' ')
        id = item.title.replace(/\W/g, ' ')
        images.push(
        $("<img/>").attr(
          {"src": src,
          "alt": alt,
          "id": id
        })
         );
        if ( i == 50 ) return false;
      imageCreator(images)
    });

});
})
