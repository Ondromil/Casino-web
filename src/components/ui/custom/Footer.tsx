export default function Footer() {
  return (
    <>
      <footer className="w-full h-[400px] lg:h-[320px] bg-primary">
        <div className="w-11/12 xl:w-5/6 2xl:w-3/4 max-w-[1280px] m-auto">
          <div className="flex flex-col gap-6 lg:flex-row justify-between items-center pt-12">
            <div className="flex gap-16">
              <ul className="flex flex-col gap-4">
                <li>
                  <a href="/">
                    <b>DOMŮ</b>
                  </a>
                </li>
                <li>
                  <a href="#about">
                    <b>O NÁS</b>
                  </a>
                </li>
                <li>
                  <a href="#games">
                    <b>HRY</b>
                  </a>
                </li>
                <li>
                  <a href="#services">
                    <b>SLUŽBY</b>
                  </a>
                </li>
                <li>
                  <a href="#membership">
                    <b>ČLENSTVÍ</b>
                  </a>
                </li>
              </ul>

              <ul className="flex flex-col gap-4">
                <li>
                  <a href="#map">
                    <b>MAPA</b>
                  </a>
                </li>
                <li>
                  <a href="#history">
                    <b>HISTORIE</b>
                  </a>
                </li>
              </ul>
            </div>

            <h3>
              <b>CASINO</b>
            </h3>
          </div>

          <div className="w-full h-[1px] bg-slate-300 mt-12"></div>
          <p className="text-center mt-2">© 2024 Lucky Jackpot</p>
        </div>
      </footer>
    </>
  );
}
