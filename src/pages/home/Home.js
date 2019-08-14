import React from 'react';
import './home.css';
import { Icon } from 'antd';
var Highcharts = require('highcharts');
// 在 Highcharts 加载之后加载功能模块
require('highcharts/modules/exporting')(Highcharts);
class Home extends React.Component {

  state = {
    cartList: [{
      title: '新增用户数',
      number: '10',
      icon: 'user-add'
    }, {
      title: '累计访问',
      number: '11',
      icon: 'heart'
    }, {
      title: '分享统计',
      number: '12',
      icon: 'share-alt'
    }]
  };

  render() {
    return (
      <div className="home-warp">
        <div className="cart-list">
          {
            this.state.cartList.map((item) => {
              return (
                <div className="cart-item" key={item.title}>
                  <div className={ `cart-item-icon ${item.icon}` }>
                    <Icon type={ item.icon }/>
                  </div>
                  <div className="cart-item-content">
                    <div className="number">{ item.number }</div>
                    <div className="title">{ item.title }</div>
                  </div>
                </div>
              );
            })
          }
        </div>
        <div className="user-chart">
          <div id="user_origin"> </div>
          <div id="user_container"> </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    // 用户来源
    Highcharts.chart('user_origin', {
      /*Highcharts 配置*/
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: '用户访问系统途径'
      },
      credits: {
        enabled: false
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
            style: {
              color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
            }
          }
        }
      },
      series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
          name: 'Chrome',
          y: 61.41,
          sliced: true,
          selected: true
        }, {
          name: 'Internet Explorer',
          y: 11.84
        }, {
          name: 'Firefox',
          y: 10.85
        }, {
          name: 'Edge',
          y: 4.67
        }, {
          name: 'Safari',
          y: 4.18
        }, {
          name: 'Sogou Explorer',
          y: 1.64
        }, {
          name: 'Opera',
          y: 1.6
        }, {
          name: 'QQ',
          y: 1.2
        }, {
          name: 'Other',
          y: 2.61
        }]
      }]
    });
    Highcharts.chart('user_container', {
      /*Highcharts 配置*/
      chart: {
        type: 'line'
      },
      title: {
        text: '最近一周用户数据'
      },
      credits: {
        enabled: false
      },
      xAxis: {
        categories: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      },
      yAxis: {
        title: {
          text: '人数 (人)'
        }
      },
      plotOptions: {
        line: {
          dataLabels: {
            enabled: true  // 开启数据标签
          },
          enableMouseTracking: true // 关闭鼠标跟踪，对应的提示框、点击事件会失效
        }
      },
      series: [{
        name: '总访问人数',
        data: [7, 6, 9, 14, 18.4, 21, 25]
      }, {
        name: '新增用户数',
        data: [3, 4, 5, 8, 11, 15, 17]
      }]
    });
  }

}

export default Home
