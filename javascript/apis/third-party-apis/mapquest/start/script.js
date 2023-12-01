L.mapquest.key = 'c5Zh7bVnjTn1D8E41LOdTT2jEYZuAVzE';

// 'map' refers to a <div> element with the ID map
const map = L.mapquest.map('map', {
  center: [53.480759, -2.242631],
  layers: L.mapquest.tileLayer('map'),
  zoom: 12
});
