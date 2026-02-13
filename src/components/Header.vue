<template>
  <header class="fixed top-6 w-full z-[17000] px-6">

    <!-- DESKTOP -->
    <div class="hidden md:flex justify-center">
      <nav
        class="bg-gradient-to-r from-pink to-pinkmuda 
               rounded-full px-10 py-3 w-[85%] 
               flex justify-center shadow-lg"
      >
        <ul class="flex items-center gap-10 text-white font-semibold text-lg">
          <li v-for="menu in menus" :key="menu.name">
            <RouterLink
              :to="menu.link"
              :class="[
                'px-6 py-2 rounded-full transition-all duration-300',
                isActive(menu)
                  ? 'bg-white text-black'
                  : 'hover:opacity-80'
              ]"
            >
              {{ menu.name }}
            </RouterLink>
          </li>
        </ul>
      </nav>
    </div>

    <!-- MOBILE -->
    <div class="md:hidden">
      <nav
        class="bg-gradient-to-r from-pink to-pinkmuda
               rounded-full px-6 py-4
               flex justify-end items-center
               shadow-lg"
      >
        <!-- Hamburger -->
        <button @click="mobileOpen = !mobileOpen" class="flex flex-col gap-1">
          <span class="w-6 h-[3px] bg-white rounded"></span>
          <span class="w-6 h-[3px] bg-white rounded"></span>
          <span class="w-6 h-[3px] bg-white rounded"></span>
        </button>
      </nav>

      <!-- Dropdown -->
      <transition name="fade">
        <div
          v-if="mobileOpen"
          class="mt-4 bg-gradient-to-r from-pink to-pinkmuda
                 rounded-2xl p-6 shadow-lg"
        >
          <ul class="flex flex-col gap-4 text-white font-semibold text-lg">
            <li v-for="menu in menus" :key="menu.name">
              <RouterLink
                :to="menu.link"
                @click="mobileOpen = false"
                :class="[
                  'block px-4 py-2 rounded-xl transition-all duration-300',
                  isActive(menu)
                    ? 'bg-white text-black'
                    : 'hover:opacity-80'
                ]"
              >
                {{ menu.name }}
              </RouterLink>
            </li>
          </ul>
        </div>
      </transition>
    </div>

  </header>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink, useRoute } from "vue-router";

const route = useRoute();
const mobileOpen = ref(false);

const menus = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Project", link: "/#project" },
  { name: "Contact", link: "/#contact" },
];

const isActive = (menu) => {
  if (menu.link.includes("#")) {
    return route.hash === "#" + menu.link.split("#")[1];
  }
  return route.path === menu.link;
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
