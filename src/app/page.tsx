import About from "@/components/ui/custom/About";
import Hero from "@/components/ui/custom/Hero";
import Games from "@/components/ui/custom/Games";
import Services from "@/components/ui/custom/Services";
import Membership from "@/components/ui/custom/Membership";
import Maps from "@/components/ui/custom/Maps"
import Registration from "@/components/ui/custom/Registration";
import History from "@/components/ui/custom/History";

export default function Home() {
  return (
     <>
       <Hero/>
       <About/>
       <Games/>
       <Services/>
       <Registration/>
       <Membership/>
       <Maps/>
       <History/>
     </>
  );
}
