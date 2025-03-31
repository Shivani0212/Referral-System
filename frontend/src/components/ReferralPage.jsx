import React, { useState } from "react";

const ReferralPage = () => {
  const [referralLink, setReferralLink] = useState("https://example.com/referral?code=12345");

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Your Referral Page</h1>
      <p className="mt-2">Share your referral link:</p>
      <input
        type="text"
        value={referralLink}
        readOnly
        className="border p-2 w-full mt-2"
      />
    </div>
  );
};

export default ReferralPage;
