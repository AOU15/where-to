import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { baseURL, config } from '../services'


function Form(props) {

  const [continent, setContinent] = useState('')
  const [city, setCity] = useState('')
  const [attraction, setAttraction] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState("")
  const [website, setWebsite] = useState('')


  const params = useParams()
  
  useEffect(() => {
    if (params.id) {
      const destinationUpdate = props.destination.find(destination => params.id === destination.id)
      if (destinationUpdate) {
        setContinent(destinationUpdate.fields.continent)
        setCity(destinationUpdate.fields.city)
        setAttraction(destinationUpdate.fields.attraction)
        setDescription(destinationUpdate.fields.description)
        setImage(destinationUpdate.fields.image)
        setWebsite(destinationUpdate.fields.website)
      }
    }
  }, [])


  const handleSubmit = async (event) => {
    event.preventDefault()
    const newDestination = {
      continent,
      city,
      attraction,
      description,
      image,
      website
    }
    if (params.id) {
      await axios.put(`${baseURL}/${params.id}`, {
        fields: newDestination
      }, config)
    } else {
      await axios.post(baseURL, { fields: newDestination}, config)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='continent'>Continent: </label>
      <input id='continent' type='text' onChange={(e) => setContinent(e.target.value)} value={continent} />
      <br />
      
      <label htmlFor='city'>City: </label>
      <input id='city' type='text' onChange={(e) => setCity(e.target.value)} value={city} />
      <br />
      
      <label htmlFor='attraction'>Attraction: </label>
      <input id='attraction' type='text' onChange={(e) => setAttraction(e.target.value)} value={attraction} />
      <br />
      
      <label htmlFor='description'>Description: </label>
      <input id='description' type='text' onChange={(e) => setDescription(e.target.value)} value={description} />
      <br />
      
      <label htmlFor='image'>Image: </label>
      <input id='image' type='text' onChange={(e) => setImage(e.target.value)} value={image} />
      <br />
      
      <label htmlFor='website'>Website: </label>
      <input id='website' type='text' onChange={(e) => setWebsite(e.target.value)} value={website} />
      <br />
      <button type='submit'>Submit</button>
      
    </form>
  )
}

export default Form;


