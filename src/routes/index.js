import { createRouter,createWebHistory } from "vue-router";

import HomePage from "@/components/HomePage.vue";
import Courses from "@/components/Courses.vue";
import ContactUs from "@/components/ContactUs.vue";
import Patnerships from "@/components/Patnerships.vue";
import Alumni from "@/components/Alumni.vue";
import AboutUs from "@/components/AboutUs.vue";
import Library from "@/components/Library.vue";
import Events from "@/components/Events.vue";

const routes = [
{
    path: '/',
    name: 'homepage',
    component: HomePage
},
{
    path: '/courses',
    name: 'Courses',
    component: Courses
},
{
    path: '/contactus',
    name: 'Contactus',
    component: ContactUs
},
{
    path: '/patnerships',
    name: 'patnerships',
    component: Patnerships
},
{
    path: '/alumni',
    name: 'alumni',
    component: Alumni
},
{
    path: '/aboutus',
    name: 'aboutus',
    component: AboutUs
},
{
    path: '/library',
    name: 'library',
    component: Library
},
{
    path: '/events',
    name: 'events',
    component: Events
},
]

const router= createRouter({
    history:createWebHistory(),
    routes,
})

export default router