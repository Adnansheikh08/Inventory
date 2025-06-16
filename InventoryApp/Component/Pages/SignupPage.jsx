import { Link } from 'react-router-dom';
const SignupPage = () => {
  return (
    <>
    <div className="container mx-60">
      <section className="bg-[#FAFAFA] bg-no-repeat bg-contain bg-[url(https://img.freepik.com/premium-vector/modern-sky-blue-gradient-banner-with-abstract-shapes_278222-3179.jpg)]">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="bg-[#FAFAFA] shadow-2xl  p-4 w-full rounded-lg sm:max-w-md xl:p-0 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl"> Create a new account </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                      <label for="name" className="block mb-2 text-sm font-medium text-gray-900">Your name</label>
                      <input type="name" name="name" id="name" className="border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="xyz" required=""/>
                  </div>
                  <div>
                      <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                      <input type="email" name="email" id="email" className="border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="xyz@gmail.com" required=""/>
                  </div>
                  <div>
                      <label for="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" className="border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                          </div>
                          <div className="ml-3 text-sm">
                            <label for="remember" className="">Remember me</label>
                          </div>
                      </div>
                  </div>
                  <button type="submit" className="w-full bg-[#709BCE] hover:bg-blue-700 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign up</button>
                  <p className="text-sm font-light">
                      Already have an account? <Link to ="/loginpage"className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign in</Link>
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

export default SignupPage