const CreateAdmin = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <form className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism">
        <div className="form-group">
          <label>
            <span className="font-satoshi font-semibold text-base text-gray-700">
              Full Name
            </span>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter full name"
              className="form_input"
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            <span className="font-satoshi font-semibold text-base text-gray-700">
              Email
            </span>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter email"
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
              placeholder="Enter password"
              className="form_input"
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            <span className="font-satoshi font-semibold text-base text-gray-700">
              Retype Password   
            </span>
            <input
              type="password"
              id="repassword"
              name="repassword"
              placeholder="Enter password"
              className="form_input"
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            <span className="font-satoshi font-semibold text-base text-gray-700">
              Role
            </span>
            <select
              id="role"
              name="role"
              className="form_input"
              required
            >
              <option value="admin">Admin</option>
              <option value="staff">Staff</option>
            </select>
          </label>
        </div>
        <button type="submit" className="black_btn">
          Create Admin Account
        </button>
      </form>
    </div>
  );
};

export default CreateAdmin;
