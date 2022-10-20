// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// var editButton=document.createElement("button");

// var span2 = document.createElement("SPAN");
// var editButton = document.createElement("button");
// var editButton = document.createTextNode("\u23CE");
// span2.className = "edittt"
// span2.appendChild(editButton);
// myNodelist[i].appendChild(span2);



// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
var num_id=3
function newElement() {
  var li = document.createElement('li');
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    if(document.getElementById('c1') && document.getElementById("btnradio1").checked == true){
      document.getElementById("myUL1").appendChild(li);
      document.getElementById("myInput").value = "";
    }else if(document.getElementById('c2') && document.getElementById("btnradio2").checked == true){
      document.getElementById("myUL2").appendChild(li);
      document.getElementById("myInput").value = "";
    }else if(document.getElementById('c3') && document.getElementById("btnradio3").checked == true){
      document.getElementById("myUL3").appendChild(li);
      document.getElementById("myInput").value = "";
    }else if(document.getElementById('c4') && document.getElementById("btnradio4").checked == true){
      document.getElementById("myUL4").appendChild(li);
      document.getElementById("myInput").value = "";
    }else if(document.getElementById('c5') && document.getElementById("btnradio5").checked == true){
      document.getElementById("myUL5").appendChild(li);
      document.getElementById("myInput").value = "";
    }else if(document.getElementById('c6') && document.getElementById("btnradio6").checked == true){
      document.getElementById("myUL6").appendChild(li);
      document.getElementById("myInput").value = "";
    }else if(num_list>7){
      class_item(7,li);
    }else{
      alert("Choice a catégories !")
    }
  }

	// var editButton=document.createElement("button");

  // var span2 = document.createElement("SPAN");
  // var editButton = document.createElement("button");
  // var editButton = document.createTextNode("\u23CE");
  // span2.className = "edittt"
  // span2.appendChild(editButton);
  // myNodelist[i].appendChild(span2);

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u2573");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  var id= "p"+ String(num_id)
  li.setAttribute("id", id);
  li.setAttribute("draggable", "true");
  li.setAttribute("ondragstart","dragstart_handler(event)");
  num_id += 1
  var button_modif = document.createElement('button');
  button_modif.setAttribute("type", "button");
  button_modif.setAttribute("class", "btn");
  button_modif.setAttribute("arie-label", "Modify");
  var modify_function = "modify('" +id+ "')";
  button_modif.setAttribute("onclick", modify_function);
  var i = document.createElement('i');
  i.setAttribute("class", "fa-solid fa-pen-to-square fs-5");
  button_modif.appendChild(i);
  li.appendChild(button_modif);

  // for (i = 0; i < edittt.length; i++) {
  //   edittt[i].onclick = function() {
  //     var t2 = document.createTextNode(inputValue);
  //     t2.replaceChild(t)
  //   }
  // }

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

// var editTask=function(){
//   console.log("Edit Task...");
//   console.log("Change 'edit' to 'save'");
//   var listItem=this.parentNode;

//   var editInput=listItem.querySelector('input[type=text]');
//   var label=listItem.querySelector("label");
//   var containsClass=listItem.classList.contains("editMode");
//       //If class of the parent is .editmode
//       if(containsClass){
  
//       //switch to .editmode
//       //label becomes the inputs value.
//         label.innerText=editInput.value;
//       }else{
//         editInput.value=label.innerText;
//       }
  
//       //toggle .editmode on the parent.
//       listItem.classList.toggle("editMode");
//   }


