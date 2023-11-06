import React, { useContext, useState } from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Providers/AuthProvider";
import swal from "sweetalert";
import { BiLowVision, BiShowAlt } from "react-icons/bi";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");

  const { signInUser, signInWithGoogle, goToTop } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    setLoginError("");

    signInUser(email, password)
      .then(() => {
        swal({
          position: "top-center",
          icon: "success",
          title: "Successfully Signed In",
          showConfirmButton: false,
          showCancelButton: false,
          timer: 2000,
        });
        // navigate user
        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, 2000);
      })
      .catch(() => {
        setLoginError("Invalid User. Please Check Email or Password Again");
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        swal({
          position: "top-center",
          icon: "success",
          title: "Successfully Logged In",
          showConfirmButton: false,
          showCancelButton: false,
          timer: 2000,
        });
        // navigate user
        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, 2000);
      })
      .catch((error) => {
        setLoginError(error.message);
      });
  };

  return (
    <div className="flex items-center my-16">
      <div className="w-1/2">
        <form onSubmit={handleLogin} className="flex max-w-md flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              name="email"
              id="email1"
              type="email"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <div className="flex items-center relative">
              <TextInput
              className="w-full"
                name="password"
                id="password1"
                type={showPassword ? "text" : "password"}
                required
              />
              <div className="absolute right-4">
                {!showPassword ? (
                  <BiLowVision
                    className="cursor-pointer"
                    size="20px"
                    onClick={() => setShowPassword(!showPassword)}
                  ></BiLowVision>
                ) : (
                  <BiShowAlt
                    className="cursor-pointer"
                    size="20px"
                    onClick={() => setShowPassword(!showPassword)}
                  ></BiShowAlt>
                )}
              </div>
            </div>
          </div>

          <div className="mx-auto mb-4 pt-4  w-full px-10 text-center">
                                {
                                    loginError && <p className="text-rose-800 italic text-bold">{loginError}</p>
                                }
                            </div>

          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label className="text-teal-800" htmlFor="remember">
              Remember me
            </Label>
          </div>
          <Button className="bg-teal-600 hover:scale-110 transition-transform" type="submit">
            Submit
          </Button>

          <div className="flex flex-col justify-between mt-10 mb-6 space-y-6 lg:space-y-0">
            <button
              onClick={handleGoogleSignIn}
              className="text-black btn btn-outline rounded-lg bg-slate-300 p-2 hover:rounded-none capitalize flex justify-center items-center gap-4 hover:scale-110 transition-transform"
            >
              <FcGoogle></FcGoogle>
              Sign in with Google
            </button>
          </div>

          <div className="text-center pt-6">
            <small className="font-medium text-black">
              New to this Website? Please
              <Link to="/registration" className="text-red-700 ml-1">
                <button onClick={goToTop}>Register</button>
              </Link>
            </small>
          </div>
        </form>
      </div>
      <div className="text-center w-1/2">
        <h1 className="text-3xl font-bold">Login Now</h1>
        <p className="py-6">
          Welcome back! We`re delighted to see you again. Sign in to your
          account and continue your journey with us. Your access to a world of
          opportunities and experiences awaits. Let`s get started!
        </p>
      </div>
    </div>
  );
};

export default Login;
