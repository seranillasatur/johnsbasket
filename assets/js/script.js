window.addEventListener('scroll',function(){
  var header = document.querySelector('header');
  header.classList.toggle("sticky", window.scrollY > 0);
});
function menutoggle(){
  const togglemenu = document.querySelector('.togglemenu');
  const navbar = document.querySelector('.navbar');
  togglemenu.classList.toggle('active');
  navbar.classList.toggle('active');
}