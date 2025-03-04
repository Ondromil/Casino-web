import Image from "next/image";

export default function Card(props: any) {
   return (
      <div className={`w-full h-[280px]  rounded-lg flex items-center justify-center ${props.bgImageClass} bg-cover rounded-xl`}>
            <h3 className="font-bold">{props.title}</h3>
      </div>
   )
}