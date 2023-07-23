"use client";
// @ts-ignore
import * as headbreaker from "headbreaker";
import { useRef, useEffect } from "react";

export default function Jigsaw(props: {
  id: string;
  width: number;
  height: number;
  pieceSize: number;
  imageUrl: string;
}) {
  const puzzleRef = useRef(null);
  useEffect(() => {
    const puzzle = puzzleRef.current;
    let vangogh = new Image();

    vangogh.src = props.imageUrl;
    vangogh.onload = () => {
      // @ts-ignore
      const background = new headbreaker.Canvas(puzzle.id, {
        width: props.width,
        height: props.height,
        pieceSize: props.pieceSize,
        preventOffstageDrag: true,
        // fixed: true,
        proximity: 20,
        borderFill: 10,
        strokeWidth: 1.5,
        lineSoftness: 0.18,
        image: vangogh,
        outline: new headbreaker.outline.Rounded(),
        painter: new headbreaker.painters.Konva(),
        // optional, but it must be set in order to activate image scaling
      });

      background.adjustImagesToPuzzleHeight();
      background.autogenerate({
        horizontalPiecesCount: 6,
        verticalPiecesCount: 5,
      });
      background.draw();
    };
  }, [props.height, props.imageUrl, props.pieceSize, props.width]);

  return <div className=" bg-gray-200" ref={puzzleRef} id={props.id}></div>;
}
