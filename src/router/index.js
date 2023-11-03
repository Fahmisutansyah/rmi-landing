import { createRouter, createWebHistory } from "vue-router";
import {
  Home,
  Home2,
  Home3,
  About,
  Contact,
  Team,
  Services,
  Blog,
  BlogDetails,
  Faq,
  Price,
  PortfolioDetails,
  PortfolioGallery,
  PortfolioSlider,
  PortfolioStandard,
  ListLayout2,
  ListLayout3,
  ListLayout4,
} from "../views";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  // {
  //   path: "/index-2",
  //   name: "home2",
  //   component: Home2,
  // },
  // {
  //   path: "/index-3",
  //   name: "home3",
  //   component: Home3,
  // },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   component: About,
  // },
  // {
  //   path: "/team",
  //   name: "team",
  //   component: Team,
  // },
  // {
  //   path: "/faq",
  //   name: "faq",
  //   component: Faq,
  // },
  // {
  //   path: "/price",
  //   name: "price",
  //   component: Price,
  // },
  // {
  //   path: "/services",
  //   name: "services",
  //   component: Services,
  // },
  // {
  //   path: "/portfolio-standard",
  //   name: "portfolioStandard",
  //   component: PortfolioStandard,
  // },
  // {
  //   path: "/portfolio-slider",
  //   name: "portfolioSlider",
  //   component: PortfolioSlider,
  // },
  // {
  //   path: "/portfolio-gallery",
  //   name: "portfolioGallery",
  //   component: PortfolioGallery,
  // },
  // {
  //   path: "/portfolio/:id",
  //   name: "portfolioDetails",
  //   component: PortfolioDetails,
  // },
  // {
  //   path: "/list-layout-2",
  //   name: "portfolioLayout2",
  //   component: ListLayout2,
  // },
  // {
  //   path: "/list-layout-3",
  //   name: "portfolioLayout3",
  //   component: ListLayout3,
  // },
  // {
  //   path: "/list-layout-4",
  //   name: "portfolioLayout4",
  //   component: ListLayout4,
  // },
  // {
  //   path: "/blogs",
  //   name: "blogs",
  //   component: Blog,
  // },
  // {
  //   path: "/blog/:id",
  //   name: "blogDetails",
  //   component: BlogDetails,
  // },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, left: 0 };
    }
  },
});

export default router;
