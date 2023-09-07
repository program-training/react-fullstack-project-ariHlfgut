import { useContext, useState, useEffect } from "react";
import { contextProvider } from "../../App";
import { contextIdProvider } from "../../App";

import axios from "axios";
import Data from "../Interface";

type Props = {};
export default function TripDetail({}: Props) {
  const context = useContext(contextProvider);
  const trips = () => {
    context!.setPage("Trips");
  };
  const contextId = useContext(contextIdProvider);
  const [data, setData] = useState<Data | undefined>();
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get<Data | undefined>(
        `http://localhost:3000/api/trips/${contextId?.id}`
      );

      setData(response.data);
    };
    getData();
  }, []);

  return (
    <div>
      <button onClick={trips}>All Trips</button>
      <div className="card col-sm-15 m-5 p-2 " style={{ width: "px-5 " }}>
        <img src={data?.image} className="card-img h-75 " alt="..."></img>
        <div className="card-body">
          <h1 className="card-text text-center p-3 ">{data?.name}</h1>
          <div className="card-text text-center">
            <h5> start Date</h5>
            <p>{data?.startDate}</p>
          </div>
          <div className="card-text text-center">
            <h5>end Date</h5>
            <p>{data?.endDate}</p>
          </div>
          <div className="card-text text-center">
            <h5>activities</h5>
            <p>{data?.activities}</p>
          </div>
          <div className="card-text text-center">
            <h5>description</h5>
            <p>{data?.description}</p>
          </div>
          <div className="card-text text-center">
            <h5> destination</h5>
            <p>{data?.destination}</p>
          </div>
          <div className="card-text text-center">
            <h5> price</h5>
            <p> {data?.price}</p>
          </div>
        </div>{" "}
      </div>{" "}
    </div>
  );
}
