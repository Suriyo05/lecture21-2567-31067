// Get data from "Database file"
import { DB, readDB } from "@lib/DB";
import { Database } from "@lib/types";
import { NextResponse } from "next/server";
import sleep from "sleep-promise";

export const GET = async () => {
  await sleep(1000);
  readDB();
  return NextResponse.json({
    ok: true,
    // Type casting to "Database"
    courses: (<Database>DB).courses,
  });
};

// Get data from "Real database"
// import { NextResponse } from "next/server";

// export const GET = async () => {
//   return NextResponse.json({ ok: true });
// };
