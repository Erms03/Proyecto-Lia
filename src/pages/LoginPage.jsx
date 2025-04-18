import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  function handleLogin() {
    navigate("/user");
  }

  return (
    <div className="h-screen w-full flex flex-col relative">
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-[url(/background.png)] bg-cover bg-center absolute inset-0" />
        <div
          className="w-full h-full absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 70%, rgba(0,0,0,0.9) 100%)",
          }}
        />
      </div>

      <img
        src="/metro-logo.jpg"
        alt="Logo"
        className="lg:h-16 lg:w-16 rounded-lg mt-[6px] ml-[6px] absolute top-0 left-0 z-10 sm:w-11 sm:h-11"
      />

      <div className="flex flex-col items-center relative lg:top-6 z-10 sm:top-24">
        <p className="block lg:text-5xl text-white font-normal opacity-80 sm:text-3xl">
          BIENVENIDO
        </p>
        <p className="block lg:text-5xl text-white font-bold mt-2 [text-shadow:_0_2px_4px_rgb(0_0_0_/_40%)] sm:text-2xl">
          AL BANCO METROPOLITANO
        </p>
      </div>

      <div className="flex flex-col items-start justify-center flex-grow z-10 lg:pl-16 lg:mt-24 sm:p-2 sm:mt-12">
        <div className="w-full max-w-lg px-4 sm:flex sm:flex-col sm:gap-3">
          <div className="mb-6">
            <label className="block text-white text-xl font-bold mb-3 text-left">
              Correo electrónico:
            </label>
            <input
              type="email"
              placeholder="ejemplo@bancometropolitano.com"
              className="w-full px-4 py-2 bg-black border border-emerald-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-emerald-700"
            />
          </div>

          <div className="relative mb-8">
            <label className="block text-white text-xl font-bold mb-3 text-left">
              Contraseña:
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Ingrese su contraseña"
              className="w-full px-4 py-2 bg-black border border-emerald-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-emerald-700 pr-12"
            />
            <button
              type="button"
              className="absolute right-2 top-11 h-8 w-8 flex items-center justify-center bg-emerald-700 hover:bg-emerald-600 rounded-lg transition-colors"
              onClick={() => setShowPassword(!showPassword)}
            >
              {!showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path
                    fillRule="evenodd"
                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                    clipRule="evenodd"
                  />
                  <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                </svg>
              )}
            </button>
          </div>

          <div className="flex justify-center mb-8">
            <button
              className="cursor-pointer px-8 py-3 bg-emerald-700 hover:bg-emerald-800 rounded-lg font-bold text-white uppercase tracking-wide transition-colors shadow-lg "
              onClick={handleLogin}
            >
              INGRESAR
            </button>
          </div>

          <div className="flex justify-center items-center gap-2 text-white">
            <span>¿No tiene cuenta?</span>
            <Link
              to="/register"
              className="font-bold text-emerald-400 hover:text-emerald-300 underline transition-colors cursor-pointer"
            >
              Regístrese aquí
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
