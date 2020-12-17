function loadScript(src, callback) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    if (callback) script.onload = callback;
    document.getElementsByTagName("head")[0].appendChild(script);
    script.src = src;
}

loadScript('http://maps.googleapis.com/maps/api/js?v=3&callback=initialize',
    function() {
        console.log('google-loader has been loaded, but not the maps-API ');
    });


function initialize() {

    var locations = [
        ['OUR INDIA ADDRESS', 12.996868, 80.209891, 2],
        ['OUR INDIA ADDRESS 2', 12.976868, 80.209891, 2]
    ];

    var map = new google.maps.Map(document.getElementById('map'),
        {
            zoom: 13,
            scrollwheel: false,
            navigationControl: true,
            mapTypeControl: false,
            scaleControl: false,
            draggable: false,
            styles: [{
                "stylers": [{
                    "hue": "#ff6501"
                }, {
                    saturation: 20
                }, {
                    gamma: 1
                }]
            }],
            center: new google.maps.LatLng(12.996868, 80.209891),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++)
    {

        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map
            //icon: 'images/marker1.png'
        });


        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);

            }
        })(marker, i));
    }


}