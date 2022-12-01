import React from "react";


export const Popup = ({toggle}) => {
    const handleClick = () => {
        toggle();
    }

    return (
        <div className="add-input-content">
            <span className="iconfont icon-close" onClick={handleClick}></span>
            <form>
                <label>
                    Separate multiple resource name with commas
                    <br/>
                    <input className="add-input" type="text" placeholder="e.g.Chrome,Firefox"/>
                </label>
                <br/>
                <button className="add-resources">Add Resources</button>
                <button className="cancel">Cancel</button>
            </form>
        </div>
    );
}
