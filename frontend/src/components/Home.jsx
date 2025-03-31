// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { API_BASE_URL } from "../api";

// const Home = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios.get(`${API_BASE_URL}/api/data`)
//       .then(response => setData(response.data))
//       .catch(error => console.error("Error fetching data:", error));
//   }, []);

//   return (
//     <div>
//       <h1>Data from Backend:</h1>
//       <pre>{JSON.stringify(data, null, 2)}</pre>
//     </div>
//   );
// };

// export default Home;
import React, { useState } from "react";
import axios from "axios";

const Home = () => {
    const [response, setResponse] = useState("");

    const handleAskAI = async () => {
        try {
            const res = await axios.post("http://localhost:5000/api/ai", { message: "Hello from Frontend" });
            setResponse(res.data.response);
        } catch (error) {
            setResponse("Error fetching AI response");
        }
    };

    return (
        <div>
            <button onClick={handleAskAI}>Ask AI</button>
            <p>Response: {response}</p>
        </div>
    );
};

export default Home;


