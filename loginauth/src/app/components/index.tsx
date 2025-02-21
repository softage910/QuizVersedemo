"use client";
import SignInPage from "./signin";
import Description from "./description"
import '../page.css';


export default function Login() {
  return(
    <div className="mainsection">
      <Description/>
      <SignInPage/>
    </div>
  );  
}

