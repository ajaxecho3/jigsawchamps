"use client";
import Jigsaw from "@/components/puzzle";
import React from "react";

type Props = {
  id: string;
  imageUrl: string;
};

const PuzzleContainter = ({ id, imageUrl }: Props) => {
  return (
    <Jigsaw
      id={id}
      imageUrl={imageUrl}
      width={800}
      height={800}
      pieceSize={100}
    />
  );
};

export default PuzzleContainter;
