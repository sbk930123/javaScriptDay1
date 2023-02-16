const box = document.querySelectorAll('.alertBox');

function openBox() {
  box.forEach(function(loot) {
    loot.style.display = 'block';
  }) 
}

const cBtns = document.querySelectorAll('.c-btn');

cBtns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    this.parentElement.style.display = 'none';
  });
});

const colorsArray = [
  ['red', 'blue', 'pink', 'yellow']
]
const materialsArray = ['plastic', 'paper']

const value = 10;
