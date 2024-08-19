import { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [name, setName] = useState(''); 
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [state,setState] = useState("Login");
  const navigate = useNavigate();

  const login = async (e) =>{
    // e.preventDefault();
    if (name === 'prasanna'&& email==='dp@brandingdisplays.com' && password === 'pass') {
      // setIsAdmin(true);
      navigate('http://localhost:5173/');
    } else {
      alert('Incorrect credentials');
    }
    console.log("Login function executed")
  }
// access key:2ee767f0-da2f-492a-bdab-fd378eac9f2a
  return (
    <section className="max_padd_container flexCenter flex-col pt-32">
      <div className="max-w-[555px] h-[600px] bg-white m-auto px-14 py-10 rounded-md">
      <h3 className="h3">Admin Login</h3>
      <form className="flex flex-col gap-4 mt-7" onSubmit={login}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl" />
        <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl" />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl" />
      </form>
      <button onClick={()=>{state==="Login"?login():signup()}}className="btn_dark_rounded my-5 w-full !rounded-md">Continue</button>
      </div>
    </section>
  )
}

export default Login