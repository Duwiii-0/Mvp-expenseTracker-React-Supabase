import TextInput from "../components/textInput";
import Button from "../components/button";
import type {FormEvent, ChangeEvent } from "react";
import { useState } from "react";
import {supabase} from "../../utils/supabase";

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setRegister] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

      if (isRegister) {
        const { error: registerError } = await supabase.auth.signUp({email, password,});
        if (registerError) {
          console.error("Registration error:", registerError.message);
        } else {
          console.log("Registration successful");
        }
      } else {
        const { error: loginError } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (loginError) {
          console.error("Login error:", loginError.message);
        } else {
          console.log("Login successful");
        }
      }
  }
};

const Register = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-blue-950">
      <div className="flex flex-col justify-center gap-6 p-10 px-20 items-center bg-blue-900/60 rounded-4xl w-[35vw] h-[45vh]">
        <h1 className="text-4xl font-bold text-white mb-4">Welcome to blablabla</h1>
        <div className="flex flex-col gap-6 w-full justify-center items-center">
          <div className="flex flex-col gap-3 w-full justify-center items-center">
            <TextInput
              placeholder="email"
              name="email"
              required
            />
            <TextInput
              placeholder="password"
              name="password"
              required
            />
          </div>
          <Button label="Register"/>
          <div className="flex gap-2 text-white">
            Already have an account? <a className="text-blue-300 cursor-pointer underline" href="/Login">Login Here</a>
          </div>
        </div>

      </div>  
    </div>
  );
};

export default Register;