// Radialize the colors
Highcharts.setOptions({
  colors: Highcharts.map(Highcharts.getOptions().colors, function (color) {
    return {
      radialGradient: {
        cx: 0.5,
        cy: 0.3,
        r: 0.7,
      },
      stops: [
        [0, color],
        [1, Highcharts.color(color).brighten(-0.3).get("rgb")], // darken
      ],
    };
  }),
});

// Build the chart
Highcharts.chart("container", {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: "pie",
  },
  title: {
    text: "CHART PENGHASILAN",
  },
  tooltip: {
    pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
  },
  accessibility: {
    point: {
      valueSuffix: "%",
    },
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: "pointer",
      dataLabels: {
        enabled: true,
        format: "<b>{point.name}</b>: {point.percentage:.1f} %",
        connectorColor: "silver",
      },
    },
  },
  series: [
    {
      name: "PENDAPATAN",
      data: [
        { name: "Chrome", y: 61.41 },
        { name: "Internet Explorer", y: 11.84 },
        { name: "Firefox", y: 10.85 },
        { name: "Edge", y: 4.67 },
        { name: "Safari", y: 4.18 },
        { name: "Other", y: 7.05 },
      ],

      // data: JSON.parse(localStorage.listsParkir),
    },
  ],
});

/* */

// const data = function () {
//   var listsParkir = JSON.parse(localStorage.listsParkir);
//   for (i = 0; i < listsParkir.length; i++) {
//     let parkir = listsParkir[i];

//     let tipe = parkir.tipe;
//     let jenis = parkir.jenis;
//     let plat = parkir.plat;
//     let waktuMasuk = parir.waktuMasuk;
//     let slot = parkir.slot;
//     let admin = parkir.admin;
//     let waktuMasuk = parkir.waktuMasuk;
//     let waktuKeluar = parkir.waktu_keluar_convert;
//     let menit = parkir.menitR;
//     let tarif = parkir.tarif;
//   }
// };

// $(function () {
//   var processed_json = new Array();
//   $.getJSON("http://localhost:8080/charts_demo/data.json", function (data) {
//     // Populate series
//     for (i = 0; i < data.length; i++) {
//       processed_json.push([data[i].key, data[i].value]);
//     }

//     // draw chart
//     $("#container").highcharts({
//       chart: {
//         type: "column",
//       },
//       title: {
//         text: "Student data",
//       },
//       xAxis: {
//         type: "category",
//         allowDecimals: false,
//         title: {
//           text: "",
//         },
//       },
//       yAxis: {
//         title: {
//           text: "Scores",
//         },
//       },
//       series: [
//         {
//           name: "Subjects",
//           data: processed_json,
//         },
//       ],
//     });
//   });
// });

/* */
