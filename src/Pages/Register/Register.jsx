import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const Register = () => {

  const [errorRegister, setErrorRegister] = useState('');
  const [successRegister, setSuccessRegister] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const handleRegister =(e)=>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (password.length < 6) {
      setErrorRegister("Password at least 6 character or more!");
      return;
      
    }
    // console.log(email, password);
    setErrorRegister('');
    setSuccessRegister('');
    createUserWithEmailAndPassword(auth,email,password)
    .then((userCredential) => {
      console.log(userCredential);
      
     setSuccessRegister("User Created Successfully.")
      
    })
    .catch((error) => {
      setErrorRegister(error.message);
    });
  }
  return (
    <div>
    <h3 className="text-3xl text-center py-5 font-bold">Register page</h3>
    <div className="hero min-h-screen rounded-lg bg-base-200">
<div className="hero-content flex-col lg:flex-row-reverse">

  <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <div className="card-body">
      <form onSubmit={handleRegister}>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input type="text" name="email" placeholder="email" className="input input-bordered" required />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <div className="flex items-center">
        <input type={showPassword?'text':'password'} name="password" placeholder="password" className="input input-bordered" required />
        <span onClick={()=>setShowPassword(!showPassword)} className="-ml-11 cursor-pointer text-xl">
          {
            showPassword?<FaEyeSlash></FaEyeSlash>:<FaEye></FaEye>
          }
        </span>
        </div>
        <label className="label mt-5">
         <input type="checkbox" name="terms&conditions" id="terms&conditions" />
         <label htmlFor="terms&conditions" className=" ml-3 text-base font-semibold">Accept Our <a className="text-blue-500" href="#">Terms And Conditions!</a></label>
        </label>
      </div>
      <div className="form-control mt-6">
        <input className="btn btn-primary" type="submit" value='Register'/>
      </div>
      </form>
      {
        errorRegister && <p className="text-2xl text-red-600 font-bold">{errorRegister}</p>
      }
      {
        successRegister && <p className="text-2xl text-green-600 font-bold">{successRegister}</p>
      }
    </div>
  </div>
</div>
</div>
  </div>
  );
};

export default Register;