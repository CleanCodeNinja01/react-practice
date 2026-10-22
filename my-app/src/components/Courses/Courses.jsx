// import { useEffect } from "react";
import {useQuery} from "@tanstack/react-query"

const fetchCourses = async () => {
    const res = await fetch(

        "/coursera-api/api/courses.v1?fields=name,slug,description,photoUrl,primaryLanguages&limit=100&start=0"
      
      );
    if (!res.ok) throw new Error("Failed to fetch courses")
    return res.json();
    
    // await     useEffect(()=>{
    //     const fetchCourses = async () => {
    //         try {
    //             const response = await fetch('https://codepion.com/api/courses')
    //             if (!response.ok) throw new Error("Failed to fetch courses")
    //             const data = await response.json();
    //             setCourses(data);
    //             return data;
    //         } catch (err) {
    //             setError(err.message)
    //         } finally {
    //             setLoading(false)
    //         }
    //     }
    //     fetchCourses();
    // }, [])
}

const Courses = () => {

    // const [courses, setCourses] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    // react query is going to manage the loading and error states

    const {data, isLoading, isError, error} = useQuery({
        // queryKey is the unique id for this piece of data
        queryKey: ["courses"],
        queryFn: fetchCourses,
    });

    if (isLoading) return <p>Loading courses ...</p>
    if (isError) return <p style={{color: "red"}}>❌ {error.message}</p>

    const courses = data?.elements ?? [];

    return (
        <div>
            <h2>Available Courses</h2>
            <ul>
                {courses.map((course) => (
                    <li key={course.id}>
                        {course.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Courses;