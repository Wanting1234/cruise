import React, {useState} from "react";

export const Popup = ({toggle, addResources, id}) => {
    const handleClick = () => {
        toggle();
    }

    const [inputText, setInputText] = useState('');

    const handleChange = (e) => {
        const content = e.target.value.trim();
        setInputText(content)
    };

    const handleSubmit = () => {
        if (inputText.length > 0) {
            addResources(id, inputText)
        }
    };

    return (
        <div className="add-input-content">
            <span className="iconfont icon-close" onClick={handleClick}></span>
            <form>
                <label>
                    Separate multiple resource name with commas
                    <br/>
                    <input className="add-input" type="text" placeholder="e.g.Chrome,Firefox" onChange={handleChange}/>
                </label>
                <br/>
                <button className="add-resources" onClick={handleSubmit}>Add Resources</button>
                <button className="cancel">Cancel</button>
            </form>
        </div>
    );
}
