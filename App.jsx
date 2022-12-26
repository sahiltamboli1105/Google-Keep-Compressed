import { useState } from "react";
import CreateNote from "./CreateNote";
import Note from "./Note";


const Main =()=>{
    const year = new Date().getFullYear();
    const [expand , setExpand] = useState(false);
    const p =()=>{
        setExpand(true);
    }
    const [input , setInput] = useState([]);
    const addNote =(p)=>{
        setInput((k)=>{
            // console.log(k);
            return[
                ...k,
                p,
            ];
        })
        // console.log(p);
    }
    const deleteNote=(index)=>{
        setInput((oldItems)=>{
            return(
                oldItems.filter((val , ind)=>{
                    return index!=ind;
                })
            );
        })
    }
    return(
        <>
            <div className="navBar">
                <img src="https://www.apkmirror.com/wp-content/uploads/2021/09/52/6143c49012dc5-384x384.png" alt="" />
                Google Keep
            </div>
            {!expand?
            <div className="inputDiv">
                <input type="text"placeholder="  Take a note..." className="inputBox" onClick={p} />
            </div>:
            <CreateNote funct = {addNote}/>
            }
            <div className="noteContainer">
                {input.map((val , index)=>{
                    return(<Note 
                    title={val.title}
                    content={val.content}
                    id={index}
                    funct={deleteNote}
                    />);
                })} 
            </div>
            <div className="footer">
                Copyright © {year}
            </div>
        </>
    );
}
export default Main;