"use client"
import React, { useState } from "react";
import { auth } from '@/firebase/firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { useTranslations } from 'next-intl';
import { redirect } from "next/navigation";
import { useDispatch } from "react-redux";
import { userLogin, userLogout } from '@/lib/features/auth/authSlice';
import useAuth from "@/lib/Hooks/useAuth";

function page() {
  const t = useTranslations();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { currentUser } = useAuth();


  const dispatch = useDispatch();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      dispatch(userLogin(user));
      toast.success("Login successful!");
      redirect("/")
    } catch (err) {
      toast.error(err.message);
    }
  };
  const handleLogOut = async () => {
    try {
      dispatch(userLogout());
      toast.success("Logout successful!");
    } catch (err) {
      toast.error(err.message);
    }
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          {currentUser ? (<><h1>You are logged in. If You want <button onClick={handleLogOut}>logout</button>.</h1></>) : (
            <div className="card">
              <div className="card-body">
                <h1 className="card-title text-center">Login Page</h1>
                <form onSubmit={handleLogin}>
                  <div className="form-group">
                    <label htmlFor="email">E mail</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">
                    Login
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default page;