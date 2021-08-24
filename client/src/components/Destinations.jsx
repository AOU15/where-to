import { Link } from "react-router-dom"
import Card from 'react-bootstrap/Card'

export default function Destinations(props) {

  return (
    <Card className="destilist">
    <div>
      {props.destinations.map((des) => (
        <Link to={`/destinations/${des.id}`}>
        <div>
          <h3>{des.fields.city}</h3>
            <img src={des.fields.image} />
            <h3>{des.fields.attraction}</h3>
          </div>
          </Link>
      ))}
    </div>
    </Card>
  )
}