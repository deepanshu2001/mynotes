import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

function App() {
  const [notes,setNotes]=useState([]);
  
  function addItem(items){
    setNotes(prevValue=>{
      return [...prevValue,items]
    })
  }
  function handleDel(id){
    setNotes(prevValue=>{
       return prevValue.filter((noteitem,index)=>{
        return index!==id
       })
    })
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addItem} />
      {notes.map((note,index)=>{
         return (
          <Note key={index} id={index} title={note.title} content={note.content} onDEL={handleDel} />
         )
         
      })}
      
      <Footer />
    </div>
  );
}

export default App;
