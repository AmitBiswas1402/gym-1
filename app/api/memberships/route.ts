import { connectToDB } from "@/lib/db";
import Membership from "@/models/membership.model";


export async function GET() {
    await connectToDB();

    const plans = await Membership.find();

    return Response.json(plans);
}

export async function POST(req: Request) {
    await connectToDB();

    const data = await req.json();
    const plan = await Membership.create(data);
    return Response.json(plan);
}