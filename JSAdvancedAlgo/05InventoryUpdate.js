//Inventory Update
//Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.
//quick!!!
function updateInventory0(arr1, arr2) {
    return arr2.map(v=>(f=arr1.find(a=>a[1]==v[1]))?[v[0]+f[0],v[1]]:v)
    .concat(arr1.filter(a=>!arr2.find(b=>b[1]==a[1]))).sort((a,b)=>a[1]>b[1]);
  }
//mine
function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    let inventory = {};
    for (let item of arr1) {
        let value = Number(item[0]);
        let name = item[1];
        inventory[name] = value;
    }
    for (let item of arr2) {
        let value = Number(item[0]);
        let name = item[1];
        if (!inventory[name]) inventory[name] = 0;
        inventory[name] += value;
    }
    let sortedkeys = Object.keys(inventory).sort((a, b) => a.localeCompare(b));
    let result = [];

    for (let key of sortedkeys) {
        let newArrItem = [];
        newArrItem.push(inventory[key]);
        newArrItem.push(key);
        result.push(newArrItem);
    }


    return result;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
//
function updateInventory1(arr1, arr2) {
    arr2.forEach(function (newItem, newPos, newArr) {
        arr1.forEach(function (currentItem, currentPos, currentArr) {
            if (currentItem[1] === newItem[1]) {
                currentItem[0] += newItem[0];
                arr2.splice(newPos, 1);
            }
        });
    });

    return arr1.concat(arr2).sort(function (a, b) {
        if (a[1] < b[1]) {
            return -1;
        } else if (a[1] > b[1]) {
            return 1;
        } else {
            return 0;
        }
    });
}
//
function updateInventory2(arr1, arr2) {
    //iterate through each item in the second array
    for (var i = 0; i < arr2.length; i++) {
        var foundMatch = false;
        //Does the current item match any existing items? If so, update their quantity    
        for (var n = 0; n < arr1.length; n++) {
            if (arr1[n][1].indexOf(arr2[i][1]) !== -1) {
                arr1[n][0] += arr2[i][0];
                //Make foundMatch true so it doesnt add the item later, outside of this iteration
                foundMatch = true;
            }
        }
        //Did iterating through the array turn up a match?
        if (foundMatch === false) {
            //if not, create new item
            arr1.push(arr2[i]);
        }
    }
    //final step, sort everything that is in the array
    arr1.sort(function (a, b) {
        if (a[1] < b[1]) {
            return -1;
        }
        return 1;
    });
    return arr1;
}
//
