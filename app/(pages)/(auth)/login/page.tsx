import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center gap-20">
      <Image
        src="https://images.pexels.com/photos/4769492/pexels-photo-4769492.jpeg"
        alt="Background"
        fill
        className="object-cover -z-10"
      />

      <div>
        <h1 className="text-4xl text-white font-bold">
          Mind<span className="text-[var(--primary-text-color)]">Nest</span>
        </h1>
      </div>

      <div className="w-80 p-6 bg-black bg-opacity-80 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-white">
          Iniciar sesión
        </h2>
        <form className="flex flex-col space-y-6">
          <div>
            <label
              htmlFor="username"
              className="block text-lg font-bold mb-2 text-white"
            >
              Usuario
            </label>
            <input
              id="username"
              type="text"
              className="w-full px-2 py-1 border-b-4 border-white bg-transparent text-white focus:outline-none focus:ring-0"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-lg font-bold mb-2 text-white"
            >
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-2 py-1 border-b-4 border-white bg-transparent text-white focus:outline-none focus:ring-0"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-3/6 py-2 bg-[var(--primary-text-color)] text-white rounded-full font-bold hover:bg-opacity-90"
            >
              Iniciar sesión
            </button>
          </div>
        </form>
        <p className="text-sm text-center mt-4 text-white font-bold">
          ¿No tienes cuenta?{" "}
          <a
            href="#"
            className="text-[var(--primary-text-color)] hover:underline"
          >
            Regístrate
          </a>
        </p>
      </div>
    </div>
  );
}
