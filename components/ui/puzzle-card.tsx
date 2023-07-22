import { Puzzle } from "@prisma/client";
import Image from "next/image";
import React from "react";

type Props = {
  puzzle: Puzzle;
};

const PuzzleCard = ({ puzzle }: Props) => {
  return (
    <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
      <div className=" aspect-square rounded-xl bg-gray-100 relative">
        <Image
          alt="Image"
          src={puzzle?.imageUrl}
          fill
          className=" aspect-square object-cover rounded-md"
        />
      </div>
      <div>
        <p className=" font-semibold text-lg">{puzzle.title}</p>
        <p className="  text-sm text-gray-500">{puzzle.description}</p>
      </div>
    </div>
  );
};

export default PuzzleCard;
