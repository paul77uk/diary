const years = [];

for (let i = 0; i <= 10000; i++) {
  years.push(i);
}

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const diary = [];

for (let year of years) {
  diary.push({
    year: year,
    months: [],
  });
}

for (let year of diary) {
  for (let m of months) {
    year.months.push({
      month: m,
      days: [],
    });
  }
}

for (let year of diary) {
  let numberOfDays = 31;
  let leapYear = false;
  if (year.year % 4 === 0) {
    leapYear = true;
  }
  for (let month of year.months) {
    if (month.month === "February") {
      leapYear ? (numberOfDays = 29) : (numberOfDays = 28);
    } else if (
      month.month === "April" ||
      month.month === "June" ||
      month.month === "September" ||
      month.month === "November"
    ) {
      numberOfDays = 30;
    } else {
      numberOfDays = 31;
    }
    for (let i = 1; i <= numberOfDays; i++) {
      month.days.push({
        day: i,
        entry: "",
      });
    }
  }
}

// export const diary = [
//   {
//     year: 2024,
//     months: [
//       {
//         month: "January",
//         days: [
//           {
//             day: 1,
//             entry: "First day of January 2000.",
//           },
//           {
//             day: 2,
//             entry: "Second day of Januarr 2000.",
//           },
//         ],
//       },
//       {
//         month: "February",
//         days: [
//           {
//             day: 1,
//             entry: "First day of February 2000.",
//           },
//           {
//             day: 2,
//             entry: "Second day of February 2000.",
//           },
//         ],
//       },
//       {
//         month: "March",
//         days: [
//           {
//             day: 1,
//             entry: "First day of March 2000.",
//           },
//           {
//             day: 2,
//             entry: "Second day of March 2000.",
//           },
//           {
//             day: 3,
//             entry: "Third day of March 2000.",
//           },
//           {
//             day: 4,
//             entry: "Fourth day of March 2000.",
//           },
//           {
//             day: 5,
//             entry: "Fifth day of March 2000.",
//           },
//           {
//             day: 6,
//             entry: "Sixth day of March 2000.",
//           },
//           {
//             day: 7,
//             entry: "Seventh day of March 2000.",
//           },
//           {
//             day: 8,
//             entry: "Eighth day of March 2000.",
//           },
//           {
//             day: 9,
//             entry: "Ninth day of March 2000.",
//           },
//           {
//             day: 10,
//             entry: "Tenth day of March 2000.",
//           },
//           {
//             day: 11,
//             entry: "Eleventh day of March 2000.",
//           },
//           {
//             day: 12,
//             entry: "Twelfth day of March 2000.",
//           },
//           {
//             day: 13,
//             entry: "Thirteenth day of March 2000.",
//           },
//           {
//             day: 14,
//             entry: "Fourteenth day of March 2000.",
//           },
//           {
//             day: 15,
//             entry: "Fifteenth day of March 2000.",
//           },
//           {
//             day: 16,
//             entry: "Sixteenth day of March 2000.",
//           },
//           {
//             day: 17,
//             entry: "Seventeenth day of March 2000.",
//           },
//           {
//             day: 18,
//             entry: "Eighteenth day of March 2000.",
//           },
//           {
//             day: 19,
//             entry: "Nineteenth day of March 2000.",
//           },
//           {
//             day: 20,
//             entry: "Twentieth day of March 2000.",
//           },
//           {
//             day: 21,
//             entry: "Twenty-first day of March 2000.",
//           },
//           {
//             day: 22,
//             entry: "Twenty-second day of March 2000.",
//           },
//           {
//             day: 23,
//             entry: "Twenty-third day of March 2000.",
//           },
//           {
//             day: 24,
//             entry: "Twenty-fourth day of March 2000.",
//           },
//           {
//             day: 25,
//             entry: "Twenty-fifth day of March 2000.",
//           },
//           {
//             day: 26,
//             entry: "Twenty-sixth day of March 2000.",
//           },
//           {
//             day: 27,
//             entry: "Twenty-seventh day of March 2000.",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     year: 2025,
//     months: [
//       {
//         month: "January",
//         days: [
//           {
//             day: 1,
//             entry: "First day of January 2001.",
//           },
//           {
//             day: 2,
//             entry: "Second day of January 2001.",
//           },
//         ],
//       },
//       {
//         month: "February",
//         days: [
//           {
//             day: 1,
//             entry: "First day of February 2001.",
//           },
//           {
//             day: 2,
//             entry: "Second day of February 2001.",
//           },
//         ],
//       },
//     ],
//   },
// ];
