import React, { useState } from "react";
import "./style.css";
import AddTodo from "./AddTodo";
import Todo from "./Todo";

export default function TodoList() {
  const [todo,setTodo] = useState([
   
  ]);

  const [text1, setText1] = useState("")

  //them todo
  const handleAdd=(text)=>{
    if (text) {
     
      let index= todo.findIndex((item)=>{
        return item.id==text.id
      })
     
      if(index!=-1){
        todo.splice(index,1,text);
        setTodo([...todo]);
        return
      }else{
        setTodo([...todo,text])
      }
    }
  }

  //Xoa
  const handleDelete=(id)=>{
    let isconfirm = confirm("Bạn có chắc chắn muốn xoá ?")
    if (isconfirm) {
        const result=todo.filter((e)=>{
            return e.id != id
        })
        setTodo(result)     
    }
  }

  //chuyen doi complete
  const handleComplete=(id)=>{
    let index=todo.findIndex((e)=>{
        return e.id == id
    })
    let result = [...todo]
    result[index].complete = !result[index].complete
    setTodo(result)
  }

  //Edit
  
  const handleEdit=(id)=>{
    let index=todo.find((e)=>{
        return e.id == id
    })
  
         setText1(index)
  }


  return (
    <>
      <div className="container">
        <div className="top">
          <h2>Todo List</h2>
          <p>Get! thing done. one item at a item</p>
        </div>


        {/* todo */}
        <Todo todo={todo} 
              handleDelete={handleDelete} 
              handleComplete={handleComplete}
              handleEdit={handleEdit}
        ></Todo>


        <div className="center">
          <p>Move done items at the end?</p>
        </div>

            {/* add todo */}
          <AddTodo handleAdd={handleAdd} handleEdit={text1}></AddTodo>
      </div>
    </>
  );
}
