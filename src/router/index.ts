import { Step } from '@/core/modules/layouts/types';
import {
  createRouter,
  createWebHistory,
  LocationQueryValue,
  RouteParamValue,
  RouteRecordName,
  RouteRecordRaw,
} from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:catchAll(.*)',
    redirect: `/${Step.LANDING}`,
  },
  {
    path: `/${Step.LANDING}/:lang?`,
    name: Step.LANDING,
    component: () => import(/* webpackChunkName: "Landing" */ '@/views/Landing.vue'),
    props: { isLanding: true },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export function updateRoute({
  params,
  query,
  removedParams,
  removedQuery,
  name,
}: {
  params?: Record<string, RouteParamValue | RouteParamValue[]>;
  query?: Record<string, LocationQueryValue | LocationQueryValue[]>;
  removedParams?: string[];
  removedQuery?: string[];
  name?: RouteRecordName;
}): void {
  if (!params) params = {};
  if (!query) query = {};
  const copyParams = { ...router.currentRoute.value.params };
  const copyQuery = { ...router.currentRoute.value.query };
  for (const p of removedParams ?? []) {
    if (copyParams[p]) delete copyParams[p];
  }
  for (const q of removedQuery ?? []) {
    if (copyQuery[q]) delete copyQuery[q];
  }
  router.push({
    name: name ?? router.currentRoute.value.name!,
    params: { ...copyParams, ...params },
    query: { ...copyQuery, ...query },
  });
}

export default router;
