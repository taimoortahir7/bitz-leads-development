import Link from "next/link";
import { ResetPasswordForm } from "components/forms";
import Layout from "layout";
const ResetPasswordPage = () => {
  return (
    <Layout>
      <div className="min-h-screen flex flex-col justify-center bg-gray-200">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="text-center mt-24">
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Reset password
            </h2>
            <p className="mt-2 text-center text-md text-gray-600">
              {"Didn't forgot? "}
              <Link href="/auth/login">
                <a href="#" className="text-secondary-500">
                  Login
                </a>
              </Link>
            </p>
          </div>
          <div className="mt-8 bg-black py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <ResetPasswordForm />
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default ResetPasswordPage;
