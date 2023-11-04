const Login = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <form className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism">
        <div className="form-group">
          <label>
            <span className="font-satoshi font-semibold text-base text-gray-700">
              Username
            </span>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              className="form_input"
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            <span className="font-satoshi font-semibold text-base text-gray-700">
              Password
            </span>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="form_input"
              required
            />
          </label>
        </div>
        <button type="submit" className="black_btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
