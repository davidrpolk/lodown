'use strict';

// YOU KNOW WHAT TO DO //
 
/**
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~NOTE: In notes, all parameter names will be encased in double quotes("")!!!~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *  Unique indentifiers on left of Function names for searching!
 * 
 *      FUNCTION LIST:
 * 
 * F001    each(collection, function):  designed to loop over a collection, Array or Object, and apply a Function to each value in the collection.
 * 
 * F002    identity(value): returns a Value unchanged
 * 
 * F003    typeOf(value): tests single Argument and returns a String of its type
 * 
 * F004    first(array, number): returns an Array of the number of indicated indexes, starting at the BEGINNING of the given Array
 * 
 * F005    last(array, number): returns an Array of the number of indicated indexes, starting from the END of the given Array.
 * 
 * F006    indexOf(array, value): returns the index of the first occurence of "value" in "array". returns -1 if "value" isn't in "array"
 * 
 * F007    contains(array, value): searches input Array for a Value and returns true if that Value is in the Array, false if not
 * 
 * F008    unique(array): takes an Array and returns a new Array with duplicate Values removed
 * 
 * F009    filter(collection, function): tests every Value in a Collection with a Function(that returns Boolean Value) and returns a new Array containing
 *         every Value that returned TRUE
 * 
 * F010    reject(array, function): tests every Value in an Array with a Function(that returns Boolean Value) and returns a new Array containing
 *         every Value that returns FALSE
 * 
 * F011    partition(array, function): combines filter() and reject() and returns two Arrays. the first Array will contain all Values that returned true.
 *         the second Array will contain all Values that returned false.
 * 
 * F012    map(collection, function): takes a Collection and applies an input Function on every element in Collection, then returns a new Array of the new Values(Function returns)
 * 
 * F013    pluck(array, property):  takes an input Array("objArray") whose Elements are Objects and outputs an Array of the Values of input Property("property") of each Object
 * 
 * F014    every(collection, function): tests every Element in "collection" with input Function("func") to see if the Element returns true or false. if ANY of the Elements return false, 
           "every" will return false. if all Elements return true, "every" will return true.
  
 * F015    some(collection, function): takes a Collection and tests its Values with given Function. if the Function test of ANY Values returns true, "some" will return true.
 *         If no "function" is given, all Values of the Collection will be tested for truthy or falsey value.
 * 
 * F016    reduce: (collection, function, seed): takes a Collection and reduces its Values to a single Value. That Value is determined by the input Function. A seed can
 *         be given as the initial Value that is passed into the input Function. If no seed is given, the first Value in the Collection will be the initial Value passed into the input Function.
 * 
 * F017    extend(obj1, obj2...more objects): takes a target Object and copies each subsequent Argument-Object's properties onto target Object("obj1").
 * 
 * 
 * 
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 * 
 */
 //F001
