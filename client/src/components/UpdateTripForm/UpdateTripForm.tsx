import { useContext, useRef, useEffect, useState } from "react";
import { contextProvider } from "../../App";
import { contextIdProvider } from "../../App";
import { contextDataProvider } from "../../App";

import axios from "axios";
import Data from "../Interface";

type Props = {};
export default function UpdateTripForm({}: Props) {
  const context = useContext(contextProvider);
  const contextId = useContext(contextIdProvider);
  const contextData = useContext(contextDataProvider);

  const [dataContex, setDataContex] = useState<Data>();

  const trips = () => {
    context!.setPage("Trips");
  };
  const nameRef = useRef<HTMLInputElement | null>(null);
  const imgRef = useRef<HTMLInputElement | null>(null);
  const tartDateRef = useRef<HTMLInputElement | null>(null);
  const endDateRef = useRef<HTMLInputElement | null>(null);
  const activitiesRef = useRef<HTMLInputElement | null>(null);
  const descriptionRef = useRef<HTMLInputElement | null>(null);
  const destinationRef = useRef<HTMLInputElement | null>(null);
  const priceRef = useRef<HTMLInputElement | null>(null);
  // e: React.FormEvent

  const handleSubmit = async () => {
    const postData = {
      name: nameRef.current?.value,
      startDate: tartDateRef.current?.value,
      destination: destinationRef.current?.value,
      endDate: endDateRef.current?.value,
      description: descriptionRef.current?.value,
      price: priceRef.current?.value as unknown as number,
      image: imgRef.current?.value,
      activities: activitiesRef.current?.value.split(","),
    };
    useEffect(() => {
      const getData = async () => {
        const response = await axios.post<Data | undefined>(
          `http://localhost:3000/api/trips/${contextId?.id}`,
          postData,
          {
            headers: {
              Authorization: "test-token",
            },
          }
        );
      };
      getData();
    }, []);

    return (
      <div>
        <div>
          <button onClick={trips}>All Trips</button>
        </div>
        <form
          onSubmit={handleSubmit}
          className="border border-black p-5 m-5 w-100 bg-light rounded-4"
        >
          <legend>Enter New Trip</legend>
          <div className="mb-3">
            <label className="form-label">name</label>
            <input
              ref={nameRef}
              type="text"
              id="disabledTextInput"
              className="form-control"
              value={dataContex?.name}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">img URL</label>
            <div className="input-group">
              <span className="input-group-text" id="basic-addon3">
                https://
              </span>
              <input
                ref={imgRef}
                type="text"
                className="form-control"
                id="basic-url"
                aria-describedby="basic-addon3 basic-addon4"
                value={dataContex?.image}
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">start Date</label>
            <input
              ref={tartDateRef}
              type="date"
              id="disabledTextInput"
              className="form-control"
              placeholder="input start Date"
              value={dataContex?.startDate}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">end Date</label>
            <input
              ref={endDateRef}
              type="date"
              id="disabledTextInput"
              className="form-control"
              placeholder=" input end Date"
              value={dataContex?.endDate}
            />
          </div>

          <div className="mb-3">
            <div className="mb-3">
              <label className="form-label">activities</label>
              <input
                ref={activitiesRef}
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder=" input activities"
                value={dataContex?.activities}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">description</label>
              <input
                ref={descriptionRef}
                type="text"
                className="form-control"
                id="formGroupExampleInput2"
                placeholder="input description"
                value={dataContex?.activities}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">destination</label>

              <input
                ref={destinationRef}
                type="text"
                className="form-control"
                id="formGroupExampleInput2"
                placeholder="input description"
                value={dataContex?.destination}
              />
            </div>
            <label className="form-label">price</label>

            <div className="input-group mb-3">
              <span className="input-group-text">$</span>
              <input
                ref={priceRef}
                type="number"
                className="form-control"
                aria-label="Amount (to the nearest dollar)"
                value={dataContex?.price}
              />
              <span className="input-group-text">.00</span>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  };
}
