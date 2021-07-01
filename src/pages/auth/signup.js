import Link from "next/link";
import Layout from "layout";
import { SignUpForm } from "components/forms";

const SignUpPage = () => {
  return (
    <Layout>
      <div className="min-h-screen flex items-center bg-gray-200">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="text-center mt-24">
            <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
              Sign up
            </h2>
            <p className="mt-2 text-center text-md text-gray-600">
              Already have an account?{" "}
              <Link href="/auth/login">
                <a href="#" className="text-secondary-500">
                  Log in
                </a>
              </Link>
            </p>
          </div>
          <div className="mt-8 bg-black py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <SignUpForm />
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default SignUpPage;
