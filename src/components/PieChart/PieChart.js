// import React, { useEffect, useRef } from 'react';
// import { Chart } from 'chart.js/auto';

// const BorderPieChart = ({ data, labels, borderColor }) => {
//   const chartRef = useRef(null);

//   useEffect(() => {
//     const ctx = chartRef.current.getContext('2d');

//     new Chart(ctx, {
//       type: 'pie',
//       data: {
//         labels: labels,
//         datasets: [
//           {
//             data: data,
//             backgroundColor: 'transparent',
//             borderColor: borderColor || [
//               'red',
//               'blue',
//               'green',
//               'yellow',
//               'orange',
//               'purple',
//             ],
//             borderWidth: 1, // Adjust border width as needed
//           },
//         ],
//       },
//     });
//   }, [data, labels, borderColor]);

//   return <graph ref={chartRef} />;
// };

// export default BorderPieChart;
