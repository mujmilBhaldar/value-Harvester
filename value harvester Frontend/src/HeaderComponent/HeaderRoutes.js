import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../BodyComponent/Dashboard/Dashboard";
import ItemPriceAdd from "../BodyComponent/ItemPrice/ItemPriceAdd";
import ItemPriceList from "../BodyComponent/ItemPrice/ItemPriceList";


// import Settings from "../BodyComponent/Settings/Settings";
// import TaskList from "../BodyComponent/TaskList/TaskList";
import NewUserRequest from "../BodyComponent/NewUserRequest/NewUserRequest";
import ApprovedUser from "../BodyComponent/ApprovedUsers/ApprovedUser";
import OpenTransication from "../BodyComponent/OpenTransication/OpenTransication";
import ClosedTransication from "../BodyComponent/ClosedTransication/ClosedTransication";
import PaymentReport from "../BodyComponent/PaymentReport/PaymentReport";
import CommodityMaster from "../BodyComponent/Master/CommodityMaster";
import CommodityMasterEntry from "../BodyComponent/Master/CommodityMasterEntry";
import TradeManagement from "../BodyComponent/TradeManagement/TradeManagement";
import UserManagementList from "../BodyComponent/UserManagement/UserManagementList";
import NavBar from "./NavBar/NavBar";

import AllNotification from "./NavBar/NavTabs/AllNotification";
import SideBar from "./SideBar/SideBar";
import UnitMaster from "../BodyComponent/Master/UnitMasterList";
import UnitMasterEntry from "../BodyComponent/Master/UnitMasterEntry";
import SettingMaster from "../BodyComponent/Settings/SettingsMasterList";
import SettingMasterEntry from "../BodyComponent/Settings/SettingMasterEntry";
import { PrivateRoute } from "./SideBar/PrivateRoute";
import Login from "../Login/Login";
import PasswordForm2 from "../Login/PasswordForm2";
import OtpForm from "../Login/OtpForm";
import WebUserMaster from "../BodyComponent/Master/WebUserMaster";

import WebUserMasterEntry from "../BodyComponent/Master/WebUserMasterEntry";





const HeaderRoutes = () => {
    return (
        <Routes>

            {/* <Route path="/" element={<> <NavBar /> </>} ></Route> */}
            <Route path="/" element={<Login />}></Route>

            {/* <Route path="/dashboard" element={<PrivateRoute />}> */}
            <Route path="/dashboard" element={<> <NavBar /> <Dashboard /> </>} ></Route>
            {/* </Route> */}

            <Route path="/otpForm" element={<> <NavBar /> <OtpForm /> </>} ></Route>
            <Route path="/passwordForm2" element={<> <NavBar /> <PasswordForm2 /> </>} ></Route>

            {/* <Route path="/dashboard" element={<><NavBar/> <Dashboard/> </>} ></Route> */}


            <Route path="/userManagement" element={<><NavBar /> <UserManagementList /> </>} ></Route>
            <Route path="/tradeManagement" element={<><NavBar /> <TradeManagement /> </>} ></Route>
            <Route path="/itemPricelist" element={<><NavBar /> <ItemPriceList /> </>} ></Route>

            <Route path="/itemPricelist/itemPriceAdd" element={<><NavBar /> <ItemPriceAdd /> </>} ></Route>

            {/* <Route path="/commodityMaster" element={<><NavBar /> <CommodityMaster /> </>} ></Route>
            <Route path="/commodityMaster/commodityMasterEntry" element={<><NavBar /> <CommodityMasterEntry /> </>} ></Route>
 */}

            {/* <Route path="/taskList" element={<><NavBar/> <TaskList/> </>} ></Route> */}
            <Route path="/newUserRequest" element={<><NavBar /> <NewUserRequest /> </>} ></Route>
            <Route path="/approvedUsers" element={<><NavBar /> <ApprovedUser /> </>} ></Route>
            <Route path="/openTransication" element={<><NavBar /> <OpenTransication /> </>} ></Route>
            <Route path="/closedTransication" element={<><NavBar /> <ClosedTransication /> </>} ></Route>

            {/* <Route path="/paymentReport" element={<><NavBar /> <PaymentReport /> </>} ></Route> */}
            {/* <Route path="/commodityMaster" element={<><NavBar /> <CommodityMaster /> </>} ></Route>
            <Route path="/commodityMaster/commodityMasterEntry" element={<><NavBar /> <CommodityMasterEntry /> </>} ></Route> */}

            <Route path="/unitMaster" element={<><NavBar /> <UnitMaster /> </>} ></Route>
            <Route path="/unitMaster/unitMasterEntry" element={<><NavBar /> <UnitMasterEntry /> </>} ></Route>

            <Route path="/WebUserMaster" element={<><NavBar /> <WebUserMaster /> </>} ></Route>
            <Route path="/WebUserMaster/webUserMasterEntry" element={<><NavBar /> <WebUserMasterEntry /> </>} ></Route>


            
            
            <Route path="/settingMaster" element={<><NavBar /> <SettingMaster /> </>} ></Route>
            <Route path="/settingMaster/entry" element={<><NavBar /> <SettingMasterEntry /> </>} ></Route>
            <Route path="/notification" element={<><NavBar /> <AllNotification /> </>} ></Route>





            <Route path="/commodityMaster" element={<> <NavBar /> <CommodityMaster /> </>} ></Route>
            <Route path="/commodityMaster/entry" element={<><NavBar /> <CommodityMasterEntry /> </>} ></Route>
            {/* <Route path="/commodityMaster/entry" element={<> <NavBar /> <CommodityMasterEntry /> </>} ></Route> */}
            <Route path="/commodityMaster/:id" element={<><NavBar /><CommodityMasterEntry /></>}></Route>



            
        </Routes>
    )
}
export default HeaderRoutes;