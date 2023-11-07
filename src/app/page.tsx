"use client";
import React, { useState } from "react";
import Calendar from "@/components/Calendar/Calendar";
import Radiobox from "@/components/RadioBox/Radiobox";
import Alert from "@/components/Alert/Alert";
import CheckBox from "@/components/CheckBox/CheckBox";
import ConfirmAlert from "@/components/ConfirmAlert/ConfirmAlert";

type Props = {};

export default function MainPage({}: Props) {
  return (
    <main className="MainPage">
      <CheckBox text="체크" />
      {/* <Calendar />
      <Radiobox text="라디오" />
      <Alert title="ALERT 제목입니다" text="ALERT 본문입니다" />
      <ConfirmAlert
        title="ConfirmAlert 제목입니다"
        text="ConfirmAlert 본문입니다"
      />
      <CheckBox text="체크" /> */}
    </main>
  );
}
