
fis.hook('amd', {
  paths:{
    vue:'/public/scripts/vue.js'
  }
});

fis.match('*.html', {
    lint: fis.plugin('html')
});


//components下面的所有js资源都是组件化资源
fis.match("components/**", {
    isMod: true,
    release: '/$0'
});


fis.match("/containers/*.js", {
    isMod: true,
    // useMap: true,
    release: '/$0'
});

fis.match("pages/**", {
    isMod: true,
    // useMap: true,
    release: '/$0'
});

//component组件资源id支持简写
fis.match(/^\/components\/component\/(.*)$/i, {
    id : '$1'
});

fis.match('*.scss', {
  rExt: '.css',
  parser: fis.plugin('node-sass',{

  })
});

fis.match('::packager', {
    // npm install [-g] fis3-postpackager-loader
    // 分析 __RESOURCE_MAP__ 结构，来解决资源加载问题
    postpackager: fis.plugin('loader', {
        // resourceType: 'mod'
        // useInlineMap: true // 资源映射表内嵌
    }),
    // packager: fis.plugin('map'),
    spriter: fis.plugin('csssprites', {
        layout: 'matrix',
        margin: '15'
    })

}).match('*.{css,scss}', {
    packTo: '/pkg/all.css' //css打成一个包
});



//生产环境下CSS、JS压缩合并
//使用方法 fis3 release prod
fis.media('prod')
    .match('**.js', {
        optimizer: fis.plugin('uglify-js')
    })
    .match('component_modules/*.js',{
        packTo: '/pkg/common.js'
    })
    .match('components/**/*.js',{
        packTo: '/pkg/app.js'
    })
    .match('**.css', {
        optimizer: fis.plugin('clean-css')
    });
