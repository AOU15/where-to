import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Destinations(props) {
  return (
    <div>
      {props.destinations.map((des) => (
        <Link to={`/destinations/${des.id}`}>
            <div>
            <Card className="cardtwo" style={{ padding: "100px", width: "50rem", borderRadius: "20px", marginBottom: "35px", backgroundColor: "#2ea44c5c" }}>
              <h3>{des.fields.continent}</h3>
              <h3>{des.fields.city}</h3>
              <Image src={des.fields.image} fluid />
              <h3>{des.fields.attraction}</h3>
        </Card>
            </div>
          </Link>
      ))}
    </div>
  );
}
