import { useState, useEffect } from 'react'
import axios from 'axios'

const About = props => {
    const [about, setAbout] = useState({})
    useEffect(() => {
        axios
          .get(`${import.meta.env.VITE_SERVER_HOSTNAME}/about`)
          .then(response => {
            setAbout(response.data)
          })
          .catch(err => {
            console.error(err)
          })
      }, [])
  
    return (
      <>
        <h1>{about.title}</h1>
        <p>{about.paragraph1}</p>
        <p>{about.paragraph2}</p>
        {about.imageUrl && <img src={about.imageUrl} alt="Manasa" />}
      </>
    )
  }
  
  export default About

