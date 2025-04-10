import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export const UserPage = () => {
  const navigate = useNavigate();
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

          <div className="relative group">
            <p className="text-white group-hover:text-emerald-400 font-medium transition-colors cursor-pointer relative">
              Operaciones
            </p>
            <div className="hidden bg-white text-back absolute top-6 -left-2 w-28 group-hover:block cursor-pointer font-medium rounded-sm overflow-hidden">
              <ul>
                <li className="p-2 hover:bg-emerald-400 transition-all">
                  Actualizar datos
                </li>
                <li className="p-2 hover:bg-emerald-400 transition-all">
                  Enviar quejas/sugerencias
                </li>
                <li className="p-2 hover:bg-emerald-400 transition-all">
                  Transferir Dinero
                </li>
              </ul>
            </div>
          </div>

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
            <p className="text-xl text-white mb-2 sm:text-center lg:text-start">
              Saldo disponible:
            </p>
            <p className="text-4xl text-emerald-400 font-bold sm:text-center lg:text-start">
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
