(window["webpackJsonpreact-antdesign-admin"]=window["webpackJsonpreact-antdesign-admin"]||[]).push([[5],{319:function(e,t,a){},370:function(e,t,a){"use strict";a.r(t);var n=a(29),r=a(30),i=a(34),c=a(31),o=a(35),l=a(0),s=a.n(l),m=(a(319),a(11)),d=a(309);a(320)(d);var p=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).state={cartList:[{title:"\u65b0\u589e\u7528\u6237\u6570",number:"10",icon:"user-add"},{title:"\u7d2f\u8ba1\u8bbf\u95ee",number:"11",icon:"heart"},{title:"\u5206\u4eab\u7edf\u8ba1",number:"12",icon:"share-alt"}]},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"home-warp"},s.a.createElement("div",{className:"cart-list"},this.state.cartList.map(function(e){return s.a.createElement("div",{className:"cart-item",key:e.title},s.a.createElement("div",{className:"cart-item-icon ".concat(e.icon)},s.a.createElement(m.a,{type:e.icon})),s.a.createElement("div",{className:"cart-item-content"},s.a.createElement("div",{className:"number"},e.number),s.a.createElement("div",{className:"title"},e.title)))})),s.a.createElement("div",{className:"user-chart"},s.a.createElement("div",{id:"user_origin"}," "),s.a.createElement("div",{id:"user_container"}," ")))}},{key:"componentDidMount",value:function(){d.chart("user_origin",{chart:{plotBackgroundColor:null,plotBorderWidth:null,plotShadow:!1,type:"pie"},title:{text:"\u7528\u6237\u8bbf\u95ee\u7cfb\u7edf\u9014\u5f84"},credits:{enabled:!1},tooltip:{pointFormat:"{series.name}: <b>{point.percentage:.1f}%</b>"},plotOptions:{pie:{allowPointSelect:!0,cursor:"pointer",dataLabels:{enabled:!0,format:"<b>{point.name}</b>: {point.percentage:.1f} %",style:{color:d.theme&&d.theme.contrastTextColor||"black"}}}},series:[{name:"Brands",colorByPoint:!0,data:[{name:"Chrome",y:61.41,sliced:!0,selected:!0},{name:"Internet Explorer",y:11.84},{name:"Firefox",y:10.85},{name:"Edge",y:4.67},{name:"Safari",y:4.18},{name:"Sogou Explorer",y:1.64},{name:"Opera",y:1.6},{name:"QQ",y:1.2},{name:"Other",y:2.61}]}]}),d.chart("user_container",{chart:{type:"line"},title:{text:"\u6700\u8fd1\u4e00\u5468\u7528\u6237\u6570\u636e"},credits:{enabled:!1},xAxis:{categories:["\u5468\u4e00","\u5468\u4e8c","\u5468\u4e09","\u5468\u56db","\u5468\u4e94","\u5468\u516d","\u5468\u65e5"]},yAxis:{title:{text:"\u4eba\u6570 (\u4eba)"}},plotOptions:{line:{dataLabels:{enabled:!0},enableMouseTracking:!0}},series:[{name:"\u603b\u8bbf\u95ee\u4eba\u6570",data:[7,6,9,14,18.4,21,25]},{name:"\u65b0\u589e\u7528\u6237\u6570",data:[3,4,5,8,11,15,17]}]})}}]),t}(s.a.Component);t.default=p}}]);
//# sourceMappingURL=5.ac417f67.chunk.js.map