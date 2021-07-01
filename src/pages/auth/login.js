import React from "react";
import Layout from "layout";
import Link from "next/link";

import { Loginform } from "components/forms";

const LoginPage = () => {
  return (
    <Layout>
      <div className="min-h-screen flex flex-col justify-center bg-gray-200">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="text-center mt-24">
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Log in
            </h2>
            <p className="mt-2 text-center text-md text-gray-600">
              {"Don't have an account? "}
              <Link href="/auth/signup">
                <a href="#" className="text-secondary-500">
                  Sign Up
                </a>
              </Link>
            </p>
          </div>
          <div className="mt-8 bg-black py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <Loginform />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;
