var ul = document.querySelectorAll(".navbar a");
var articles = document.querySelectorAll(".article");

ul.forEach( function(item){
  item.onclick = function(){
    setActiveClass(item);
    return false;
  };
    // item.addEventListener('click',event => {
    //   sayThanks();
    // })
})

function setActiveClass(activeItem) {
  ul.forEach(function(item){
    item.removeAttribute("class");
  });
  activeItem.classList.add("active");
  articles.forEach(function(item){
    item.style.display = 'none';
  });

  var block = document.getElementById(activeItem.dataset.block);
  if (block != null){
    block.style.display = 'block';
  }
//  block.style.visibility = 'visible';     // Show
}
