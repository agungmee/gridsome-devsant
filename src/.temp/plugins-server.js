import plugin_gridsome_plugin_netlify_cms_7 from "/home/agungsan/blog2/node_modules/gridsome-plugin-netlify-cms/gridsome.client.js"

export default [
  {
    run: plugin_gridsome_plugin_netlify_cms_7,
    options: {"publicPath":"/admin","htmlTitle":"Content Editor","configPath":"src/admin/config.yml","modulePath":"/home/agungsan/blog2/node_modules/gridsome-plugin-netlify-cms/lib/cms.js","htmlPath":"/home/agungsan/blog2/node_modules/gridsome-plugin-netlify-cms/templates/index.html","injectScript":true,"enableIdentityWidget":true,"debug":false}
  }
]
