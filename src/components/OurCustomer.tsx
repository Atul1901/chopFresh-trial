import React from "react";
import "./OurCustomer.css";
import customerBackground from "../utils/photos/customerbackground.svg";

import CustomerCard from "./CustomerCard";

const OurCustomer = () => {
  return (
    <>
      <div className="our-customers">
        <div className="our-customer">
          <div className="our-customer-head">
            <p className="customer-heading">Our Happy Customers</p>
            <p className="customer-text">
              Etiam hendrerit nec ipsum eu dictum. Nulla facilisi. Ut quis
              laoreet arcu, nec vehicula eros. Praesent egestas gravida ti
            </p>
          </div>
        </div>
        <CustomerCard />
        <div className="customer-background">
          <img
            src={customerBackground}
            alt="decorative background for customer section"
            style={{ width: "500px" }}
          ></img>
        </div>
      </div>
    </>
  );
};

export default OurCustomer;
