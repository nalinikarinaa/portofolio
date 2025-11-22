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
      <div class="mx-auto size-[140px] md:size-[160px] lg:size-[280px] rounded-xl overflow-hidden mb-10 ">
        <img src="../assets/img/simapres2.svg" class="w-full h-full object-cover inset-0 bg-cream bg-opacity-50  " />
      </div>
    </swiper-slide>

    <swiper-slide>
      <div class="mx-auto size-[140px] md:size-[160px] lg:size-[280px] rounded-xl overflow-hidden mb-10">
        <img src="../assets/img/washnjoy2.svg" class="w-full h-full object-cover" />
      </div>
    </swiper-slide>

    <swiper-slide>
      <div class="mx-auto size-[140px] md:size-[160px] lg:size-[280px] rounded-xl overflow-hidden mb-10">
        <img src="../assets/img/simapres2.svg" class="w-full h-full object-cover" />
      </div>
    </swiper-slide>

    <swiper-slide>
      <div class="mx-auto size-[140px] md:size-[160px] lg:size-[280px] rounded-xl overflow-hidden mb-10">
        <img src="../assets/img/simapres2.svg" class="w-full h-full object-cover" />
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

export default {
  name: 'MySwiper',
  components: { Swiper, SwiperSlide },
  setup() {
    const onSwiper = (swiper) => console.log("Swiper instance:", swiper)
    const onSlideChange = () => console.log("Slide changed!")

    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y]
    }
  }
}
</script>

<style scoped>
.swiper-pagination {
  z-index: 50 !important;
}
</style>
