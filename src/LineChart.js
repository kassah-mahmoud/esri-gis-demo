import React, { useLayoutEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_kelly from "@amcharts/amcharts4/themes/kelly";

const LineChart = ({ deps }) => {
  useLayoutEffect(() => {
    // Themes begin
    am4core.useTheme(am4themes_animated);
    am4core.useTheme(am4themes_kelly);
    // Themes end

    var chart = am4core.create("chartdiv", am4charts.XYChart);

    var data = [];
    var value = 50;
    for (var i = 0; i < 6; i++) {
      var date = new Date();
      date.setHours(0, 0, 0, 0);
      date.setDate(date.getDate() - i);
      value -= Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
      data.push({ date: date, value: value });
    }

    chart.data = data;

    // Create axes
    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.minGridDistance = 60;

    chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    var series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = "value";
    series.dataFields.dateX = "date";
    series.tooltipText = "{value}";

    series.tooltip.pointerOrientation = "vertical";

    chart.cursor = new am4charts.XYCursor();
    chart.cursor.snapToSeries = series;
    chart.cursor.xAxis = dateAxis;

    //chart.scrollbarY = new am4core.Scrollbar();
    chart.scrollbarX = new am4core.Scrollbar();

    return () => {
      chart.dispose();
    };
  }, [deps]);

  return <div id="chartdiv" />;
};

export default LineChart;
