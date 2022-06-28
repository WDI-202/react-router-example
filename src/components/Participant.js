import { useParams } from "react-router-dom";

const Participant = (props) => {
    let params = useParams();
    const displayParticipant = props.participants.includes(params.participant) ? params.participant : "Not Found"
  return (
    <>
      <p>{displayParticipant}</p>
    </>
  );
};

export default Participant;
