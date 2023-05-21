import { useState } from "react";

export const Function = () => {
  const date = new Date();
  const months = [
    "Janeiro",
    "fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const [currentMonth, setCurrentMonth] = useState(months[date.getMonth()]);
  const [currentYear, setCurrentYear] = useState(date.getFullYear());
  const selectMonth = months[date.getMonth()];

  const dateBr = new Intl.DateTimeFormat("pt-BR", {
    day: "numeric",
    month: "short",
    weekday: "short",
    year: "numeric",
  }).format(date);

  const getDaysInMonth = (month: any, year: any) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const range = (end: any) => {
    const { result }: any = Array.from({ length: end }).reduce(
      ({ result, current }) => ({
        result: [...result, current],
        current: current + 1,
      }),
      { result: [], current: 1 }
    );

    return result;
  };

  return { currentMonth, currentYear, dateBr, getDaysInMonth, range };
};
