import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

function VideoSection() {
  return (
    <div className="bg-black mb-16 mt-7 w-11/12 2xl:w-[85%] mx-auto rounded-lg min-h-80 py-5 lg:grid lg:grid-cols-[55%_45%]">
      <div className="pl-5 space-y-5 lg:pt-7 lg:pl-11 pr-4 mb-6">
        <Badge
          className="bg-white text-sm rounded-xl font-bold"
          variant="outline"
        >
          Búscate la vida
        </Badge>
        <h2 className="text-white font-bold text-xl lg:text-3xl">
          BLV PODCAST
        </h2>
        <p className="text-white opacity-75 text-sm leading-6 md:w-3/4 2xl:w-7/12">
          En BLV Podcast traemos invitados influyentes de diversas áreas para
          descubrir sus caminos hacia el éxito.
        </p>
        <Button className="text-black bg-white rounded-2xl hover:bg-white hover:text-black my-3 m">
          Ir A Nuestro Canal De Youtube
        </Button>
      </div>
      <div>
        <iframe
          className="w-11/12 mx-auto h-full sm:min-h-56 md:min-h-80"
          src={`https://www.youtube.com/embed/pBYjEcHA_SU`}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default VideoSection;
