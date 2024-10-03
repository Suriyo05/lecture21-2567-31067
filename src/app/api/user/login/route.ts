import { NextRequest, NextResponse } from "next/server";
import sleep from "sleep-promise";

import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  const { username, password } = body;

  // Get user from "real database"
  const user = null;

  if (!user) {
    return NextResponse.json(
      {
        ok: false,
        message: "Username or password is incorrect",
      },
      { status: 400 }
    );
  }

  const secret = process.env.JWT_SECRET || "This is another secret";

  //if found user, sign a JWT TOKEN
  const token = jwt.sign(
    { username, role: user.role, studentId: user.studentId },
    secret,
    { expiresIn: "8h" }
  );

  await sleep(1000);

  return NextResponse.json({ ok: true, token, username });
};
