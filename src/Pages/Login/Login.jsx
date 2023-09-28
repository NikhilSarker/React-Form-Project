import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";


const Login = () => {
  const [errorLogin, setErrorLogin] = useState('');
  const [successLogin, setSuccessLogin] = useState('');
  // const [showPassword, setShowPassword] = useState(false);

  const handleLogin =(e)=>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    // if (password.length < 6) {
    //   setErrorLogin("Password at least 6 character or more!");
    //   return;
      
    // }
    signInWithEmailAndPassword(auth,email,password)
    .then((userCredential) => {
      console.log(userCredential);
      setSuccessLogin("User Created Successfully.");
      // const user = userCredential.user;
      
    })
    .catch((error) => {
      setErrorLogin(error.message);
    });
  }
  return (
    <div>
      <h3 className="text-3xl text-center py-5 font-bold">Login page</h3>
      <div className="hero min-h-screen rounded-lg bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
  
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <form onSubmit={handleLogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name="email" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" name="password" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-primary" type="submit" value='Login'/>
        </div>
        </form>
        {
        errorLogin && <p className="text-2xl text-red-600 font-bold">{errorLogin}</p>
      }
       {
        successLogin && <p className="text-2xl text-green-600 font-bold">{successLogin}</p>
      }
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default Login;