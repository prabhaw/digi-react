import axios from "axios";

const fetchDataService = () =>
  axios.get("https://jsonplaceholder.typicode.com/posts");

export default fetchDataService;
