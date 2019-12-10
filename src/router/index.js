import {Login,Registe,Five,Fourfour,Fourthree,Analyze,Monitore,Workbench,Basedetail,Highdetail,Advancedform,Baseform,Stepform,Braineditor,Processeditor,Topologyeditor,Cardlist,Findtable,Standardlist,Searcharticle,Searchproject,Searchapp,Failed,Success,Usercontent,Userset} from "pages"

export const LayoutRoutes = [
    {
        path:"/dashboard",
        meta:{
            requiredAuth:true
        },
        children:[
            {
                path:"/dashboard/analyze",
                component:Analyze,
                meta:{
                    requiredAuth:true
                },
                icon:"smile",
                text:"分析页",
                key:"/dashboard/analyze"
            },
            {
                path:"/dashboard/monitore",
                component:Monitore,
                meta:{
                    requiredAuth:true
                },
                icon:"smile",
                text:"监控页",
                key:"/dashboard/monitore"
            },
            {
                path:"/dashboard/workbench",
                component:Workbench,
                meta:{
                    requiredAuth:true
                },
                icon:"smile",
                text:"工作台",
                key:"/dashboard/workbench"
            },
        ],
        icon:"dashboard",
        text:"Dashboard",
        key:"/dashboard"
    },
    {
        path:"/form",
        meta:{
            requiredAuth:true
        },
        children:[
            {
                path:"/form/baseform",
                component:Baseform,
                meta:{
                    requiredAuth:true
                },
                icon:"smile",
                text:"基础表单",
                key:"/form/baseform"
            },
            {
                path:"/form/stepform",
                component:Stepform,
                meta:{
                    requiredAuth:true
                },
                icon:"smile",
                text:"分步表单",
                key:"/form/stepform"
            },
            {
                path:"/form/advancedform",
                component:Advancedform,
                meta:{
                    requiredAuth:true
                },
                icon:"smile",
                text:"高级表单",
                key:"/form/advancedform"
            },
        ],
        icon:"form",
        text:"表单页",
        key:"/form"
    },
    {
        path:"/list",
        meta:{
            requiredAuth:true
        },
        children:[
            {
                path:"/list/search",
                meta:{
                    requiredAuth:true
                },
                children:[
                    {
                        path:"/list/search/searcharticle",
                        component:Searcharticle,
                        meta:{
                            requiredAuth:true
                        },
                        icon:"smile",
                        text:"搜索文章",
                        key:"/list/search/searcharticle"
                    },
                    {
                        path:"/list/search/searchproject",
                        component:Searchproject,
                        meta:{
                            requiredAuth:true
                        },
                        icon:"smile",
                        text:"搜索项目",
                        key:"/list/search/searchproject"
                    },
                    {
                        path:"/list/search/searchapp",
                        component:Searchapp,
                        meta:{
                            requiredAuth:true
                        },
                        icon:"smile",
                        text:"搜索应用",
                        key:"/list/search/searchapp"
                    },
                ],
                icon:" ",
                text:"搜索列表",
                key:"/list/search"
            },
            {
                path:"/list/findtable",
                component:Findtable,
                meta:{
                    requiredAuth:true
                },
                icon:"smile",
                text:"查询表格",
                key:"/list/findtable"
            },
            {
                path:"/list/standardlist",
                component:Standardlist,
                meta:{
                    requiredAuth:true
                },
                icon:"smile",
                text:"标准列表",
                key:"/list/standardlist"
            },
            {
                path:"/list/cardlist",
                component:Cardlist,
                meta:{
                    requiredAuth:true
                },
                icon:"smile",
                text:"卡片列表",
                key:"/list/cardlist"
            },
        ],
        icon:"table",
        text:"列表页",
        key:"/list"
    },
    {
        path:"/detail",
        meta:{
            requiredAuth:true
        },
        children:[
            {
                path:"/detail/basedetail",
                component:Basedetail,
                meta:{
                    requiredAuth:true
                },
                icon:"smile",
                text:"基础详情页",
                key:"/detail/basedetail"
            },
            {
                path:"/detail/highdetail",
                component:Highdetail,
                meta:{
                    requiredAuth:true
                },
                icon:"smile",
                text:"高级详情页",
                key:"/detail/highdetail"
            },
        ],
        icon:"profile",
        text:"详情页",
        key:"/detail"
    },
    {
        path:"/result",
        meta:{
            requiredAuth:true
        },
        children:[
            {
                path:"/result/success",
                component:Success,
                meta:{
                    requiredAuth:true
                },
                icon:"smile",
                text:"成功页",
                key:"/result/success"
            },
            {
                path:"/result/failed",
                component:Failed,
                meta:{
                    requiredAuth:true
                },
                icon:"smile",
                text:"失败页",
                key:"/result/failed"
            },
        ],
        icon:"check-circle",
        text:"结果页",
        key:"/result"
    },
    {
        path:"/anomaly",
        meta:{
            requiredAuth:true
        },
        children:[
            {
                path:"/anomaly/fourthree",
                component:Fourthree,
                meta:{
                    requiredAuth:true
                },
                icon:"smile",
                text:"403",
                key:"/anomaly/fourthree"
            },
            {
                path:"/anomaly/fourfour",
                component:Fourfour,
                meta:{
                    requiredAuth:true
                },
                icon:"smile",
                text:"404",
                key:"/anomaly/fourfour"
            },
            {
                path:"/anomaly/five",
                component:Five,
                meta:{
                    requiredAuth:true
                },
                icon:"smile",
                text:"500",
                key:"/anomaly/five"
            },
        ],
        icon:"warning",
        text:"异常页",
        key:"/anomaly"
    },
    {
        path:"/user",
        meta:{
            requiredAuth:true
        },
        children:[
            {
                path:"/user/usercontent",
                component:Usercontent,
                meta:{
                    requiredAuth:true
                },
                icon:"smile",
                text:"个人中心",
                key:"/user/usercontent"
            },
            {
                path:"/user/userset",
                component:Userset,
                meta:{
                    requiredAuth:true
                },
                icon:"smile",
                text:"个人设置",
                key:"/user/userset"
            },
        ],
        icon:"user",
        text:"个人页",
        key:"/user"
    },
    {
        path:"/grapheditor",
        meta:{
            requiredAuth:true
        },
        children:[
            {
                path:"/grapheditor/processeditor",
                component:Processeditor,
                meta:{
                    requiredAuth:true
                },
                icon:"smile",
                text:"流程编辑器",
                key:"/grapheditor/processeditor"
            },
            {
                path:"/grapheditor/braineditor",
                component:Braineditor,
                meta:{
                    requiredAuth:true
                },
                icon:"smile",
                text:"脑图编辑器",
                key:"/grapheditor/braineditor"
            },
            {
                path:"/grapheditor/topologyeditor",
                component:Topologyeditor,
                meta:{
                    requiredAuth:true
                },
                icon:"smile",
                text:"拓扑编辑器",
                key:"/grapheditor/topologyeditor"
            },
        ],
        icon:"highlight",
        text:"图形编辑器",
        key:"/grapheditor"
    },
];

export const NoLayoutRoutes = [
    {
        path:"/login",
        component:Login,
        meta:{},
        key:"/login"
    },
    {
        path:"/registe",
        component:Registe,
        meta:{},
        key:"/registe"
    },
];

export const RoutesConfig = LayoutRoutes.concat(NoLayoutRoutes)