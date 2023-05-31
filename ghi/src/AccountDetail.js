import { useState, useEffect } from "react";
import useToken from "@galvanize-inc/jwtdown-for-react";

function AccountDetail() {
  const [accountData, setAccountData] = useState("");
  const { fetchWithCookie } = useToken();

  const handleFetch = async () => {
    const response = await fetchWithCookie(
      `${process.env.REACT_APP_PASSPORT_PALS_API_HOST}/token`
    );
    console.log(response)
        setAccountData(response.account);
  };
  useEffect(() =>{
    handleFetch();
  }, []);

  return (
    <>
      <div>
        <h1>Welcome, {accountData.full_name}!</h1>
      </div>
      <div>
        <h2>Your Hosted Events</h2>
        <p>{accountData.language}</p>
      </div>
      <div>
        <h2>Your Upcoming Events</h2>
      </div>
    </>
  );
};

export default AccountDetail;
