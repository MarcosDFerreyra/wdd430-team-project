import { Suspense } from "react";
import { sql } from "@/lib/db";

async function DbTest() {
  const rows = await sql`SELECT NOW()`;
  return <p>Database time: {String(rows[0].now)}</p>;
}

export default function Home() {
  return (
    <>
      <h1 className="text-xl">Welcome To CashTrail</h1>
      <Suspense fallback={<p>Connecting...</p>}>
        <DbTest />
      </Suspense>
    </>
  );
}