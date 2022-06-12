import { Link } from "react-router-dom";

const NavBar = () => {
    return ( 
        <header>
            <section>
                <h1>
                    <Link to="/">
                        Home
                    </Link>
                </h1>
                <ul>
                    <li>
                        <Link to="/new-blog">
                            New Blog
                        </Link>
                    </li>
                    <li>
                        Log in
                    </li>
                </ul>
            </section>
        </header>
     );
}
 
export default NavBar;