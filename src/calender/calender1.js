// import React from 'react';
// import DayPicker from 'react-day-picker';
// import 'react-day-picker/lib/style.css';
// import data from './data.json';

// let allSelectedDates = [];
// data.forEach((item) => {
//   allSelectedDates.push(new Date(item.year, item.month, item.day));
// });

// const addTitle = () => {
//   data.forEach((ele) => {
//     document.querySelector(`[aria-label="${new Date(ele.year, ele.month, ele.day)
//       .toDateString()}"]`).innerHTML += ele.title
//   });
// }

// export default function Example() {
//   return (
//     <div>
//       <button onClick={addTitle}>add</button>
//       <DayPicker
//         initialMonth={new Date(2020, 4)}
//         selectedDays={allSelectedDates}

//       />
//     </div>
//   );
// }
// 00
import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import data from './data.json';
const holidayStyle = `.DayPicker-Day--highlighted {
  background-color: orange;
  color: white;
}`;

const modifiers = {
  highlighted: [new Date(data[1].year, data[1].month, data[1].day),
  new Date(data[0].year, data[0].month, data[0].day),
  new Date(data[3].year, data[3].month, data[3].day),

  ]
};
const holiday = {
  4: ['M'],
  9: ['E'],
  15: ['d']

};

function renderDay(day) {
  const date = day.getDate();
  const dateStyle = {
    position: 'absolute',
    color: 'black',
    bottom: 0,
    right: 0,
    fontSize: 20,
  };
  const holidayStyle = { fontSize: '0.8em', textAlign: 'left' };
  const cellStyle = {
    height: 20,
    width: 30,
    position: 'relative',
  };
  return (
    <div style={cellStyle}>
      <div style={dateStyle}>{date}</div>
      {holiday[date] &&
        holiday[date].map((name, i) => (
          <div key={i} style={holidayStyle}>
            {name}
          </div>
        ))}
    </div>
  );
}

export default function MyBirthday() {
  return (
    <div>
      <style>{holidayStyle}</style>
      <DayPicker modifiers={modifiers}
        initialMonth={new Date(2020, 4)}
        renderDay={renderDay} />
    </div>
  );
}