import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-d9cbf.cloudfunctions.net/api", // THE API (cloud function) URL
});
//http://localhost:5001/clone-d9cbf/us-central1/api

export default instance;
