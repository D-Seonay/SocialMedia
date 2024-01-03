import { Outlet, Navigate } from 'react-router-dom'

const AuthLayout = () => {

  const isAuth = false;

  return (
    <>
      {isAuth ? (
      <Navigate to="/" /> )
      : (
      <>
        <section className="flex flex-col items-center justify-center w-full h-full">
          <Outlet />
        </section>
    </>
      )}
    </>

  )
}

export default AuthLayout