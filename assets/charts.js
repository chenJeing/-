// assets/charts.js
(function() {
  var style = getComputedStyle(document.documentElement);
  var accent = style.getPropertyValue('--accent').trim();
  var accent2 = style.getPropertyValue('--accent2').trim();
  var ink = style.getPropertyValue('--ink').trim();
  var muted = style.getPropertyValue('--muted').trim();
  var rule = style.getPropertyValue('--rule').trim();
  var red = style.getPropertyValue('--red').trim();
  var green = style.getPropertyValue('--green').trim();

  var tooltipBg = 'rgba(255,255,255,0.96)';

  // =============================================
  // Chart 1: 看过占比分组柱状图
  // =============================================
  (function() {
    var el = document.getElementById('chart-seen');
    if (!el) return;
    var chart = echarts.init(el, null, { renderer: 'svg' });

    var doctors = ['丁德权','林秀雯','莫文辉','梅晓峰','覃烨','邬素珍'];
    var h2 = [80.0, 68.6, 56.0, 46.8, 36.4, 33.9];
    var h1 = [82.0, 76.9, 48.1, 51.9, 43.1, 28.6];

    chart.setOption({
      animation: false,
      tooltip: {
        trigger: 'axis',
        backgroundColor: tooltipBg,
        borderColor: rule,
        textStyle: { color: ink, fontSize: 12 },
        formatter: function(p) {
          return '<strong>' + p[0].axisValue + '</strong><br/>' +
            p.map(function(item) {
              return item.marker + ' ' + item.seriesName + ': <strong>' + item.value + '%</strong>';
            }).join('<br/>');
        }
      },
      legend: {
        data: ['2025H2', '2026H1'],
        bottom: 0,
        textStyle: { color: muted, fontSize: 11 }
      },
      grid: { left: 50, right: 20, top: 16, bottom: 36 },
      xAxis: {
        type: 'category',
        data: doctors,
        axisLabel: { color: ink, fontSize: 11, fontWeight: 'bold' },
        axisTick: { show: false },
        axisLine: { lineStyle: { color: rule } }
      },
      yAxis: {
        type: 'value',
        name: '%',
        max: 100,
        nameTextStyle: { color: muted, fontSize: 10 },
        axisLabel: { color: muted, fontSize: 10, formatter: function(v) { return v + '%'; } },
        splitLine: { lineStyle: { color: rule } },
        axisLine: { show: false },
        axisTick: { show: false }
      },
      series: [
        {
          name: '2025H2',
          type: 'bar',
          data: h2,
          barWidth: 18,
          itemStyle: {
            color: muted + '88',
            borderRadius: [4, 4, 0, 0]
          },
          label: {
            show: true,
            position: 'top',
            color: muted,
            fontSize: 10,
            formatter: function(p) { return p.value + '%'; }
          }
        },
        {
          name: '2026H1',
          type: 'bar',
          data: h1,
          barWidth: 18,
          itemStyle: {
            color: function(p) {
              var diff = h1[p.dataIndex] - h2[p.dataIndex];
              return diff >= 0 ? red : green;
            },
            borderRadius: [4, 4, 0, 0]
          },
          label: {
            show: true,
            position: 'top',
            color: ink,
            fontSize: 10,
            fontWeight: 'bold',
            formatter: function(p) {
              var diff = (h1[p.dataIndex] - h2[p.dataIndex]).toFixed(1);
              var sign = diff >= 0 ? '+' : '';
              return p.value + '% (' + sign + diff + ')';
            }
          }
        }
      ]
    });

    window.addEventListener('resize', function() { chart.resize(); });
  })();

  // =============================================
  // Chart 2: 网络来源分组柱状图
  // =============================================
  (function() {
    var el = document.getElementById('chart-source');
    if (!el) return;
    var chart = echarts.init(el, null, { renderer: 'svg' });

    var doctors = ['丁德权','林秀雯','莫文辉','梅晓峰','覃烨','邬素珍'];
    var h2 = [72.0, 35.3, 14.0, 12.8, 18.2, 5.4];
    var h1 = [72.0, 46.2, 23.1, 18.5, 19.6, 8.2];

    chart.setOption({
      animation: false,
      tooltip: {
        trigger: 'axis',
        backgroundColor: tooltipBg,
        borderColor: rule,
        textStyle: { color: ink, fontSize: 12 },
        formatter: function(p) {
          return '<strong>' + p[0].axisValue + '</strong><br/>' +
            p.map(function(item) {
              return item.marker + ' ' + item.seriesName + ': <strong>' + item.value + '%</strong>';
            }).join('<br/>');
        }
      },
      legend: {
        data: ['2025H2', '2026H1'],
        bottom: 0,
        textStyle: { color: muted, fontSize: 11 }
      },
      grid: { left: 50, right: 20, top: 16, bottom: 36 },
      xAxis: {
        type: 'category',
        data: doctors,
        axisLabel: { color: ink, fontSize: 11, fontWeight: 'bold' },
        axisTick: { show: false },
        axisLine: { lineStyle: { color: rule } }
      },
      yAxis: {
        type: 'value',
        name: '%',
        max: 80,
        nameTextStyle: { color: muted, fontSize: 10 },
        axisLabel: { color: muted, fontSize: 10, formatter: function(v) { return v + '%'; } },
        splitLine: { lineStyle: { color: rule } },
        axisLine: { show: false },
        axisTick: { show: false }
      },
      series: [
        {
          name: '2025H2',
          type: 'bar',
          data: h2,
          barWidth: 18,
          itemStyle: {
            color: muted + '88',
            borderRadius: [4, 4, 0, 0]
          },
          label: {
            show: true,
            position: 'top',
            color: muted,
            fontSize: 10,
            formatter: function(p) { return p.value + '%'; }
          }
        },
        {
          name: '2026H1',
          type: 'bar',
          data: h1,
          barWidth: 18,
          itemStyle: {
            color: function(p) {
              var diff = h1[p.dataIndex] - h2[p.dataIndex];
              return diff > 0 ? red : (diff === 0 ? muted : green);
            },
            borderRadius: [4, 4, 0, 0]
          },
          label: {
            show: true,
            position: 'top',
            color: ink,
            fontSize: 10,
            fontWeight: 'bold',
            formatter: function(p) {
              var diff = (h1[p.dataIndex] - h2[p.dataIndex]).toFixed(1);
              var sign = diff > 0 ? '+' : (diff === 0 ? '' : '');
              return diff === 0 ? p.value + '% (持平)' : p.value + '% (' + sign + diff + ')';
            }
          }
        }
      ]
    });

    window.addEventListener('resize', function() { chart.resize(); });
  })();
})();