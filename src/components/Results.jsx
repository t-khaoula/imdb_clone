import { Card } from "./Card";

export const Results = ({ results }) => {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4 w-full">
      {results.map((result) => (
        <Card key={result.id} result={result} />
      ))}
    </div>
  );
};
