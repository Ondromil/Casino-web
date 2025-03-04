export default function Registration() {
  return (
    <>
      <div className="w-11/12 xl:w-5/6 2xl:w-3/4 max-w-[1280px] m-auto mt-6">
        <div className="flex flex-col items-center font-medium">
          <h2>
            <b>Registrace</b>
          </h2>
          <div className="w-[200px] h-[4px] bg-accent"></div>
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <p className="max-w-[900px] mt-6">
            Registrace na našem webu je rychlá, snadná a zcela bezproblémová.
            Postupujte podle jednoduchých kroků a získejte plný přístup ke všem
            hráčkým funkcím a bonusům, které naše kasino nabízí.
          </p>
          <form className="w-full flex flex-col items-center gap-6 mt-6">
            <input
              className="w-full sm:w-[400px] h-[50px] bg-zinc-700 rounded-lg"
              type="email"
              placeholder="E-mail"
              maxLength={99}
            ></input>
            <input
              className="w-full sm:w-[400px] h-[50px] bg-zinc-700 rounded-lg"
              type="tel"
              placeholder="Telefon"
              maxLength={99}
            ></input>
              <input
              className="w-full sm:w-[400px] h-[50px] bg-zinc-700 rounded-lg"
              type="password"
              placeholder="Heslo"
              maxLength={99}
            ></input>
            <button
              type="submit"
              className="w-[12rem] h-[4rem] rounded-lg m-auto bg-accent"
            >
              <b>REGISTRACE</b>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
