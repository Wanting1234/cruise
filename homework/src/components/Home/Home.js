import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import {Popup} from "../PopupBox/Popup";
import {useSelector} from "react-redux";


export const Home = () => {
    const popupState = useSelector((state) => state.popup)
    return(
        <div className="App">
            <Header/>
            <Main/>
            {popupState && <Popup />}
            <Footer />
        </div>
    );
}
