import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { } from "@fortawesome/fontawesome-svg-core";
import {faTrash} from "@fortawesome/free-solid-svg-icons"

const Main =(props)=>{
    const deleteNote=()=>{
        // console.log(props.id);
        props.funct(props.id);
    }
    return(
        <div className="note">
            <h3 className="margin">{props.title}</h3>
            <textarea  className="margin">{props.content}</textarea>   
            <button className="noteDeleteButton" onClick={deleteNote}><FontAwesomeIcon icon={faTrash}/></button>       
        </div>
    );
}
export default Main;