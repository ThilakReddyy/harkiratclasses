var chapters = [
  { title: "chapter 1", start: 0, end: 30 },
  { title: "chapter 3", start: 30, end: 100 },
  { title: "chapter 4", start: 100, end: 155 },
  { title: "chapter 5", start: 155, end: 170 },
  { title: "chapter 6", start: 170, end: 190 },
  { title: "chapter 7", start: 190, end: 210 },
];

var player = videojs(
  "my-video",
  {
    controls: true,
    fluid: true,
    html5: { vhs: { overrideNative: true } },
  },
  function () {
    var player = this;
    player.eme();

    player.src({
      src: "https://cdn.bitmovin.com/content/assets/art-of-motion_drm/mpds/11331.mpd",
      type: "application/dash+xml",
      keySystems: {
        "com.widevine.alpha": "https://cwip-shaka-proxy.appspot.com/no_auth",
      },
    });

    player.ready(function () {
      player.on("loadedmetadata", function () {
        const duration = player.duration();
        const seekbar = player.controlBar.progressControl.seekBar;

        chapters.forEach((chapter) => {
          const chapterSpan = document.createElement("span");
          chapterSpan.classList.add("chapter-break");

          const chapterWidth = ((chapter.end - chapter.start) / duration) * 100;
          const chapterLeft = (chapter.start / duration) * 100;

          chapterSpan.style.width = `${chapterWidth}%`;
          chapterSpan.style.left = `${chapterLeft}%`;

          seekbar.el().appendChild(chapterSpan);
        });
      });

      player.tech(true).on("keystatuschange", function (event) {
        // console.log("event: ", event);
      });
    });
  },
);

var mousedisplay = player.controlBar.progressControl.seekBar.mouseTimeDisplay;
var newSpan = document.createElement("div");
newSpan.classList.add("tooltip");
newSpan.classList.add("vjs-time-tooltip");
newSpan.id = "tooltip";

var textNode = document.createTextNode("Hello world");
newSpan.appendChild(textNode);
mousedisplay.el().appendChild(newSpan);

player.on("timeupdate", () => {});

function myScript() {
  console.log("Script is running...");

  setInterval(function () {
    var timeWhenhovered =
      document.getElementsByClassName("vjs-time-tooltip")[0].innerHTML;

    if (timeWhenhovered !== "") {
      var timeWhenhoveredarray = timeWhenhovered.split(":");
      var timeStamp =
        timeWhenhoveredarray[0] * 60 + parseInt(timeWhenhoveredarray[1]);
      var title = "";

      for (let i = 0; i < chapters.length; i++) {
        title = chapters[i].title;
        var end = chapters[i].end;

        if (end > timeStamp) {
          break;
        }
      }
    }

    var chapterName = document.getElementById("tooltip");
    chapterName.innerHTML = title;
  }, 100);
}

myScript();
