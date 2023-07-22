import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(
  req: Request,
  { params }: { params: { userId: string } }
) {
  try {
    const { userId } = auth();

    if (!userId || userId !== params.userId) {
      return new NextResponse("Unauthenticated", { status: 401 });
    }

    const body = await req.json();

    const { title, description, difficultyLevel, imageUrl } = body;

    // Create the puzzle with the specified userId
    const puzzle = await prismadb.puzzle.create({
      data: {
        title,
        description,
        difficultyLevel,
        imageUrl,
        userId: params.userId,
      },
    });

    return new NextResponse(JSON.stringify(puzzle), { status: 201 });
  } catch (error) {
    return new NextResponse("Internal error", { status: 500 });
  }
}
