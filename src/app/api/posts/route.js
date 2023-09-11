import { NextResponse } from "next/server";
import { posts } from "@/data/file";
export const GET = async (request) => {
  const url = new URL(request.url);

  try {
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const POST = async (request) => {
  const body = await request.json();

  try {
    posts.push(body);

    return new NextResponse("Post has been created", { status: 201 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
