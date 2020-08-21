const c1 = () => import(/* webpackChunkName: "page--src--templates--tag-vue" */ "/home/agungsan/blog2/src/templates/Tag.vue")
const c2 = () => import(/* webpackChunkName: "page--src--templates--author-vue" */ "/home/agungsan/blog2/src/templates/Author.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--by-project-vue" */ "/home/agungsan/blog2/src/pages/ByProject.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--category-vue" */ "/home/agungsan/blog2/src/pages/Category.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/home/agungsan/blog2/src/pages/About.vue")
const c6 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/home/agungsan/blog2/node_modules/gridsome/app/pages/404.vue")
const c7 = () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/home/agungsan/blog2/src/templates/Post.vue")
const c8 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/home/agungsan/blog2/src/pages/Index.vue")

export default [
  {
    path: "/tag/:title/",
    component: c1
  },
  {
    path: "/author/:title/",
    component: c2
  },
  {
    path: "/by-project/",
    component: c3
  },
  {
    path: "/category/",
    component: c4
  },
  {
    path: "/about/",
    component: c5
  },
  {
    name: "404",
    path: "/404/",
    component: c6
  },
  {
    path: "/:title/",
    component: c7
  },
  {
    name: "home",
    path: "/",
    component: c8
  },
  {
    name: "*",
    path: "*",
    component: c6
  }
]
