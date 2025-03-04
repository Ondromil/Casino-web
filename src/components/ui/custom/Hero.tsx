export default function Hero() {
  return (
    <>
      <div className="w-screen h-screen bg-hero bg-cover">
        <div className="w-screen h-screen z-40 text-center flex flex-col justify-center items-center">
          <h1 className="font-semibold leading-[6rem] ">Lucky Jackpot</h1>
          <p className=" font-thin mt-6 text-[2rem]">Síť luxusních kasín</p>
          <a href="#membership">
            <button className="w-[220px] h-[70px] bg-accent mt-24 rounded-lg text-[1.4rem] font-semibold">
              Registrace
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
