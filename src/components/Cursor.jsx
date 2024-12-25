const Cursor = () => {
  return (
    <div className="w-72 h-72 flex flex-wrap justify-center items-center blur-lg bg-white/10 rounded-full">
      <div className="h-52 w-64 bg-gradient-to-r radi from-pink-300 via-slate-500 to-purple-500 rounded-full animate-spin-slow blur-xl opacity-50"></div>
      {/* <div className="w-1/2 h-1/2 rounded-full opacity-40 blur-lg -rotate-12 bg-red-200 "></div>
      <div className="w-1/2 h-1/2 rounded-full opacity-40 blur-lg rotate-12 bg-cyan-300"></div>
      <div className="w-1/2 h-1/2 rounded-full opacity-40 blur-lg rotate-45 bg-purple-400"></div> */}
    </div>
  );
};

export default Cursor;
