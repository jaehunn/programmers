function solution(month, days) {
  const DAY = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];

  while (month > 1) {
    month -= 1;

    if (month === 2) days += 29;
    else if (month === 4 || month === 6 || month === 9 || month === 11) days += 30;
    else days += 31;
  }

  return DAY[(days - 1) % 7];
}
