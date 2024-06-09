let unorder = document.createElement("ul");
document.body.appendChild(unorder);
let fruits = ["Banana", "apple", "orange", "pineapple", "peach"];
let text = 0;

for (i = 0; i < fruits.length; i++) {
  let list = document.createElement("li");

  unorder.appendChild(list);
  text = fruits[i];
  list.innerText = text;

  let img = document.createElement("img");
  img.setAttribute("src", "img" + i + ".jpg");
  list.appendChild(img);
}

let arr = [22, 44, 33, 77, 88, 213];
let ch = -1;
function checkfun(arr, num) {
  for (i = 0; i < arr.length; i++) {
    if (num == arr[i]) {
      ch = i;
      break;
    }
  }
}
checkfun(arr, 21355);

let parag1 = document.createElement("p");

parag1.innerText = ch;

document.body.appendChild(parag1);
