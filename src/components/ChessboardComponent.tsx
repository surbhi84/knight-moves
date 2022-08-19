import Chessboard from "chessboardjsx";
import { useState } from "react";
import knightMoves, {
  convertPosition,
  convertPositionBack,
} from "./movesChessModule";

export const ChessboardComponent = () => {
  const [currentPosition, setCurrentPosition] = useState("");
  const [legalMovesStyle, setLegalMovesStyle] = useState({});

  const onSquareClickHandler = (square: string) => {
    setCurrentPosition(square);
    setLegalMovesStyle(
      createSquareStyleObject(knightMoves(convertPosition(square)))
    );
  };

  const onDropHandler = (targetSquare: string) => {
    setCurrentPosition(targetSquare);
    setLegalMovesStyle(
      createSquareStyleObject(knightMoves(convertPosition(targetSquare)))
    );
  };

  const createSquareStyleObject = (legalMoves: [number, number][]) =>
    legalMoves.reduce((accStyleObj: any, move: [number, number]) => {
      accStyleObj[convertPositionBack(move)] = { backgroundColor: "#99f6e4" };
      return accStyleObj;
    }, {});

  return (
    <div className=" sm:w-[80%] bg-slate-200 rounded-xl flex justify-center py-10">
      <Chessboard
        darkSquareStyle={{ backgroundColor: "black" }}
        lightSquareStyle={{ backgroundColor: "white" }}
        position={{ [currentPosition]: "wN" }}
        squareStyles={legalMovesStyle}
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
