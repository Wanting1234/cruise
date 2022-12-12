import { BrowserRouter, Route, Routes } from "react-router-dom";
import {NavigationPage} from "./components/LeftNavigation/NavigationPage";
import {Home} from "./components/Home/Home";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/dashboard" element={<NavigationPage match={'dashboard'} />}/>
                <Route path="/agent" element={<NavigationPage match={'agent'} />}/>
                <Route path="/my cruise" element={<NavigationPage match={'my cruise'} />}/>
                <Route path="/help" element={<NavigationPage match={'help'} />}/>
                <Route path="/Profile" element={<NavigationPage match={'Profile'} />} />
                <Route path="/Sign Out" element={<NavigationPage match={'Sign Out'} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
