import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const Navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [getData, setGetData] = useState([]);




const handleLogin=()=>{

}


    return (
    <div className="min-h-screen flex items-center justify-center bg-purple-900">
      <div className="max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl text-center mb-8 text-purple-900">Sign in to your Account</h1>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">Email address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded border focus:outline-none focus:border-purple-500"
            />
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded border focus:outline-none focus:border-purple-500"
            />
          </div>
          <div className="space-y-4">
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-gray-700">Remember me</span>
            </div>
            <button
              onClick={handleLogin}
              className="w-full bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 focus:outline-none focus:shadow-outline-purple"
            >
              Sign in
            </button>
          </div>
        </form>
        <div className="pt-6 text-center">
          <p className="text-gray-700">New User? <Link className="text-blue-400" to={'/signup'}>Register</Link></p>
        </div>
      </div>
    </div>
    )
}

export default Login