document.querySelector('.button').addEventListener('click', function() {
  document.querySelector('.overlay').classList.add('active');
});

document.querySelector('.close-btn').addEventListener('click', function() {
  document.querySelector('.overlay').classList.remove('active');
});
