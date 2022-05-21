// var total, numbers, rolls, item;

// Describe this function...
function display_the_rolls(total) {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_total = document.getElementById('total');
  element_total.innerText = total;
  let element_list = document.getElementById('list');
  element_list.replaceChildren();
  rolls.forEach((item) => {
    let new_li = document.createElement('li');
    new_li.innerText = item;

    element_list.appendChild(new_li);
  });
  if (total == 11) {
    let element_info = document.getElementById('info');
    element_info.innerText = 'You won!';
  } else if (total > 11) {
    let element_info2 = document.getElementById('info');
    element_info2.innerText = 'You lost!';
  }
}

function randomInt(n) {
  // Return a random number from in [0, n[
  return Math.floor(Math.random()*n);
}

function randomMember(arr) {
  // Return a random member of the array
  return arr[randomInt(arr.length)]
}


numbers = [1, 2, 3, 4, 5, 6];
rolls = [];

rolls.reduce((a,b) => a+b, 0);


document.getElementById('button_roll').addEventListener('click', (event) => {
  rolls.unshift(randomMember(numbers));
  total = rolls.reduce((a,b) => a+b, 0);
  display_the_rolls(total);

});

document.getElementById('button_remove').addEventListener('click', (event) => {
  if (rolls != 0) {
    rolls.pop();
    display_the_rolls(total);
  }

});

document.getElementById('button_restart').addEventListener('click', (event) => {
  rolls = [];
  total = 0;
  display_the_rolls(total);

});
