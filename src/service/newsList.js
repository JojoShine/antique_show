import axios from "axios";

export async function getNews() {
    var resp = await axios.get("http://127.0.0.1:8080/antique/allNews");
    console.log(resp.data);
    return resp.data
}