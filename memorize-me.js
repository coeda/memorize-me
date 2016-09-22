let cachedElement = {};
let memorize = function(){
  let module = {};
  module.cacheGetElementById = function (element){
    for (let property in cachedElement){
      if(property !== element){
        cachedElement[element] = document.getElementById(element);
        return;
      } else {
        return cachedElement[element];
      }
    }

  };
  module.cacheQuerySelector = function (element){
    for (let property in cachedElement){
      if(property !== element){
        console.log(cachedElement[element] = document.querySelector(element));
        return;
      } else {
        return cachedElement[element];
      }
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
module.cacheQuerySelector('#hello');