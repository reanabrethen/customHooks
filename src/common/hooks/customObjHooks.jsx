import { useState } from 'react'


    //cleaner syntax, not as much flexibility
function CustomHooksUsingObjects(initialState){
    const [value, setValue] = useState(initialState)  //regular useState hook --> using arr to destructure
        
    function onChange(e){
        setValue(e.target.value)
        }

        function clearInput(){
        setValue("")
        }

        function showValue(){
        console.log(value)
        }

        function greetUser(){
            alert("Hi, " + value)
          }
        
        return {value, onChange, clearInput, showValue, greetUser}  //customHooks export using an obj
    }
  

    export default CustomHooksUsingObjects