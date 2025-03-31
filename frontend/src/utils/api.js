export async function loginUser(email, password) {
    const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    });

    return await response.json();
}

export async function fetchReferredUsers(referralCode) {
    const token = localStorage.getItem("token");
    if (!token) return { error: "Not logged in" };

    const response = await fetch(`http://localhost:5000/api/referral/users/${referralCode}`, {
        method: "GET",
        headers: { "Authorization": `Bearer ${token}`, "Content-Type": "application/json" },
    });

    return await response.json();
}
