<template>
<!-- <swiper
  :modules="modules"
  :slides-per-view="3"
  :space-between="10"
  :breakpoints="{
    0: { slidesPerView: 2 },       // Mobile
    768: { slidesPerView: 3 }      // Tablet & Desktop
  }"
  navigation
  :pagination="{ clickable: true }"
  :scrollbar="{ draggable: true }"
  @swiper="onSwiper"
  @slideChange="onSlideChange"
> -->
<div class="grid grid-cols-2 md:grid-cols-3">

 <!-- <swiper-slide> -->
      <div class="relative mx-auto size-[140px] md:size-[160px] lg:size-[280px] rounded-xl overflow-hidden mb-10">

        <!-- Foto -->
        <img 
          src="../assets/img/slider8.png" 
          class="w-full h-full object-cover" 
        />

        <!-- Overlay cream -->
        <div class="absolute inset-0 bg-cream/30">
          <div class="text-center items-center mt-9 md:mt-24">
            <!-- <h1 class="text-base md:text-2xl"> judul </h1> -->
              <button @click="openPopup('popup8')"class="cursor-pointer mt-14 md:mt-24 px-4 w-fit h-fit md:text-lg text-sm bg-pink hover:text-pinkmuda hover:bg-pinkmuda border border-pink text-cream font-poppins rounded-full transition-all duration-1000 ease-in-out transform hover:scale-[1.10]">
                more
              </button>
          </div>
        </div>

      </div>
    <!-- </swiper-slide> -->

    <!-- <swiper-slide> -->
      <div class="relative mx-auto size-[140px] md:size-[160px] lg:size-[280px] rounded-xl overflow-hidden mb-10">

        <!-- Foto -->
        <img 
          src="../assets/img/slider1.png" 
          class="w-full h-full object-cover" 
        />

        <!-- Overlay cream -->
        <div class="absolute inset-0 bg-cream/30">
          <div class="text-center items-center mt-9 md:mt-24">
            <!-- <h1 class="text-base md:text-2xl"> judul </h1> -->
              <button @click="openPopup('popup1')"class="cursor-pointer mt-14 md:mt-24 px-4 w-fit h-fit md:text-lg text-sm bg-pink hover:text-pinkmuda hover:bg-pinkmuda border border-pink text-cream font-poppins rounded-full transition-all duration-1000 ease-in-out transform hover:scale-[1.10]">
                more
              </button>
          </div>
        </div>

      </div>
    <!-- </swiper-slide> -->


   <!-- <swiper-slide> -->
      <div class="relative mx-auto size-[140px] md:size-[160px] lg:size-[280px] rounded-xl overflow-hidden mb-10">

        <!-- Foto -->
        <img 
          src="../assets/img/slider2.png" 
          class="w-full h-full object-cover" 
        />

        <!-- Overlay cream -->
        <div class="absolute inset-0 bg-cream/30">
          <div class="text-center items-center mt-9 md:mt-24">
            <!-- <h1 class="text-base md:text-2xl"> judul </h1> -->
              <button @click="openPopup('popup2')"class="cursor-pointer mt-14 md:mt-24 px-4 w-fit h-fit md:text-lg text-sm bg-pink hover:text-pinkmuda hover:bg-pinkmuda border border-pink text-cream font-poppins rounded-full transition-all duration-1000 ease-in-out transform hover:scale-[1.10]">
                more
              </button>
          </div>
        </div>

      </div>
    <!-- </swiper-slide> -->

   <!-- <swiper-slide> -->
      <div class="relative mx-auto size-[140px] md:size-[160px] lg:size-[280px] rounded-xl overflow-hidden mb-10">

        <!-- Foto -->
        <img 
          src="../assets/img/slider3.png" 
          class="w-full h-full object-cover" 
        />

        <!-- Overlay cream -->
        <div class="absolute inset-0 bg-cream/30">
          <div class="text-center items-center mt-9 md:mt-24">
            <!-- <h1 class="text-base md:text-2xl"> judul </h1> -->
              <button @click="openPopup('popup3')"class="cursor-pointer mt-14 md:mt-24 px-4 w-fit h-fit md:text-lg text-sm bg-pink hover:text-pinkmuda hover:bg-pinkmuda border border-pink text-cream font-poppins rounded-full transition-all duration-1000 ease-in-out transform hover:scale-[1.10]">
                more
              </button>
          </div>
        </div>

      </div>
    <!-- </swiper-slide> -->

    <!-- <swiper-slide> -->
      <div class="relative mx-auto size-[140px] md:size-[160px] lg:size-[280px] rounded-xl overflow-hidden mb-10">

        <!-- Foto -->
        <img 
          src="../assets/img/slider4.png" 
          class="w-full h-full object-cover" 
        />

        <!-- Overlay cream -->
        <div class="absolute inset-0 bg-cream/30">
          <div class="text-center items-center mt-9 md:mt-24">
            <!-- <h1 class="text-base md:text-2xl"> judul </h1> -->
              <button @click="openPopup('popup4')"class="cursor-pointer mt-14 md:mt-24 px-4 w-fit h-fit md:text-lg text-sm bg-pink hover:text-pinkmuda hover:bg-pinkmuda border border-pink text-cream font-poppins rounded-full transition-all duration-1000 ease-in-out transform hover:scale-[1.10]">
                more
              </button>
          </div>
        </div>

      </div>
    <!-- </swiper-slide> -->

    <!-- <swiper-slide> -->
      <div class="relative mx-auto size-[140px] md:size-[160px] lg:size-[280px] rounded-xl overflow-hidden mb-10">

        <!-- Foto -->
        <img 
          src="../assets/img/slider5.png" 
          class="w-full h-full object-cover" 
        />

        <!-- Overlay cream -->
        <div class="absolute inset-0 bg-cream/30">
          <div class="text-center items-center mt-9 md:mt-24">
            <!-- <h1 class="text-base md:text-2xl"> judul </h1> -->
              <button @click="openPopup('popup5')"class="cursor-pointer mt-14 md:mt-24 px-4 w-fit h-fit md:text-lg text-sm bg-pink hover:text-pinkmuda hover:bg-pinkmuda border border-pink text-cream font-poppins rounded-full transition-all duration-1000 ease-in-out transform hover:scale-[1.10]">
                more
              </button>
          </div>
        </div>

      </div>
    <!-- </swiper-slide> -->

        <!-- <swiper-slide> -->
      <div class="relative mx-auto size-[140px] md:size-[160px] lg:size-[280px] rounded-xl overflow-hidden md:mb-5">

        <!-- Foto -->
        <img 
          src="../assets/img/slider6.png" 
          class="w-full h-full object-cover" 
        />

        <!-- Overlay cream -->
        <div class="absolute inset-0 bg-cream/30">
          <div class="text-center items-center mt-9 md:mt-24">
            <!-- <h1 class="text-base md:text-2xl"> judul </h1> -->
              <button @click="openPopup('popup6')"class="cursor-pointer mt-14 md:mt-24 px-4 w-fit h-fit md:text-lg text-sm bg-pink hover:text-pinkmuda hover:bg-pinkmuda border border-pink text-cream font-poppins rounded-full transition-all duration-1000 ease-in-out transform hover:scale-[1.10]">
                more
              </button>
          </div>
        </div>

      </div>
    <!-- </swiper-slide> -->

        <!-- <swiper-slide> -->
      <div class="relative mx-auto size-[140px] md:size-[160px] lg:size-[280px] rounded-xl overflow-hidden md:mb-5">

        <!-- Foto -->
        <img 
          src="../assets/img/slider7.png" 
          class="w-full h-full object-cover" 
        />

        <!-- Overlay cream -->
        <div class="absolute inset-0 bg-cream/30">
          <div class="text-center items-center mt-9 md:mt-24">
            <!-- <h1 class="text-base md:text-2xl"> judul </h1> -->
              <button @click="openPopup('popup7')"class="cursor-pointer mt-14 md:mt-24 px-4 w-fit h-fit md:text-lg text-sm bg-pink hover:text-pinkmuda hover:bg-pinkmuda border border-pink text-cream font-poppins rounded-full transition-all duration-1000 ease-in-out transform hover:scale-[1.10]">
                more
              </button>
          </div>
        </div>

      </div>
    <!-- </swiper-slide> -->
  <!-- </swiper> -->
   </div>

                   <!-- POPUP MSIB -->
                  <div class="text-xl font-poppins font-normal">
                     <PopUp :visible="activePopup === 'popup1'" @close="closePopup">
                     <h2 class="text-sm">MSIB CERTIFICATE</h2>
                       <p class="mt-4 text-xs">
                         This certificate is awarded as proof that I have successfully completed the Kampus Merdeka MSIB (Certified Internship and Independent Study) program, where I gained hands-on work experience, participated in regular mentoring sessions, and contributed to application development projects as a Frontend Developer, including completing a team-based final project.
                        </p>
                     <div class="items-center justify-center flex mt-8"><img src="../assets/img/sertifmsib.png" class=" items-center w-full h-auto"> </div>
                     </PopUp>
                 </div>

                  <!-- POPUP ALFAHUMA -->
                  <div class="text-xl font-poppins font-normal">
                     <PopUp :visible="activePopup === 'popup2'" @close="closePopup">
                     <h2 class="text-sm">ALFAHUMA CERTIFICATE</h2>
                       <p class="mt-4 text-xs">
                         This certificate is awarded as proof that I have completed an internship at PT Alfahuma Rekayasa Teknologi, where I served as a Frontend Developer and contributed to application development, UI implementation, and API integration for various projects.
                      </p>
                     <div class="flex flex-col items-center justify-center mt-3 w-full">
                      <img src="../assets/img/sertifalfahuma.png" class="w-full max-w-md mt-3 h-auto">
                      <img src="../assets/img/sertifalfahuma1.png" class="w-full max-w-md h-auto mt-6 md:ml-5">
                    </div>
                     </PopUp>
                 </div>

                  <!-- POPUP SERTIF TI -->
                  <div class="text-xl font-poppins font-normal">
                     <PopUp :visible="activePopup === 'popup3'" @close="closePopup">
                     <h2 class="text-sm">MICROSOFT CERTIFICATE</h2>
                       <p class="mt-4 text-xs">
                         This certificate is awarded as proof that I have completed IT training from TRUST Training Partners (Microsoft Partner), covering proficiency in Microsoft Word, PowerPoint, and Excel as essential workplace productivity skills.</p>
                     <div class="items-center justify-center flex mt-8"><img src="../assets/img/sertifit.png" class=" items-center w-full h-auto"> </div>
                     </PopUp>
                 </div>

                  <!-- POPUP SERTIF BNSP -->
                  <div class="text-xl font-poppins font-normal">
                     <PopUp :visible="activePopup === 'popup4'" @close="closePopup">
                     <h2 class="text-sm">BNSP CERTIFICATE</h2>
                       <p class="mt-4 text-xs">
                         This certificate is awarded as proof that I have passed the BNSP competency assessment as a Junior Web Developer, demonstrating skills in basic web development, implementing simple frontend and backend functionality, and meeting industry competency standards.</p>
                       <div class="items-center justify-center flex mt-8"><img src="../assets/img/bnsp1.jpeg" class=" items-center w-full h-auto"> </div>
                       <div class="items-center justify-center flex mt-8"><img src="../assets/img/bnsp2.jpeg" class=" items-center w-full h-auto"> </div>
                     </PopUp>
                 </div>

                  <!-- POPUP SERTIF yuwa -->
                  <div class="text-xl font-poppins font-normal">
                     <PopUp :visible="activePopup === 'popup5'" @close="closePopup">
                     <h2 class="text-sm">YUWARAJA CERTIFICATE</h2>
                       <p class="mt-4 text-xs">
                         This certificate is awarded as proof of my participation as a Yuwaraja committee member in the Faculty PKKMB event, where I contributed to event coordination and the execution of activities for new students.</p>
                     <div class="items-center justify-center flex mt-8"><img src="../assets/img/sertifikat yuwaraja.jpeg" class=" items-center w-full h-auto"> </div>
                     </PopUp>
                 </div>

                  <!-- POPUP SERTIF myskill -->
                  <div class="text-xl font-poppins font-normal">
                     <PopUp :visible="activePopup === 'popup6'" @close="closePopup">
                     <h2 class="text-sm">MY SKILLS CERTIFICATE</h2>
                       <p class="mt-4 text-xs">
                         This certificate is awarded as proof that I have completed the “JavaScript Introduction” training at MySkill, covering JavaScript fundamentals, basic programming concepts, and their application in web development.</p>
                     <div class="items-center justify-center flex mt-8"><img src="../assets/img/myskill2.png" class=" items-center w-full h-auto"> </div>
                     </PopUp>
                 </div>

                  <!-- POPUP SERTIF myskill -->
                  <div class="text-xl font-poppins font-normal">
                     <PopUp :visible="activePopup === 'popup7'" @close="closePopup">
                     <h2 class="text-sm">MYSKILLS CERTIFICATE</h2>
                       <p class="mt-4 text-xs">
                        This certificate is awarded as proof that I have completed the “UI/UX Fundamental” training at MySkill, covering essential principles of user interface design, user experience concepts, design workflows, and user-centered solution development.</p>
                     <div class="items-center justify-center flex mt-8"><img src="../assets/img/myskill1.png" class=" items-center w-full h-auto"> </div>
                     </PopUp>
                 </div>

                  <!-- POPUP SERTIF cumlaude -->
                  <div class="text-xl font-poppins font-normal">
                     <PopUp :visible="activePopup === 'popup8'" @close="closePopup">
                     <h2 class="text-sm">AWARD CERTIFICATE</h2>
                       <p class="mt-4 text-xs">
                       This certificate is awarded in recognition of graduating with Cum Laude honors, as an appreciation for outstanding academic achievement throughout the course of study.</p>
                     <div class="items-center justify-center flex mt-8"><img src="../assets/img/sertifub.png" class=" items-center w-full h-auto"> </div>
                     </PopUp>
                 </div>
</template>

<script>
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import PopUp from './PopUp.vue'

export default {
  name: 'MySwiper',
  components: { Swiper, SwiperSlide, PopUp, },

  data() {
    return {
      activePopup: null,
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },

  methods: {
    onSwiper(swiper) {
      console.log("Swiper instance:", swiper);
    },

    onSlideChange() {
      console.log("Slide changed!");
    },

    openPopup(popup) {
      this.activePopup = popup;
    },

    closePopup() {
      this.activePopup = null;
    },
  },
};
</script>


<style scoped>
.swiper-pagination {
  z-index: 50 !important;
}
</style>
