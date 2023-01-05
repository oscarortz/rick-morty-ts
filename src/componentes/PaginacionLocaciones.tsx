interface Props {
  handlePrev: () => void;
  handleNext: () => void;
  prev: string;
  next: string;
}

export const PaginacionLocaciones = ({
  handlePrev,
  handleNext,
  prev,
  next,
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
