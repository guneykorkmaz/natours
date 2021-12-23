export const displayMap = (locations) => {
  mapboxgl.accessToken = 'pk.eyJ1IjoiZ3VuZXl5ayIsImEiOiJja3hhNzd1bHkweGZjMzFxY28xZ2NpMWRsIn0.VVkcKnlwcsfnp0hvFEYGOw';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/guneyyk/ckxa87tf832f714o8c9v7t10l',
    scrollZoom: false
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((location) => {
    const element = document.createElement('div');
    element.className = 'marker';

    new mapboxgl.Marker({
      element,
      anchor: 'bottom'
    })
      .setLngLat(location.coordinates)
      .addTo(map);

    new mapboxgl.Popup({ offset: 30 })
      .setLngLat(location.coordinates)
      .setHTML(`<p>Day ${location.day} ${location.description}</p>`)
      .addTo(map);

    bounds.extend(location.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100
    }
  });
};
