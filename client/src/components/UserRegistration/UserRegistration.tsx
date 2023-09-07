import { useContext } from "react";
import { contextProvider } from "../../App";
type Props = {};
export default function UserRegistration({}: Props) {
  const context = useContext(contextProvider);

  const home = () => {
    context!.setPage("Home");
  };

  return (
    <div>
      <button onClick={home}>Home</button>
    </div>
  );
}
