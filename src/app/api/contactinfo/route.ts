// app/api/contactinfo/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const contactInfo = {
      name: "Harshil Chudasama",
      email: "Harshil_c@hotmail.com",
      linkedin: "https://www.linkedin.com/in/harshil-c",
      phone: "647-898-5470",
      github: "https://github.com/QHarshil"
    };

    return NextResponse.json(contactInfo);
  } catch (error) {
    console.error("Error fetching contact info:", error);
    return NextResponse.json({ error: "Failed to fetch contact info" }, { status: 500 });
  }
}
