import React, { useContext, useState } from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../../Providers/AuthProvider";
import { BiLowVision, BiShowAlt } from "react-icons/bi";

const Registration = () => {

  const { createUser, updateUser, goToTop } = useContext(AuthContext);

    const [showPassword, setShowPassword] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);
    const [registerError, setRegisterError] = useState('');
    const [registrationSuccess, setRegistrationSuccess] = useState('');

    const navigate = useNavigate();

    // set button disabled

    const handleButtonDisable = (e) => {
        const termsAccepted = e.target.checked;
        console.log(termsAccepted);
        // button disabled

        if (termsAccepted) {
            setIsDisabled(false)
        }
        else {
            setIsDisabled(true)
        }
    }


  const handleRegister = (e) => {
      e.preventDefault();
      // console.log(e.target.email.value)
      const form = e.target;
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;
      const photo = form.photo.value;
      console.log(name,email, password, photo);

      setRegisterError('')
        setRegistrationSuccess('')

        if (password.length < 6) {
            setRegisterError("Password should be at least 6 character long")
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError("Your Password should have at least one uppercase character")
            return;
        }
        else if (!/[^A-Za-z0-9]/.test(password)) {
            setRegisterError("Your Password must have one special character")
            return;
        }

        // create User

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                e.target.reset();

                updateUser(name, photo)
                    .then(() => {
                        swal({
                            position: 'top-center',
                            icon: 'success',
                            title: 'Registration Successfull',
                            showConfirmButton: false,
                            showCancelButton: false,
                            timer: 2000
                        });
                        // Swal.fire({
                        //     position: 'top-center',
                        //     icon: 'success',
                        //     title: 'Registration Successful',
                        //     showConfirmButton: false,
                        //     timer: 2500
                        //   })
                        //   navigate user
                        setTimeout(() => {
                            navigate('/')
                        }, 2000)
                    })
                    .catch()


            })
            .catch(error => {
                console.log(error.message);
                setRegisterError(error.message)
            });
  }

  return (
    <div className="lg:flex items-center my-14 lg:gap-28">
      <div className="text-center lg:text-right lg:w-1/2">
        <h1 className="text-5xl font-bold text-center">Register Now!</h1>
        <p className="py-6 text-center">
          We are thrilled to have you join us. Sign up now and unlock a world of
          possibilities. Experience the best of what we have to offer and
          connect with like-minded individuals. Your journey begins here. Let`s
          get started!
        </p>
      </div>

      <div className="lg:w-1/2">
        <form onSubmit={handleRegister} className="flex max-w-md flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email2" value="Your Name" />
            </div>
            <TextInput
              name="name"
              id="name2"
              type="text"
              placeholder="name@flowbite.com"
              required
              shadow
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email2" value="Your email" />
            </div>
            <TextInput
              name="email"
              id="email2"
              type="email"
              placeholder="name@flowbite.com"
              required
              shadow
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="photo-url" value="Photo URL" />
            </div>
            <TextInput
              name="photo"
              id="photo-url"
              type="text"
              required
              shadow
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password2" value="Your password" />
            </div>
          <div className="flex items-center relative">
          <TextInput
          className="w-full"
              name="password"
              id="password2"
              type={showPassword ? "text" : "password"}
              required
              shadow
            />
            <div className="absolute right-4">
                                        {
                                            !showPassword ? <BiLowVision className="cursor-pointer" size="20px" onClick={() => setShowPassword(!showPassword)}></BiLowVision> : <BiShowAlt className="cursor-pointer" size="20px" onClick={() => setShowPassword(!showPassword)}></BiShowAlt>
                                        }
                                    </div>
          </div>
          </div>
          <div className="flex items-center gap-2 my-6">
          <input onChange={handleButtonDisable} type="checkbox" name="terms" id="" required /> {isDisabled ? <span className="text-red-900 pl-3 font-semibold">Please Accept Our Terms & Conditions*</span> : <span className="text-green-900 pl-3 font-semibold">Terms & Conditions Accepted</span>}
          </div>
          <Button  disabled={isDisabled} className={`w-full  font-semibold text-white h-14  ${isDisabled ? "bg-gray-600" : " bg-gradient-to-l from-teal-600 to-teal-950 hover:scale-110 transition-transform"}`} type="submit">Register new account</Button>

          <div className="mx-auto mt-10 w-full px-10 text-center">
                                {
                                    registerError && <p className="text-red-900 italic font-semibold">{registerError}</p>
                                }
                                {
                                    registrationSuccess && <p className="text-green-900">{registrationSuccess}</p>
                                }
                            </div>

          <div className="text-center pt-10">
            <small className="font-medium text-black">
              Already Have an Account? Please
              <Link to="/login" className="text-green-900 ml-2 font-bold">
                <button onClick={goToTop}>Login</button>
              </Link>
            </small>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
