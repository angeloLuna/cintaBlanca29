const card1 = document.getElementById('card1')


const updateClass = () => {
  card1.classList.add('card-rotate')
}

card1.addEventListener('click', updateClass)