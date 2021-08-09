import { useEffect, useState } from "react";
import {
    useParams
} from "react-router-dom";
import axios from 'axios'


const PictureDetails = () => {
    let { id } = useParams()
    const [Picture, setPicture] = useState(null)
    const [inputs, setInputs] = useState({})
    const [edit, setEdit] = useState(false)
    // console.log(id)
    const handleInputs = (event) => {
        setInputs(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            }
        })
    }
    useEffect(() => {
        axios.get(`/api/${id}`)
            .then(result => {
                setPicture(result.data)
                setInputs(result.data)
            })
            .catch(err => console.log(err))
    }, [id])
    const deletePicture = () => {
        axios.delete(`/api/${id}`)
            .then(result => window.location.href = "/")
            .catch(err => console.log(err))
    }
    const updatePicture = () => {
        axios.put(`/api/${id}`, inputs)
            .then(result => window.location.href = result.data._id)
            .catch(err => console.log(err))
    }
    return (
        <div>
            {Picture && (<div>
                {!edit ? <div>
                    <h3>{Picture.name}</h3>
                    <img src={Picture.url} alt={Picture.name} />
                    <p>{Picture.email}</p>
                    <p>{Picture.age}</p>
                </div> : <>
                    <form>
                <input type="text" name="name" value={inputs.name} onChange={handleInputs} placeholder="Picture name "/>
                <input type="text" name="Author" value={inputs.Author} onChange={handleInputs} placeholder="Author name "/>
                <input type="text" name="url" value={inputs.url} onChange={handleInputs} placeholder="Link to picture"/>
                <input type="text" name="authorImageUrl" value={inputs.authorImageUrl} onChange={handleInputs} placeholder="Link to author picture "/>
                <input type="number" name="rating" value={inputs.rating} onChange={handleInputs} placeholder="Pleace rate from 1 to 10 points" max="10" min="1"/>
                    </form>
                    <button onClick={updatePicture}>Save</button>
                </>}
                <button onClick={deletePicture}>Delete</button>
                <button onClick={() => setEdit(!edit)}>Edit</button>
            </div>)}
          
        </div>
    );
}

export default PictureDetails;