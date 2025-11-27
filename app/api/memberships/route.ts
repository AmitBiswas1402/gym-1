import { connectToDB } from "@/db/db";
import Membership from "@/models/membership.model";

export async function GET() {
  try {
    await connectToDB();
    const members = await Membership.find().sort({ createdAt: -1 });
    return Response.json(members);
  } catch (error) {
    return new Response("Error fetching members", { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await connectToDB();

    const body = await req.json();
    const { name, email, programs, startDate, endDate, plans, joinAs } = body;

    if (!name || !email || !startDate || !endDate) {
      return new Response("Missing required fields", { status: 400 });
    }

    const newMember = await Membership.create({
      name,
      email,
      program: programs,
      startDate,
      endDate,
      plans,
      joinAs,
    });

    return Response.json(newMember, { status: 201 });
  } catch (error) {
    console.error(error);
    return new Response("Error creating member", { status: 500 });
  }
}
