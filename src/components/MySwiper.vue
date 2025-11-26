<template>
<swiper
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
>

    <swiper-slide>
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
              <button @click="openPopup('popup3')"class="cursor-pointer mt-14 md:mt-24 px-4 w-fit h-fit md:text-lg text-sm bg-pink hover:text-pinkmuda hover:bg-pinkmuda border border-pink text-cream font-poppins rounded-full transition-all duration-1000 ease-in-out transform hover:scale-[1.10]">
                more
              </button>
          </div>
        </div>

      </div>
    </swiper-slide>


   <swiper-slide>
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
              <button @click="openPopup('popup3')"class="cursor-pointer mt-14 md:mt-24 px-4 w-fit h-fit md:text-lg text-sm bg-pink hover:text-pinkmuda hover:bg-pinkmuda border border-pink text-cream font-poppins rounded-full transition-all duration-1000 ease-in-out transform hover:scale-[1.10]">
                more
              </button>
          </div>
        </div>

      </div>
    </swiper-slide>

   <swiper-slide>
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
    </swiper-slide>

    <swiper-slide>
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
              <button @click="openPopup('popup3')"class="cursor-pointer mt-14 md:mt-24 px-4 w-fit h-fit md:text-lg text-sm bg-pink hover:text-pinkmuda hover:bg-pinkmuda border border-pink text-cream font-poppins rounded-full transition-all duration-1000 ease-in-out transform hover:scale-[1.10]">
                more
              </button>
          </div>
        </div>

      </div>
    </swiper-slide>
  </swiper>

                   <!-- POPUP SIMAPRES -->
                  <div class="text-xl font-poppins font-normal">
                     <PopUp :visible="activePopup === 'popup3'" @close="closePopup">
                     <h2 class="text-sm">SIMAPRES</h2>
                       <p class="mt-4 text-xs">
                         SIMAPRES Project Base Learning (PBL) is a web-based application platform that aims to display and edit high-achieving student data, and make it easier to submit and validate achievements. And in this project there are 2 actors, user and admin, each user has a different role.<br><br>
                         As a Back-End Developer on the SIMAPRES Learning Base Project is a very valuable experience for me. I am in charge of planning and developing servers, designing and managing database structures that are efficient and according to needs, building and developing Back-End using PHP Native, 
                         and developing and integrating features.</p>
                     <div class="items-center justify-center flex mt-8"><img src="../assets/img/simapres2.svg" class=" items-center w-full h-auto"> </div>
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
