import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";



const BlogDetails = () => {

    const {id} = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);



    const navigate = useNavigate();
    const handleDelete = () =>{
        fetch('http://localhost:8000/blogs/' + blog.id ,{
            method: "DELETE"
        })
        .then(()=>{
            navigate("/");
        })
    }

    


    useEffect(()=>{
        fetch('http://localhost:8000/blogs/' + id)
            .then((res)=>{
                if(!res.ok){
                    throw Error("Couldn't fetch data for that resource!")
                }
                setLoading(true);
                return res.json();
            })
            .then((data)=>{
                setTimeout(() => {
                setBlog(data);
                setLoading(false);
                }, 0);
            })
            .catch((error)=>{
                console.log(error.message)
            })
    }, [])
    
    
    
    return ( 
        <div className="blog-details">
            {
                    loading && 
                    <div className="loading"><div className="loader"></div></div>
                }
            {
                blog && 
                <section>
                    <h2>{blog.title}</h2>
                    <p>{blog.body}</p>
                    <small><i>Posted on {blog.date}</i></small>
                    <button onClick={handleDelete}>Delete post</button>
                </section>
            }
        </div>
     );
}
 
export default BlogDetails;