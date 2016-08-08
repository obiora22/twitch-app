$(document).ready(function(){
    const channels = ['Dota','moonmoon_ow','kingothalion','thegeekchic','Guardsmanbob']
    console.log($(document));
    url = "https://api.twitch.tv/kraken/streams/moonmoon_ow"
    $.getJSON(url,function(data){
      channel_url = data["_links"].channel ;
      console.log("data stream ...") ;
      console.log(data.stream === null) ;

      var url_array = channel_url.split('/')
      var channel_name = url_array[url_array.length - 1]
      console.log(channel_name)

      $("table tr").each(function(){
        $(".channel-name p").text(channel_name);
        $(".channel-url a").attr("href",channel_url);
        $(".channel-url a").html("Go to " + channel_name)
        if (data.stream === null){
          $(".channel-name p").addClass("offline")
        }else{
          $(".channel-name p").addClass("online");
        }
      })

    })
});
