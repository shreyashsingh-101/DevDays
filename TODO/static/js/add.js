let list = document.querySelector(".list_todo");
let add = document.querySelector(".add_btn");
let add_input = document.querySelector(".add_input");



add.addEventListener("click", () => {
  if (add_input.children[0].value !== "") {
    
    let obj = {
      element: [add_input.children[0].value],
    };

    let data = localStorage.getItem("todo");
    let data_obj = JSON.parse(data);

    if (data_obj != null) {
      data_obj.element.push(obj.element[0]);
      localStorage.setItem("todo", JSON.stringify(data_obj));
    } else {
      localStorage.setItem("todo", JSON.stringify(obj));
    }
    add_input.children[0].value = " ";
  }
});
