import React from "react";
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';


const Login = () => {

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)
    }

  return (
    <div className="flex items-center my-28">
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
          <TextInput name="password" id="password1" type="password" required />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label className="text-teal-800" htmlFor="remember">Remember me</Label>
        </div>
        <Button className="bg-teal-600" type="submit">Submit</Button>
      </form>
    </div>
    <div className="text-center w-1/2">
        <h1 className="text-3xl font-bold">Login Now</h1>
        <p className="py-6">Welcome back!
                            We`re delighted to see you again. Sign in to your account and continue your journey with us. Your access to a world of opportunities and experiences awaits.

                            Let`s get started!</p>
    </div>
    </div>
  );
};

export default Login;
