// route.ts

import { db } from "@/db";
import { usersTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { userId } = await req.json();
  const ip = (req.headers.get("x-forwarded-for") ?? "127.0.0.1").split(",")[0];
  if (userId) {
    const [user] = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.clerkId, userId));
    if (user) {
      db.update(usersTable)
        .set({
          ipAddress: ip,
        })
        .where(eq(usersTable.clerkId, userId));
    }
  }
  console.log("Got New IP : ", ip);
  return NextResponse.json({ ip });
}
