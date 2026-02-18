import { NavLink, useRouteError } from "react-router-dom";

const Errorpage = () => {
  const error = useRouteError();

  const errorMessage =
    error?.status === 404
      ? "The page you're looking for doesn't exist."
      : "Something went wrong. Please try again later.";

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-xl">

        {/* Error Code */}
        <h1 className="text-7xl font-extrabold bg-linear-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent mb-4">
          {error?.status || "Error"}
        </h1>

        {/* Message */}
        <p className="text-gray-300 text-lg mb-6">
          {errorMessage}
        </p>

        {/* Extra Info (optional debug) */}
        {error?.statusText && (
          <p className="text-sm text-gray-500 mb-6">
            {error.statusText}
          </p>
        )}

        {/* Back Home Button */}
        <NavLink to="/">
          <button
            className="px-6 py-3 rounded-xl 
                       bg-linear-to-r from-cyan-500 to-blue-600
                       text-white font-medium
                       hover:from-cyan-400 hover:to-blue-500
                       transition-all duration-300
                       hover:shadow-lg hover:shadow-cyan-500/30"
          >
            Go Back Home
          </button>
        </NavLink>
      </div>
    </section>
  );
};

export default Errorpage;
