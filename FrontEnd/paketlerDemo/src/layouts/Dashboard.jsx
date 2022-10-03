import React from "react";
import Login from "../pages/Login";

import {Route, Routes} from 'react-router-dom';
import Register from "../pages/Register";
import AdminPackets from "../pages/admin/AdminPackets";
import AdminUsers from "../pages/admin/AdminUsers";
import PacketDetail from "../pages/admin/AdminPacketDetail";
import PacketAdd from "../pages/admin/AdminAddPacket";
import AdminPage from "../pages/admin/AdminPage";
import UserPacketsPage from "../pages/user/UserPacketsPage";
import UserAdd from "../pages/admin/AdminAddUser";
import AdminUserDetail from "../pages/admin/AdminUserDetail";


export default function Dashboard() {
  

  return (
    <div>
    
    <Routes >
    
    <Route exact path='/' element={<UserPacketsPage />}/>
    <Route exact path='/packets' element={<UserPacketsPage />}/>
    <Route exact path='/login' element={<Login />}/>
        
    <Route exact path='/register' element={<Register />}/>

    <Route exact path='/admin' element={<AdminPage />}/>
    <Route exact path='/admin/packets' element={<AdminPackets />}/>
    <Route path='/admin/packet/:packetId' element={<PacketDetail />}/>
    <Route path='/admin/addPacket' element={<PacketAdd />}/>

    <Route exact path="/admin/users" element={<AdminUsers />} />
    <Route path="/admin/user/:userId" element={<AdminUserDetail />} />
    <Route path='/admin/addUser' element={<UserAdd />}/>

    </Routes>
      
    </div>
  );
}


