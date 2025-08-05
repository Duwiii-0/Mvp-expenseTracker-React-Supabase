import TextInput from "../components/textInput";
import Button from "../components/button";
import type { FormEvent, ChangeEvent } from "react";
import { useState } from "react";
import supabase from "../../utils/supabase";

const Register = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSignUp) {
      const { error: signUpError } = await supabase.auth.signUp({
        email,
        password,
      });
      if (signUpError) {
        console.error("Error signing up:", signUpError.message);
        return;
      }
    } else {
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (signInError) {
        console.error("Error signing up:", signInError.message);
        return;
      }
    }
  }
  return (
    <div className="flex items-center justify-center h-screen bg-blue-950">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center gap-6 p-10 px-20 items-center bg-blue-900/60 rounded-4xl w-[35vw] h-[45vh]"
      >
        <h1 className="text-4xl font-bold text-white mb-4">Welcome to blablabla</h1>

        <div className="flex flex-col gap-3 w-full justify-center items-center">
          <TextInput
            placeholder="email"
            name="email"
            required
            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          />
          <TextInput
            placeholder="password"
            name="password"
            required
            type="password"
            onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          />
        </div>

        <Button label="Register" />
        <div className="flex gap-2 text-white">
          Already have an account?{" "}
          <a className="text-blue-300 cursor-pointer underline" href="/login">
            Login Here
          </a>
        </div>
      </form>
    </div>
  );
};

export default Register;
