import React from "react";
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'

const schema = yup.object({
    email: yup.string().email("Please enter a valid email").required(),
    username: yup.string()
                .min(5, "username phải nhiều hơn 5 ký tự")
                .max(20)
                .required(),
    age: yup.number().integer().positive().max(50).required().typeError('age is not valid')
})
function Register() {
    const { register, formState: { errors }, handleSubmit, reset } = useForm({
        resolver: yupResolver(schema)
    })

    const handleRegister = (data) => {
        console.log(data);
        reset()
    }
    return (
        <div className="container">
            <form onSubmit={handleSubmit(handleRegister)} className="row col-sm-6">
                <div className="form-group">
                    <label className="form-lable">Email</label>
                    <input type="text" {...register('email', {
                        pattern: {
                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        },
                    })} className="form-control" />
                    <span className="text-danger">{errors?.email?.message}</span>
                </div>
                <div className="form-group">
                    <label className="form-lable">UserName</label>
                    <input type="text" {...register('username')} className="form-control" />
                    <span className="text-danger">{errors?.username?.message}</span>
                </div>
                <div className="form-group">
                    <label className="form-lable">Age</label>
                    <input type="text" {...register('age')} className="form-control" />
                    <span className="text-danger">{errors?.age?.message}</span>
                </div>
                <div>
                    <button type="submit" className="btn btn-dark">Register</button>
                    <button type="button" className="btn btn-secondary" onClick={() => reset()}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default Register;