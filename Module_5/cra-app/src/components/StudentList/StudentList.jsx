import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function StudentList() {
    const [state, setState] = useState({})
    const [currentPage, setCurrentPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const [totalPage, setTotalPage] = useState(0)

    useEffect(() => {
        setLoading(true);
        async function getData() {
            let response = await fetch(`https://js-post-api.herokuapp.com/api/students?_page=${currentPage}`);
            let dataRes = await response.json();
            setState(dataRes);
            setTotalPage(Math.ceil(Number(dataRes.pagination._totalRows) / Number(dataRes.pagination._limit)))
            setLoading(false)
        }
        getData();
    }, [currentPage])

    const { data, pagination } = state;

    return (
        <div className="container">
            <h1>Student List</h1>
            <div className="row">
                <ul className="pagination">
                    {
                        [...Array(totalPage)].map((page, index) => (
                            <li key={index}>
                                <button 
                                    className={`btn btn-sm ${index == currentPage - 1 ? 'btn-danger' : 'btn-warning'} me-1 text-white`}
                                    onClick={() => setCurrentPage(index + 1)}
                                    >
                                        {index + 1}
                                </button>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="row">
                {
                    loading ? <p>Loading ...</p> : (
                        data?.map((std) => (
                            <div key={std.id} className="col-sm-3 mb-3">
                                <div className="card bg-success text-white">
                                    <div className="card-header">{std.name}</div>
                                    <div className="card-body">
                                        <p><span className="fw-bolder">Gender</span>: {std.gender}</p>
                                        <p><span className="fw-bolder">Age</span>: {std.age}</p>
                                        <p><span className="fw-bolder">Mark</span>: {std.mark}</p>
                                    </div>
                                    <div className="card-footer">
                                        <Link className="btn btn-sm btn-link text-white"
                                            to={`/student/detail/${std.id}`}
                                        >Detail</Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    )

                }
            </div>
        </div>
    )
}

export default StudentList