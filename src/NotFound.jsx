import {Link} from "react-router-dom"

const NotFound = () => {
    return ( 
        <div className="not-found">
            <section>
                <h1>404</h1>
            </section>
            <section>
                The requested page couldn&apos;t be found! <br />
                Go to <Link to="/">
                    Home
                </Link>
            </section>
        </div>
     );
}
 
export default NotFound;