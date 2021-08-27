import { Link, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Show(props) {
  const { destinations } = props;
  const params = useParams();

  const destination = destinations.find((des) => {
    return des.id === params.id;
  });

  const { continent, image, attraction, website, description, city } =
    destination.fields;


  return (
    
    <div>
      <Card style={{ padding: "1px", minWidth: "400px", marginBottom: "35px", backgroundColor: "#2ea44c5c" }}>
          <h1>{continent}</h1>
          <h3>{city}</h3>
          <h3>{attraction}</h3>
          <Image src={image} fluid />
          <p>{description}</p>
          <h4>{website}</h4>
          <Link to={`/edit/${destination.id}`}>
            <button>Edit destination</button>
        </Link>
        </Card>
        </div>
      
  );
}
