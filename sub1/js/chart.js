//chart1
var options = {
    'legend': {
        names: ['2020년','2019년','2018년'],
        hrefs: []
    },
    'dataset': {
        title: '영업이익률',
        values: [15.4,7.4,9.9],
        colorset: ['#ed1c24'],
        fields:['영업이익률']
    },
    'chartDiv': 'chart1',  //아이디 이름
    'chartType': 'column',
    'chartSize': { width: 550, height: 300 },
    'maxValue': 16,
    'increment': 4
};

Nwagon.chart(options);

//chart2
var options = {
    'legend': {
        names: ['2020년','2019년','2018년'],
        hrefs: []
    },
    'dataset': {
        title: '부채비율',
        values: [59.6,72.6,96.6],
        colorset: ['#ed1c24'],
        fields:['부채비율']
    },
    'chartDiv': 'chart2',  //아이디 이름
    'chartType': 'column',
    'chartSize': { width: 550, height: 300 },
    'maxValue': 200,
    'increment': 50
};

Nwagon.chart(options);

//chart3
var options = {
    'legend': {
        names: ['2020년','2019년','2018년'],
        hrefs: []
    },
    'dataset': {
        title: '총자산회전률',
        values: [1.0,1.1,1.2],
        colorset: ['#ed1c24'],
        fields:['총자산회전률']
    },
    'chartDiv': 'chart3',  //아이디 이름
    'chartType': 'column',
    'chartSize': { width: 550, height: 300 },
    'maxValue': 4,
    'increment': 1
};

Nwagon.chart(options);

//chart4
var options = {
    'legend': {
        names: ['2020년','2019년','2018년'],
        hrefs: []
    },
    'dataset': {
        title: '이자보상배율',
        values: [26.5,8.3,9.7],
        colorset: ['#ed1c24'],
        fields:['영업이익률']
    },
    'chartDiv': 'chart4',  //아이디 이름
    'chartType': 'column',
    'chartSize': { width: 550, height: 300 },
    'maxValue': 40,
    'increment': 10
};

Nwagon.chart(options);


//chart5
var options = {
    'legend': {
        names: ['2020년','2019년','2018년'],
        hrefs: []
    },
    'dataset': {
        title: 'ROA',
        values: [12.2,6.4,10.7],
        colorset: ['#ed1c24'],
        fields:['ROA']
    },
    'chartDiv': 'chart5',  //아이디 이름
    'chartType': 'column',
    'chartSize': { width: 550, height: 300 },
    'maxValue': 20,
    'increment': 5
};

Nwagon.chart(options);


//chart6
var options = {
    'legend': {
        names: ['2020년','2019년','2018년'],
        hrefs: []
    },
    'dataset': {
        title: 'ROE',
        values: [20.2,11.8,23.4],
        colorset: ['#ed1c24'],
        fields:['ROE']
    },
    'chartDiv': 'chart6',  //아이디 이름
    'chartType': 'column',
    'chartSize': { width: 550, height: 300 },
    'maxValue': 40,
    'increment': 10
};

Nwagon.chart(options);