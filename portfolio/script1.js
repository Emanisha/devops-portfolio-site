document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', function () {
    document.getElementById('modal-title').innerText = card.dataset.title;
    document.getElementById('modal-description').innerText = card.dataset.description;
    document.getElementById('modal-tech').innerText = card.dataset.tech;
    document.getElementById('modal-role').innerText = card.dataset.role;
    document.getElementById('modal-image').src = card.dataset.image;
    document.getElementById('modal-download').href = card.dataset.download;
    document.getElementById('projectModal').style.display = 'flex';
  });
});

document.querySelector('.close').onclick = function () {
  document.getElementById('projectModal').style.display = 'none';
};

window.onclick = function (e) {
  if (e.target == document.getElementById('projectModal')) {
    document.getElementById('projectModal').style.display = 'none';
  }
};
