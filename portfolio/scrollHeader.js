const headerDocument = document.querySelector('.header');

window.addEventListener('scroll',() => {
  let scrollPosition = document.documentElement.scrollTop
  if(scrollPosition >= 70){
    headerDocument.classList.add('scroll');
  }else{
    headerDocument.classList.remove('scroll');
  }
});