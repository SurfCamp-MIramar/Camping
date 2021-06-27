var map = L.map('map',{
    center: [-38.24434476829948, -52.81123930792693],
    zoom: 13,
    minZoom:13,
    maxZoom: 16


});


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-38.24517904814374, -57.81147585986366]).addTo(map)

    .bindPopup('Brown entre Tucumán y Arenales, Provincia de Buenos Aires, Argentina')
    .openPopup('')
    .bindTooltip('Surf Camp & Hostel ' + '<br/> Miramar' + '¡Estamos acá!')
    .openTooltip('!');




