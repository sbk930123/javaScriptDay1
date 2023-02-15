const box = document.querySelectorAll('.alertBox');

function openBox() {
  box.forEach(function(loot) {
    loot.style.display = 'block';
  })
}

const cBtn1 = document.getElementById('c-btn1');
const cBtn2 = document.getElementById('c-btn2');
const cBtn3 = document.getElementById('c-btn3');

cBtn1.addEventListener('click', function() {
  this.parentElement.style.display = 'none';
})

cBtn2.addEventListener('click', function() {
  this.parentElement.style.display = 'none';
})

cBtn3.addEventListener('click', function() {
  this.parentElement.style.display = 'none';
})
