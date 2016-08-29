// LINE CHARTS FOR SERVER MODEL
$(document).ready(function() {
        /* SERVER MODEL */
        var M2950 = localStorage.getItem("ServerModel_2950");
        var M620 = localStorage.getItem("ServerModel_M620");
        var M630 = localStorage.getItem("ServerModel_M630");
        var R620 = localStorage.getItem("ServerModel_R620");
        var R630 = localStorage.getItem("ServerModel_R630");
        var R710 = localStorage.getItem("ServerModel_R710");
        var VM   = localStorage.getItem("ServerModel_VMware");
        
        /*Push to ARRAY of HIGHCHART */
        var mydata = [];
        mydata.push(eval(M2950));
        mydata.push(eval(M620));
        mydata.push(eval(M630));
        mydata.push(eval(R620));
        mydata.push(eval(R630));
        mydata.push(eval(R710));
        mydata.push(eval(VM));
    
        chart = new Highcharts.Chart({
        chart: {
            renderTo: 'ServerModel_BarChart',
            type: 'bar',
            backgroundColor: 'transparent'
        },
        title: {
            text: 'Server Model',
            style: {
                color: '#fff'
            }
        },
        xAxis: {
            categories: ['2950', 'M620', 'M630', 'R620', 'R630','R710', 'VM'],
            labels:{
                style: {
                color: '#fff',
                fontSize: '18px'
            }
          }
        },
        yAxis: {
            title: {
                text: 'Server Qty',
            style: {
                color: '#fff',
                fontSize: '18px'
              }
             },
             labels:{
                style: {
                color: '#fff',
                fontSize: '18px'
             }
           }
         },
        events: {
        click: function () {
            alert('chart clicked');
            }            
        },
        series: [{
            name: 'Linux',
            color: '#b2c831',
            data: mydata
        }]
     
        });
    });

//BASIC LINE CHART FOR SERVICE PACK
$(document).ready(function() {
 
        var SP57  = localStorage.getItem("SP_57");
        var SP58  = localStorage.getItem("SP_58");
        var SP510 = localStorage.getItem("SP_510");
        var SP6   = localStorage.getItem("SP_6");
        var SP63  = localStorage.getItem("SP_63");
        var SP65  = localStorage.getItem("SP_65");
        var SP7   = localStorage.getItem("SP7");
    
      /*Push to ARRAY of HIGHCHART */
        var SPData = [];
        SPData.push(eval(SP57));
        SPData.push(eval(SP58));
        SPData.push(eval(SP510));
        SPData.push(eval(SP6));
        SPData.push(eval(SP63));
        SPData.push(eval(SP65));
        SPData.push(eval(SP7));
    
        chart = new Highcharts.Chart({
        chart: {
            renderTo: 'OSSP_LineChart',
            type: 'line',
            backgroundColor: 'transparent'
        },
        title: {
            text: 'Operating System Service Pack',
            x: -20,//center
            style: {
                color: '#fff'
            }
        },
       xAxis: {
            categories: ['OEL 5.7', 'OEL 5.8', 'OEL 5.10', 'OEL 6', 'OEL 6.3', 'OEL 6.5',
                'OEL 7'],
            labels:{
                style: {
                color: '#fff',
                fontSize: '18px'
            }
          }
        },
        yAxis: {
            title: {
                text: 'Server Quantity',
                style: {
                    color: '#fff',
                    fontSize: '18px'
                }
            },
             labels:{
                style: {
                color: '#fff',
                fontSize: '18px'
               }
            },  
            plotLines: [{
                value: 0,
                width: 1,
                color: '#FF5733'
            }]
        },
        tooltip: {
            valueSuffix: ''
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0,
            itemStyle: {
                color: '#F1948A'
            }
        },
        series: [{
            name: 'OEL',
            color: '#229954',
            data: [60,76,110,80,40,90,80]
        }, {
            name: 'REDH',
            color: '#FF5733',
            data: [40,40,40,40,40,40,40]
        }, {
            name: 'SUSE',
            color: '#F4D03F',
            data: [60,60,60,60,60,60,60]
        }]
    });
});

