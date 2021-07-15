import { useForm } from "react-hook-form";
import Link from "next/link";
import Button from "components/Button";
import { useAuthProvider } from "hooks/useAuth";

const Loginform = () => {
  const { register, errors, handleSubmit } = useForm();
  const { signIn } = useAuthProvider()

  const onSubmit = (data) => {
    signIn({ email: data.email, password: data.password }).then(loginResponse => {
      if (loginResponse.status === 200) {
        console.log('loginResponse: ', loginResponse.data)
        // Navigate to Home Page
      }
    })
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="rounded-md shadow-sm">
        <label htmlFor="email" className="">
          Email address
        </label>
        <div className="mt-1 rounded-md shadow-sm">
          <input
            id="email"
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-sm text-black focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            type="email"
            name="email"
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
      <div className="mt-4 flex items-end">
        <div className="text-sm leading-5 text-right w-full">
          <Link href="/auth/reset-password">
            <a
              href="#"
              className="font-medium text-secondary-500 hover:text-secondary-500 focus:outline-none focus:underline transition ease-in-out duration-150"
            >
              Forgot your password?
            </a>
          </Link>
        </div>
      </div>
      <div className="mt-6">
        <span className="block w-full rounded-md shadow-sm flex justify-center items-center">
          {/* <Button type="submit" title="Log in" isSolid className="w-full" /> */}
          <button
            type="submit"
            className="border-none bg-secondary-500 px-6 py-2 my-2 text-center text-sm lg:text-normal cursor-pointer"
          >
            Log in
          </button>
        </span>
      </div>
    </form>
  );
};

export default Loginform;
