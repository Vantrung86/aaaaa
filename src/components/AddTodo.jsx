import React, { useState } from "react";
let aa=0;
export default function AddTodo({handleAdd,handleEdit}) {
    const [text,setText] = useState("");
    const [check,setCheck]=useState(true);
    const [idJob,setIdJob]=useState("");
   
    const handleChangeInput=((e)=>{    
        setCheck(false) 
        setText(e.target.value);
    })
    let a;
    let id;
    if(Object.keys(handleEdit).length !=0 &&check){
         a= handleEdit.name;
        id=handleEdit.id;
        console.log(id);
        aa=id;
         
    }
    const add=(abc)=>{
        // console.log(abc);   
         handleAdd(abc);    
         setCheck(true);
         aa=0;
    }
    if(aa==0){
        console.log(555555);
        id=Math.floor(Math.random()*136);
    }else{
        id=aa;
    }
    
  return (
    <>
        <div className="button">
            <h3>Add to the todolist</h3>
            <div className="form-group">
                <input type="text" onChange={handleChangeInput} value={a?a:text}/>
                <button onClick={()=>add({name:text,id:id})}>ADD ITEM</button>
            </div>
        </div>
    </>
  );
}
