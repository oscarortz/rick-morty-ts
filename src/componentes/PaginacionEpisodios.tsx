import React from "react";

interface Props {
  handlePrev: () => void;
  handleNext: () => void;
  next: string;
  prev: string;
}

export const PaginacionEpisodios = ({
  handlePrev,
  handleNext,
  next,
  prev,
}: Props) => {
  return (
    <div>
      <button onClick={handlePrev} disabled={!prev}>
        Prev
      </button>
      <button onClick={handleNext} disabled={!next}>
        Next
      </button>
    </div>
  );
};
