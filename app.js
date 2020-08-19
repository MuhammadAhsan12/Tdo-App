// for today Date

const dateElement = document.getElementById("date");
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const today = new Date();
dateElement.innerHTML = today.toLocaleDateString("en-US", options);

var list = document.getElementById("list");

// data call from fire base

firebase.database().ref('todos').on('child_added', function(data) {

    // console.log(data.val())

    // Add Item
    // Craet li text with text node

    var li = document.createElement('li');
    li.setAttribute("class", "item");
    list.appendChild(li);

    // checkbox

    var input = document.createElement('input');
    input.setAttribute("type", "checkbox");
    input.setAttribute("class", "form-check-input");
    input.setAttribute("id", data.val().key);
    input.setAttribute("onclick", "Check(this)");
    li.appendChild(input);

    var p = document.createElement('p')
    var p_Text = document.createTextNode(data.val().value);
    p.setAttribute("class", "text lineThrough");
    p.appendChild(p_Text);
    li.appendChild(p);

    var div = document.createElement('div');
    div.setAttribute("class", "allbtn mr-3");
    li.appendChild(div);
    // console.log(li)

    // Creat delete btn 

    var delbtn = document.createElement("button");
    var del_Text = document.createTextNode("");
    delbtn.setAttribute("class", "fa fa-trash btn btn-danger delbtn");
    delbtn.setAttribute("id", data.val().key)
    delbtn.setAttribute("onclick", "delItem(this)");
    delbtn.appendChild(del_Text);
    div.appendChild(delbtn);

    // Creat Edit btn

    var editbtn = document.createElement("button");
    var edit_Text = document.createTextNode("");
    editbtn.setAttribute("class", "fa fa-edit btn btn-success delbtn");
    editbtn.setAttribute("id", data.val().key)
    editbtn.setAttribute("id", "checkbox")
    editbtn.setAttribute("onclick", "editItem(this)");
    editbtn.appendChild(edit_Text);
    div.appendChild(editbtn);

})

function AddItem() {

    var Todo_Item = document.getElementById("Todo-Item");

    // firebase database
    // console.log(firebase.database)
    // firebase.database().ref('todo app').set(p_Text);
    // for save data firebase database

    var database = firebase.database().ref('todos')
    var key = database.push().key
    var todo = {
        value: Todo_Item.value,
        key: key
    }
    database.child(key).set(todo);

    Todo_Item.value = "";

}

// Delete Item

function delItem(e) {
    // console.log(e.id)
    firebase.database().ref('todos').child(e.id).remove();
    e.parentNode.parentNode.remove()
}

// Edit Item

function editItem(e) {
    var newVal = prompt("Enter update value", e.parentNode.parentNode.children[1].firstChild.nodeValue);

    var editToDo = {
        key: e.id,
        value: newVal
    }

    firebase.database().ref('todos').child(e.id).set(editToDo);
    e.parentNode.parentNode.children[1].firstChild.nodeValue = newVal;
    // console.log(e.parentNode.parentNode.firstChild.firstChild.nodeValue);
    // console.log(newVal);
}

// Delete All

function DeleteAll() {
    firebase.database().ref('todos').remove();
    list.innerHTML = "";
}

// reload

function reload() {
    location.reload();
}

// Checkbox

function Check(e) {
    checkbox.disabled = true;
}