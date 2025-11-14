//--------------change slide----------------

const imgs=document.querySelectorAll(".header-slider ul img");
const prev_btn=document.querySelector(".control_prev");
const next_btn=document.querySelector(".control_next");

let n=0;

function changeSlide(){
    for(i=0; i<imgs.length; i++){
        imgs[i].style.display='none';
    }
     imgs[n].style.display='block';
}
changeSlide();

prev_btn.addEventListener('click', (e)=>{
   if(n>0){
    n--;
   }else{
    n=imgs.length -1;
   }
   changeSlide();
})
next_btn.addEventListener('click',(e)=>{
   if(n<imgs.length -1 ){
    n++;
   }else{
    n=0;
   }
   changeSlide();
})

//---------------------scroll bar----------------------


const scrollContainer = document.querySelectorAll('.products');
for(const item of scrollContainer){
   item.addEventListener('wheel',(evt)=>{
      evt.preventDefault();
      item.scrollLeft += evt.deltaY;
      
   });
}


//---------------dropdown------------------

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}


window.onclick = function(event) {
  if (!event.target.matches('.dropbtn img')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}