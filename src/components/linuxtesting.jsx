import React from "react";

const LinuxTesting = () => {
  return (
    <div>
      <h2 className="text-[23px] font-semibold mb-4 text-blue-600 hover:text-blue-900 text-center">
        Linux Testing
      </h2>
      <p className="text-black text-left font-[500] text-[17px]">
        You can try your Linux skills here.
        {/* You can expand this section with more information or interactive components as needed. */}
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
