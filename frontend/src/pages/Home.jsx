import Login from "../components/Login.jsx";
import ReferralList from "../components/ReferralList.jsx";

function Home() {
    return (
        <div>
            <h1>Welcome to Our Referral System</h1>
            <Login />
            <ReferralList referralCode="5m5zbn" />
        </div>
    );
}

export default Home;
