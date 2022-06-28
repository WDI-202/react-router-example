import { useParams } from "react-router-dom";

const participants = [
  "james",
  "ginny",
  "anson",
  "corey",
  "jill",
  "sonny",
  "antonio",
];

const Participant = () => {
    let params = useParams();
    console.log(participants.includes(params.participant))
    const displayParticipant = participants.includes(params.participant) ? params.participant : "Not Found"
  return (
    <>
      <p>{displayParticipant}</p>
    </>
  );
};

export default Participant;
