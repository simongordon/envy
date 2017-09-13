//asdf
console.log('asdf');

// class Env {

// }

function addListItem(newItem: string) {
    var list = document.getElementById('envList');
    var newListItem = document.createElement('li');
    newListItem.innerText = newItem;
    list.appendChild(newListItem);
}

function addToStorage(newItem: string) {
    var stuff: string[] = localStorage['stuff'];
    stuff.concat(newItem);
}

//problems here

let meemz: string[] = JSON.parse(localStorage['stuff']);
if (meemz == null || meemz.length == 0) {
    meemz = ["initial", "yeah"];
    localStorage['stuff'] = meemz;
}
meemz.forEach(element => {
    addListItem(element)
});

function doMemes() {
    alert('hi');
}

document.getElementById('btnAdd').addEventListener("click", function () {
    var textBox = <HTMLInputElement>document.getElementById('txtNew');
    let newItem = textBox.value;
    console.log('New item: ' + newItem);
    addToStorage(newItem);
    addListItem(newItem);

    textBox.value = "";
});

