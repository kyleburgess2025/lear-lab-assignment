"use client";
import Image from "next/image";
import { createContext } from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Kyle&apos;s Dashboard</h1>
      <h2 className="text-2xl font-bold">Welcome to my website! Here, we have a large number of cool things.</h2>
      <h3 className="text-2xl font-bold">Please navigate to ToDo to see a todo list and to blog to see my blog!</h3>
      <p>You currently have {JSON.parse(localStorage.getItem("tasks") || "[]").length} tasks to complete.</p>

    </main>
  );
}
