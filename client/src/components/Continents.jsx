import { Link, useParams } from "react-router-dom"
import Card from 'react-bootstrap/Card'

export default function Continents(props) {
  const { destinations } = props
  const params = useParams()

  const filterDestinations = destinations.filter((des) => {
    return des.fields.continent === params.continent
  })









  console.log(filterDestinations)
  return (
    <Card className="conlist">
    <div className="region">
      <h1>This is continent route</h1>
      {filterDestinations.map((des) => (
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