import { Link, useParams } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { Card } from "react-bootstrap";
// import { CardColumns } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Continents(props) {
  const { destinations } = props;
  const params = useParams();

  const filterDestinations = destinations.filter((des) => {
    return des.fields.continent === params.continent;
  });

  return (
    <div>
      {filterDestinations.map((des) => (
        <Link to={`/destinations/${des.id}`}>
          <div>
            <Card
              className="cardtwo"
              style={{
                width: "50rem",
                padding: "100px",
                borderRadius: "20px",
                marginBottom: "35px",
                backgroundColor: "#2ea44c5c",
              }}
            >
              <h1>{des.fields.continent}</h1>
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
