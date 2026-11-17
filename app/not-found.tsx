import type { Metadata } from "next";
import Header from "@/components/header/Header";
import ErrorSection from "@/components/sections/ErrorSection";

export const metadata: Metadata = {
  title: "[STU] - Page Not Found",
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main>
        <ErrorSection code="404" message="Page Not Found" />
      </main>
    </>
  );
}
