import { ADD_JOB, SET_JOBNAME } from "./constants"

const addJob = (payload) => {
    return { type: ADD_JOB, payload: payload }
}

const addJobname = (payload) => {
    return { type: SET_JOBNAME, payload: payload }
}

export { addJob, addJobname }