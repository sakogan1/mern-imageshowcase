import axios from "axios";
import { useState } from "react";

const Add = () => {
    const [inputs, setInputs] = useState({ name: "", Author: "", url: "",authorImageUrl:"", rating:"" })
    const handleInputs = (event) => {
        setInputs(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            }
        })
    }
    const savePicture = () => {
        axios.post('/api', inputs)
            .then(result => window.location.href = result.data.redirect)
            .catch(err => console.log(err))
    }
    return (
        <div>
            <h1>Post an image to Gallery</h1>
            <form>
            <input type="text" name="name" value={inputs.name} onChange={handleInputs} placeholder="Picture name "/>
                <input type="text" name="Author" value={inputs.Author} onChange={handleInputs} placeholder="Author name "/>
                <input type="text" name="url" value={inputs.url} onChange={handleInputs} placeholder="Link to picture"/>
                <input type="text" name="authorImageUrl" value={inputs.authorImageUrl} onChange={handleInputs} placeholder="Link to author picture "/>
                <input type="number" name="rating" value={inputs.rating} onChange={handleInputs} placeholder="Pleace rate from 1 to 10 points" max="10" min="1"/>
            </form>
            <button onClick={savePicture}>Save</button>
        </div>
    );
}

export default Add;