import Chessboard from "chessboardjsx";
import { useState } from "react";

export const ChessboardComponent = () => {
  const [currentPosition, setCurrentPosition] = useState("");

  const onSquareClickHandler = (square: string) => {
    setCurrentPosition(square);
  };

  const onDropHandler = (targetSquare: string) => {
    setCurrentPosition(targetSquare);
  };

  return (
    <div className=" sm:w-[80%] bg-teal-300 rounded-xl flex justify-center py-10">
      <Chessboard
        darkSquareStyle={{ backgroundColor: "black" }}
        lightSquareStyle={{ backgroundColor: "white" }}
        position={{ [currentPosition]: "wN" }}
        onSquareClick={(square) => onSquareClickHandler(square)}
        onDrop={({
          targetSquare,
        }: {
          sourceSquare: string;
          targetSquare: string;
          piece: string;
        }) => {
          onDropHandler(targetSquare);
        }}
      />
    </div>
  );
};
