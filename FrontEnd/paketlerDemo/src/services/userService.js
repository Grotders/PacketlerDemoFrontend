import axios from "axios";

export default class PacketService{
    getPackets() {
        return axios.get("http://localhost:8080/api/users/getPackets");
    }

    login(user) {
        return axios.post("http://localhost:8080/api/users/login", {
            email: user.email,
            password: user.password
        });
    }
}