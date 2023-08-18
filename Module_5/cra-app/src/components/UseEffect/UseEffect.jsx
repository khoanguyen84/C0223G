import React, { useEffect, useState } from "react";
import Spinner from "../layout/Spinner";

// const useEffect(callback, [deps])
// có 3 trường hợp
// 1. useEffect(callback) => callback luôn luôn được thực thi mỗi khi state thay đổi
// 2. useEffect(callback, []) => callback chỉ được thực thi 1 lần khi component được mounted vào DOM
// 3. useEffect(callback, [deps]) => callback sẽ được thực thi khi deps thay đổi

// callback
// () => {
//     // logic
//     //cleanup function (optional)
//     return () => {}
// }


function UseEffect() {
    const [postList, setPostList] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        async function getPostList() {
            let postRes = await fetch(`https://js-post-api.herokuapp.com/api/posts?_page=${currentPage}`);
            let postList = await postRes.json();
            setPostList(postList);
            setTotalPages(Math.ceil(Number(postList.pagination._totalRows) / Number(postList.pagination._limit)))
            setLoading(false)
        }
        getPostList();
        console.log('callback');
        return () => console.log('cleanup function');
    }, [currentPage])

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }

    }

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    }
    console.log(currentPage);
    return (
        <div className="container">
            <div>
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li role="button" className={`${currentPage == 1 ? 'page-item disabled' : 'page-item'}`}
                        >
                            <a className="page-link" onClick={handlePreviousPage}>Previous</a>
                        </li>
                        <li role="button" className={`${currentPage == totalPages ? 'page-item disabled' : 'page-item'}`}><a className="page-link" onClick={handleNextPage}>Next</a></li>
                    </ul>
                </nav>
            </div>
            <div>
                {/* {
                    loading ? <Spinner/> : (
                        <table className="table table-bordered">
                            <thead className="table-success">
                                <th>Title</th>
                                <th>Author</th>
                                <th>Description</th>
                            </thead>
                            <tbody>
                                {
                                    postList?.data?.map((post) => (
                                        <tr key={post.id}>
                                            <td>{post.title}</td>
                                            <td>{post.author}</td>
                                            <td>{post.description}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    )
                } */}
                <table className="table table-bordered">
                    <thead className="table-success">
                        <th>Title</th>
                        <th>Author</th>
                        <th>Description</th>
                    </thead>
                    <tbody>
                        {
                            loading ? <tr><td className="text-center" colSpan={3}>Loading data ....</td></tr> : (
                                postList?.data?.map((post) => (
                                    <tr key={post.id}>
                                        <td>{post.title}</td>
                                        <td>{post.author}</td>
                                        <td>{post.description}</td>
                                    </tr>
                                ))
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default UseEffect;