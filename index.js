function myEach (collection, c) {
    if (Array.isArray(collection) === true) {
      collection.map(c)
    }  else {
    Object.values(collection).map(c)
    }
    return collection
  }
  
  
  function myMap (collection, c) {
    let myCollection
    if (Array.isArray(collection) === true) {
      myCollection = [...collection]
    } else {
      myCollection = [...Object.values(collection)];
    }
    return myCollection.map(c);
  }
  
  
  function myReduce (collection, callBack, acc) {
    let myCollection
    if (Array.isArray(collection === true)) {
      myCollection = [...collection];
      } else {
        myCollection = [...Object.values(collection)];
      }
      if (acc === undefined) {
        acc = -2
      }
      return myCollection.reduce(callBack, acc);
  }
  
  
  function myFind (collection, callBack) {
    if (Array.isArray(collection) === true) {
      return collection.find(callBack);
    } else {
      return Object.values(collection).find(callBack);
    }
  }
  
  
  
  function myFilter (collection, predicate) {
    if (Array.isArray(collection) === true) {
      return collection.filter(predicate);
    } else {
      Object.values(collection).filter(predicate);
    }
    return []
  }
  
  
  
  function mySize (collection) {
    if (Array.isArray(collection) === true) {
      return collection.length
    } else {
      return Object.values(collection).length
    }
  }
  
  
  
  function myFirst (array, n) {
    if (n === undefined) {
      return array[0]
    } else {
      return array.slice(0, n)
    }
  }
  
  
  
  function myLast (array, n) {
    if (n === undefined) {
      return array[array.length - 1];
    } else {
      let reverseArray = array.reverse().slice(0, n);
      return reverseArray.reverse();
    }
  } 
  
  
  
  function myKeys (object) {
    return Object.keys(object);
  }
  
  
  
  function myValues (object) {
    return Object.values(object);
  }
