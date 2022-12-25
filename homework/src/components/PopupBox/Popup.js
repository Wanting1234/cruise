import React, {useState} from "react";
import './Popup.css'
import {useDispatch, useSelector} from "react-redux";
import {setIsPopupShow} from "../../features/popupSlice";
import {selectAllAgents, updateAgent} from "../../features/agentsSlice";

export const Popup = () => {
    // todo: add a method to get agent by its id and find agent by agentId

    const [inputText, setInputText] = useState('');
    const agentId = useSelector((state) => state.agents.selectedAgent)
    const agents = useSelector(selectAllAgents)
    const position = useSelector((state) => state.popup.position)
    const left = position.x
    const top = position.y
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const content = e.target.value.trim();
        setInputText(content)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const agent = agents.find((agent) => agent.id === agentId)
        const addResources = inputText.split(',').map(item => item.trim()).filter(item => item !== '');
        if (agent && addResources.length > 0) {
            const updatedAgent = {
                ...agent,
                resources: agent.resources.concat(addResources)
            }
           await dispatch(updateAgent(updatedAgent)).unwrap()
        }
        dispatch(setIsPopupShow(false))
    };

    const handleCancel = (e) => {
        e.preventDefault();
        setInputText('')
        dispatch(setIsPopupShow(false))
    };

    return (
        <>
            <section className="popup-box" data-testid="popup-box" onClick={handleCancel}></section>
            <div className="add-input-content" id="add-input-content-res" style={{left, top}}>
                <span className="iconfont icon-close" onClick={handleCancel}></span>
                <form id="form">
                    <label>
                        Separate multiple resource name with commas
                        <br/>
                        <input className="add-input" type="text" placeholder="e.g.Chrome,Firefox"
                               onChange={handleChange}/>
                    </label>
                    <br/>
                    <button className="add-resources" onClick={handleSubmit}>Add Resources</button>
                    <button className="cancel" onClick={handleCancel}>Cancel</button>
                </form>
            </div>
        </>
    );
}
