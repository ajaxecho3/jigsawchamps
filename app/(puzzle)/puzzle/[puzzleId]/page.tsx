import PuzzleContainter from "@/app/(user)/[userId]/(routes)/puzzles/components/puzzleContainter";
import Jigsaw from "@/components/puzzle";
import prismadb from "@/lib/prismadb";
import React from "react";

type Props = {
  params: {
    puzzleId: string;
  };
};

const Puzzle = async ({ params }: Props) => {
  const puzzle = await prismadb.puzzle.findUnique({
    where: {
      id: params.puzzleId,
    },
  });

  if (!puzzle) {
    return;
  }

  return (
    <div className="">
      <Jigsaw
        id={puzzle?.id}
        width={1300}
        height={600}
        pieceSize={100}
        imageUrl={puzzle.imageUrl}
      />
    </div>
  );
};

export default Puzzle;
