import axios from "axios";

let localhostURL = "http://localhost:8080";
let apiURL = "/api/admins";

export default class AdminService{
    addPacket(packet) {
        return axios.post(localhostURL + apiURL + "/addPacket?adminFullName=Admin/Oguzcan", 
            {
              data: packet.data,
               minutes: packet.minutes,
               packetId: 0,
               price: packet.price,
               sms: packet.sms,
               title: packet.title
              })
    }

    getPackets() {
        return axios.get(localhostURL + apiURL + "/getAllPackets");
    }
    getPacketById(packetId) {
        return axios.get(localhostURL + apiURL + "/getByIdPacket?packetId="+packetId)
    }

    updatePacket(packet) {
        return axios.post(localhostURL + apiURL + "/updatePacket?id=" + packet.packetId, 
        {
            data: packet.data,
            minutes: packet.minutes,
            packetId: 0,
            price: packet.price,
            sms: packet.sms,
            title: packet.title
        });
    }
    
    deletePacket(packetId) {
        return axios.post(localhostURL + apiURL + "/deleteByPacketId?packetId=" + 
        packetId)
    }



    addUser(user) {
        return axios.post(localhostURL + apiURL + "/addCustomer?adminFullName=Admin/Oguzcan", {
            birthdate: user.birthdate,
            email: user.email,
            firstname: user.firstname,
            lastname: user.lastname,
            password: user.password
        })
    }
    getUsers() {
        return axios.get(localhostURL + apiURL + "/getAllCustomers");
    }
    getUsersById(userId) {
        return axios.get(localhostURL + apiURL + "/getByIdCustomer?userId="+userId)
    }
    updateUser(user) {
        console.log(user);
        return axios.post(localhostURL + apiURL + "/updateCustomer", {
            address: user.address,
            birthdate: user.birthdate,
            email: user.email,
            firstname: user.firstname,
            lastname: user.lastname,
            password: user.password,
            userId: user.userId
        })
    }

    deleteUser(userId) {
        return axios.post(localhostURL + apiURL + "/deleteCustomerByUserId?userId=" +
        userId)
    }
    
}
