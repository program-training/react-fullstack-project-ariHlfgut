import { useContext, useEffect, useState } from "react";
import { contextProvider } from "../../App";
import { contextIdProvider } from "../../App";
import { contextDataProvider } from "../../App";

import axios from "axios";
import Data from "../Interface";
import { animated, useSpring } from "@react-spring/web";
type Props = {};

export default function Trips({}: Props) {
  const [styles, api] = useSpring(
    () => ({
      x: 0,
      rotateZ: 0,
    }),
    []
  );

  const handleClick = () => {
    api.start({
      to: [
        { x: 200, rotateZ: 360 },
        { x: 0, rotateZ: 0 },
      ],
    });
  };

  const context = useContext(contextProvider);
  const contextId = useContext(contextIdProvider);
  const contextData = useContext(contextDataProvider);

  const home = () => {
    context!.setPage("Home");
  };
  const newTripForm = () => {
    context!.setPage("NewTripForm");
  };
  const tripDetail = () => {
    context!.setPage("TripDetail");
  };
  const trips = () => {
    context!.setPage("Trips");
  };
  const UpdateTripForm = () => {
    context!.setPage("UpdateTripForm");
  };
  const [dataContex, setDataContex] = useState<Data>();
  const [data, setData] = useState<Data[]>([]);
  const [id, setId] = useState<string>("");

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get<Data[]>(
        "http://localhost:3000/api/trips"
      );
      setData(response.data);
    };
    getData();
  }, []);
  //ךזכור להוסיף שיתרנדר כל פעם ולא רק בראשונה

  return (
    <div>
      <div>
        <button
          className="spring-box bg-info    "
          onClick={handleClick}
          style={{
            ...styles,
            cursor: "pointer",
          }}
        >
          Click Me animation!
        </button>

        <button onClick={home}>Home</button>
        <button onClick={newTripForm}>New Trip Form</button>
      </div>
      <div className="row">
        {data.map((item) => (
          <animated.div
            onClick={() => {
              {
                handleClick;
              }
              context!.setPage("TripDetail");
              contextId!.setID(item.id);
            }}
            className="card col-sm-15 m-5 p-0 spring-box "
            style={{ width: "18rem", ...styles, cursor: "pointer" }}
          >
            <img
              src={item.image}
              className="card-img h-75 p-0 "
              alt="..."
            ></img>
            <div className="card-body">
              <h4 className="card-text text-center p-3 ">{item.name}</h4>
              <p className="card-text text-center">
                start Date: {item.startDate}
                <br />
                end Date: {item.endDate}
              </p>
            </div>
            <div>
              <button
                className="btn btn-outline-danger m-3"
                onClick={(e) => {
                  e.stopPropagation();
                  {
                    tripDetail;
                  }
                  contextId!.setID(item.id);
                }}
              >
                <span className="material-symbols-outlined">delete</span>
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={(e) => {
                  e.stopPropagation();
                  {
                    UpdateTripForm;
                  }
                  contextId!.setID(item.id);
                  // contextData!.setDataContex(item);
                }}
              >
                <span className="material-symbols-outlined">edit</span>
              </button>
            </div>
          </animated.div>
        ))}
      </div>
    </div>
  );
}
