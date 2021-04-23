// Complete the variadricAverage function so that it can take any number
// of arguments and calculate their average.
//
// Bonus Test: Edit the 'average' function to use the 'variadricAverage'.

/********************************
 * QUESTION 1.
 *******************************/
function onLoadHandler(){
  executeQ1();
  executeQ2();
  executeQ3()
  executeQ4()
}

function executeQ1() {
  let name = "Agung Aji Nugraha";
  let element = document.getElementById("my-name");
  element.innerHTML = name;
}

/********************************
 * QUESTION 2.
 *******************************/
let listItems = ["Apple", "Manggo", "Banana", "Guava"];
function executeQ2() {
  var item = "";
  for (i = 0; i < listItems.length; i++) {
    item = item + "<li>" + listItems[i] + "</li>";
  }
  let element = document.getElementById("q2-list");
  element.innerHTML = item;
}

/********************************
 * QUESTION 3.
 *******************************/
function person() {
  name = "";

  this.setName = (n) => {
    name = n;
  };
  this.getName = () => {
    return name;
  };
}

function executeQ3() {
  let person1 = new person();
  person1.setName("Scott");
  let newName1 = person1.getName();

  let person2 = new person();
  person1.setName("Matt");
  let newName2 = person1.getName();

  let element = document.getElementById("q3-list");
  element.innerHTML = "<li>" + newName1 + "</li>" + "<li>" + newName2 + "</li>";
}

/********************************
 * QUESTION 4.
 *******************************/

function executeQ4() {
  const url =
    "https://gist.githubusercontent.com/awadhawan18/54592d9ec5e7be1b39013cdd7e78dae4/raw/54a90fe99b8e821e273e1997f356d04308bdb232/Random-images.json";

  fetch(url)
    .then((response) => response.json())
    .then((res) => {
      const data = res.sample;
      // let items = ""
      // data.map(v=>{
      //   items += v.description
      // })
      let items = JSON.stringify(Object.values(data));
      let element = document.getElementById("q4-answer");
      element.append(items);
    });
}

function average(numbers) {
  return variadricAverage.apply(null, numbers);
}
console.log("The average is: " + average([2, 5, 6, 2, 45, 3, 23, 14]));

function variadricAverage() {
  // YOUR CODE HERE
  for (var i = 0, sum = 0, n = arguments.length; i < n; i++) {
    sum += arguments[i];
  }
  return sum / n;
}
console.log("The average is: " + variadricAverage(2, 5, 6, 2, 45, 3, 23, 14));
