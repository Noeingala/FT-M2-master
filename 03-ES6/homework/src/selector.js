var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ

  if(matchFunc(startEl) === true){
    resultSet.push(startEl)
  }
  if(startEl.children.length){
    for(let i = 0; i < startEl.children.length; i++){
    var resultChildren = traverseDomAndCollectElements(
      matchFunc, 
      startEl.children[i]
      )
    resultSet = resultSet.concat(resultChildren);
    }
  }
  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí

  // if(selector[0] === "#") return "id";
  // else if(selector[0] === ".") return "class";
  // if(selector.split(".").length>1) return "tag.class"; 
  // //if(selector.charAt(0)!== '.' && selector.includes('.')) return 'tag.class'
  // return "tag"

  switch(selector.charAt(0)){
    case "#":
      return "id"
    case ".":
      return "class"
    default:
      // if(selector.includes (".")) return "tag.class"
      // else return "tag"
    return selector.includes(".") ? "tag.class" : "tag"  //operador ternario
  }
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  
  var matchFunction;

  if (selectorType === "id") { 
  //matchFunction=(arg)=>{ return `#${arg.id}` === selector}
    matchFunction=function(arg){
      return arg.id.toLowerCase()=== selector.slice(1).toLowerCase()
    }
  } else if (selectorType === "class") {
    matchFunction=function(arg){
      let classList = Array.from(arg.classList)
      return classList.includes(selector.slice(1))
    }
    // matchFunction = (arg) => {
    //   let cualquierNombre = arg.classList;
    //   for (let i = 0; i < cualquierNombre.length; i++) {
    //     if (`.${cualquierNombre[i]}` === selector) {
    //       return true;
    //     }
    //   }
    //   return false;
    // }
  } 
  else if (selectorType === "tag.class") {
    var [tag, clase] = selector.split(".")
    matchFunction = function(arg){
      return (
        arg.classList.contains(clase.toLowerCase()) && 
        arg.tagName.toLowerCase() === tag.toLowerCase()
      )
    }
    // matchFunction=(x)=>{
    //   let arr = selector.split(".");
    //   let st = x.classList;
    //   if(arr[0] === x.tagName.toLowerCase()){
    //     for(let i = 0; i < st.length; i++){
    //       if(st[i]===arr[1]){
    //       return true;
    //       }
    //     }
    //   }
    //   return false;
    // };
  } 
   else if (selectorType === "tag") {
     matchFunction = function(arg){
       arg.tagName.toLowerCase === selector;
       return true
     }
    // matchFunction=(arg)=>{
    //   arg.tagName.toLowerCase === selector;
    //   return true
    // }
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
