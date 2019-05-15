const inputName = document.getElementById('inputName')
const inputEmail = document.getElementById('inputEmail')
const inputAge = document.getElementById('inputAge')

const btnSubmit = document.getElementById('btnSubmit')

const displayName = document.getElementById('displayName')
const displayEmail = document.getElementById('displayEmail')
const displayAge = document.getElementById('displayAge')

const cardContainer = document.getElementById('cardContainer')
const inputs = document.getElementById('inputs')


const getData = () => {
  let inputNameValue = inputName.value
  let inputEmailValue = inputEmail.value
  let inputAgeValue = inputAge.value

  displayName.innerHTML = inputNameValue
  displayAge.innerHTML = inputAgeValue
  displayEmail.innerHTML = inputEmailValue

  cardContainer.style.display = 'block'
  inputs.style.display = 'none'
}

btnSubmit.addEventListener('click', getData)