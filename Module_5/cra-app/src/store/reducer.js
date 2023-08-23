import { ADD_JOB, SET_JOBNAME, SET_LOADING } from "./constants";

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

export { reducer, initState }