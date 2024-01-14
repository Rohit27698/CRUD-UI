import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const [newUserData, setNewUserData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });

  const handleSignup = async (e) => {
    e.preventDefault();

    if (
      newUserData.name.length !== 0 &&
      newUserData.email.length !== 0 &&
      newUserData.phone.length !== 0 &&
      newUserData.password.length !== 0
    ) {
      try {
        await postData();
        toast.success("Account created. We've created your account for you.", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 5000,
        });
        navigate('/login');
      } catch (error) {
        console.log(error);
      }
    } else {
      toast.error('Please enter all fields', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      });
    }
  };

  async function postData() {
    try {
      await axios.post(
        `https://long-ruby-kingfisher-kilt.cyclic.cloud//posts`,
        newUserData
      );
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-purple-900">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl text-center mb-8 text-purple-900">Register</h1>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded border focus:outline-none focus:border-purple-500"
              value={newUserData.name}
              onChange={(e) =>
                setNewUserData({ ...newUserData, name: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-gray-700">Email address</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded border focus:outline-none focus:border-purple-500"
              value={newUserData.email}
              onChange={(e) =>
                setNewUserData({ ...newUserData, email: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-gray-700">Phone number</label>
            <input
              type="tel"
              className="w-full px-4 py-2 rounded border focus:outline-none focus:border-purple-500"
              value={newUserData.phone}
              onChange={(e) =>
                setNewUserData({ ...newUserData, phone: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <div className="flex items-center">
              <input
                type={showPassword ? 'text' : 'password'}
                className="w-full px-4 py-2 rounded border focus:outline-none focus:border-purple-500"
                value={newUserData.password}
                onChange={(e) =>
                  setNewUserData({
                    ...newUserData,
                    password: e.target.value,
                  })
                }
              />
              <button
                className="ml-2"
                onClick={() => setShowPassword((show) => !show)}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>
          <div className="space-y-4">
            <button
              onClick={handleSignup}
              className="w-full bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 focus:outline-none focus:shadow-outline-purple"
            >
              Sign up
            </button>
          </div>
          <div className="pt-6 text-center">
            <p className="text-gray-700">
              Already a user?{' '}
              <Link className="text-blue-400" to={'/login'}>
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
