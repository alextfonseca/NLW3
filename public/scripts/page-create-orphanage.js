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

// criar popup

const popup = L.popup({
  closeButton: false,
  className: 'map-popup',
  minWidth: 240,
  minWidth: 240
}).setContent('Lar das meninas  São Roque  <a href="/orphanage?id=1" class="choose-orphanage"> <img src="/images/arrow-white.svg"> </a>')

// criar local no mapa

let marker

map.on('click', (event) => {
  const lat = event.latlng.lat
  const lng = event.latlng.lng

  document.querySelector('[name=lat]').value = lat
  document.querySelector('[name=lng]').value = lng

  // remover ultimo icone

  marker && map.removeLayer(marker) // remove o ultimo se exitir o marker

  //adicionar o icone
  marker = L.marker([lat, lng], { icon })
  .addTo(map)
})

// campo de fotos

function addPhotoField(){


  //pegar o container de fotos 
  const container = document.querySelector('#images')
  //pegar o container para duplicar
  const fieldsContainer = document.querySelectorAll(".new-upload")
  // realizar o clone da ultima imagem 
  const newFieldContainer = fieldsContainer[fieldsContainer.length -1].cloneNode(true)
  // se estiver vazio nao adicione
  const input = newFieldContainer.children[0]

  if(input.value == ""){
    alert("preencha o primeiro campo")
  }else{
      //limpar o campo 
  newFieldContainer.children[0].value=" "
  // adicionar o clone
  container.appendChild(newFieldContainer)
  }
}

// deletar o campo

function deleteField(event){
  const span = event.currentTarget
  const fieldsContainer = document.querySelectorAll(".new-upload")

  if(fieldsContainer <= 1){
    // limpar o valor 
    span.parentNode.children[0].value=""
    return
  }

  // deltar o campo 
  span.parentNode.remove()

}

// troca do sim e nao 

function toggleSelect(event){
    // retirar a classe active
  // colocar a clase active
  document.querySelectorAll('.button-select button').forEach(function (button){
    button.classList.remove('active')
  })

const button = event.currentTarget
button.classList.add('active')

  // atualizar o hieden

  const input = document.querySelector('[name="open_on_weekends"]')

  input.value = button.dataset.value
}