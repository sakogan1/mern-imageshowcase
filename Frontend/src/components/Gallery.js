import { useEffect, useState } from "react";
import axios from 'axios'
import {
    Link
} from "react-router-dom";

const Gallery = () => {
    const [data, setData] = useState(null)
    useEffect(() => {
        axios.get('/api')
            .then(result => setData(result.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            <h1>Gallery</h1>
            <div className="gallery ">
            {data && (data.map(picture => <div key={picture._id}>
                <div className="AuthorImage"><img src={picture.authorImageUrl} alt={picture.authorImageUrl} /></div>
                <h3>
                    <Link to={`/api/${picture._id}`}>
                        {picture.name}
                    </Link>
                </h3>
                <img src={picture.url} alt={picture.name} className="GalleryImage" />
                <p>{picture.Author}</p>
                <p>{picture.rating}</p>
            </div>))}
           </div>
        </div>
    );
}

export default Gallery;