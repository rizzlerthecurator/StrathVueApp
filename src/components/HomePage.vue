<template>
  <div id="homepage">
    <v-container>
      <v-layout column>
        <v-carousel>
          <v-carousel-item
            src="https://unsplash.com/photos/a-city-skyline-with-sailboats-gjbsGrSsyfI"
            cover
          ></v-carousel-item>

          <v-carousel-item
            src="https://unsplash.com/photos/a-tall-building-with-many-windows-next-to-a-tall-building-KeeX0u6xasU"
            cover
          ></v-carousel-item>

          <v-carousel-item
            src="https://unsplash.com/photos/people-sitting-down-near-table-with-assorted-laptop-computers-SYTO3xs06fU"
            cover
          ></v-carousel-item>
        </v-carousel>
      </v-layout>
      <v-layout>
        <v-container>
          <v-row align="center" justify="center">
            <div class="d-flex align-center flex-column">
              <div class="text-subtitle-2">Accomodation</div>

              <v-card
                width="400"
                title="SU accomodation"
                subtitle="A comprehensive guide on accomodation in SU"
                text="University accommodation plays a crucial role in the overall experience of students pursuing higher education. It provides a home away from home and creates a supportive environment for learning and personal growth. This guide aims to offer comprehensive information on university accommodation, including types of accommodation, how to apply, factors to consider, and tips for making the most of your living experience.
                How to Apply:

Application Process:SU typically provide detailed instructions on how to apply for accommodation. This may involve submitting an online application form, specifying preferences for roommates or room types, and providing necessary documentation.

Application Deadlines: It's essential to be aware of application deadlines, as university accommodation can fill up quickly, especially in popular programs or during peak admission periods.

Room Allocation: After submitting your application, rooms are allocated based on availability and often with consideration for preferences indicated during the application process."
              ></v-card>

              <div class="mt-4 text-subtitle-2">Student Life</div>

              <v-card width="400">
                <template v-slot:title> A glimpse of SU student life</template>

                <template v-slot:subtitle> Aday in the ife of a SU student</template>

                <template v-slot:text> University student life is a unique and exciting experience filled with opportunities for personal growth, academic exploration, and social development. As you embark on this journey, it's essential to understand what to expect and how to make the most of your time on campus. This comprehensive guide provides insights and tips to help you navigate university student life successfully.
                    Attend Classes: SU students attend all lectures and seminars </template>
              </v-card>

              <div class="mt-4 text-subtitle-2">Clubs</div>

              <v-card width="400">
                <v-card-item>
                  <v-card-title>SU clubs and societies</v-card-title>

                  <v-card-subtitle>What clubs do SU offer</v-card-subtitle>
                </v-card-item>

                <v-card-text> This universitydoes not only provide academic growth but also social! Here is a glimpse of the courses offered Japanese club, tennis club, German club just to mention a few!</v-card-text>
              </v-card>
            </div>
          </v-row>
        </v-container>
      </v-layout>
    </v-container>
  </div>
</template>
<script setup>
const variants = ["elevated", "flat", "tonal", "outlined"];
</script>
