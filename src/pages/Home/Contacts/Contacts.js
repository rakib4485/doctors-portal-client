import React from "react";
import appointment from "../../../assets/images/appointment.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const Contacts = () => {
  return (
    <section className="my-6 py-6" style={{
        background: `url(${appointment})`
    }}>
      <div className="text-center">
        <h4 className="text-xl text-primary font-bold">Contact</h4>
        <h2 className="text-3xl text-white">Stay connected with us</h2>
      </div>
      <form className="card-body md:w-1/2 mx-auto">
        <div className="form-control">
          <input
            type="text"
            placeholder="Email Address"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <input
            type="text"
            placeholder="Subject"
            className="input input-bordered"
          />
          
        </div>
        <div className="form-control">
          <input
            type="text"
            placeholder="Your message"
            className="textarea textarea-bordered h-24"
          />
          
        </div>
        <div className="text-center mt-6">
          <PrimaryButton>Submit</PrimaryButton>
        </div>
      </form>
    </section>
  );
};

export default Contacts;
