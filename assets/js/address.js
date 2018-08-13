let list_todo = [{
    nama: "cahyo",
    address: "jl.intan baiduri",
    phone : "087878875708",
    email : "mnoorcahyo@gmail.com"
},
{
    nama: "abcd",
    address: "jl.intan ",
    phone : "08787887",
    email : "cahyo@gmail.com"
},

]
const input_button = document.getElementById("input_button")
const input_name = document.getElementById("input_name")
const input_address = document.getElementById("input_address")
const input_no_hp = document.getElementById("input_no_hp")
const input_email = document.getElementById("input_email")
const output_todo = document.getElementById("output_todo")
const input_search = document.getElementById("input_search")
const search_button = document.getElementById("search_button")
const update_button = document.getElementById("update_button")

input_button.addEventListener("click", create_contact)
search_button.addEventListener("click", searchTodo)
update_button.addEventListener("click", updateTodo)

function create_contact() {
    // e.preventDefault();
    list_todo.push({
        nama: input_name.value,
        address: input_address.value,
        phone: input_no_hp.value,
        email: input_email.value
    })
    displayTodo()
}

// function display_todo() {
//     let tmp = ""
//     for (i = 0; i < list_todo.length; i++) {
//         tmp += list_todo[i]
//     }
//    output_todo.innerHTML = tmp
// }

function displayTodo() {
    let temp = ""
    for (i = 0; i < list_todo.length; i++) {
        temp += `
        <div class="todos">
                    <span>${list_todo[i].nama}</span>
                    <span>${list_todo[i].address}</span>
                    <span>${list_todo[i].phone}</span>
                    <span>${list_todo[i].email}</span>
                    <button onClick="deleteTodo(${i})">X</button>
        </div>`
    }
    output_todo.innerHTML = temp
}

function deleteTodo(index) {
    list_todo.splice(index, 1)
    displayTodo()
}

function searchTodo() {
    let temp = ""
    // console.log("test")

    list_todo.forEach(function (list, index) {
        console.log(index)
        if (list.nama === input_search.value) {
            temp += `<div class="todos">
            <span>${list.nama}</span>
            <span>${list.address}</span>
            <span>${list.phone}</span>
            <span>${list.email}</span>
            <button onClick="deleteTodo(${index})">X</button>
            </div>`
        }
    })
    output_todo.innerHTML = temp
}

displayTodo()

function updateTodo(id, ){
    
}