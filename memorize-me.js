let cachedElement = [];
let memorize = function(){
  let module = {};
  module.cacheGetElementById = function (element){
    let getIndex = cachedElement.indexOf(document.getElementById(element));
    console.log(getIndex);
    if(getIndex < 0){
      console.log(cachedElement);
      return cachedElement.push(document.getElementById(element));
    } else {
      console.log(cachedElement);
      return cachedElement[getIndex];
    }

  };
  module.cacheQuerySelector = function (element){
    let getIndex = cachedElement.indexOf(document.querySelector(element));
    if(getIndex < 0){
      console.log(getIndex);
      console.log(cachedElement);
      return cachedElement.push(document.querySelector(element));
    } else {
      console.log(cachedElement);
      return cachedElement[getIndex];
    }
  };
  return module;
};
let module = memorize();

console.time('hello');
module.cacheGetElementById('hello');
console.timeEnd('hello');
console.time('hello');
module.cacheGetElementById('hello');
console.timeEnd('hello');
