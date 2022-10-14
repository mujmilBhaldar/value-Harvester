import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from "react-router-dom"
import SideBar from './HeaderComponent/SideBar/SideBar';
import HeaderRoutes from './HeaderComponent/HeaderRoutes';
import DemoSidebar from './BodyComponent/DemoSidebar';
import DemoSteper from './BodyComponent/DemoSteper';

function App() {
  return (
    // <DemoSidebar/>
    // <DemoSteper />
    <BrowserRouter>
     <HeaderRoutes/>
     </BrowserRouter>
  );
}

export default App;
