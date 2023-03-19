import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import BeginningOfWork from '../views/BeginningOfWork.vue'
import CreateClass from '../views/CreateClass.vue'
import AddStudent from '../views/AddStudent.vue'
import StudentSearch from '../views/StudentSearch.vue'
import StudentPage from '../views/StudentPage.vue'
import Data from '../views/StudentPage.vue'
import ChoiceOfMethod from '../views/ChoiceOfMethod.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/beginning_of_work',
      name: 'beginning-of-work',
      component: BeginningOfWork
    },
    {
      path: '/create_class',
      name: 'create_class',
      component: CreateClass
    },
    {
      path: '/add_student',
      name: '/add_student',
      component: AddStudent
    },
    {
      path: '/student_search',
      name: '/student_search',
      component: StudentSearch
    },
    {
      path: '/student_page',
      name: '/student_page',
      component: StudentPage
    },
    {
      path: '/data',
      name: '/data',
      component: Data
    },
    {
      path: '/choice_of_method',
      name: '/choice_of_method',
      component: ChoiceOfMethod
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
