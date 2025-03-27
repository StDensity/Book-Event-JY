import { prisma } from "@/db/prisma";
import { PaymentStatus } from "@prisma/client";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  try {
    const { firstName, lastName, email, phone, paymentConfirmed } =
      await request.json();

    if (!firstName || !lastName || !email || !phone || !paymentConfirmed) {
      return NextResponse.json({
        status: "error",
        error: "All fields are required",
      });
    }

    const registration = await prisma.registration.create({
      data: {
        firstName,
        lastName,
        email,
        phone,
        paymentConfirmed: PaymentStatus.PENDING,
      },
    });
    return NextResponse.json({ status: "success", registration });
  } catch (error: any) {
    console.log(error);
    if (error.code === "P2002") {
      return NextResponse.json(
        {
          status: "error",
          error: "Email or phone already exists",
        },
        { status: 409 },
      );
    }
    return NextResponse.json({ status: "error", error }, { status: 400 });
  }
};

export const GET = async (request: Request) => {
  try {
    const registrations = await prisma.registration.findMany();
    return NextResponse.json({ registrations });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: "error", error }, { status: 400 });
  }
};
