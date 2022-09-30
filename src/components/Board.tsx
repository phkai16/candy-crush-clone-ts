import React from "react";
import { useAppSelector } from "../store/hooks";
import Title from "./Title";

function Board() {
  const board = useAppSelector(({ candyCrush: { board } }) => board);
  const boardSize = useAppSelector(
    ({ candyCrush: { boardSize } }) => boardSize
  );

  return (
    <div
      className="flex flex-wrap row-lg"
      style={{ width: `${6.25 * boardSize}rem` }}
    >
      {board.map((candy: string, index: number) => (
        <Title candy={candy} key={index} candyId={index} />
      ))}
    </div>
  );
}

export default Board;
