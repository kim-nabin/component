"use client";
import React, { useState, useEffect } from "react";
import "./Calendar.css";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import "react-datepicker/dist/react-datepicker.css";

type Props = {};
//reactdatepicker라이브러리
const Calendar = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date()); // 초기 값으로 Date | null 타입을 설정

  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => {
        setStartDate(date || new Date()); // date가 null이면 기본 값으로 new Date()를 사용
      }}
      locale={ko}
      dateFormat="yyyy년 MM월 dd일"
    />
  );
};

export default Calendar;
