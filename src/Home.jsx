import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomeComponent = () => {



    const [blogs, setBlogs] = useState(null);
    const [loading, setLoading] = useState(true);



    useEffect(()=>{
        fetch('http://localhost:8000/blogs/')
            .then((res)=>{
                if(!res.ok){
                    throw Error("Couldn't fetch data for that resource!")
                }
                setLoading(true);
                return res.json();
            })
            .then((data)=>{
                setTimeout(() => {
                setBlogs(data);
                setLoading(false);
                }, 0);
            })
            .catch((error)=>{
                console.log(error.message)
            })
    }, [])
    
    
    
    return (
        
        <div className="home-comp">
            <h1>
                All posts
            </h1>
            <div className="blogs-list">




                {
                    loading && 
                    <div className="loading"><div className="loader"></div></div>
                }
                { blogs &&
                    blogs.map((blog)=>(
                        
                        <div className="single-blog" key={blog.id}>
                            <Link to={"blogs/"+blog.id}>
                                <h2> {blog.title} </h2>
                                <p>
                                    {blog.content}
                                </p>
                                <small>Posted on {blog.date}</small>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
     );
}

export default HomeComponent;