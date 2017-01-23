/* globals GMaps */

(GMaps => {
  var map = new GMaps({
    el: '#contact__map',
    lat: 45.609414,
    lng: 11.6931323,
    zoom: 13,
    scrollwheel: false
  })

  map.addMarker({
    lat: 45.609414,
    lng: 11.6931323,
    infoWindow: {
      content: '<p class="title">Lillo e Sara</p><p>Le Colombare</p><p>Via Colombare, 21,</p><p>35010 Carmignano di Brenta (PD)</p>'
    }
  })
})(GMaps)
