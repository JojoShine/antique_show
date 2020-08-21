import axios from "axios";

export async function getChannels() {
    var resp = await axios.get("http://127.0.0.1:8080/antique/allType");
    console.log(resp.data);
    return resp.data
}