// Create a new list 
var num_list = 7
function newList(){
  var inputValue2 = document.getElementById('myInput2').value;
  if (inputValue2 === '') {
    alert("You must write something!");
  } else {
    var div = document.createElement("div");
    div.setAttribute("class", "card text-dark");
    var id_list = "c" + String(num_list);
    div.setAttribute("id", id_list);
    div.setAttribute("draggable", "true");
    div.setAttribute("ondragstart","dragstart_handler(event)");
    div.setAttribute("style", "width: 18rem;");
    var div2 = document.createElement("div");
    div2.setAttribute("class", "card-header");
    var div_container = document.createElement('div');
    div_container.setAttribute("class", "container");
    var div_row = document.createElement('div');
    div_row.setAttribute("class", "row p-0");
    var div_col_1 = document.createElement('div');
    div_col_1.setAttribute("id", "m"+String(num_list));
    div_col_1.setAttribute("class", "col-10 text-dark text-center");
    div_col_1.appendChild(document.createTextNode(inputValue2));
    var button_modif = document.createElement('button');
    button_modif.setAttribute("type", "button");
    button_modif.setAttribute("class", "btn");
    button_modif.setAttribute("arie-label", "Modify");
    var id_modify = "m"+String(num_list);
    var modify_function = "modify('" +id_modify+ "')";
    button_modif.setAttribute("onclick", modify_function);
    var i = document.createElement('i');
    i.setAttribute("class", "fa-solid fa-pen-to-square fs-5");
    button_modif.appendChild(i)
    div_col_1.appendChild(button_modif);
    div_row.appendChild(div_col_1);
    var div_col_2 = document.createElement('div');
    div_col_2.setAttribute("class", "col-1");
    var button_delete = document.createElement('button');
    button_delete.setAttribute("type", "button");
    button_delete.setAttribute("class", "btn-close");
    button_delete.setAttribute("arie-label", "Close");
    var id_radio = "btnradio"+String(num_list);
    var delete_function = "delete_card('" +id_list+ "','" +id_radio+ "')";
    button_delete.setAttribute("onclick", delete_function);
    div_col_2.appendChild(button_delete);
    div_row.appendChild(div_col_2);
    div_container.appendChild(div_row);
    div2.appendChild(div_container);
    div.appendChild(div2);
    var ul = document.createElement("ul");
    var id2 = "myUL"+ String(num_list);
    ul.setAttribute("id", id2);
    var ul2 = document.createElement('ul');
    ul2.setAttribute("class", "list-group list-group-flush");
    ul.appendChild(ul2);
    var div3 = document.createElement("div");
    div3.setAttribute("id", "target");
    div3.setAttribute("ondrop" ,"drop_handler(event)");
    div3.setAttribute("ondragover", "dragover_handler(event)");
    div3.appendChild(document.createTextNode('Zone pour le dépôt'));
    ul.appendChild(div3);
    div.appendChild(ul);
    document.getElementById("card").appendChild(div);
    document.getElementById("myInput2").value = "";
    var input = document.createElement('input');
    input.setAttribute("type", "radio");
    input.setAttribute("class", "btn-check");
    input.setAttribute("name", "btnradio");
    input.setAttribute("id", id_radio );
    input.setAttribute("autocomplete", "off" );
    document.getElementById("btn").appendChild(input);
    var label = document.createElement("label");
    label.setAttribute("class", "btn btn-outline-light");
    label.setAttribute('id', id_radio);
    label.setAttribute("for", id_radio);
    label.appendChild(document.createTextNode(inputValue2));
    document.getElementById("btn").appendChild(label);
    num_list +=1;
  }
}

function class_item(n,li){
  if(document.getElementById("c" +String(n)) && document.getElementById("btnradio"+String(n)).checked == true){
    document.getElementById("myUL"+String(n)).appendChild(li);
    document.getElementById("myInput").value = "";
  }else if(num_list>n+1){
    class_item(n+1,li);
  }
}

function delete_card(id, id2){
  var element = document.getElementById(id);
  var element2 = document.getElementById(id2)
  var proceed = confirm("Êtes-vous sûrs de vouloir supprimer cette catégorie ?");
  if (proceed){
    element.parentNode.removeChild(element);
    element2.remove(element2);
    var element2 = document.getElementById(id2);
    element2.remove(element2);
  }
}

function modify(id_m){
  var input_modify = prompt("Quelle est le nouveau nom de cette catégorie ?");
  console.log(input_modify)
  if (input_modify != null){
    document.getElementById(id_m).textContent = input_modify;
    var button_modif = document.createElement('button');
    button_modif.setAttribute("type", "button");
    button_modif.setAttribute("class", "btn");
    button_modif.setAttribute("arie-label", "Modify");
    var id_modify = id_m;
    var modify_function = "modify('" +id_m+ "')";
    button_modif.setAttribute("onclick", modify_function);
    var i = document.createElement('i');
    i.setAttribute("class", "fa-solid fa-pen-to-square fs-5");
    button_modif.appendChild(i)
    document.getElementById(id_m).appendChild(button_modif);
  }
  var myNodelist = document.getElementsByTagName("LI");
  var i;
  for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
  }
  var close = document.getElementsByClassName("close");
  var i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
    }
  }
  var list = document.querySelector('ul');
  list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  }, false);
}