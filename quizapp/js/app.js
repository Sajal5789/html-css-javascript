const quizdata=[
  {question:'which of the following is a client side language',
    a:'java',
    b:'c',
    c:'python',
    d:'javascript',
    correct:'d',

  },


{question:'which of the following is a client side language',
    a:'java',
    b:'c',
    c:'python',
    d:'javascript',
    correct:'d',

  },
  
{question:'what does HTML stand fore',
  a: "Hypertext Markup Language",
  b: "Cascading Style Sheet",
  c: "Jason Object Notation",
  d: "Helicopters Terminals Motorboats Lamborginis",
  correct: "a",
},
  
  
{question:'which year was javascript launched',
    a:'1996',
    b:'1995',
    c:'1994',
    d:'none of the above',
    correct:'b',

  },
  
{question:'what does css stand for',
  a: "Hypertext Markup Language",
  b: "Cascading Style Sheet",
  c: "Jason Object Notation",
  d: "Helicopters Terminals Motorboats Lamborginis",
  correct: "b",
},
]
let correct=0;
let incorrect=0;
let size =quizdata.length;
let index=0;
const questionbox=document.getElementById("questionBox")
const optioninput= document.querySelectorAll("input[type='radio']");
const loadquestion=()=>{
  if(index==size){
    return quizend();
  }
  
const data=quizdata[index];
console.log(data.question)
questionbox.innerText=`${index+1}. ${data.question}`
optioninput[0].nextElementSibling.innerText=data.a;
optioninput[1].nextElementSibling.innerText=data.b;
optioninput[2].nextElementSibling.innerText=data.c;
optioninput[3].nextElementSibling.innerText=data.d;


}
loadquestion();
document.querySelector('#submit').addEventListener('click' ,function(){
  const ans =getanswer()
  const data=quizdata[index]
 // console.log(ans,data.correct)
  if(ans==data.correct){
    correct++;
  }
  else{
  incorrect++;
  }
index++;
reset();
loadquestion();
//console.log(correct)

})

const getanswer=()=>{ 
  let ans ;
  optioninput.forEach((input) => {
    
    if(input.checked){
    ans = input.value;
    }
    
  });
  return ans;
}

const reset=()=>{
  optioninput.forEach((input)=>{
    input.checked=false;
  })
}

const quizend=()=>{
  document.getElementsByClassName('container')[0].innerHTML=`
  <div class=col> quiz is end correct is ${correct}</div> `
}