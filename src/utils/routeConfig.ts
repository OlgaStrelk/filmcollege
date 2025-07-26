import { lazy, type ComponentType, type LazyExoticComponent } from "react";

type RouteConfig = {
  title: string;
  path: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: ComponentType | LazyExoticComponent<any>;
  useLayout?: boolean;
  meta?: { title: string; description: string };
};
const cache: { [key: string]: ComponentType } = {};

export const ROUTE_CONFIG: RouteConfig[] = [
  {
    title: "Главная",
    path: "/",
    component:
      cache["Home"] ??
      lazy(() =>
        import("../pages/Home").then((module) => {
          cache["Home"] = module.default;
          return module;
        }),
      ),
    useLayout: true,
    meta: {
      title: "Главная - Новый Киноколледж",
      description: "Добро пожаловать на наш сайт!",
    },
  },
  {
    title: "О нас",
    path: "/about",
    component:
      cache["PageNotFound"] ??
      lazy(() =>
        import("../pages/PageNotFound").then((module) => {
          cache["PageNotFound"] = module.default;
          return module;
        }),
      ),
    meta: {
      title: "О нас - Новый Киноколледж",
      description: "Узнайте больше о нашей организации",
    },
  },
  {
    title: "Мастерские",
    path: "#workshops",
    component:
      cache["PageNotFound"] ??
      lazy(() =>
        import("../pages/PageNotFound").then((module) => {
          cache["PageNotFound"] = module.default;
          return module;
        }),
      ),
  },
  {
    title: "Факультеты",
    path: "/faculties/:facultyId?",
    component:
      cache["FacultiesPage"] ??
      lazy(() =>
        import("../pages/FacultiesPage").then((module) => {
          cache["FacultiesPage"] = module.default;
          return module;
        }),
      ),
    useLayout: true,
    meta: {
      title: "Факультеты - Новый Киноколледж",
      description: "Ознакомьтесь с нашими факультетами",
    },
  },
  {
    title: "Педагоги и сотрудники",
    path: "/teachers",
    component:
      cache["PageNotFound"] ??
      lazy(() =>
        import("../pages/PageNotFound").then((module) => {
          cache["PageNotFound"] = module.default;
          return module;
        }),
      ),
  },
  {
    title: "Поступление",
    path: "/admission",
    component:
      cache["Entrance"] ??
      lazy(() =>
        import("../pages/Entrance").then((module) => {
          cache["Entrance"] = module.default;
          return module;
        }),
      ),
    useLayout: true,
    meta: {
      title: "Поступление - Новый Киноколледж",
      description: "Информация о поступлении",
    },
  },
  {
    title: "События",
    path: "/events",
    component:
      cache["PageNotFound"] ??
      lazy(() =>
        import("../pages/PageNotFound").then((module) => {
          cache["PageNotFound"] = module.default;
          return module;
        }),
      ),
  },
  {
    title: "Проектно-продюсерский центр",
    path: "/prodcenter",
    component:
      cache["PageNotFound"] ??
      lazy(() =>
        import("../pages/PageNotFound").then((module) => {
          cache["PageNotFound"] = module.default;
          return module;
        }),
      ),
  },
  {
    title: "Страница не найдена",
    path: "*",
    component:
      cache["PageNotFound"] ??
      lazy(() =>
        import("../pages/PageNotFound").then((module) => {
          cache["PageNotFound"] = module.default;
          return module;
        }),
      ),
  },
];
