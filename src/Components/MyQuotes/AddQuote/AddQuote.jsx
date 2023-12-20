import React,{useState} from "react";
import { useDispatch,useSelector } from "react-redux";
import uuid from 'react-uuid';
import './AddQuote.css';
import harryPotterImage from '../hp.jpg';
function AddQuote(){
    const dispatch = useDispatch()
    const quote = useSelector(state => state.quote)
    const [authot,setAuthor] = useState("");
    const [text,setText] = useState("");

    const addQuote=()=>{
        const sh ={
            id: uuid(),
            author:authot,
            text: text
        }
        setText("")
        setAuthor("")
        dispatch({type:"ADD_QUOTE",id:sh.id,author:sh.author,payload:sh.text})
    }


    return (
        <div>
            <div className='about-container'>
                <h1 className=''>About Harry Potter API Website</h1>
                <div>
                    <img src={harryPotterImage} alt="Harry Potter" className="about_image" />

                </div>
                <p>This website is dedicated to providing information about characters from the Harry Potter series using the Harry Potter API. You can explore various characters, view their details, and learn more about the magical world created by J.K. Rowling.</p>
                <p>Features of this website:</p>
                <ul>
                    <li>Displaying a list of characters from the Harry Potter universe.</li>
                    <li>Showing detailed information about each character, including their name, house, role, wand details, and more.</li>
                    <li>Navigating between different sections, such as staff, Gryffindor, Hufflepuff, and more.</li>
                    <li>Providing a modal window to open and close the main screen.</li>
                    <li>Offering a button to navigate back to the previous page.</li>
                </ul>
                <p>Enjoy exploring the magical world of Harry Potter!</p>
            </div>

            <div className="add_quote">
                <div className="quote_bl">
                    <input type="text" className="inp_ath" placeholder="Author" onChange={(e)=>setAuthor(e.target.value)}>

                    </input>
                    <textarea onChange={(e)=>setText(e.target.value)} className="quote" type="text" placeholder="Quote">

                    </textarea>
                    <button className="add_but" onClick={addQuote}>
                        Add
                    </button>
                </div>

            </div>
        </div>
    )
}

export default AddQuote;