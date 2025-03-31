import { useState, useEffect } from "react";

function ReferralList({ referralCode }) {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchReferredUsers = async () => {
            if (!referralCode) {
                alert("Referral code is missing. Please login again.");
                return;
            }

            const token = localStorage.getItem("token");
            if (!token) {
                alert("Please login first.");
                return;
            }

            try {
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
            } catch (error) {
                console.error("Error fetching referrals:", error);
                alert("Failed to fetch referrals. Try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchReferredUsers();
    }, [referralCode]);

    return (
        <div>
            <h2>Referred Users</h2>
            {loading ? <p>Loading...</p> : (
                users.length > 0 ? (
                    <ul>
                        {users.map((user) => (
                            <li key={user._id}>{user.name} ({user.email})</li>
                        ))}
                    </ul>
                ) : (
                    <p>No referrals found.</p>
                )
            )}
        </div>
    );
}

export default ReferralList;