function each(collection, action) {
    if(Array.isArray(collection)) {  
        for(var i = 0; i < collection.length; i++) {  
            action(collection[i], i, collection);
        }
    } else {             
        for (var key in collection) {  
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/*
 identity: returns value unchanged
 
 @param {Value} value: any value
 
 @return {Value}: returns input value
 
*/

//F002
function identity(value){
    return value;  //returns "value"
}
module.exports.identity = identity;

/*
  typeOf: tests whatType argument and returns a string of its type
  
  @param {Value} whatType: any value
  
  @return {String}: a lowercase string of "whatType"'s datatype

*/
//F003
function typeOf(whatType){
    if(typeof whatType === "object") { 
        if(Array.isArray(whatType)) {
            return 'array';
        } else if(whatType === null) {
            return 'null';
        } else if(whatType instanceof Date) {
            return 'date';
        } else return 'object';
    } else return typeof whatType; 
}
module.exports.typeOf = typeOf;

/*
  first: returns an array of the number of indicated indexes, starting at the 
  BEGINNING of the given array.
  
  @param {Array} array: input array from which an inputted number of indeces' values will be returned
  
  @param {Number} number: any positive integer
  
  @return {Array or "array"[0]} : if "number" is a positive integer, return will equal an Array including
  the values of the argument "number" of indexes of "array" starting from array[0]. if array is NOT an array data-type or 
  number is not a positive integer , return will equal an empty array. if "number" isn't a Number, return will equal array[0].
 */
 //F004
function first(array, number){
    if(!Array.isArray(array) || number < 0) return [];  
    if(typeof number !== 'number') return array[0];  
    return array.slice(0, number);  
}
module.exports.first = first;

/*
  last: returns an array of the number of indicated indexes, starting from the 
  END of the given array.
  
  @param {Array} array: input array from which an inputted number of indexes' values will be returned
  
  @param {Number} number: any positive integer
  
  @return {Array or "array"[array.length -1]} : if "number" is a positive integer, return will equal an Array including
  the values of the argument "number" of indexes of "array" starting from array[array.length - 1]. if "array" is NOT an Array data-type or 
  "number" is not a positive integer , return will equal an empty Array. if "number" isn't a Number, return will be array[array.length - 1].
*/
//F005
function last(array, number){
    if(!Array.isArray(array) || number < 0) return []; 
    if(typeof number !== 'number' || number === undefined) return array[array.length - 1];  
    return array.slice(-number); 
}
module.exports.last = last;
/*
  indexOf: returns the index of the first occurence of "value" in "array". returns -1 if "value" isn't in "array"
  
  @param {Array} array: input Array to be searched for "value"
  
  @param {Value} value: whatever Value to be found in "array"
  
  @return {Number}: index of the first instance of "value", -1 if "value" isn't in "array"
*/
//F006
function indexOf(array, value){
    for(let i = 0; i < array.length; i++){ 
        if(array[i] === value) return i; 
    } return -1;    
}
module.exports.indexOf = indexOf;
/*
  contains: searches input Array for a Value and returns true if that Value is in the Array, false if not
  
  @param {Array} array: input Array to be searched for "value"
  
  @param {Value} value: whatever Value to be found in "array"
  
  @return {Boolean}: true if "array" contains "value", false if not.
*/
//F007
function contains(array, value) {
    (value) ? array.includes(value) : false; 
}
module.exports.contains = contains;

/*
  unique: takes an Array and returns a new Array with duplicate Values removed
  
  @param {Array} array: input Array whose duplicate values will be removed
  
  @return {Array}: an Array of "array" with duplicates removed
*/
//F008
function unique(array){
const arrayIndexes = [];
const arrayValues = [];
for (let i = 0; i < array.length; i++){ 
  if (!arrayIndexes.includes(indexOf(array, array[i]))){
    arrayIndexes.push(indexOf(array, array[i]));
    }   
  } for (let j of arrayIndexes){
    arrayValues.push(array[j]);
  }
  return arrayValues;
}
module.exports.unique = unique;
/*
  filter: tests every Value in an Array with a Function(that returns Boolean Value) and returns a new Array containing every Value that returns TRUE
  
  @param {Array} array: Array whose Values will be tested with inputted Function
  
  @param {Function} func: used to Boolean test each Value. returns true or false.
  
  @return {Array}: Array of every truthy Value tested with "func"
*/
//F009
function filter(collection, func) {
  const returnArr = [];
     each(collection,function(v, i, c){ 
          if(func(v, i, c)){
              returnArr.push(v);  
          }
      });
         return returnArr;
}
module.exports.filter = filter;
/*
  reject: tests every Value in an Array with a Function(that returns Boolean Value) and returns a new Array containing every Value that returns FALSE
  
  @param {Array} array: Array whose Values will be tested with inputted Function
  
  @param {Function} func: used to Boolean test each Value. returns true or false.
  
  @return {Array}: Array of every falsey Value tested with "func"
*/
//F010
function reject(array, func){
  const returnArr = [];
  if(Array.isArray(array)) {  
    for(var i = 0; i < array.length; i++) { 
        if (!func(array[i], i, array)){
          returnArr.push(array[i]);
        }
    }
  } return returnArr;
}
module.exports.reject = reject;
/*
  partition: combines filter() and reject() and returns two Arrays. the first Array will contain all Values that returned true. the second Array will contain all Values that returned false.

  @param {Array} array: Array whose Values will be tested with inputted Function
  
  @param {Function} func: used to Boolean test each Value. returns true or false.
  
  @return{Arrays}: two arrays, first containing truthy Values, second containing falsey values, tested with "func"
*/
//F011
function partition(array, func){
    const trueThenFalse = [];
    trueThenFalse.push(filter(array,func));
    trueThenFalse.push(reject(array,func));
    return trueThenFalse;
}
module.exports.partition = partition;
/*
  map: takes a Collection and applies an input Function on every element in Collection, then returns a new Array of the new Values(Function returns)
  
  @param {Array or Object} collection: Array or Object whose values will be passed to input Function
  
  @param {Function} func: input Function to be passed to every value in "collection"
  
  @return {Array or Object}: return value of every element being passed through "func". returns Object or Array depending on what "collection" is at run time
*/
//F012
function map(collection, func){
    const returnArr = [];
    each(collection, function(v, i, c){
        returnArr.push(func(v, i, c));
    });
    return returnArr;
}
module.exports.map = map;

/*
  pluck: takes an input Array("objArray") whose Elements are Objects and outputs an Array of the Values of input Property("property") of each Object
  
  @param {Array of Objects} objArray): the Objects in this Array will be searched through for "property"
  
  @param {Value} property: this Value will be added to the return Array
  
  @return {Array}: an Array containing a property of all Objects in "objArray"
*/
//F013
function pluck(objArray, property){
  return map(objArray, function(v, i, c){return v[property]});
}
module.exports.pluck = pluck;

/*
  every: tests every Element in "collection" with input Function("func") to see if the Element returns true or false. if ANY of the Elements return false, 
  "every" will return false. if all Elements return true, "every" will return true.
  
  @param {Array or Object} collection : Array or Object whose Elements will be passed to input Function
  
  @param {Function} func: Function to be run on every Element that returns Boolean Value
  
  @return {Boolean}: true if all elements resolve to true based on "func", false otherwise
*/
//F014
function every(collection, func){
  const returnArr = [];
    if (!func) {
        for(let j of collection){
            if(!j) return false;
            else return true;
        } 
    }
      if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            returnArr.push(func(collection[i], i, collection)); 
        }  
     } else {
        for (var key in collection) {
            returnArr.push(func(collection[key], key, collection))
    }
  } if (returnArr.includes(false)) return false;//if any element in 'returnArr' is false, returns false
    else return true;
}
module.exports.every = every;
/*
  some: tests every Element in "collection" with input Function("func") to see if the Element returns true or false. if ANY of the Elements return true, 
  "some" will return true. if all Elements returns false, "some" will return false.
  
  @param {Array or Object} collection: Array or Object whose Elements will be passed to input Function
  
  @param {Function} func: Function to be run on every Element that returns Boolean Value
  
  @return {Boolean}: returns true if any element in "collection" resolves to true based on "func", false otherwise
*/
//F015
function some(collection, func){
      const returnArr = [];
    if (!func) {  
        for(let j of collection){
          if(!j) return false;
            else return true;
        } 
    }
      if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            returnArr.push(func(collection[i], i, collection)); 
        }  
     } else {
        for (var key in collection) {
            returnArr.push(func(collection[key], key, collection)); 
    }
  } if (returnArr.includes(true)) return true; 
    else return false;
}
module.exports.some = some;
/*
  reduce: takes a Collection and reduces its Values to a single Value. That Value is determined by the input Function. A seed can
*         be given as the initial Value that is passed into the input Function. If no seed is given, the first Value in the Collection 
          will be the initial Value passed into the input Function.
          
          @param {Array or Object} collection: the collection whose elements will be used to get final Value
          
          @param {Function} func: "func" will aggregate the Values of "collection"
          
          @param {Value} seed: "seed" is an optional parameter. if supplied, it is used as the starting Value that "func" uses
          
          @return {Value}: will return whatever the final value of the accumulator('previous')is, could be any data-type.
*/
//F016
function reduce(collection, func, seed){
  let previous;
  each(collection, function(v, i, c){
    if (i < 1) {      
        if(seed === undefined){
            previous = v;
        } else {
        previous = func(seed, v, i);
        }
    }  else {          
        previous = func(previous, v, i);
    } 
  }); return previous;
}
module.exports.reduce = reduce;
/*
  extend: takes an input Object("obj1") and copies other Objects("obj2", "obj3", etc...) Properties to the first Object("obj1"). 
  returns an Object containing all properties copied to "obj1"
  
  @param {Object} obj1: the Object to which all other input Object's Properties will be copied
  
  @param {Object} obj2...objects: this Object and subsequent input Objects will have their Properties copied to "obj1"
  
  @return {Object}: returns an Object containing all copied properties from input Objects
*/
//F017
function extend(obj1, obj2){
    let returnObj = obj1;
    for(let i = 1; i < arguments.length; i++){  
        for (let key in arguments[i]){
            returnObj[key] = arguments[i][key] ;
        }
    } return returnObj;
}
module.exports.extend = extend;


//F018
function stringNumToNum(string){
  let justNums = '';
  for(let v of string){
    if(/\d/.test(v) || /\./.test(v)){
      justNums += v;
    }
  } return parseFloat(justNums);
}