import Image from "next/image";

export default function Services() {
  return (
    <>
      <div className="w-full bg-gradient-to-tr from-primary to-green-700 from-[20%] min-h-[800px] pb-24" id="services">
        {/* Spacer */}
        <div className="w-11/12 xl:w-5/6 2xl:w-3/4 max-w-[1280px] m-auto">
          {/* Title */}
          <h2 className="text-h2 font-semibold text-center pt-24">Služby</h2>
          {/* Content */}
          <div className="text-h4 mt-16">
            <ul className="flex flex-col items-center justify-center gap-12">
              <li className="text-center">
                <Image
                  src="/icons/restaurant.svg"
                  width={80}
                  height={0}
                  alt="smile-icon"
                  className="m-auto"
                />
                <h3>
                  <b>Restaurace</b>
                </h3>
                <p className="text-p w-[80%] m-auto mt-2">
                  Naše exkluzivní restaurace je srdcem gastronomického zážitku
                  našeho kasina. Nabízíme prvotřídní obsluhu a široký výběr
                  pokrmů, které potěší i ty nejnáročnější gurmány. Naše kuchyně
                  propojuje tradiční recepty s moderní gastronomií a zaručuje
                  nezapomenutelný zážitek.
                </p>
              </li>
              <li className="text-center">
                <Image
                  src="/icons/torunament.svg"
                  width={80}
                  height={0}
                  alt="qualitycheck-icon"
                  className="m-auto"
                />
                <h3>
                  <b>Turnaje</b>
                </h3>
                <p className="text-p w-[80%] m-auto mt-2">
                  V našem kasinu pořádáme pravidelné turnaje, které přinášejí
                  napětí, vzrušení a šanci na skvělé výhry. Ať už jste zkušený
                  hráč nebo nováček, naše turnaje jsou skvělou příležitostí
                  vyzkoušet své dovednosti, užít si přátelskou atmosféru a
                  poměřit se s ostatními hráči.
                </p>
              </li>
              <li className="text-center">
                <Image
                  src="/icons/pool.svg"
                  width={80}
                  height={0}
                  alt="improvement-icon"
                  className="m-auto"
                />
                <h3>
                  <b>VIP Bazén</b>
                </h3>
                <p className="text-p w-[80%] m-auto mt-2">
                  Zažijte exkluzivní relaxaci a prvotřídní komfort v našem VIP
                  nudabazénu, který je součástí luxusního zážitku v našem
                  kasinu. Tento jedinečný prostor je určen pro hosty, kteří
                  hledají dokonalý odpočinek v diskrétním a elegantním
                  prostředí.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
