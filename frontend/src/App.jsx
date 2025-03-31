import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import ReferralList from "./components/ReferralList.jsx";

function App() {
    const [user, setUser] = useState(null);

    // Load user from localStorage on initial render
    useEffect(() => {
        try {
            const storedUser = localStorage.getItem("user");
            console.log("Stored user in localStorage:", storedUser); // Debugging

            if (storedUser) {
                setUser(JSON.parse(storedUser));
            } else {
                setUser(null);
            }
        } catch (error) {
            console.error("Error parsing user from localStorage:", error);
            setUser(null);
        }
    }, []);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home user={user} setUser={setUser} />} />
                <Route path="/login" element={<Login setUser={setUser} />} />
                <Route path="/signup" element={<Signup />} />
                <Route 
                    path="/referrals" 
                    element={user ? <ReferralList referralCode={user.referralCode} /> : <Navigate to="/login" />} 
                />
            </Routes>
        </Router>
    );
}

export default App;

