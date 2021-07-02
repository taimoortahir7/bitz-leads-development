import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useAuth } from "hooks/useAuth";
const ResetPasswordForm = () => {
  const { register, errors, handleSubmit } = useForm();
  const auth = useAuth();
  const router = useRouter();
  const onSubmit = (data) => {
    auth.sendPasswordResetEmail(data.email);
    router.push("/auth/login");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="rounded-md">
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-5 text-gray-700"
        >
          Email address
        </label>
        <div className="mt-1 rounded-md">
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
      <div className="mt-4">
        <span className="block w-full rounded-md shadow-sm">
          <button
            type="submit"
            className="px-6 py-2 my-2 w-full text-center text-sm lg:text-normal cursor-pointer border border-secondary-500 border-solid rounded-sm"
          >
            Send reset link
          </button>
        </span>
      </div>
    </form>
  );
};
export default ResetPasswordForm;
