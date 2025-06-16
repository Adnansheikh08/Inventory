import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebookF, faGoogle, faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
const LoginPage = () => {
  const navigate = useNavigate();
  const [SignIn, setSignIn] = useState({
    email: "",
    password: "",
  });

  const login = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5050/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(SignIn),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("id", data.uid);
        localStorage.setItem("name",data.name);
        console.log(data.name)
        toast.success("Logged in");
        navigate("/");
      } else {

        if (data.errors && Array.isArray(data.errors)) {
          data.errors.forEach((error) => {
            toast.error(error.msg);
          });
        } else {
          toast.error(data.error || "Invalid Credentials");
        }
      }
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignIn((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="container mx-60">
        <section className="bg-[#FAFAFA] bg-no-repeat bg-cover bg-[url(https://img.freepik.com/premium-vector/modern-sky-blue-gradient-banner-with-abstract-shapes_278222-3179.jpg)]">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="bg-[#FAFAFA] shadow-2xl  p-4 w-full rounded-lg sm:max-w-md xl:p-0 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl"> Sign in to your account </h1>
                <form className="space-y-4 md:space-y-6" onSubmit={login}>
                  <div>
                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                    <input type="email" name="email" id="email" className="border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="xyz@gmail.
                    com"
                    value={SignIn.email}
                    onChange={handleChange}
                    required="true" />
                  </div>
                  <div>
                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                    <input type="password" name="password" id="password" placeholder="••••••••" className="border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" value={SignIn.password}
                    onChange={handleChange} 
                    required="true" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                      </div>
                      <div className="ml-3 text-sm">
                        <label for="remember" className="">Remember me</label>
                      </div>
                    </div>
                    <a href="#" className="text-sm font-medium text-primary-600 hover:underline">Forgot password?</a>
                  </div>
                  <button type="submit" className="w-full text-white  bg-[#709BCE] hover:bg-blue-700 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                  <p className="text-sm font-light">
                    Don’t have an account yet? <Link to="/signuppage" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default LoginPage