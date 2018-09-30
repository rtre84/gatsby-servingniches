const base = {
  name: 'Serving Niches',
  url: 'https://github.com/greglobinski/gatsby-starter-kit'
};

const config = {
  /* meta tags */
  siteTitle: `${base.name} - online marketing approached differently`,
  siteTitlePostfix: ` - ${base.name}`,
  siteDescription: `${
    base.name
  } is a series starters: Minimal, Equipped, Themed, Website, Blog.`,
  siteImage: 'preview.jpg',
  siteLanguage: 'en',

  /* site header */
  headerTitle: `${base.name}`,
  headerSubTitle: 'online marketing approached differently',
  headerLogo: '../../static/favicon.ico',

  /* url */
  siteUrl: base.url
  // pathPrefix: '',
};

module.exports = config;
