import axios from "axios";

export default axios.create({
  baseURL: "https://8aeba8904f7c.ngrok.io",
  headers: {
    "Content-type": "application/json"
  }
});
