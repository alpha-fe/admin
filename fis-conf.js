fis.hook('amd', {
    mode:'amd',
    paths: {
        vue: '/public/scripts/vue.js',
        vuerouter: '/public/scripts/vue-router.js'
    }
});
//
// fis.match('*.html', {
//     lint: fis.plugin('html')
// });

fis.match("*.js", {
    parser:fis.plugin('es6-babel',{}),
    release: '/$0'
});


//components下面的所有js资源都是组件化资源
fis.match("components/**", {
    isMod: true,
    release: '/$0'
});

fis.match("/routes/*.js", {
    isMod: true,
    // useMap: true,
    release: '/$0'
});

fis.match("/containers/*.js", {
    isMod: true,
    // useMap: true,
    release: '/$0'
});


fis.match("pages/**", {
    isMod: true,
    release: '/$0'
});




//component组件资源id支持简写
fis.match(/^\/components\/component\/(.*)$/i, {
    id: '$1'
});

fis.match('*.scss', {
    rExt: '.css',
    parser: fis.plugin('node-sass', {

    })
});

fis.match('::package', {
    // npm install [-g] fis3-postpackager-loader
    // 分析 __RESOURCE_MAP__ 结构，来解决资源加载问题
    postpackager: fis.plugin('loader', {
        // resourceType: 'amd',
        // useInlineMap: true,// 资源映射表内嵌
        allInOne:true
    }),
    // packager: fis.plugin('map'),
    spriter: fis.plugin('csssprites', {
        layout: 'matrix',
        margin: '15'
    })

}).match('*.{css,scss}', {
    packTo: '/static/all.css' //css打成一个包
});



//生产环境下CSS、JS压缩合并
//使用方法 fis3 release prod
fis.media('prod')
    .match('**.js', {
        optimizer: fis.plugin('uglify-js')
    })
    .match('component_modules/*.js', {
        packTo: '/pkg/common.js'
    })
    .match('components/**/*.js', {
        packTo: '/pkg/app.js'
    })
    .match('**.css', {
        optimizer: fis.plugin('clean-css')
    });
