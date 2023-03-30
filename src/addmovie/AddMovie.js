import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid'

const AddMovie = ({addNewMovie}) => {
const [inputs, setInputs]=useState()

const handleChange=(e)=>{
setInputs({...inputs ,[e.target.name] : e.target.value})
}
const handleAdd=()=>{
    addNewMovie({...inputs,id:uuidv4()})
}
  return (
    <div>
    <button onClick={handleAdd}> AddNewMovie   </button>
    <input type="text" placeholder='image' name='image' onChange={handleChange}></input>
    <input type="text" placeholder='title' name='title' onChange={handleChange}></input>
    <input type="text" placeholder='description' name='description' onChange={handleChange}></input>
    <input type="number" placeholder='rate' name='rate' onChange={handleChange}></input>
    </div>
  )
}

export default AddMovie