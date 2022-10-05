import axios from "axios";

//let localhostURL = "http://localhost:8080";
let herakuURL = "https://packet-demo.herokuapp.com/";

export default class PacketService{
    getPackets() {
        return axios.get(herakuURL + "/api/users/getPackets");
    }

    login(user) {
        return axios.post(herakuURL + "/api/users/login", {
            email: user.email,
            password: user.password
        });
    }
}
