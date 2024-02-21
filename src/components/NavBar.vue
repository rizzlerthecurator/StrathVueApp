<script>
import AboutUs from './AboutUs.vue';
import AlumniVue from './Alumni.vue';
import ContactUs from './ContactUs.vue';
import CoursesVue from './Courses.vue';
import Events from './Events.vue';
import HomePageVue from './HomePage.vue';
import Library from './Library.vue';
import Patnerships from './Patnerships.vue';
</script>

<template>
    <v-app-bar color="teal">
        <div>
            <v-btn to="/" color="white" dark>HomePage</v-btn>
        </div>
        <div>
            <v-btn to="/AboutUs" color="white" dark>AboutUs</v-btn>
        </div>
        <div>
            <v-btn to="/Alumni" color="white" dark>Alumni</v-btn>
        </div>
        <div>
            <v-btn to="/contactus" color="white" dark>ContactUs</v-btn>
        </div>
        <div>
            <v-btn to="/Courses" color="white" dark>Courses</v-btn>
        </div>
        <div>
            <v-btn to="/Events" color="white" dark>Events</v-btn>
        </div>
        <div>
            <v-btn to="/Library" color="white" dark>Library</v-btn>
        </div>
        <div>
            <v-btn to="/Patnerships" color="white" dark>Patnerships</v-btn>
        </div>
    </v-app-bar>
</template>