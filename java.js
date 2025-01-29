//DOM //
//Document Objet Model//
//select element using get element by id //

// console.log(typeof document.getElementById("main-heading"));

// const mainHeading =document.getElementById("main-heading");
// console.log(mainHeading);


// select element using query selector//

// const mainHeading =document.querySelector("#main-heading");
// const header =document.querySelector(".header")
// const navItems = document.getElementsByIdClassName("nav-item")
// console.log(navItem);

//change text //
//textContent and innerText
// const mainHeading = document.getElementById("main-heading");
// console.log(mainHeading.textContent);
// mainHeading.textContent = "This is something else"
// console.log(mainHeading);
  

// change the styles of elemnet
// const mainHeading = document.querySelector("div.headline h2");
// console.log("maiHeading");

// mainHeading.style.backgroundColor="red";


// get and set attrubutes
// const link =document.querySelector("a");
// console.log(link.getAttribute("href"));
// for(let i=0; i< navItems.length; i++){
    // console.log(navItems[i]);
    
// }


// var headerTitle = document.getElementById('main-heading');
// headerTitle.textContent = "TextContent"

// headerTitle.innerHTML ="innerHTML"


const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list");

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTodoText = todoInput.value;
  const newLi = document.createElement("li");
  const newLiInnerHtml = `
        <span class="text">${newTodoText}</span>
        <div class="todo-buttons">
            <button class="todo-btn done">Done</button>
            <button class="todo-btn remove">Remove</button>
        </div>`;
  newLi.innerHTML = newLiInnerHtml;
  todoList.append(newLi);
  todoInput.value = "";
});
todoList.addEventListener("click", (e) => {
    // check if user clicked on done button
    if (e.target.classList.contains("remove")) {
      const targetedLi = e.target.parentNode.parentNode;
      targetedLi.remove();
    }
    if (e.target.classList.contains("done")) {
      const liSpan = e.target.parentNode.previousElementSibling;
      liSpan.style.textDecoration = "line-through";
    }
  });





