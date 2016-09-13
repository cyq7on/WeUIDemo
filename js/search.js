/**
 * Created by cyq7on on 2016/8/31.
 */
$().ready(function () {
    plotBar();
    plotPie();
    plotLine();
});
//柱状图
function plotBar() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init($("#bar")[0]);

    // 指定图表的配置项和数据
    var option = {
        color: ['#3398DB'],
        title: {
            text: 'tydic'
        },
        tooltip: {},
        legend: {
            data:['数量']
        },
        xAxis: {
            data: ["Android","IOS","Java","JS"]
        },
        yAxis: {},
        series: [{
            name: '数量',
            type: 'bar',
            data: [15, 20, 36, 10]
        }]
    };

    // 使用刚指定的配置项和数据显示图表
    myChart.setOption(option);
}
//饼状图
function plotPie() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init($("#pie")[0]);

    // 指定图表的配置项和数据
    var option = {
        color:['#3398DB','#ccff33', '#00ff00', '#FF7F00', '#9400D3'],
        title : {
            text: '某站点用户访问来源',
            subtext: '纯属虚构',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            // formatter: "{a} <br/>{b} : {c} ({d}%)"
            formatter: "{b} : <br/>{c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
        },
        series : [
            {
                name: '访问来源',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:335, name:'直接访问'},
                    {value:310, name:'邮件营销'},
                    {value:234, name:'联盟广告'},
                    {value:135, name:'视频广告'},
                    {value:1548, name:'搜索引擎'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表
    myChart.setOption(option);
}

//折线图
function plotLine() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init($("#line")[0]);

    function randomData() {
        now = new Date(+now + oneDay);
        value = value + Math.random() * 21 - 10;
        return {
            name: now.toString(),
            value: [
                [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
                Math.round(value)
            ]
        }
    }

    var data = [];
    var now = +new Date(1997, 9, 3);
    var oneDay = 24 * 3600 * 1000;
    var value = Math.random() * 1000;
    for (var i = 0; i < 1000; i++) {
        data.push(randomData());
    }

    var option = {
        title: {
            text: '动态数据 + 时间坐标轴'
        },
        tooltip: {
            trigger: 'axis',
            formatter: function (params) {
                params = params[0];
                var date = new Date(params.name);
                return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
            },
            axisPointer: {
                animation: false
            }
        },
        xAxis: {
            type: 'time',
            splitLine: {
                show: false
            }
        },
        yAxis: {
            type: 'value',
            boundaryGap: [0, '100%'],
            splitLine: {
                show: false
            }
        },
        series: [{
            name: '模拟数据',
            type: 'line',
            showSymbol: false,
            hoverAnimation: false,
            data: data
        }]
    };
    // 使用刚指定的配置项和数据显示图表
    myChart.setOption(option);
    // app.timeTicket = setInterval(function () {
    //
    //     for (var i = 0; i < 5; i++) {
    //         data.shift();
    //         data.push(randomData());
    //     }
    //
    //     myChart.setOption({
    //         series: [{
    //             data: data
    //         }]
    //     });
    // }, 1000);
}