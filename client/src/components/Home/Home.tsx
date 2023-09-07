import React, { useEffect, useState, useContext } from "react";
import { contextProvider } from "../../App";
import "./Home.css";
type Props = {};

function Home({}: Props) {
  const context = useContext(contextProvider);

  const allTrips = () => {
    context!.setPage("Trips");
  };
  const singUp = () => {
    context!.setPage("UserRegistration");
  };

  const logIn = () => {
    context!.setPage("UserLogin");
  };
  return (
    <div className=" navbar navbar-expand-lg bg-body-tertiary p-2  rounded-pill  bg-success-subtle">
      <button onClick={allTrips} className="bg-success-subtle">
        All trips
      </button>
      <button onClick={singUp} className="bg-success-subtle">
        Sing up
      </button>
      <button onClick={logIn} className="bg-success-subtle">
        Log in
      </button>
    </div>
  );
}
export default Home;
