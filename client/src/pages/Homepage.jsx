import React from "react";
import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const Homepage = () => {
  return (
    <MainLayout>
      <div className="bg-light p-5 mt-4 rounded-3">
        <h1>Welcome message</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas est
          illum odit excepturi ut beatae, dolore quos expedita quis ratione cum
          suscipit dolor fugiat delectus exercitationem similique repellat eum
          magni.
        </p>
        <Link to="/pos" className="btn btn-primary">
          Click here to sell products
        </Link>
      </div>
    </MainLayout>
  );
};

export default Homepage;
