import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { } from "@fortawesome/fontawesome-svg-core";
import {faPlus} from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";
const Main =(props)=>{
    
    const [input , setInput] = useState(
        {
            title:"",
            content:"",
        }
    );
    const Input =(k)=>{
        const val = k.target.value;
        const name = k.target.name;
        // console.log(val);
        setInput((x)=>{
            // console.log(x);
            return{   
                ...x,
                [name] : val,
            };

        })
    }
    const addEvent =()=>{
        if(input.title == "" || input.content == ""){
            alert("Both Fields Should Be Filled");
        }else{
            props.funct(input);
            setInput({
                title:"",
                content:"",
            });
        }
        // setInput.content("");
    };
    // console.log(props.funct());
    return(
            <div className="createNote">
                <div className="afterClick">
                    <input type="text" className="input1" value={input.title} onChange={Input} name="title" placeholder="  Title"/>
                    <input type="text" className="input2" value={input.content} onChange={Input} name="content" placeholder="  Write Note Here"/>  
                    <button className="button" onClick={addEvent}><FontAwesomeIcon icon={faPlus}/></button>                     
                </div>
            </div>
    );    
}
export default Main;