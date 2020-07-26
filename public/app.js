

// for today Date

const dateElement = document.getElementById("date");
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const today = new Date();
dateElement.innerHTML = today.toLocaleDateString("en-US",options);

var list = document.getElementById("list");

function AddItem() {
    
    var Todo_Item = document.getElementById("Todo-Item");

    // Add Item
    // Craet li text with text node
    
    var li = document.createElement('li');
    li.setAttribute("class" , "item"); 
    list.appendChild(li);

    var p = document.createElement('p')
    var p_Text = document.createTextNode(Todo_Item.value);
    p.setAttribute("class" , "text lineThrough");
    p.appendChild(p_Text);
    li.appendChild(p);

    var div = document.createElement('div');
    div.setAttribute("class" , "allbtn mr-3");
    li.appendChild(div);

    console.log(li)

    // if (Todo_Item){
    //     localStorage.setItem(Todo_Item.value , Todo_Item.value)
    // }

    // Creat delete btn 

    var delbtn = document.createElement("button");
    var del_Text = document.createTextNode("");
    delbtn.setAttribute("class" , "fa fa-trash btn btn-danger delbtn");
    delbtn.setAttribute("onclick" , "delItem(this)");
    delbtn.appendChild(del_Text);
    div.appendChild(delbtn);

    // Creat Edit btn

    var editbtn = document.createElement("button");
    var edit_Text = document.createTextNode("");
    editbtn.setAttribute("class" , "fa fa-edit btn btn-success delbtn");
    editbtn.setAttribute("onclick" , "editItem(this)");
    editbtn.appendChild(edit_Text);
    div.appendChild(editbtn);

    Todo_Item.value = "";
}

// Delete Item

function delItem(e) {
    e.parentNode.parentNode.remove()
}

// Edit Item

function editItem(e){
    var newVal = prompt("Enter update value" , e.parentNode.parentNode.firstChild.nodeValue);
    e.parentNode.parentNode.firstChild.nodeValue = newVal;
    console.log(newVal);
}

// Delete All

function DeleteAll() {
    list.innerHTML = "" ;
}

// reload

function reload() {
    location.reload();
}