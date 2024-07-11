"use client"
import React, { useState } from "react";
import { auth } from "@/firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { useTranslations } from "next-intl";
import { redirect } from "next/navigation";
import { useDispatch } from "react-redux";
import { userLogin, userLogout } from "@/lib/features/auth/authSlice";
import { postUserToDB } from "@/api/server";
import useAuth from "@/lib/Hooks/useAuth";
import { clearCart } from "@/lib/features/cart/cartSlice";

function page() {
  const t = useTranslations();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { currentUser } = useAuth();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(user)
      const userId = user.uid;
      const userMail = user.email;
      const newUser = {
        id: userId,
        email: userMail,
        username: username,
        baskets: []
      }
      console.log(newUser)
      await postUserToDB(newUser);
      dispatch(userLogin(user));

      toast.success("Signup successful!");
      redirect("/");
    } catch (err) {
      toast.error("Something went wrong!");

    }
  };
  const handleLogOut = async () => {
    try {
      dispatch(userLogout());
      dispatch(clearCart());
      toast.success("Logout successful!");
    } catch (err) {
      toast.error(err.message);
    }
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          {currentUser ? (<><h1>You are logged in. If You want <button onClick={handleLogOut}>logout</button>.</h1></>) :
            (
              <div className="card">
                <div className="card-body">
                  <h1 className="card-title text-center">Sign Up</h1>
                  <form onSubmit={handleSignup}>
                    <div className="form-group">
                      <label htmlFor="email">Name Surname</label>
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
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
                      Sign Up
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