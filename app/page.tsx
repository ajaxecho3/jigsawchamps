import PuzzleCard from "@/components/ui/puzzle-card";
import prismadb from "@/lib/prismadb";

export default async function Home() {
  const puzzles = await prismadb.puzzle.findMany();
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
      {puzzles.map((puzzle) => (
        <PuzzleCard key={puzzle.id} puzzle={puzzle} />
      ))}
    </div>
  );
}
