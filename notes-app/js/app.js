const addbtn=document.querySelector('#addBtn');
addbtn.addEventListener('click',
  function(){
  addnote();
  }
)
const savenote=()=>{
     

const notes=document.querySelector(".note textarea")   
       console.log(notes);
       const data=[];
       console.log("SAJAL")
       notes.forEach(
        (note) => {
            data.push(note.value);
        }
    )
    
    console.log("SAJAL")
    console.log(data)
       localStorage.setItem('notes',JSON.stringify(data))

      }


const addnote = ( text) => {
  const note = document.createElement("div");
  note.classList.add("note")
  note.innerHTML= `
  <div class="tool">
       <i class="save fas fa-save"></i>
       <i class="trash fas fa-trash"></i> 
  </div>
  <textarea>${text}</textarea>
  `; 

  console.log("SAJAL")
  note.querySelector(".trash").addEventListener("click",
    function(){
      note.remove();
    }
  )

note.querySelector('.save').addEventListener("click",
  function(){
  
    savenote();
   
  }
)
savenote();
  main.appendChild(note);
  
}