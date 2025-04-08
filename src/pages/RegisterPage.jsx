import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Asegúrate de tener react-router-dom instalado

export const RegisterPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para procesar el formulario
    console.log("Formulario enviado");
    navigate("/login");
  };

  return (
    <div className="min-h-screen w-full flex flex-col relative">
      {/* Fondo con imagen y degradado */}
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

      {/* Logo */}
      <img
        src="/metro-logo.jpg"
        alt="Logo"
        className="h-16 w-16 rounded-lg mt-[6px] ml-[6px] absolute top-0 left-0 z-10"
      />

      {/* Título del banco */}
      <div className="flex flex-col items-center relative top-6 z-10">
        <p className="block text-5xl text-white font-bold mt-2 [text-shadow:_0_2px_4px_rgb(0_0_0_/_40%)]">
          BANCO METROPOLITANO
        </p>
      </div>

      {/* Formulario */}
      <div className="flex flex-col items-center justify-center flex-grow z-10 px-4">
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          {/* Título con transparenc  ia 80% */}
          <h2 className="text-3xl text-white text-center mb-6 font-bold [text-shadow:_0_2px_4px_rgb(0_0_0_/_40%)] opacity-80">
            CREAR CUENTA
          </h2>

          {/* Campos con fondo negro intenso y bordes verde oscuro */}
          <div className="space-y-4">
            <div>
              <label className="block text-white font-bold mb-2">
                Nombre completo:
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 bg-black border border-emerald-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-emerald-700"
                required
              />
            </div>

            <div>
              <label className="block text-white font-bold mb-2">
                Correo electrónico:
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 bg-black border border-emerald-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-emerald-700"
                required
              />
            </div>

            <div className="relative">
              <label className="block text-white font-bold mb-2">
                Contraseña:
              </label>
              <input
                type={showPassword ? "text" : "password"}
                className="w-full px-4 py-2 bg-black border border-emerald-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-emerald-700 pr-12"
                required
              />
              <button
                type="button"
                className="absolute right-2 top-9 h-8 w-8 flex items-center justify-center bg-emerald-700 hover:bg-emerald-600 rounded-md transition-colors"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
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

            <div className="relative">
              <label className="block text-white font-bold mb-2">
                Confirmar contraseña:
              </label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="w-full px-4 py-2 bg-black border border-emerald-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-emerald-700 pr-12"
                required
              />
              <button
                type="button"
                className="absolute right-2 top-9 h-8 w-8 flex items-center justify-center bg-emerald-700 hover:bg-emerald-600 rounded-md transition-colors"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
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

            {/* Botón verde oscuro */}
            <div className="pt-4 flex justify-center">
              <button
                type="submit"
                className="w-1/2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-opacity-50 transition duration-200"
                onSubmit={handleSubmit}
              >
                CREAR CUENTA
              </button>
            </div>

            {/* Enlace para regresar a autenticación */}
            <div className="flex justify-center items-center gap-2 text-white">
              <span className="inline mr-10 text-white">
                ¿Ya tienes una cuenta?
              </span>
              <Link
                to="/login" // Ajusta esta ruta según tu configuración
                className="font-bold text-emerald-400 hover:text-emerald-300 underline transition-colors cursor-pointer"
              >
                Inicia sesión aquí
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
