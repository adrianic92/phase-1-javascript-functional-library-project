function arrayMaker(collection) {
    const newArray = []
    for (const b in collection) {
        if (typeof(b) === "number") {
          newArray.push(b)
        }
        else {
          newArray.push(collection[b]);
        }
      }
    return newArray
}

function myEach(array, alert) {
    for (const b in array) {
        if (typeof(b) === "number") {
          alert(b)
        }
        else {
          alert(array[b]);
        }
      }
    return array
}

function myMap(array, foo) {
    const newArray = arrayMaker(array)
    const mappedArray = []
    for (let a of newArray) {
        mappedArray.push(foo(a));
    }
    return mappedArray
}

function myReduce(array, foo, acc) {
    const newArray = arrayMaker(array)
    if (!acc) {
        acc = newArray[0]
        newArray.shift();
    }
    for (let a of newArray){
        acc = foo(acc, a, newArray)
    }
    return acc;
}

function myFind(collection, predicate) {
    const newArray = arrayMaker(collection);
    for (let a of newArray) {
        if (predicate(a)) {
            return a
        }
    }
    return undefined
}

function myFilter(collection, predicate) {
    const newArray = arrayMaker(collection);
    const filteredArray = []
    for (let a of newArray) {
        if (predicate(a)) {
            filteredArray.push(a);
        }
    }
    return filteredArray
}

function mySize(collection) {
    const newArray = arrayMaker(collection);
    return newArray.length;
}

function myFirst(array, n) {
    const newArray = arrayMaker(array);
    if (n) {
        return newArray.slice(0, n)
    }
    return newArray[0];
}

function myLast(array, n) {
    const newArray = arrayMaker(array);
    const length = newArray.length;
    if (n) {
        return newArray.slice(length-n)
    }
    return newArray[length-1];
}

function myKeys(object) {
    const newArray = []
    for (const b in object) {
        newArray.push(b)
    }
    return newArray
}

function myValues(object) {
    const newArray = []
    for (const b in object) {
        newArray.push(object[b])
    }
    return newArray
}