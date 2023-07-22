import Heading from "@/components/ui/heading";

import React from "react";
import CreatePuzzle from "./components/create-puzzle";
import { Separator } from "@/components/ui/separator";
import prismadb from "@/lib/prismadb";
import Image from "next/image";
import PuzzleCard from "@/components/ui/puzzle-card";

type PuzzlesPageProps = {
  params: {
    userId: string;
  };
};

const PuzzlesPage = async ({ params }: PuzzlesPageProps) => {
  const puzzles = await prismadb.puzzle.findMany({
    where: {
      userId: params.userId,
    },
  });

  return (
    <div className=" space-y-4">
      <Heading title="Create Puzzle" description="" />
      <CreatePuzzle
        params={{
          userId: params.userId,
        }}
      />
      <Separator />

      <Heading title={`Puzzles(${puzzles.length})`} description="" />
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {puzzles.map((puzzle) => (
          <PuzzleCard key={puzzle.id} puzzle={puzzle} />
        ))}
      </div>
    </div>
  );
};

export default PuzzlesPage;
