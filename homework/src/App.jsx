import { useSelector } from 'react-redux';
import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { Popup } from './components/PopupBox/Popup';

function App() {
  const popupState = useSelector((state) => state.popup.isPopupShow);
  return (
    <div className="App">
      <Header />
      <Main />
      {popupState && <Popup />}
      <Footer />
    </div>
  );
}

export default App;