//PIE CHART FOR KERNEL VERSION 
$(document).ready(function() {
    
        var Kernel_2_6_18_274_el5          = localStorage.getItem("2.6.18-274.el5");
        var Kernel_2_6_18_308_el5          = localStorage.getItem("2.6.18-308.el5");
        var Kernel_2_6_18_371_12_1_0_1_el5 = localStorage.getItem("2.6.18-371.12.1.0.1.el5");
        var Kernel_2_6_32_279_el6_x86_64   = localStorage.getItem("2.6.32-279.el6.x86_64");
        var Kernel_2_6_32_431_el6_x86_64   = localStorage.getItem("2.6.32-431.el6.x86_64");
        var kernel_2_6_39_200_24_1_el6uek_x86_64  = localStorage.getItem("2.6.39-200.24.1.el6uek.x86_64");
        var kernel_3_10_0_123_13_2_el7_x86_64  = localStorage.getItem("3.10.0-123.13.2.el7.x86_64");
        var Kernel_3_10_0_229_el7_x86_64   = localStorage.getItem("3.10.0-229.el7.x86_64");
        var Kernel_3_8_13_55_el6uek_x86_64   = localStorage.getItem("3.8.13-55.el6uek.x86_64");
        
            chart = new Highcharts.Chart({
            chart: {
                renderTo: 'kernel',
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie',
                backgroundColor: 'transparent'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            title: {
            text: 'Kernel Version',
            x: -20,//center
            style: {
                color: '#fff'
                }
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                name: 'Brands',
                colorByPoint: true,
                data: [{
                    name: 'Kernel Version 2.6.18-274.el5',
                    y: eval(Kernel_2_6_18_274_el5),
                    color: '#F08080'
                }, {
                    name: 'Kernel Version 2.6.18-308.el5',
                    y: eval(Kernel_2_6_18_308_el5),
                    color: '#E74C3C'
                }, {
                    name: 'Kernel Version 2.6.18-371.12.1.0.1.el5',
                    y: eval(Kernel_2_6_18_371_12_1_0_1_el5),
                    color: '#F5B041',
                    sliced: true,
                    selected: true
                }, {
                    name: 'Kernel Version 2.6.32-279.el6.x86_64',
                    y: eval(Kernel_2_6_32_279_el6_x86_64),
                    color: '#28B463'
                }, {
                    name: 'Kernel Version 2.6.32-431.el6.x86_64',
                    y: eval(Kernel_2_6_32_431_el6_x86_64),
                    color: '#922B21'
                }, {
                    name: 'Kernel Version 2.6.39-200.24.1.el6uek.x86_64',
                    y: eval(kernel_2_6_39_200_24_1_el6uek_x86_64),
                    color: '#F08080'
                /*}, {
                    name: 'Kernel Version 3.10.0-123.13.2.el7.x86_64',
                    y: eval(kernel_3_10_0_123_13_2_el7_x86_64),
                    color: '#C8E6C9'
                }, {
                    name: 'Kernel Version 3.10.0-229.el7.x86_64',
                    y: eval(Kernel_3_10_0_229_el7_x86_64),
                    color: '#1B5E20'
                }, {
                    name: 'Kernel Version 3.8.13-55.el6uek.x86_64',
                    y: eval(Kernel_3_8_13_55_el6uek_x86_64),
                    color: '#9E9D24'*/
                }]
            }]
       });
});

//SYSTEM ROLE INFORMATION
$(document).ready(function() {
    
        var Production          = localStorage.getItem("Production");
        var PreProduction       = localStorage.getItem("PreProduction");
        var Development         = localStorage.getItem("Development");
        var DR                  = localStorage.getItem("DR");
      
        $('#Production').html("<bold>"+eval(Production)+"</bold> | <ok>Production</ok>");
        $('#PreProduction').html("<bold>"+eval(PreProduction)+"</bold> | <bad>Pre-Production</bad>");
        $('#Development').html("<bold>"+eval(Development)+"</bold> | <ok>Development</ok>");
        $('#DR').html("<bold>"+eval(DR)+"</bold> | <ok>DR</ok>");
    
        var GOCQ                = localStorage.getItem("GOCQ");
        var DCS                 = localStorage.getItem("DCS");
        var ETS                 = localStorage.getItem("ETS");
        var GSDBusiness         = localStorage.getItem("GSDBusiness");
      
        $('#GOCQ').html("<bold>"+eval(GOCQ)+"</bold> | <ok>GOCQ</ok>");
        $('#DCS').html("<bold>"+eval(DCS)+"</bold> | <ok>DCS</ok>");
        $('#ETS').html("<bold>"+eval(ETS)+"</bold> | <ok>ETS</ok>");
        $('#GSDBusiness').html("<bold>"+eval(GSDBusiness)+"</bold> | <ok>GSD Business</ok>");
    
        $('#ETS').click(function() {
            alert("Click");
        })

});
     
