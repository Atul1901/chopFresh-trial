import React from "react";
// import "./OurCustomer.css";
import profilePicture from "../utils/photos/profilepicture.svg";

const CustomerCard = () => {
  const stars = <ion-icon name="star" style={{ color: "#ffc700" }}></ion-icon>;
  return (
    <>
      <div className="customer-information">
        <img
          src={profilePicture}
          alt="profile of the customer"
          className="profile-picture"
        />

        {/* <ion-icon name="star"></ion-icon> */}
        <div style={{ display: "flex", gap: "10px" }}>
          {[...Array(5)].map((_, index) => (
            <div key={index}>{stars}</div>
          ))}
        </div>
        <p className="customer-desc-text">
          Aenean luctus nulla sit amet nibh ultricies, sit amet gravida libero
          venenatis. Nunc eu consectetur nisl. Phasellus ligula quam, maximus in
          hendrerit in, sagittis nec nisi. Cras maxim. Etiam hendrerit nec ipsum
          eu dictum. Nulla facilisi. Ut quis laoreet arcu, nec vehicula eros.
          Praesent egestas gravida tincidunt. Etiam convallis.
        </p>
        <div className="customer-name">
          <p>Kathryn Murphy</p>
          <p>CEO & Founder XYZ Inc.</p>
        </div>
      </div>
    </>
  );
};

export default CustomerCard;
