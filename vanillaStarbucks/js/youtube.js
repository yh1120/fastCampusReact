// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() { // 외부에서 가져온 유튜브 라이브러리가 정해놓은 함수
    //<div id="player"></div>
    new YT.Player('player', {
    videoId: 'An6LvWQuj_8',
    playerVars: {
        autoplay: true, // 자동재생유무
        loop: true, // 반복재생유무
        playlist: 'An6LvWQuj_8',
    },
    events: {
        onReady: function (event) {
            event.target.mute() // 음소거
        }
    }
  });
}
