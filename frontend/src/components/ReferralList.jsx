import { useState, useEffect } from "react";

function ReferralList({ referralCode }) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchReferredUsers = async () => {
            const token = localStorage.getItem("token");
            if (!token) {
                alert("Please login first.");
                return;
            }

            const response = await fetch(`http://localhost:5000/api/referral/users/${referralCode}`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });

            const data = await response.json();
            if (response.ok) {
                setUsers(data);
            } else {
                alert(data.message);
            }
        };

        fetchReferredUsers();
    }, [referralCode]);

    return (
        <div>
            <h2>Referred Users</h2>
            <ul>
                {users.map((user) => (
                    <li key={user._id}>{user.name} ({user.email})</li>
                ))}
            </ul>
        </div>
    );
}

export default ReferralList;
