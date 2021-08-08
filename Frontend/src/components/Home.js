import axios from "axios";
import { Link } from "react-router-dom";
import  { useEffect, useState } from 'react';
const Home = () => {
 const [Picture, setPicture] = useState(null)
    useEffect(() => {
       
        axios.get(`/api`)
            .then(result => {
                setPicture(result.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
    <div classname="home"> 
    <h1>
        ImageShowcase
    </h1>
    <div className="layout">
    {Picture && (Picture.map(Picture => 
    <div className="Pictures">
        <Link to={`/picture/${Picture._id}`}>
        <img src={Picture.url} alt={Picture.Author} />
                    </Link>
 <div className="details">
                              <h2>{Picture.name}</h2>
                              <img id="Author"src={Picture.authorImageUrl} alt={Picture.authorImageUrl} />
                              {Picture.Author}   

</div>

        
        
       
    </div>
   
))}</div>
  </div>

);


}
export default Home

