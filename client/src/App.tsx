import { useState, createContext } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Trips from "./components/Trips/Trips";
import NewTripForm from "./components/NewTripForm/NewTripForm";
import TripDetail from "./components/TripDetail/TripDetail";
import UserRegistration from "./components/UserRegistration/UserRegistration";
import UserLogin from "./components/UserLogin/UserLogin";
import Data from "./components/Interface";
import UpdateTripForm from "./components/UpdateTripForm/UpdateTripForm";

export const contextProvider = createContext<{
  page: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
} | null>(null);

export const contextIdProvider = createContext<{
  id: string;
  setID: React.Dispatch<React.SetStateAction<string>>;
} | null>(null);

export const contextDataProvider = createContext<{
  dataContex: string;
  setDataContex: React.Dispatch<React.SetStateAction<string>>;
} | null>(null);

function App() {
  const [page, setPage] = useState("Home");
  const [dataContex, setDataContex] = useState("");
  const [id, setID] = useState("");
  return (
    <contextProvider.Provider value={{ page, setPage }}>
      <contextIdProvider.Provider value={{ id, setID }}>
        <contextDataProvider.Provider value={{ dataContex, setDataContex }}>
          <header className="nav-button">
            <div>
              {page === "Home" ? <Home /> : null}
              {page === "Trips" ? <Trips /> : null}
              {page === "TripDetail" ? <TripDetail /> : null}
              {page === "NewTripForm" ? <NewTripForm /> : null}
              {page === "UpdateTripForm" ? <UpdateTripForm /> : null}
              {page === "UserRegistration" ? <UserRegistration /> : null}
              {page === "UserLogin" ? <UserLogin /> : null}

              <h3 className="text-center p-5   ">
                Welcome to administration site
              </h3>
            </div>
          </header>
        </contextDataProvider.Provider>
      </contextIdProvider.Provider>
    </contextProvider.Provider>
  );
}
export default App;
