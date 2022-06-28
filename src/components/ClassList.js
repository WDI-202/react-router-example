import { Outlet, useSearchParams } from "react-router-dom";
import participants from "../utils/ParticipantList";

const ClassList = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const sortOrder = searchParams.get("sortOrder") || "asc"

    function compare(a, b) {
        if (sortOrder.toLowerCase() === "asc") {
            if (a < b) {
              return -1;
            }
            if (a > b) {
              return 1;
            }
        }
        if (sortOrder.toLowerCase() === "desc") {
            if (a < b) {
              return 1;
            }
            if (a > b) {
              return -1;
            }
        }
        return 0;
      }

  return (
    <>
      <h3>Class List</h3>
      <ul>
        {participants.sort(compare).map((participant) => {
          return <li key={participant}>{participant}</li>;
        })}
      </ul>
    </>
  );
};

export default ClassList;
