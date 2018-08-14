let list_todo = JSON.parse(localStorage.list_todo || "[]")
let update_index = 0

// INPUT FORM
const input_button = document.getElementById("input_button")
const input_name = document.getElementById("input_name")
const input_address = document.getElementById("input_address")
const input_no_hp = document.getElementById("input_no_hp")
const input_email = document.getElementById("input_email")
const output_todo = document.getElementById("output_todo")

// SEARCH FORM
const input_search = document.getElementById("input_search")
const search_button = document.getElementById("search_button")

// UPDATE FORM
const input_update = document.getElementById("update_form_group")
const done_checkbox = document.getElementById("done_checkbox")
const update_form_group = document.getElementById("update_form_group")
const update_button = document.getElementById("update_button")

// EventListener
input_button.addEventListener("click", create_contact)
search_button.addEventListener("click", searchTodo)
reset_search_button.addEventListener("click", resetSearch)
window.onbeforeunload = function () {
    localStorage.list_todo = JSON.stringify(list_todo)
}

function create_contact() {
    // e.preventDefault();
    list_todo.push({
        nama: input_name.value,
        address: input_address.value,
        phone: input_no_hp.value,
        email: input_email.value
    })
    input_name.value = ""
    input_address.value = ""
    input_no_hp.value = ""
    input_email.value = ""
    displayTodo()
}

function displayTodo() {
    let temp = ""
    list_todo.forEach(function (list, index){
    temp += `
        <div class="todos" onDblClick="openUpdateForm(${index})">
                    <span>${list_todo[index].nama}</span>
                    <span>${list_todo[index].address}</span>
                    <span>${list_todo[index].phone}</span>
                    <span>${list_todo[index].email}</span>
                    <button onClick="deleteTodo(${index})">X</button>
        </div>`
})
output_todo.innerHTML = temp
}

function deleteTodo(index) {
    list_todo.splice(index, 1)
    displayTodo()
}

function searchTodo() {
    let temp = ""
    list_todo.forEach(function (list, index) {
        if (list.nama.includes(input_search.value)) {
            temp += `
            <div class="todos" onDblClick="openUpdateForm(${index})">
                        <span>${list_todo[index].nama}</span>
                        <span>${list_todo[index].address}</span>
                        <span>${list_todo[index].phone}</span>
                        <span>${list_todo[index].email}</span>
                        <button onClick="deleteTodo(${index})">X</button>
            </div>`
        }
    })

    // console.log(temp)

    output_todo.innerHTML = temp
}

function resetSearch() {
input_search.value=""
displayTodo()
}

displayTodo()

function openUpdateForm(index) {
    input_name.value = list_todo[index].nama
    input_address.value = list_todo[index].address
    input_no_hp.value = list_todo[index].phone
    input_email.value = list_todo[index].email
    update_index = index
    // console.log('kk')
}

update_button.addEventListener('click', () => {
    list_todo[update_index] = {
        nama: input_name.value,
        address: input_address.value,
        phone: input_no_hp.value,
        email: input_email.value
    }
    displayTodo()
    input_name.value=""
    input_address.value=""
    input_no_hp.value=""
    input_email.value=""
})
