import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';

const SignUp = () => {
    const {createUser, updateUser} = useContext(AuthContext)
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signUpError, setSignUpError] = useState('');
    const [createdUserEmail, setCreatedEmail] = useState('');
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();

    if(token){
      navigate('/');
    }
  
  const handleSignUP = data =>{
    console.log(data);
    setSignUpError('');
    createUser(data.email, data.password)
    .then(result =>{
        const user = result.user;
        console.log(user);
        toast('user create successfully.');
        const userInfo = {
          displayName: data.name
        }
        updateUser(userInfo)
        .then(()=>{
          saveUser(data.name, data.email)
        })
        .catch(err => console.log(err));
    }) 
    .catch(err => {
      console.error(err)
      setSignUpError(err.message)
    })
  }

  const saveUser = (name, email) => {
    const user = {name, email};
    fetch('https://doctors-portal-server-liard-two.vercel.app/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      setCreatedEmail(email);
    })
  }



    return (
        <div className="h-[600px] flex justify-center items-center">
      <div className="w-96 p-7 shadow-2xl rounded-xl">
        <h2 className="text-xl text-center">Sing UP Now!!</h2>
        <form onSubmit={handleSubmit(handleSignUP)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", {
                required: "Name is required"
            })}
              className="input input-bordered w-full max-w-xs"
            />
             {errors.name && <p className="text-red-600">{errors.name?.message}</p>}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required"
            })}
              className="input input-bordered w-full max-w-xs"
            />
             {errors.email && <p className="text-red-600">{errors.email?.message}</p>}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {value: 6, message: "Password must be 6 character or longer"},
                pattern: {value: /(?=.*[A-Z])(?=.*[!@#$*])(?=.*[0-9])/, message: 'Password must be one Uppercase , one special character and one number'}  
            })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && <p className="text-red-600">{errors.password?.message}</p>}
          </div>
          <input className="btn btn-accent w-full mt-5" value="Sign up" type="submit" />
          {signUpError && <p className='text-red-600'>{signUpError}</p>}
        </form>
        <p>Already have an account? <Link to="/login" className="text-secondary">Please Login</Link></p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
    );
};

export default SignUp;