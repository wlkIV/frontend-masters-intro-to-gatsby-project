module.exports = {
    siteMetadata: {
        siteUrl: 'https://www.yourdomain.com',
        title: 'Frontend Masters Intro to Gatsby',
        description: 'Frontend Masters Intro to Gatsby course projects',
        image: ''
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'posts',
                path: '${__dirname}/src/posts',
            },
        },
        {
            resolve: 'gatsby-plugin-page-creator',
            options: {
                path: '${__dirname}/src/posts',
            },
        },
        {
            resolve: 'gatsby-plugin-mdx',
            options: {},
        },
    ],
};