import { useContext } from "react";
import { contextProvider } from "../../App";
type Props = {};
export default function UserLogin({}: Props) {
  const context = useContext(contextProvider);

  const allTrips = () => {
    context!.setPage("Home");
  };
  return (
    <div>
      <button onClick={allTrips}>Home</button>
    </div>
  );
}
