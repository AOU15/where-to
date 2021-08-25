import { Link, useParams } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'

export default function Continents(props) {
  const { destinations } = props
  const params = useParams()

  const filterDestinations = destinations.filter((des) => {
    return des.fields.continent === params.continent
  })









  console.log(filterDestinations)
  return (
    <Card style={{ width: "50rem"}}>
    <Card.Body className="conlist">
    <div className="region">
      <h1>This is continent route</h1>
      {filterDestinations.map((des) => (
        <Link to={`/destinations/${des.id}`}>
          <div>
            <h3>{des.fields.city}</h3>
            <Image src={des.fields.image} fluid />
            <h3>{des.fields.attraction}</h3>
          </div>
        </Link>

      ))}



    </div>
    </Card.Body>
    </Card>
  )
}