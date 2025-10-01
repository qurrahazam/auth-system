import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";

export async function GET() {
  try {
    await connectDB();

    const user = await User.create({
      email: "test01@example.com",
      username: "tester",
      password: "hashed_password_here",
    });

    return NextResponse.json({ message: "User created", user });
  } catch (err: any) {
    console.error("❌ API error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
