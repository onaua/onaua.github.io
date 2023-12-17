/* 12.17*/ 
if (window.screen.width > 768) {
    try {
        $("<link>").attr({href: "live2d/assets/waifu.min.css?v=1.4.2", rel: "stylesheet", type: "text/css"}).appendTo('head');
        $('body').append('<div class="waifu"><div class="waifu-tips"></div><canvas id="live2d" class="live2d"></canvas><div class="waifu-tool"><span class="fui-home"></span> <span class="fui-chat"></span> <span class="fui-eye"></span> <span class="fui-user"></span> <span class="fui-photo"></span> <span class="fui-info-circle"></span> <span class="fui-cross"></span></div></div>');
        $.ajax({url: 'live2d/assets/waifu-tips.min.js?v=1.4.2',dataType:"script", cache: true, async: false});
        $.ajax({url: 'live2d/assets/live2d.min.js?v=1.0.5',dataType:"script", cache: true, async: false});
        /* 可直接修改部分参数 */
        live2d_settings['hitokotoAPI'] = 'hitokoto.cn';  // 一言 API
        live2d_settings['modelId'] = 5;                  // 默认模型 ID
        live2d_settings['modelTexturesId'] = 1;          // 默认材质 ID
        live2d_settings['modelStorage'] = false;         // 不储存模型 ID
        /* 在 initModel 前添加 */
        initModel('live2d/assets/waifu-tips.json');
    } catch(err) { console.log('[Error] JQuery is not defined.') }
}else{
    var modalName="koharu";
    var moduleId=modalName; //wanko haruto hijiki koharu shizuku tororo
	L2Dwidget.init({
        "model": { 
            "jsonPath": "live2d/packages/live2d-widget-model-" + modalName + "/assets/" + moduleId+".model.json" 
        },
        "display": {
            "position": "right",
            "width": 150,
            "height": 300,
            "hOffset": 0,
            "vOffset": -20
        },
        "mobile": {
            "show": true,
            "scale": 0.5
        },
        "react": {
            "opacityDefault": 0.8,
            "opacityOnHover": 1
        },
        "dialog": {
            "enable": true,
            "script": {
                'tap body': '哎呀！别碰我！',
                'tap face': '人家是在认真写网页哦~',
            }
        }
    });
}
