import { useState } from 'react';
import { useForm } from "react-hook-form";
import { useAuthProvider } from "hooks/useAuth";

const SignUpForm = () => {
  const [ email, setEmail ] = useState('');
  const [ userStatus, setuserStatus ] = useState('new');
  const { register, errors, handleSubmit } = useForm();
  const { signUp, verifyEmail, getEmailOtp, verifyEmailOTP } = useAuthProvider()

  const onSubmit = (data) => {
    const resp = getEmailOtp({ email: data.email, userStatus })

    if (resp === 'sent') {
      // Navigate to OTP dialog screen

      // on OTP screen, after taking OTP input:
      
      // const otpResponse = verifyEmailOTP({ email: data.email, otp: otp })
      // console.log('otpResponse: ', otpResponse)
      // if (!otpResponse.error) {
      //   // navigate to payment plan page
      // }
    }

    // signUp({ name: data.name, email: data.email, password: data.password, otp: otp, accountType: data.accountType, userType: data.userType });
    console.log(data);
  };

  const checkUserEmailValidity = (event) => {
    setEmail(event.target.value)
    verifyEmail({ email: event.target.value }).then(data => {
      if (data.error) {
        // show ERROR dialog box
      }
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="rounded-md shadow-sm">
        <label htmlFor="name" className="">
          Name
        </label>
        <input
          id="name"
          className="appearance-none block w-full px-3 py-2 border border-secondary-300 rounded-sm text-black focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
          type="text"
          name="name"
          placeholder="your name"
          ref={register({
            required: "Please enter an name",
          })}
        />
        {errors.password && (
          <div className="mt-2 text-xs text-red-600">
            {errors.password.message}
          </div>
        )}
      </div>
      <div className="mt-6">
        <label htmlFor="email" className="">
          Email address
        </label>
        <div className="mt-1 rounded-md shadow-sm">
          <input
            id="email"
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-sm text-black focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            type="email"
            name="email"
            onBlur={checkUserEmailValidity}
            ref={register({
              required: "Please enter an email",
              pattern: {
                value: /(.+)@(.+){2,}\.(.+){2,}/,
                message: "Not a valid email",
              },
            })}
          />
          {errors.email && (
            <div className="mt-2 text-xs text-red-600">
              {errors.email.message}
            </div>
          )}
        </div>
      </div>
      <div className="mt-6">
        <label htmlFor="password" className="">
          Password
        </label>
        <div className="mt-1 rounded-md shadow-sm">
          <input
            id="password"
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-sm text-black focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            type="password"
            name="password"
            ref={register({
              required: "Please enter a password",
              minLength: {
                value: 6,
                message: "Should have at least 6 characters",
              },
            })}
          />
          {errors.password && (
            <div className="mt-2 text-xs text-red-600">
              {errors.password.message}
            </div>
          )}
        </div>
      </div>
      <div className="mt-6">
        <span className="block w-full rounded-md shadow-sm">
          <button
            type="submit"
            className="px-6 py-2 my-2 w-full text-center text-sm lg:text-normal cursor-pointer border border-secondary-500 border-solid rounded-sm"
          >
            Sign up
          </button>
        </span>
      </div>
    </form>
  );
};

export default SignUpForm;
