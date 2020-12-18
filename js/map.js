var map = L.map('mapid').setView([-38.24434476829948, -57.81123930792693], 19);
    
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-38.24434476829948, -57.81123930792693]).addTo(map)

.bindPopup('Brown y Santa Ana 7607 Miramar, Provincia de Buenos Aires, Argentina')
.openPopup('')
.bindTooltip('Surf Camp & Hostel ' + '<br/> Miramar' + '¡Estamos acá!')
.openTooltip('!');
