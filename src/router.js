import Vue from "vue";
import Router from "vue-router";
import store from "./store";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      meta: {
        requiresAuth: true
      },
      path: "/",
      name: "secure",
      component: () =>
        import(/* webpackChunkName: "login" */ "./views/Secure.vue")
    },
    {
      meta: {
        requiresAuth: true
      },
      path: "/home",
      name: "home",
      component: () =>
        import(/* webpackChunkName: "login" */ "./views/Home.vue")
    },
    {
      path: "/login",
      name: "login",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "login" */ "./views/Login.vue")
    },
    {
      meta: {
        requiresAuth: true
      },
      path: "/buttons",
      name: "buttons",
      component: () =>
        import(/* webpackChunkName: "buttons" */ "./views/Buttons.vue")
    },
    {
      meta: {
        requiresAuth: true
      },
      path: "/history",
      name: "history",
      component: () =>
        import(/* webpackChunkName: "history" */ "./views/History.vue")
    },
    {
      path: "/register",
      name: "register",
      component: () =>
        import(/* webpackChunkName: "history" */ "./views/Register.vue")
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    console.log("require authentication...");
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters.isLoggedIn) {
      console.log("need to retrieve authentication.");
      next({
        path: "/login",
        query: { redirect: to.fullPath }
      });
    } else {
      // display home scene if user could logged in successfully.
      next();
    }
  } else {
    next(); // make sure to always call next()!
  }
});

export default router;
