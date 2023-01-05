interface props {
  handleNext: () => void;
  handlePrev: () => void;
  next: string;
  prev: string;
}

export const PaginacionPersonajes = ({
  handlePrev,
  handleNext,
  prev,
  next,
}: props) => {
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
