import React from "react";
import Calendar from "@/components/Calendar";
type Props = {};

export default function MainPage({}: Props) {
  return (
    <main className="MainPage">
      <Calendar />
    </main>
  );
}
