import React, {useState} from "react";
import './Popup.css'

export const Popup = ({toggle,addResources, id}) => {
    const [inputText, setInputText] = useState('');

    const handleChange = (e) => {
        const content = e.target.value.trim();
        setInputText(content)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputText.length > 0) {
            addResources(id, inputText)
        }
        toggle();
    };

    const handleCancel = (e) => {
        e.preventDefault();
        setInputText('')
        toggle();
    };

    return (
        <div className="add-input-content">
            <span className="iconfont icon-close" ></span>
            <form id="form">
                <label>
                    Separate multiple resource name with commas
                    <br/>
                    <input className="add-input" type="text" placeholder="e.g.Chrome,Firefox" onChange={handleChange}/>
                </label>
                <br/>
                <button className="add-resources" onClick={handleSubmit}>Add Resources</button>
                <button className="cancel" onClick={handleCancel}>Cancel</button>
            </form>
        </div>
    );
}
