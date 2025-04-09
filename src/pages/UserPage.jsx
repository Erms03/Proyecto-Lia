import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export const UserPage = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userData, setUserData] = useState({
    name: "María González",
    lastAccess: new Date().toLocaleString("es-ES", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }),
    balance: 12500.5,
    lastTransaction: {
      amount: 1500.75,
      date: new Date(Date.now() - 86400000).toLocaleString("es-ES", {
        // Ayer
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }),
      recipient: "Juan Pérez",
    },
  });

  useEffect(() => {
    const simulatedUserData = {
      name: "María González",
      lastAccess: new Date().toLocaleString("es-ES", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
      balance: 12500.5,
      lastTransaction: {
        amount: 1500.75,
        date: new Date(Date.now() - 86400000).toLocaleString("es-ES", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        }),
        recipient: "Juan Pérez",
      },
    };
    setUserData(simulatedUserData);
  }, []);

  const handleLogout = () => {
    console.log("Sesión cerrada");
    navigate("/login");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
        className="lg:h-16 lg:w-16 rounded-lg mt-[6px] ml-[6px] absolute top-0 left-0 z-10 sm:h-11 sm:w-11"
      />

      {/* Menú de navegación superior derecho */}
      <div className="absolute top-4 right-4 z-20 lg:visible sm:invisible">
        <nav className="flex space-x-6">
          <Link
            to="/user"
            className="text-white hover:text-emerald-400 font-medium transition-colors"
          >
            Inicio
          </Link>
          <Link
            to="/transactions"
            className="text-white hover:text-emerald-400 font-medium transition-colors"
          >
            Transacciones
          </Link>
          <Link
            to="/complaints"
            className="text-white hover:text-emerald-400 font-medium transition-colors"
          >
            Quejas
          </Link>
          <Link
            to="/profile"
            className="text-white hover:text-emerald-400 font-medium transition-colors"
          >
            Perfil
          </Link>
          <button
            onClick={handleLogout}
            className="text-white hover:text-emerald-400 font-medium transition-colors cursor-pointer"
          >
            Salir
          </button>
        </nav>
      </div>

      {/* Botón para abrir/cerrar menú lateral */}
      <button
        onClick={toggleMenu}
        className="fixed lg:left-4 sm:left-0 top-1/2 transform -translate-y-1/2 z-30 bg-emerald-700 hover:bg-emerald-600 text-white p-3 rounded-r-lg shadow-lg transition-all"
        style={{ top: "calc(50% + 100px)" }}
      >
        {isMenuOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {/* Menú lateral izquierdo */}
      <div
        className={`fixed left-0 top-0 h-full w-64 bg-black bg-opacity-90 z-20 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="p-6">
          <h2 className="text-2xl text-emerald-400 font-bold mb-8">
            Menú de Opciones
          </h2>

          <div className="space-y-4">
            <Link
              to="/update-data"
              className="block w-full bg-emerald-700 hover:bg-emerald-600 text-white font-bold py-3 px-4 rounded-lg transition-colors"
            >
              ACTUALIZAR MIS DATOS
            </Link>

            <Link
              to="/send-complaints"
              className="block w-full bg-emerald-700 hover:bg-emerald-600 text-white font-bold py-3 px-4 rounded-lg transition-colors"
            >
              ENVIAR QUEJAS/SUGERENCIAS
            </Link>

            <Link
              to="/transfer-money"
              className="block w-full bg-emerald-700 hover:bg-emerald-600 text-white font-bold py-3 px-4 rounded-lg transition-colors"
            >
              TRANSFERIR DINERO
            </Link>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="flex-grow flex flex-col items-center justify-center z-10 sm:m-6">
        <div className="bg-black bg-opacity-80 p-8 rounded-lg w-full max-w-2xl">
          {/* Mensaje de bienvenida */}
          <div className="text-center mb-8">
            <h1 className="lg:text-4xl sm:text-3xl text-white font-bold">
              ¡Bienvenid@,{" "}
              <span className="text-emerald-400">{userData.name}</span>!
            </h1>
            <p className="text-white mt-2">
              Último acceso:{" "}
              <span className="font-medium">{userData.lastAccess}</span>
            </p>
          </div>

          {/* Saldo disponible */}
          <div className="bg-black bg-opacity-90 p-6 rounded-lg mb-6">
            <p className="text-xl text-white mb-2 text-center">
              Saldo disponible:
            </p>
            <p className="text-4xl text-emerald-400 font-bold text-center">
              $
              {userData.balance.toLocaleString("es-MX", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
          </div>

          {/* Última transacción */}
          <div className="bg-black bg-opacity-90 p-6 rounded-lg">
            <p className="text-xl text-white mb-2">Última transacción:</p>
            <div className="flex justify-between items-center">
              <p className="text-2xl text-emerald-400 font-bold">
                $
                {userData.lastTransaction.amount.toLocaleString("es-MX", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
              <div className="text-right">
                <p className="text-white">
                  a {userData.lastTransaction.recipient}
                </p>
                <p className="text-gray-300 text-sm">
                  {userData.lastTransaction.date}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
