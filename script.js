const cells = document.querySelectorAll('.cell');
const popup = document.getElementById('popup');
const popupImg = document.getElementById('popup-img');
const closeBtn = document.getElementById('close');

cells.forEach(cell => {
  cell.addEventListener('click', () => {
    const imgSrc = cell.dataset.img;
    popupImg.src = imgSrc;
    popup.style.display = 'flex';
  });
});

closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});
