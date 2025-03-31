// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Login({ setUser }) {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const navigate = useNavigate();

//     const handleLogin = async () => {
//         if (!email || !password) {
//             alert("Please enter both email and password.");
//             return;
//         }

//         try {
//             const response = await fetch("http://localhost:5000/api/auth/login", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ email, password }),
//             });

//             const data = await response.json();

//             if (response.ok) {
//                 localStorage.setItem("token", data.token);
//                 localStorage.setItem("user", JSON.stringify(data.user)); // Store user data
//                 setUser(data.user); // Update user state in App.jsx
//                 alert("Login successful!");
//                 navigate("/referrals"); // Redirect to referrals page
//             } else {
//                 alert(data.message || "Login failed. Please try again.");
//             }
//         } catch (error) {
//             console.error("Login error:", error);
//             alert("Something went wrong. Please try again later.");
//         }
//     };

//     return (
//         <div>
//             <h2>Login</h2>
//             <input 
//                 type="email" 
//                 placeholder="Email" 
//                 value={email} 
//                 onChange={(e) => setEmail(e.target.value)} 
//                 required 
//             />
//             <input 
//                 type="password" 
//                 placeholder="Password" 
//                 value={password} 
//                 onChange={(e) => setPassword(e.target.value)} 
//                 required 
//             />
//             <button onClick={handleLogin}>Login</button>
//         </div>
//     );
// }

// export default Login;

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setUser }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); // For redirecting

    const handleLogin = (e) => {
        e.preventDefault();
        
        // Simulating user login (Replace this with actual API call)
        const fakeUser = { email, referralCode: "ABC123" };
        
        setUser(fakeUser); // Update parent state
        localStorage.setItem("user", JSON.stringify(fakeUser)); // Persist user
        navigate("/"); // Redirect to home page
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;

