let list = document.querySelector(".list_todo");

list.addEventListener("click", (e) => {
  if (e.target.parentElement.classList.contains("cross")) {
    e.target.parentElement.parentElement.style.display = "none";
    let stored_data = localStorage.getItem("todo");
    let stored_data_parsed = JSON.parse(stored_data);
    let new_arr = stored_data_parsed.element;
    for (let i = 0; i < stored_data_parsed.element.length; i++) {
      if (
        e.target.parentElement.parentElement.children[0].innerText ==
        stored_data_parsed.element[i]
      )
        new_arr.splice(i, 1);
    }
    let new_obj = {
      element: new_arr,
    };
    localStorage.setItem("todo", JSON.stringify(new_obj));
    if(stored_data_parsed.element.length == 0){
      let e = document.createElement("div");
      e.innerHTML =  `<div class="notodo">No TO-DOs Added</div>`
      list.appendChild(e);
    }
  }

  if (e.target.classList.contains("list_element")) {
    e.target.classList.toggle("task_complete");
  }
});

let add = document.querySelector(".add_btn");
let add_input = document.querySelector(".add_input");

(function () {
  let stored_data = localStorage.getItem("todo");
  let stored_data_parsed = JSON.parse(stored_data);
  if(stored_data_parsed.element.length == 0){
    let e = document.createElement("div");
    e.innerHTML =  `<div class="notodo">No TO-DOs Added</div>`
    list.appendChild(e);
  }
  if (stored_data_parsed != null) {
    for (let i = 0; i < stored_data_parsed.element.length; i++) {
      let elem = `
        <div class="list_element">${stored_data_parsed.element[i]}</div>
        <div class="cross">
          <i class="fas fa-times"></i>
        </div>`;
      let li = document.createElement("li");
      li.innerHTML = elem;
      list.appendChild(li);
    }
  }
  
})();


