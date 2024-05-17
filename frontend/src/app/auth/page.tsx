"use client"
import React, { useState } from "react";
import styles from "@/styles/auth.module.css";
import { useRouter } from 'next/navigation'


const Auth = () => {

const router = useRouter();
    
const [username,setUsername] = useState<string>("")
const [email, setEmail] = useState<string>("")
const [password, setPassword] = useState<string>("")







const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
      const response = await fetch('http://127.0.0.1:8000/auth/signup/', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username,email, password }),
      });
      const data = await response.json();

      if (response.ok) {
        router.push('/dashboard'); 
    } 

  } catch (error) {
      console.error('Error:', error);
  }
};









  return (
    <div className={styles.container}>
       <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                autoComplete="off"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Sign Up</button>
        </form>
    </div>
  );
};

export default Auth;
