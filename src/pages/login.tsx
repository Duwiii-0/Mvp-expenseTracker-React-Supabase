import TextInput from "../components/textInput";
import Button from "../components/button";

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-blue-950">
      <div className="flex flex-col justify-center gap-6 p-10 px-20 items-center bg-blue-900/60 rounded-4xl w-[35vw] h-[45vh]">
        <h1 className="text-4xl font-bold text-white mb-4">Login</h1>
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
            Doesnt have an account? <a className="text-blue-300 cursor-pointer underline " href="/Register">Register Here</a>
          </div>
        </div>

      </div>  
    </div>
  );
};

export default Login;