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

function getStorage(): string[] {
    let fromStorage = localStorage.getItem('stuff');
    if (fromStorage == null) {
        fromStorage = '["a"]';
    }
 //|| ["initial", "yeah"]
    let meems: string[] = JSON.parse(fromStorage);
    return meems;
}

function addToStorage(newItem: string) {
    var storage = getStorage();
    storage.push(newItem);
    localStorage.setItem('stuff', JSON.stringify(storage));
}


//problems here

//let meemz: string[] = JSON.parse(localStorage['stuff']);
//if (meemz == null || meemz.length == 0) {
    //meemz = ["initial", "yeah"];
    //localStorage['stuff'] = meemz;
//}
let meemz = getStorage();
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

