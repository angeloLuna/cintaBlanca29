let inputName = document.getElementById('inputName')
let displayName = document.getElementById('displayName')
let btnSubmit = document.getElementById('btnSubmit')
let img = document.getElementById('imgLol')


const saludo = () => {
  // let inputNameValue = inputName.value
  // displayName.innerHTML = inputNameValue

  if (img.style.display === 'none') {
    img.style.display = 'inline-block'
  } else {
    img.style.display = 'none'
  }


}


btnSubmit.addEventListener('click', saludo)


