"use client";

import Header from "@/components/header/Header";
import ErrorSection from "@/components/sections/ErrorSection";

export default function ErrorPage() {
  return (
    <>
      <title>[STU] - Server Error</title>
      <Header />
      <main>
        <ErrorSection code="500" message="Server Error" />
      </main>
    </>
  );
}
