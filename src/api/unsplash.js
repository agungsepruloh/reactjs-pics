import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID c332bba67dbd7f86a10dee19b117739d32ad277d082df81867845944e0209e8f"
  }
});
