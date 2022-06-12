import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {




    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [date, setDate] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleCreate = () =>{
        const blog = {title, body, date};
        setLoading(true);
        fetch('http://localhost:8000/blogs',{
            method:"POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(blog)
        })
        .then(()=>{
            setLoading(false);
            navigate("/");
        })
        .catch((error)=>{
            setLoading(false)
        })
    }
    
    
    return ( 
        <div className="create-post">
            <h2>Create a new blog</h2>
            <div>
                <section>
                    <label htmlFor="post-title">Post title</label>
                    <input type="text" id="post-title" value={title} required onChange={(e)=>{setTitle(e.target.value)}} />
                </section>
                <section>
                    <label htmlFor="post-content">Post content</label>
                    <textarea name="post-content" id="post-content" value={body} required onChange={(e)=>{setBody(e.target.value)}}></textarea>
                </section>
                <section>
                    <label htmlFor="posting-date">Date of posting</label>
                    <input type="text" id="posting-date" placeholder="20 March 2022" value={date} required onChange={(e)=>{setDate(e.target.value)}} />
                </section>
                <section>
                    <button disabled={loading} onClick={handleCreate}>{loading && <span>Creating blog</span>}{!loading && <span>Create Blog</span>}</button>
                </section>
            </div>
        </div>
     );
}
 
export default CreateBlog;