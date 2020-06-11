module.exports = {
    plugins: [
        require('autoprefixer'),
        require('postcss-combine-media-query'),
        require('postcss-discard-duplicates'),
        require('cssnano')({
            preset: [
                'default',
                {
                    discardComments: {
                        removeAll: true
                    }
                }
            ]
        })
    ]
};
