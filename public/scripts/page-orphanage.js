const options ={
  dragging:false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl:false
}

const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng

const map = L.map('mapid', options).setView([lat, lng], 14.2) // criar mapa

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map); // colocar o mapa 

const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58,68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2]
})



// locais

    L
    .marker([lat, lng], {icon})
    .addTo(map)

    // segundo lugar APAE

    /* galeria de imagens*/

    function selectImage(event){
      const button = event.currentTarget

      const buttons = document.querySelectorAll(".images button")
      buttons.forEach(removeActiveClass)

      function removeActiveClass(button){
        button.classList.remove("active")
      }

      const image = button.children[0]
      const imageContainer = document.querySelector(".orphanage-details > img")

      imageContainer.src = image.src


      button.classList.add('active')
    }