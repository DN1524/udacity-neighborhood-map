let map;
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 31.556770, lng: -97.129990},
      zoom: 8
    });
  }