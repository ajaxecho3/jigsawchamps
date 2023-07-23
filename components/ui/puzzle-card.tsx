import { Puzzle } from "@prisma/client";
import Image from "next/image";
import React from "react";

type Props = {
  puzzle: Puzzle;
};

const PuzzleCard = ({ puzzle }: Props) => {
  const difficulty = (value: string) => {
    if (value === "1") {
      return "Easy";
    }
    if (value === "2") {
      return "Medium";
    }
    if (value === "3") {
      return "Hard";
    }
  };
  return (
    <div className="bg-white group cursor-pointer rounded-xl border">
      <div className=" aspect-square rounded-xl bg-gray-100 relative">
        <Image
          alt="Image"
          src={puzzle?.imageUrl}
          fill
          className=" aspect-square object-cover rounded-t-md"
        />
      </div>
      <div className="px-3">
        <p className=" font-semibold text-lg">{puzzle.title}</p>
        <p className="  text-sm text-gray-500">{puzzle.description}</p>
        <p>{difficulty(puzzle.difficultyLevel)}</p>
      </div>
    </div>
  );
};

export default PuzzleCard;
