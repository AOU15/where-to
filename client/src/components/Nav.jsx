import { Link } from 'react-router-dom'


export default function Nav() {
  return (
    <div className="links">
      <Link className="homelink" to="/">Home</Link>
      <br />
      <Link className="updatelink" to="new">Suggestions</Link>
      <br />
      <Link className="destilink" to="/destinations">Destinations</Link>
      <br />
      {/* <Link to="/edit/:id">Suggestions</Link> */}


    </div>
  )
}