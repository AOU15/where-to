import { useState } from "react"
import { useHistory } from "react-router-dom"


export default function Home() {
  const [search, setSearch] = useState("")

  let history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    history.push(`/continents/${search}`)
  }

  return (
    <div className="homepage">
      <h1>Where To?</h1>
      <p>Have you ever wanted to travel? Start by choosing a continent down below. Pick a continent down below and take a look at the attractions and activities! </p>

      {/* <img src="https://media4.giphy.com/menpm strdia/5x75ibSAYSCLMRGVWd/giphy.gif?cid=ecf05e47zhx60lj3ps70h4jio75g5kgz8z29hyhah1k16ws6&rid=giphy.gif&ct=g" /> */}
      <form onSubmit={handleSubmit}>
        <label>
          Choose a continent:

          <select name="continent" id="continent" value={search} onChange={(e) => setSearch(e.target.value)}>

            <option hidden value="">Choose a Continent</option>
            <option value="Africa">Africa</option>
            <option value="Antartica">Antartica</option>
            <option value="South America">South America</option>
            <option value="Europe">Europe</option>
            <option value="North America">North America</option>
            <option value="Asia">Asia</option>
          </select>
        </label>
        <button type="submit">Lets Go</button>
      </form>
    </div>
  )
}