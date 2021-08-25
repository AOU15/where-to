import { Link } from 'react-router-dom'


export default function Nav() {
  return (
    <div>
      <Link to="/">Home</Link>
      <br />
      <Link to="/destinations">Destinations</Link>
      <br />
      <Link to="new">Suggestions</Link>
      <br />
      <Link to="/edit/:id">Suggestions</Link>


    </div>
  )
}