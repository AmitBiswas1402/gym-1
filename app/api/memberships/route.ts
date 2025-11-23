import { connectToDB } from "@/db/db";
import membershipModel from "@/models/membership.model";

export async function GET() {
  try {
    await connectToDB();
    const members = await membershipModel.find().sort({ createdAt: -1 });
    return Response.json(members);
  } catch (error) {
    return new Response("Error fetching members", { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await connectToDB();
    const body = await req.json();

    const { name, email, password, program } = body;

    if (!name || !email || !password || !program) {
      return new Response("All fields required", { status: 400 });
    }

    const newMember = await membershipModel.create(body);

    return Response.json(newMember, { status: 201 });
  } catch (error) {
    return new Response("Error creating number", { status: 500 });
  }
}
