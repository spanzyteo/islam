'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleLogin = () => {
    // Fake login validation
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('auth', 'true')
      router.push('/admin')
    } else {
      alert('Invalid credentials')
    }
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mt-32 h-[120px] w-[300px]">
        <Image src={'/logo.png'} alt="img" height={100} width={200} />
      </div>
      <div className="mt-10 flex flex-col items-start justify-center w-[450px] ">
        <h1 className="text-2xl font-semibold">Login</h1>
        <input
          className="border p-2 mt-8 border-black rounded-md w-full"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="border p-2 mt-10 border-black rounded-md w-full"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}
        className="bg-blue-500 text-white px-4 py-2 mt-8 rounded-sm hover:opacity-85" 
      >
        Login
      </button>
    </div>
  )
}

export default Login
