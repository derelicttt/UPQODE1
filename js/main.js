import Swiper, {Navigation, Pagination} from 'swiper';


Swiper.use([Navigation, Pagination]);


var swiper = new Swiper('.swiper-container', {
    cssMode: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination'
    },

    mousewheel: true,
    keyboard: true,
});

swiper.on('slideChange', function (swiper) {
    let active = swiper.realIndex;
    swiper.slides.map((value, index) => {
        console.log(value)
        if (index == active) {
            if (index==1)
                player1.playVideo();
            if(index==2)
                player2.playVideo();

        } else{
            if (index==1)
                player1.stopVideo();
            if(index==2)
                player2.stopVideo();
        }
    })

});





var player1;
var player2;
function onYouTubeIframeAPIReady() {
    player1 = new YT.Player('player988', {
        videoId: 'M7lc1UVf-VE',
        height: '360',
        width: '640',
        events: {

            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange

        }
    });

    player2 = new YT.Player('player2', {
        videoId: 'M7lc1UVf-VE',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange

        }
    });
}




function onPlayerReady(event) {
    event.target.playVideo();
}


var done = false;

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000);
        done = true;
    }
}

function stopVideo() {
    player1.stopVideo();
}


function positionTheDot() {

    // What percentage down the page are we? 
    var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
  
    // Get path length
    var path = document.getElementById("theMotionPath");
    var pathLen = path.getTotalLength();
    
    // Get the position of a point at <scrollPercentage> along the path.
    var pt = path.getPointAtLength(scrollPercentage * pathLen);
    
    // Position the red dot at this point
    var dot = document.getElementById("dot");
    dot.setAttribute("transform", "translate("+ pt.x + "," + pt.y + ")");
    
  };
  
  // Update dot position when we get a scroll event.
  window.addEventListener("scroll", positionTheDot);
  
  // Set the initial position of the dot.
  positionTheDot();