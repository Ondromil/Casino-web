import Image from "next/image";

export default function Maps() {
  return (
    <>
      <div className="text-center" id="map">
        <div className="flex flex-col items-center font-medium">
          <h2>
            <b>Kde nás najít</b>
          </h2>
          <div className="w-[280px] h-[4px] bg-accent"></div>
        </div>
      </div>

      <div className="w-11/12 xl:w-5/6 2xl:w-3/4 max-w-[1280px] m-auto mt-12 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-[12rem]">
        <ul className="flex flex-col gap-2 lg:gap-6">
          <li className="flex items-center gap-2">
            <Image src="/icons/locat.svg" width={42} height={0} alt=""></Image>
            <p className="text-[1.2rem] lg:text-[1.8rem]">Zlatnická 184/2, 434 01 Most</p>
          </li>
          <li className="flex items-center gap-2">
            <Image src="/icons/phone.svg" width={42} height={0} alt=""></Image>
            <p className="text-[1.2rem] lg:text-[1.8rem]">+420 123 456 789</p>
          </li>
          <li className="flex items-center gap-2">
            <Image src="/icons/maill.svg" width={42} height={0} alt=""></Image>
            <p className="text-[1.2rem] lg:text-[1.8rem]">info@luckyjackpot.com</p>
          </li>
        </ul>

        <div className="text-center lg:min-w-[300px] text-[1rem] lg:text-[1.6rem]">
          <table>
            <caption className="font-[700] ml-6">Otevírací doba</caption>
            <tr className="text-left">
              <td className="font-[700] pr-12">Pondělí</td>
              <td>10:00 - 0:00</td>
            </tr>
            <tr className="text-left">
              <td className="font-[700]">Úterý</td>
              <td>10:00 - 0:00</td>
            </tr>
            <tr className="text-left">
              <td className="font-[700]">Středa</td>
              <td>10:00 - 0:00</td>
            </tr>
            <tr className="text-left">
              <td className="font-[700]">Čtvrtek</td>
              <td>8:00 - 0:00</td>
            </tr>
            <tr className="text-left">
              <td className="font-[700]">Pátek</td>
              <td>8:00 - 0:00</td>
            </tr>
            <tr className="text-left">
              <td className="font-[700]">Sobota</td>
              <td>8:00 - 0:00</td>
            </tr>
            <tr className="text-left">
              <td className="font-[700]">Neděle</td>
              <td>8:00 - 0:00</td>
            </tr>
          </table>
        </div>
      </div>

      <iframe
        src="https://frame.mapy.cz/s/gagecezaca"
        width="9999"
        height="420"
        className="mt-12"
      ></iframe>
    </>
  );
}
