import { useState } from "react";

const Login = () => {
  const [name, setName] = useState(''); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [state, setState] = useState("Login");

  const login = async (e) => {
    e.preventDefault();  // Prevent form default submission behavior
    if (name === 'prasanna' && email === 'dp@brandingdisplays.com' && password === 'pass') {
      // Redirect to the external admin page
      window.location.href = 'https://admin-branding-display.netlify.app';
    } else {
      alert('Incorrect credentials');
    }
    console.log("Login function executed");
  }

  const handleButtonClick = () => {
    if (state === "Login") {
      login();
    } else {
      // Implement signup function if needed
      console.log("Signup function is not implemented yet");
    }
  }

  return (
    <section className="max_padd_container flexCenter flex-col pt-32">
      <div className="max-w-[555px] h-[600px] bg-white m-auto px-14 py-10 rounded-md">
        <h3 className="h3">Admin Login</h3>
        <form className="flex flex-col gap-4 mt-7" onSubmit={login}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl"
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl"
          />
          <button
            type="submit"
            className="btn_dark_rounded my-5 w-full !rounded-md"
          >
            {state === "Login" ? "Login" : "Signup"}
          </button>
        </form>
      </div>
    </section>
  )
}