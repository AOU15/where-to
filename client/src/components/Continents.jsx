import { useParams } from "react-router-dom"

export default function Continents(props) {
  const { destinations } = props
  const params = useParams()

  const filterDestinations = destinations.filter((des) => {
    return des.fields.continent === params.continent
  })


  console.log(filterDestinations)
  return (
    <div>
      <h1>This is continent route</h1>
    </div>
  )
}