import React, { useEffect } from "react";
import axios from "axios";
import { auth } from "../firebase"; // Import Firebase authentication module

const LinuxTesting = () => {
  useEffect(() => {
    // Apply token for authenticated requests
    auth.currentUser.getIdToken(/* forceRefresh */ true)
      .then((token) => {
        // Apply token for requests
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      })
      .catch((error) => {
        console.error('Error getting token:', error);
      });
  }, []);

  return (
    <div>
      <h2 className="text-[23px] font-semibold mb-4 text-blue-600 hover:text-blue-900 text-center">
        Linux Testing
      </h2>
      <p className="text-black text-left font-[500] text-[17px]">
        You can try your Linux skills here.
      </p>
      <div className="mt-4">
        <iframe
          src="http://115.113.39.74:65531/#/"
          title="Guacamole Terminal"
          width="100%"
          height="400px"
          style={{ border: "none" }}
        ></iframe>
      </div>
    </div>
  );
};

export default LinuxTesting;
