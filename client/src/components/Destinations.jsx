import { Link } from "react-router-dom"
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css'
import Image from 'react-bootstrap/Image'


export default function Destinations(props) {

  return (
    <Card style={{ width: "50rem", padding: "100px", }}>
    <Card.Body className="destilist">
    <div>
      {props.destinations.map((des) => (
        <Link to={`/destinations/${des.id}`}>
        <div>
          <h3>{des.fields.city}</h3>
            <Image src={des.fields.image} fluid />
            <h3>{des.fields.attraction}</h3>
            <p>{des.fields.description}</p>
          </div>
          </Link>
      ))}
    </div>
      </Card.Body>
    </Card>
  )
}