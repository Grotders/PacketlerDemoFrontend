import axios from "axios";

export default class PacketService{
    addPacket(packet) {
        return axios.post("http://localhost:8080/api/admins/addPacket", 
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
        return axios.get("http://localhost:8080/api/admins/getAllPackets");
    }
    getPacketById(packetId) {
        return axios.get("http://localhost:8080/api/admins/getByIdPacket?packetId="+packetId)
    }

    updatePacket(packet) {
        return axios.post("http://localhost:8080/api/admins/updatePacket?id=" + packet.packetId, 
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
        return axios.post("http://localhost:8080/api/admins/deleteByPacketId?packetId=" + 
        packetId)
    }



    addUser(user) {
        return axios.post("http://localhost:8080/api/admins/addUsers", {
            birthdate: user.birthdate,
            email: user.email,
            firstname: user.firstname,
            lastname: user.lastname,
            password: user.password
        })
    }
    getUsers() {
        return axios.get("http://localhost:8080/api/admins/getAllUsers");
    }
    getUsersById(userId) {
        return axios.get("http://localhost:8080/api/admins/getByIdUser?userId="+userId)
    }
    updateUser(user) {
        return axios.post("http://localhost:8080/api/admins/updateUser", {
            birthdate: user.birthdate,
            email: user.email,
            firstname: user.firstname,
            lastname: user.lastname,
            userId: user.userId,
            packetId: user.userId,
            password: user.password,
            packetName: user.packetName
        })
    }

    deleteUser(userId) {
        return axios.post("http://localhost:8080/api/admins/deleteByUserId?userId=" +
        userId)
    }
    
}