import React from "react";
import treatment from '../../../assets/images/treatment.png'
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const Exceptional = () => {
  return (
    <div className="card lg:card-side mt-12 shadow-xl">
      <figure>
        <img src={treatment} alt="" className="md:w-1/2 rounded-lg" />
      </figure>
      <div className="card-body md:w-1/2">
        <h2 className="card-title text-5xl font-bold">Exceptional Dental Care, on Your Terms</h2>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
        <div className="card-actions">
          <PrimaryButton>Getting Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Exceptional;
