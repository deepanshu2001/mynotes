import React, { useState } from "react";

function CreateArea(props) {
  const [items,setItems]=useState({
    title:"",
    content:""
  })
  function handleChange(event){
    const name=event.target.name;
    const value=event.target.value;
    setItems(prevValue=>{
      return {
        ...prevValue,
        [name]:value
      }
    })
  }
  function handlesubmit(event){
     props.onAdd(items);
     setItems({
      title:"",
      content:""
     })
     event.preventDefault()
  }
  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" value={items.title} />
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." value={items.content} rows="3" />
        <button onClick={handlesubmit}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
