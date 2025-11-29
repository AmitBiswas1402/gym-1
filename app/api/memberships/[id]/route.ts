import { connectToDB } from "@/db/db";
import membershipModel from "@/models/membership.model";
import { NextRequest } from "next/server";

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectToDB();

    const body = await req.json();

    const updatedMember = await membershipModel.findByIdAndUpdate(
      params.id,
      body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedMember) {
      return new Response("Member not found", { status: 404 });
    }

    return Response.json(updatedMember, { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Error updating member", { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
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
