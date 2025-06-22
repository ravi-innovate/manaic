import { NextRequest, NextResponse } from "next/server"
import { getBlogsPaginated } from "@/app/api/apiMethod"

export async function GET(req: NextRequest) {
  const page = Number(req.nextUrl.searchParams.get("page") || "1")
  const blogs = await getBlogsPaginated(page)
  return NextResponse.json(blogs)
}
