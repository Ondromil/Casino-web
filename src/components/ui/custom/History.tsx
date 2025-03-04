import Image from "next/image";

export default function History() {
  return (
    <div className="mt-16" id="history">
      {/* Spacer */}
      <div className="w-11/12 xl:w-5/6 2xl:w-3/4 max-w-[1280px] m-auto">
        {/* Header*/}
        <div>
          <h3 className="font-semibold">Historie</h3>
          <div className="w-[100px] h-[4px] bg-accent"></div>
        </div>
        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center justify-center mb-24">
          {/* Left section */}
          <div>
            {/* Text */}
            <div className="mt-4 w-[90%]">
              <p>
                Kasino Lucky Jackpot bylo založeno v roce 1998 jako malé herní
                centrum s několika hracími automaty a ruletovým stolem. Díky své
                přívětivé atmosféře a zaměření na zábavu si rychle získalo
                popularitu mezi návštěvníky a začalo se rozrůstat. <br/><br/> Dnes
                je Lucky Jackpot známé jako jedno z předních kasin v regionu,
                které nabízí širokou škálu her od klasických automatů a
                pokerových stolů až po moderní online platformu. S důrazem na
                fair play a jedinečný zážitek si kasino drží svou pověst místa,
                kde má štěstí každý šanci.
              </p>
            </div>
          </div>
          {/* Image*/}
          <div className="max-w-[32rem] lg:w-[90rem] mt-6 lg:mt-0 m-auto">
            <Image
              src="/images/casino.jpg"
              className="rounded-xl lg:ml-12"
              width={999}
              height={0}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
