const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

//Question 1

const cat = {
  complain: function () {
    console.log("Meow!");
  },
};

cat.complain();

//Question 2

let heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";

//Question 3

heading.style.fontSize = "2em";

//Question 4

heading.classList.add("subheading");

//Question 5

let paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "red";
}

//Question 6

let resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";

//Question 7

function aFunction(list) {
  for (let i = 0; i < list.length; i++) {
    console.log(list[i].name);
  }
}

aFunction(cats);

//Question 8

function createCats(cats) {}
