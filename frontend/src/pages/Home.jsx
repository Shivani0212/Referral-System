import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = ({ user, setUser }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        setUser(null);
        navigate("/login");
    };

    return (
        <div>
            <h1>Welcome to Our Referral System</h1>
            {!user ? (
                <>
                    <Link to="/signup"><button>Signup</button></Link>
                    <Link to="/login"><button>Login</button></Link>
                </>
            ) : (
                <>
                    <Link to="/referrals"><button>View Referrals</button></Link>
                    <button onClick={handleLogout}>Logout</button>
                </>
            )}
        </div>
    );
};

export default Home;
