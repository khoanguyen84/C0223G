import React, { useReducer } from "react";
import { addJob, addJobname, initState, reducer } from "../../store";


// const [state, dispatch] = useReducer(reducer, initState)

// reducer = (state, action) => {
//     // code => cập nhật state
// }

// action = { type, playload }

// type: phân loại (hành động)
// playload: chứa dữ liệu phục vụ cho hành động đó


// dispatch: kích hoạt hành động
// dispatch(type, payload)
function Todo() {
    const [state, dispatch] = useReducer(reducer, initState);

    return (
        <div className="container d-flex justify-content-center align-items-center">
            <div className="row col-sm-6">
                <div className="w-100">
                    <div className="d-flex justify-content-center align-items-center">
                        <input type="text" className="form-control"
                            value={state.jobname}
                            onInput={(e) => dispatch(addJobname(e.target.value))}
                        />
                        <button className="btn btn-sm btn-danger"
                            onClick={() => dispatch(addJob(null))}
                        >Add Job</button>
                    </div>
                </div>
                <div>
                    <ul className="list-group">
                        {
                            state?.todoList?.map((todo) => (
                                <li key={todo.id} className="list-group-item">{todo.name}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Todo;