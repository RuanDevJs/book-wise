import { findBookById } from "@/repositories/BookRepositories";
import { NextRequest, NextResponse } from "next/server";

interface IParams {
  params: {
    id: string;
  };
}

export async function GET(request: NextRequest, context: IParams) {
  const params = await context.params;

  try {
    const findBookFromDb = await findBookById(params.id);

    if (findBookFromDb === undefined) {
      throw new Error("Error on GET books from Database");
    }

    if (findBookFromDb && findBookFromDb._id) {
      return NextResponse.json({ book: findBookFromDb }, { status: 200 });
    }
  } catch (error) {
    if (error instanceof Error)
      return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
