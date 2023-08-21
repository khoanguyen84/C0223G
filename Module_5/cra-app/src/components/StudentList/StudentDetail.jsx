import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function StudentDetail() {
    const { studentId } = useParams();
    const [student, setStudent] = useState({})
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        async function getStudentDetail() {
            let res = await fetch(`https://js-post-api.herokuapp.com/api/students/${studentId}`)
            let stdRes = await res.json();
            setStudent(stdRes);
            setLoading(false)
        }
        getStudentDetail();
    }, [])
    
    return (
        <div className="container">
            <h1>Studetn Detail</h1>
            {
                loading ? <p>Loading ...</p> : (
                    <>
                        <p><span className="fw-bolder">Name</span>: {student.name}</p>
                        <p><span className="fw-bolder">Gender</span>: {student.gender}</p>
                        <p><span className="fw-bolder">Age</span>: {student.age}</p>
                        <p><span className="fw-bolder">Mark</span>: {student.mark}</p>
                    </>
                )
            }

            <Link to={"/student/list"} className="btn btn-sm btn-link">Back to student list</Link>
        </div>
    )
}

export default StudentDetail;