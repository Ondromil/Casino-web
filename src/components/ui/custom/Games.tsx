"use client";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Card from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

export default function Games() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const imageSources = [
    "bg-[url('/images/roulette1.jpg')]",
    "bg-[url('/images/slotss.jpg')]",
    "bg-[url('/images/poker.jpg')]",
    "bg-[url('/images/blkjack.jpg')]",
  ];
  const titles = [
    "Ruleta",
    "Automaty",
    "Poker",
    "Blackjack"
  ]

  return (
    <div className=" pb-12" id="games">
      {/* Spacer */}
      <div className="w-11/12 xl:w-5/6 2xl:w-3/4 max-w-[1280px] m-auto">
        {/* Header */}
        <div className="flex flex-col items-center font-medium">
           <h2><b>Naše hry</b></h2>
           <div className="w-[200px] h-[4px] bg-accent"></div>
        </div>
        {/* Carousel*/}
        <Carousel className="w-full max-w-[1280px] m-auto text-center mt-6 " plugins={[plugin.current]}>
          <CarouselContent>
            {Array.from({ length: imageSources.length }).map((_, index) => (
              <CarouselItem key={index} className=" lg:basis-1/3">
                <Card bgImageClass={imageSources[index]} title={titles[index]} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
