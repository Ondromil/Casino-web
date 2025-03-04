export default function Membership() {
  return (
    <>
      <div className="w-11/12 xl:w-5/6 2xl:w-3/4 max-w-[1280px] m-auto mt-12 text-center" id="membership">
        <div className="flex flex-col items-center font-medium">
          <h2>
            <b>Členství</b>
          </h2>
          <div className="w-[200px] h-[4px] bg-accent"></div>
        </div>
        {/* Cells */}
        <div className="flex flex-col lg:flex-row gap-6 mt-6 mb-12">
          {/* Cell 1 */}
          <div className="w-full lg:w-1/3 h-[18rem] bg-gradient-to-tr from-yellow-500 to-white from-[50%] rounded-xl border-[1px] border-white flex flex-col justify-center items-center">
            <h3>
              <b>Gold</b>
            </h3>
            <p>1 000 Kč</p>
            <button className="border-[2px] border-white rounded-md w-[90px] h-[40px] text-p mt-6">
              Více
            </button>
          </div>
          {/* Cell 2 */}
          <div className="w-full lg:w-1/3 h-[18rem] bg-gradient-to-tr from-blue-300 to-white from-[50%] rounded-xl border-[1px] border-white flex flex-col justify-center items-center">
            <h3>
              <b>Platinum</b>
            </h3>
            <p>2 500 Kč </p>
            <button className="border-[2px] border-white rounded-md w-[90px] h-[40px] text-p mt-6">
              Více
            </button>
          </div>
          {/* Cell 3 */}
          <div className="w-full lg:w-1/3 h-[18rem] bg-gradient-to-tr from-blue-400 to-white from-[60%] rounded-xl border-[1px] border-white flex flex-col justify-center items-center">
            <h3>
              <b>Diamond</b>
            </h3>
            <p>10 000 Kč </p>
            <button className="border-[2px] border-white rounded-md w-[90px] h-[40px] text-p mt-6">
              Více
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
