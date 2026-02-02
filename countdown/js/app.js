const enddate= "22 january 2025 10:00 pm"
document.getElementById("end-date").innerText= enddate;
const inputs=document.querySelectorAll("input");

function clock (){
  const now =new Date();
  const end =new Date(enddate);
  const diff=end -now;
  console.log(diff);
  console.log(Math.floor(diff/3600/24/1000));
  console.log(Math.floor((diff/3600/1000)));

  if(diff<0)
return ;

  inputs[0].value=Math.floor(diff/3600/24/1000);
  inputs[1].value=Math.floor((diff/3600/1000)%24);
inputs[2].value=Math.floor((diff/1000/60)%60);
inputs[3].value=Math.floor((diff/1000)%60);

}
clock();
setInterval( 
  ()=>{
    clock();
  
  },1000
)
