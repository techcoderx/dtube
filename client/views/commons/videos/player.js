Template.player.rendered = function () {
  Template.player.reset(this.data)
}

Template.player.reset = function(data) {
  if (!data)
  data = Template.video.__helpers[" video"]()
  if (!data) return
  switch (data.json.providerName) {
    case "Twitch":
      if (data.json.twitch_type && data.json.twitch_type == 'clip')
        Template.player.initTwitchClips(data.json.videoId)
      else
        Template.player.initTwitch(data.json.videoId)
      break;
    case "Dailymotion":
      Template.player.initDailymotion(data.json.videoId)
      break;
    case "Instagram":
      Template.player.initInstagram(data.json.videoId)
      break;
    case "LiveLeak":
      Template.player.initLiveLeak(data.json.videoId)
      break;
    case "Vimeo":
      Template.player.initVimeo(data.json.videoId)
      break;
    case "Facebook":
      Template.player.initFacebook(data.json.videoId, data.json.url)
      break;
    case "YouTube":
      Template.player.initYouTube(data.json.videoId)
      break;
    default:
      Template.player.init(data.author, data.link)
      break;
  }
}

Template.player.init = function(author, link) {
  $('.ui.embed.player').embed({
    url: "https://emb.oneloved.tube/#!/" + author + '/' + link
    + "/true/true"
  });
}

Template.player.initYouTube = function(id) {
  $('.ui.embed.player').embed({
    url: "https://www.youtube.com/embed/" + id
    + "?autoplay=1&showinfo=1&modestbranding=1"
  });
}

Template.player.initTwitch = function(id) {
  if (parseInt(id) == id)
    $('.ui.embed.player').embed({
      url: "https://player.twitch.tv/?video=v" + id
      + "&autoplay=true&muted=false"
    });
  else
    $('.ui.embed.player').embed({
      url: "https://player.twitch.tv/?channel=" + id
      + "&autoplay=true&muted=false"
    });
}

Template.player.initTwitchClips = function(id) {
  $('.ui.embed.player').embed({
    url: "https://clips.twitch.tv/embed?clip=" + id
    + "&autoplay=true&muted=false"
  });
}

Template.player.initDailymotion = function(id) {
  $('.ui.embed.player').embed({
    url: "https://www.dailymotion.com/embed/video/" + id
    + "?autoplay=true&mute=false"
  });
}

Template.player.initInstagram = function(id) {
  $('.ui.embed.player').embed({
    url: "https://www.instagram.com/p/" + id + '/embed/'
  });
}

Template.player.initFacebook = function(id, url) {
  // autoplay way
  $('.ui.embed.player').embed({
    url: "https://www.facebook.com/v2.3/plugins/video.php?allowfullscreen=true&autoplay=true&container_width=800&href="
    + encodeURI(url)
  });

  // original way
  // $('.ui.embed.player').embed({
  //   url: "https://www.facebook.com/video/embed?video_id=" + id
  // });
}

Template.player.initLiveLeak = function(id) {
  $('.ui.embed.player').embed({
    url: "https://www.liveleak.com/e/" + id
  });
}

Template.player.initVimeo = function(id) {
  $('.ui.embed.player').embed({
    url: "https://player.vimeo.com/video/" + id
    + "?autoplay=1&muted=0"
  });
}