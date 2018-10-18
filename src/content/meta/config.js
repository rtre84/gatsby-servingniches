const base = {
  name: 'Serving Niches',
  url: 'https://github.com/ServingNiches'
};

const config = {
  /* meta tags */
  siteTitle: `${base.name} - online marketing done differently`,
  siteTitlePostfix: ` - ${base.name}`,
  siteDescription: `${
    base.name
  } is a series starters: Minimal, Equipped, Themed, Website, Blog.`,
  siteImage: 'preview.jpg',
  siteLanguage: 'en',

  /* site header */
  headerTitle: `${base.name}`,
  headerSubTitle: 'online marketing done differently',
  headerLogo: '../../static/favicon.ico',

  /* url */
  siteUrl: base.url,
  // pathPrefix: '',

  /* theme */
  siteTheme: "serving-niches"
};

module.exports = config;
