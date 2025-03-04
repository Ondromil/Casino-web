import Image from "next/image";

export default function About() {
  return (
    <div className="mt-16" id="about">
      {/* Spacer */}
      <div className="w-11/12 xl:w-5/6 2xl:w-3/4 max-w-[1280px] m-auto">
        {/* Header*/}
        <div>
          <h3 className="font-semibold">O nás</h3>
          <div className="w-[100px] h-[4px] bg-accent"></div>
        </div>
        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center mb-24">
          {/* Left section */}
          <div>
            {/* Text */}
            <div className="mt-4 w-[90%]">
              <p>
                Vítejte v našem kasinu, místě, kde se zábava, vzrušení a šance
                na výhru spojují v jedinečný zážitek. Naše kasino bylo založeno
                s cílem nabídnout hráčům špičkové služby, nejnovější technologie
                a přátelskou atmosféru. <br /> <br /> Pyšníme se širokou
                nabídkou her od klasických automatů až po stolní hry, které
                osloví jak začátečníky, tak zkušené hráče. Naše profesionální
                tým se stará o to, aby byl každý okamžik u nás nezapomenutelný.
                Přijďte si užít večer plný zábavy
              </p>
            </div>
          </div>
          {/* Image*/}
          <div className="max-w-[32rem] lg:w-[90rem] mt-6 lg:mt-0 m-auto">
            <Image
              src="/images/table1.jpg"
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
