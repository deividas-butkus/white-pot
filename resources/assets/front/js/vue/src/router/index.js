import Vue from 'vue';
import VueRouter from 'vue-router';
import Directives from '../views/Directives.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Directives',
    component: Directives,
  },
  {
    path: '/events',
    name: 'Events',
    component: () => import('../views/Events.vue'),
  },
  {
    path: '/todo-list',
    name: 'Todo list',
    component: () => import('../views/TodoList.vue'),
  },
  {
    path: '/courses',
    name: 'Courses',
    component: () => import('../views/Courses.vue'),
  },
  {
    path: '/location-manager',
    name: 'Location Manager',
    component: () => import('../views/LocationManager.vue'),
  },
  {
    path: '/course-manager',
    name: 'Courses',
    component: () => import('../views/CourseManager.vue'),
  },
  {
    path: '/course-request',
    name: 'Course Request',
    component: () => import('../views/CourseRequest.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
