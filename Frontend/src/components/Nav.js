import {

    Link
} from "react-router-dom";

const Nav = () => {
    return (
        <nav class="navbar navbar-dark bg-dark">
    
    
    <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/add">Post an Image</Link>
                </li>
                <li>
                    <Link to="/picture">Gallery</Link>
                </li>
            </ul>
        </nav>
</nav>
        
        
        
        
    
    );
}

export default Nav;