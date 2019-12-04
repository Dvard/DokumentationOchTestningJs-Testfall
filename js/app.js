const ex1 = 3,
    ex2 = 'DHG18',
    ex3 = '5',
    ex4 = false,
    ex5 = [
      'vår',
      'sommar',
      'höst',
      'vinter'
    ];

/*** UPPGIFT 1 ***/
console.log(typeof ex1);
console.log(typeof ex2);
console.log(typeof ex3);
console.log(typeof ex4);
console.log(ex1+ex3); // Lägger ihop teckenena
console.log(ex1+Number(ex3)); // Räknar addition
console.log(ex5.length);


/*** UPPGIFT 2 ***/
console.log(typeof ex5); // Visar object borde vara array
console.log(ex5.length);
console.log('Nu är det ' + ex5[0]);
for (let i = 0; i < ex5.length; i++) {
    console.log(ex5[i]);
}

/*** UPPGIFT 3 ***/

document.getElementById('aniBtn').addEventListener('click', function() {

  const box = document.querySelector('#box_1');
  if(box.classList.contains('animateWidth')) {
    box.classList.remove('animateWidth');
  } else {
    box.classList.add('animateWidth');
  }
});
