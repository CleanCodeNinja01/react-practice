import { useEffect, useState } from "react";

const Courses = () => {

    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const fetchCourses = async () => {
            try {
                const response = await fetch('https://codepion.com/api/courses')
                if (!response.ok) throw new Error("Failed to fetch courses")
                const data = await response.json();
                setCourses(data);
                return data;
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        fetchCourses();
    }, [])

    if (loading) return <p>Loading courses ...</p>
    if (error) return <p style={{color: "red"}}>❌ error</p>

    return (
        <div>
            <h2>Available Courses</h2>
            <ul>
                {
                    courses.map((course)=>{
                        <li key={course.id}>
                            {course.name}
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default Courses;