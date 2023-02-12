const main = document.getElementById('main-container');
const thanks = document.getElementById('thanks-container');

const main_btn = document.getElementById('main-btn');
const thanks_btn = document.getElementById('thanks-btn')

const thanks_text = document.querySelector('.thanks-text');
const ratings = document.querySelectorAll('.circle');

main_btn.addEventListener('click', () => {
  thanks.classList.remove('hidden');
  main.classList.add('hidden');
})

thanks_btn.addEventListener('click', () => {
  main.classList.remove('hidden');
  thanks.classList.add('hidden');
})

ratings.forEach((rating) => {
  rating.addEventListener('click', () => {
    thanks_text.innerHTML = `You selected ${rating.innerHTML} out of 5`;
  })
})