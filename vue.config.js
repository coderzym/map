module.exports = {
    chainWebpack: config => {
        config.module
            .rule('eslint')
            .use('eslint-loader')
            .loader('eslint-loader')
            .tap(options => {
                options.fix = true; // 这一行不要的话在其他编辑器里面修改格式化后保存文件就不会被格式化了？
                return options;
            });
    },
    runtimeCompiler: true
}