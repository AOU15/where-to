import { useParams } from "react-router-dom"
import Card from 'react-bootstrap/Card'

export default function Show(props) {
  const { destinations } = props
  const params = useParams()

  const destination = destinations.find((des) => {
    return des.id === params.id
  })

const {continent, image, attraction, website, description, city } = destination.fields

// console.log(destination)
  return (
    <Card className="showpagelist">
    <div>
      <h3>{city}</h3>
      <h3>{attraction}</h3>
      <img src={image} />
      <p>{description}</p>
      <h4>{website}</h4>
    </div>
    </Card>
  )
}