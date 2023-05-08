import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import BeginningOfWork from '../views/BeginningOfWork.vue'
import CreateClass from '../views/CreateClass.vue'
import AddStudent from '../views/AddStudent.vue'
import StudentSearch from '../views/StudentSearch.vue'
import StudentPage from '../views/StudentPage.vue'
import Data from '../views/Data.vue'
import ChoiceOfMethod from '../views/ChoiceOfMethod.vue'
import ObservationTest from '../views/ObservationTest.vue'
import SpeakingTest from '../views/SpeakingTest.vue'
import ExperimentTest from '../views/ExperimentTest.vue'
import Authorization from '../views/Authorization.vue'
import Account from '../views/Account.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      props: {
        showStudent: false
      }
    },
    {
      path: '/beginning_of_work',
      component: BeginningOfWork,
      props: {
        showStudent: false
      }
    },
    {
      path: '/create_class',
      component: CreateClass,
      props: {
        showStudent: false
      }
    },
    {
      path: '/add_student',
      component: AddStudent,
      props: {
        showStudent: false
      }
    },
    {
      path: '/student_search',
      component: StudentSearch,
      props: {
        showStudent: false
      }
    },
    {
      path: '/student_page',
      component: StudentPage,
      props: {
        showStudent: true
      }
    },
    {
      path: '/data_monitoring',
      component: Data,
      props: {
        showStudent: true
      }
    },
    {
      path: '/choice_of_method',
      component: ChoiceOfMethod,
      props: {
        showStudent: true
      }
    },
    {
      path: '/observation_test',
      component: ObservationTest,
      props: {
        showStudent: true
      }
    },
    {
      path: '/speaking_test',
      component: SpeakingTest,
      props: {
        showStudent: true
      }
    },
    {
      path: '/experiment_test',
      component: ExperimentTest,
      props: {
        showStudent: true
      }
    },
    {
      path: '/authorisation',
      component: Authorization,
      props: {
        showStudent: false
      }
    },
    {
      path: '/account',
      component: Account,
      props: {
        showStudent: false
      }
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
