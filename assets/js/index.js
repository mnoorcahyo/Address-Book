let address_book = []

function create_ab(name, address, no_hp,email) {
    address_book.push({
        Name: name,
        address: address,
        No_Hp: no_hp,   
        Email : email
    })
}

function read_ab() {
    console.log(address_book)
}

function update_ab(index, key, value) {
    address_book[index][key] = value
}

function delete_ab(index) {
    address_book.splice(index, 1)
}

function search_ab(key,value) {
    let const_ab = address_book.filter(search => search[key] === value)
    console.log(const_ab)
}