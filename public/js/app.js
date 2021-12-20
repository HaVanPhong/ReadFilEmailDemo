let ipEmail= document.getElementById("ipEmail");
let ul= document.getElementById("ulSE");
ipEmail.addEventListener("click", function(e){
  ul.style.display="block";
  e.preventDefault();
  fetch('/input')
    .then(res=>res.json())
    .then(res=>{
      let emailArr= res.split(" ");
      let html=""
      emailArr.map(v=>{
        html+=`<li class="em">${v}</li>`
      })
      ul.innerHTML=html;
      let ems= document.getElementsByClassName("em");
      for (let e of ems){
        e.addEventListener('click', (event)=>{
          console.log(event.target.innerHTML);
          ipEmail.value= event.target.innerHTML;
          ul.style.display="none";
        })
      }
    })
    .catch(()=>{
      console.log("err nef");
    })
})


