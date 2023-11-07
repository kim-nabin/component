"use client";
import React, { useState, useEffect, useRef } from "react";
import "./Calendar.css";

const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];

const Calendar: React.FC = () => {
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(""); // "YYYY-MM-DD" 형식의 문자열
  const [calendarVisible, setCalendarVisible] = useState(false); // 캘린더 표시 여부
  const inputRef = useRef<any>(null); // 인풋박스 ref
  const calendarRef = useRef<any>(null); // 캘린더 ref

  const handlePrevMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1));
  };

  const handleCellClick = (day: number | "") => {
    if (typeof day === "number") {
      // day가 숫자인 경우에만 처리
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const formattedDay = day < 10 ? `0${day}` : `${day}`;
      const formattedDate = `${year}-${month}-${formattedDay}`;
      setSelectedDate(formattedDate);
    }
  };

  useEffect(() => {
    const closeCalendar = (e: MouseEvent) => {
      if (calendarVisible) {
        if (
          inputRef.current &&
          !inputRef.current.contains(e.target) &&
          calendarRef.current &&
          !calendarRef.current.contains(e.target)
        ) {
          // 인풋박스와 캘린더 외부 영역을 클릭하면 캘린더를 숨깁니다.
          setCalendarVisible(false);
        }
      }
    };

    window.addEventListener("click", closeCalendar);

    return () => {
      window.removeEventListener("click", closeCalendar);
    };
  }, [calendarVisible]);

  const CalendarCells = [];
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  const daysInMonth = lastDay.getDate();
  const firstDayOfWeek = firstDay.getDay();

  for (let i = 0; i < 42; i++) {
    const day = i - firstDayOfWeek + 1;
    const isToday =
      day === new Date().getDate() && date.getMonth() === new Date().getMonth();

    CalendarCells.push({
      day: day > 0 && day <= daysInMonth ? day : "",
      isToday,
    });
  }

  const showCalendar = () => {
    setCalendarVisible(true);
  };

  return (
    <div>
      <input
        type="text"
        value={selectedDate}
        readOnly
        onClick={showCalendar} // 인풋박스 클릭 시 캘린더를 표시
        ref={inputRef}
      />
      {calendarVisible && (
        <div ref={calendarRef} className="calendar-container">
          <div className="calendar-header">
            <button onClick={handlePrevMonth}>이전 달</button>
            {date.toLocaleDateString("ko-KR", {
              year: "numeric",
              month: "long",
            })}
            <button onClick={handleNextMonth}>다음 달</button>
          </div>
          <table>
            <tbody>
              <tr>
                {daysOfWeek.map((day, index) => (
                  <th
                    key={index}
                    className={
                      index === 6 ? "saturday" : index === 0 ? "sunday" : ""
                    }
                  >
                    {day}
                  </th>
                ))}
              </tr>
            </tbody>
          </table>

          <div>
            {CalendarCells.map((cell, index) => (
              <div
                key={index}
                className={`calendar-cell ${cell.isToday ? "today" : ""}`}
                onClick={() => {
                  if (typeof cell.day === "number") {
                    if (cell.day <= daysInMonth) {
                      handleCellClick(cell.day);
                    }
                  }
                }}
              >
                {cell.day}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;
