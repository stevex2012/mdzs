//案例数据 type  0 ==>工装，1，私装 
const caseConfig = {
    '0': [
        {
            img: '../static/img/case/sd_2 (2).jpg',
            name: '圣景地产办公室',
            time:'2017-04-23 15:49:39',
            imgList:[
                '../static/img/case/sd_1.jpg',
                '../static/img/case/sd_2 (1).jpg',
                '../static/img/case/sd_2 (2).jpg',
                '../static/img/case/sd_2 (3).jpg',
            ],
            id: '0',
        },
        {
            img: '../static/img/case/tj_1 (1).png',
            name: '田家厨房',
            time:'2017-04-23 15:49:39',
            imgList:[
                '../static/img/case/tj_1 (1).png',
                '../static/img/case/tj_1 (2).png',
                '../static/img/case/tj_1 (3).png',
                '../static/img/case/tj_1 (4).png',
                '../static/img/case/tj_1 (5).png',
            ],
            id: '1',
        }
    ],
    '1':[
        {
            img: '../static/img/case/cjyy (1).jpg',
            name: '春江怡园',
            time:'2017-04-23 15:49:39',
            imgList:[
                '../static/img/case/cjyy (1).jpg',
                '../static/img/case/cjyy (2).jpg',
                '../static/img/case/cjyy (3).jpg',
                '../static/img/case/cjyy (4).jpg',
                '../static/img/case/cjyy (5).jpg',
                '../static/img/case/cjyy (6).jpg',
                '../static/img/case/cjyy (7).jpg',
                '../static/img/case/cjyy (8).jpg',
            ],
            id: '0',
        },
        {
            img: '../static/img/case/dotx (7).jpg',
            name: '东湖天下',
            time:'2017-04-23 15:49:39',
            imgList:[
                '../static/img/case/dotx (1).jpg',
                '../static/img/case/dotx (2).jpg',
                '../static/img/case/dotx (3).jpg',
                '../static/img/case/dotx (4).jpg',
                '../static/img/case/dotx (5).jpg',
                '../static/img/case/dotx (6).jpg',
                '../static/img/case/dotx (7).jpg',
            ],
            id: '1',
        },
        {
            img: '../static/img/case/gyyh (1).jpg',
            name: '公园一号',
            time:'2017-04-23 15:49:39',
            imgList:[
                '../static/img/case/gyyh (1).jpg',
                '../static/img/case/gyyh (2).jpg',
                '../static/img/case/gyyh (3).jpg',
            ],
            id: '2',
        },
        {
            img: '../static/img/case/gchy (1).jpg',
            name: '桂城花园',
            time:'2017-04-23 15:49:39',
            imgList:[
                '../static/img/case/gchy (1).jpg',
                '../static/img/case/gchy (2).jpg',
            ],
            id: '3',
        },
        {
            img: '../static/img/case/hyc (1).jpg',
            name: '花漾城',
            time:'2017-04-23 15:49:39',
            imgList:[
                '../static/img/case/hyc (1).jpg',
                '../static/img/case/hyc (2).jpg',
                '../static/img/case/hyc (3).jpg',
                '../static/img/case/hyc (4).jpg',
            ],
            id: '4',
        },
        {
            img: '../static/img/case/hjxj (1).jpg',
            name: '华锦新城',
            time:'2017-04-23 15:49:39',
            imgList:[
                '../static/img/case/hjxj (1).jpg',
                '../static/img/case/hjxj (2).jpg',
                '../static/img/case/hjxj (3).jpg',
                '../static/img/case/hjxj (4).jpg',
                '../static/img/case/hjxj (5).jpg',
                '../static/img/case/hjxj (6).jpg',
                '../static/img/case/hjxj (7).jpg',
                '../static/img/case/hjxj (8).jpg',
            ],
            id: '5',
        },
        {
            img: '../static/img/case/hr24 (1).jpg',
            name: '华润24',
            time:'2017-04-23 15:49:39',
            imgList:[
                '../static/img/case/hr24 (1).jpg',
                '../static/img/case/hr24 (2).jpg'
            ],
            id: '6',
        },
        {
            img: '../static/img/case/jzc (1).jpg',
            name: '江城著',
            time:'2017-04-23 15:49:39',
            imgList:[
                '../static/img/case/jzc (1).jpg',
                '../static/img/case/jzc (2).jpg',
                '../static/img/case/jzc (3).png',
                '../static/img/case/jzc (4).png',
                '../static/img/case/jzc (5).png',
                '../static/img/case/jzc (6).png',
                '../static/img/case/jzc (7).png',
            ],
            id: '7',
        },{
            img: 'http://www.cqdmjz.com/uploadfile/2017/0426/20170426113552503.jpg',
            name: '金沙湾',
            time:'2017-04-23 15:49:39',
            imgList:[],
            id: '8',
        },
        {
            img: 'http://www.cqdmjz.com/uploadfile/2017/0426/20170426113552503.jpg',
            name: '锦绣半岛',
            time:'2017-04-23 15:49:39',
            imgList:[],
            id: '9',
        },
        {
            img: 'http://www.cqdmjz.com/uploadfile/2017/0426/20170426113552503.jpg',
            name: '凯旋国际',
            time:'2017-04-23 15:49:39',
            imgList:[],
            id: '10',
        },
        {
            img: 'http://www.cqdmjz.com/uploadfile/2017/0426/20170426113552503.jpg',
            name: '山语城',
            time:'2017-04-23 15:49:39',
            imgList:[],
            id: '11',
        },
        {
            img: 'http://www.cqdmjz.com/uploadfile/2017/0426/20170426113552503.jpg',
            name: '山语城中户',
            time:'2017-04-23 15:49:39',
            imgList:[],
            id: '12',
        },
        {
            img: 'http://www.cqdmjz.com/uploadfile/2017/0426/20170426113552503.jpg',
            name: '香江美地',
            time:'2017-04-23 15:49:39',
            imgList:[],
            id: '13',
        },
        {
            img: 'http://www.cqdmjz.com/uploadfile/2017/0426/20170426113552503.jpg',
            name: '雅居乐',
            time:'2017-04-23 15:49:39',
            imgList:[],
            id: '14',
        },
        {
            img: 'http://www.cqdmjz.com/uploadfile/2017/0426/20170426113552503.jpg',
            name: '御峰',
            time:'2017-04-23 15:49:39',
            imgList:[],
            id: '15',
        },
        {
            img: 'http://www.cqdmjz.com/uploadfile/2017/0426/20170426113552503.jpg',
            name: '御品尚源',
            time:'2017-04-23 15:49:39',
            imgList:[],
            id: '16',
        }

    ]

}
export default  caseConfig;