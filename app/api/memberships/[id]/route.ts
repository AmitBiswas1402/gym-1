import { connectToDB } from "@/db/db";
import membershipModel from "@/models/membership.model";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectToDB();

    await membershipModel.findByIdAndDelete(params.id);

    return new Response("Member deleted", { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Error deleting member", { status: 500 });
  }
}
