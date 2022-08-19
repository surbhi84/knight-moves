const allPossibleLocation = (
  position: [number, number]
): [number, number][] => [
  [position[0] + 1, position[1] + 2],
  [position[0] + 2, position[1] + 1],
  [position[0] + 2, position[1] - 1],
  [position[0] + 1, position[1] - 2],
  [position[0] - 1, position[1] - 2],
  [position[0] - 2, position[1] - 1],
  [position[0] - 2, position[1] + 1],
  [position[0] - 1, position[1] + 2],
];

const isLegalPosition = (position: [number, number]): boolean =>
  position[0] <= 7 && position[0] >= 0 && position[1] <= 7 && position[1] >= 0;

const knightMoves = (position: [number, number]) =>
  isLegalPosition(position)
    ? allPossibleLocation(position).filter(isLegalPosition)
    : [];

export default knightMoves;
