import axios from "axios";

let localhostURL = "http://localhost:8080";
let apiURL = "/api/customers";
//let herakuURL = "https://packet-demo.herokuapp.com/";

export default class UserService{
    getPackets() {
        return axios.get(localhostURL + apiURL + "/getPackets");
    }

    login(user) {
        return axios.post(localhostURL +  apiURL + "/login", {
            email: user.email,
            password: user.password
        });
    }
}
