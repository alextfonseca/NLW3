const map = L.map('mapid').setView([-23.533411, -47.13388], 14.2) // criar mapa

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map); // colocar o mapa 

const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58,68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2]
})


function addMarker({id, name, lat, lng}){ 

// criar popup

  const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minWidth: 240
  }).setContent(`${name} <a href="/orphanage?id=${id}"> <img src="/images/arrow-white.svg"> </a>`)



  // locais
      L
      .marker([lat, lng], {icon})
      .addTo(map)
      .bindPopup(popup)

      // segundo lugar APAE
  }

  const orphanagesSpan = document.querySelectorAll('.orphanages span')
  orphanagesSpan.forEach( span => {
    const orphanage = {
      id: span.dataset.id,
      name: span.dataset.name,
      lat: span.dataset.lat,
      lng: span.dataset.lng
    }

    addMarker(orphanage)
  })