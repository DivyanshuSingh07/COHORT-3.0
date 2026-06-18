const inp = document.querySelector("input");
const btn = document.querySelector("#add");
const todoBox = document.querySelector(".todo-list");

btn.addEventListener("click", () => {
  const value = inp.value;

  if (value.trim() === "") return;

  todoBox.innerHTML += `<div class="li">
          <h3>${value}</h3>
          <div>
            <button class="btn edit">Edit</button>
            <button class="btn del">Delete</button>
          </div>
        </div>`;

  inp.value = "";

//   const editBtn = document.querySelector(".btn edit");
//   const deleteBtn = document.querySelector("btn del");

//   editBtn.addEventListener("click", function (){

//   })


// deleteBtn.addEventListener("click", () => {


// });
});

todoBox.addEventListener("click", (event) => {

    // DELETE

    if (event.target.classList.contains("del")) {

        event.target.parentElement.parentElement.remove();

    }

    // EDIT

    if (event.target.classList.contains("edit")) {

        const h3 = event.target
            .parentElement
            .parentElement
            .querySelector("h3");

        const newValue = prompt("Edit task:");

        h3.innerText = newValue;

    }

});