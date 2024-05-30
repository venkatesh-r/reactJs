const Contact = () => {
  return (
    <div className="p-4 m-4">
      <h1 className="my-4">Contact</h1>
      <form>
        <div>
          <label>Name</label>
          <input
            className="border border-slate-500 p-1 m-2"
            type="text"
            placeholder="Name"
          />
        </div>
        <div>
          <label>E-Mail</label>
          <input
            className="border border-slate-500 p-1 m-2"
            type="email"
            placeholder="Email"
          />
        </div>
        <button
          type="button"
          className="bg-black py-1 px-3 ml-7 mt-4 text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
