const useFetch = () =>{
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
    return []
}

export default useFetch;