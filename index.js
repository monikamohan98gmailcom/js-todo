const name=document.getElementById("name");
const emailid=document.getElementById("email");
const addbutton = document.getElementById("cu-action");
let array=[];
let number=null;
let id=0;
function insert()
{
    if(number)
        {  
        array=array.map((ar)=>{
        if(number===ar.number){
            ar.name=document.getElementById("name").value;
            ar.emailid=document.getElementById("email").value;          
        } 
        return ar;
        });
        updatefunction(null,'add');
    }
    else{
        const object={};
        object.number=++id;
        object.name=name.value;
        object.emailid=emailid.value;
        array.push(object);
    } 
    common();
}
function updatefunction(numberno,text){
    number=numberno;
    addbutton.innerHTML=text;
}
function editing(objectno){
  const arr=array.find(index=>index.number==objectno);
  name.value=arr.name;
  emailid.value=arr.emailid;
  updatefunction(arr.number,'update')
   // key++;
}
function deletion(objectno){
    array=array.filter(array=>array.number!=objectno)
    common();
}

function reset(){
    name.value="";
    emailid.value="";
}
function common()
{
    rows="";
    array.forEach((object)=>{
        const tr=`<tr>
                  <td>${object.number}</td>
                  <td>${object.name}</td>
                  <td>${object.emailid}</td>
                  <td><button id="edit" onclick="editing(${object.number})">edit</button>  
                  <button id="delete" onclick="deletion(${object.number})">delete</button></td>
                  </tr> `;
                rows+=tr;
          
        }); document.getElementById("todo-body").innerHTML=rows;
reset();
}

addbutton.addEventListener('click',insert);