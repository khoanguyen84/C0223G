import React, { useReducer } from "react";


// const [state, dispatch] = useReducer(reducer, initState)

// reducer = (state, action) => {
//     // code => cập nhật state
// }

// action = { type, playload }

// type: phân loại (hành động)
// playload: chứa dữ liệu phục vụ cho hành động đó


// dispatch: kích hoạt hành động
// dispatch(type, payload)

const initState = {
    todoList: [
        {
            id: 1,
            name: "Java"
        },
        {
            id: 2,
            name: "DOT Net"
        }
    ],
    jobname: '',
    loading: false
}

const ADD_JOB = 'ADD_JOB';
const SET_JOBNAME = 'SET_JOBNAME';
const SET_LOADING = 'SET_LOADING';

const reducer = (state, action) => {
    switch (action.type) {
        case ADD_JOB: {
            let newTodoList = [...state.todoList];
            newTodoList.sort((todo1, todo2) => todo2.id - todo1.id);

            let newJob = {
                id: newTodoList[0].id + 1,
                name: state.jobname
            }
            return {
                ...state,
                todoList: [...state.todoList, newJob],
                jobname: ''
            }
        }
        case SET_JOBNAME: {
            return {
                ...state,
                jobname: action.payload
            }
        }
        case SET_LOADING: {
            return {
                ...state,
                loading: action.payload
            }
        }
        default: {
            throw new Error("Invalid Action")
        }
    }
}


function Todo() {

    const [state, dispatch] = useReducer(reducer, initState);

    return (
        <div className="container d-flex justify-content-center align-items-center">
            <div className="row col-sm-6">
                <div className="w-100">
                    <div className="d-flex justify-content-center align-items-center">
                        <input type="text" className="form-control"
                            value={state.jobname}
                            onInput={(e) => dispatch({ type: SET_JOBNAME, payload: e.target.value })}
                        />
                        <button className="btn btn-sm btn-danger"
                            onClick={() => dispatch({ type: ADD_JOB, payload: null })}
                        >Add Job</button>

                        <button onClick={() => dispatch({type: SET_LOADING, payload: true})}></button>
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