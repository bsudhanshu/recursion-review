// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

/*Implement getElementsByClassName with your own function in 
src/getElementsByClassName.js, 
and make the specs pass, fixing them as necessary. 
You should use document.body, element.childNodes, 
and element.classList
*/

var getElementsByClassName = function(className) {
  var results = [];
  var element = document.body;


  if(element.classList.contains(className)) {
      results.push(element);
  }

  function findNodes(element) {
    var elementChildren = element.childNodes;

    elementChildren.forEach(function( child ) {
      if(child.classList !== undefined) {

        if(child.classList.contains(className)) {
            results.push(child);
        }

        if(child.hasChildNodes()) {
            findNodes(child);
        }


      }

    });
  }

  findNodes(element);

  return results;
};
