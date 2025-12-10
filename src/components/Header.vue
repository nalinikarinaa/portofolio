<template>
  <!-- Tidak pakai wrapper untuk menghindari stacking context -->
  
  <!-- Tombol Hamburger -->
  <!-- <button
    @click.stop="toggleSidebar"
    class="md:hidden fixed top-4 left-4 z-[20000] p-2 rounded bg-pinkk text-white shadow"
  >
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
         viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"/>
    </svg>
  </button> -->

  <!-- Sidebar -->
  <!-- <nav
    class="fixed top-0 left-0 w-64 h-full bg-pinkmuda text-white shadow-lg
           z-[19000] transform transition-transform duration-300 md:hidden"
    :class="isSidebarOpen ? 'translate-x-0' : '-translate-x-full'"
  >
    <ul class="flex flex-col p-4">
      <li class="mb-4 mt-12"><a href="#profile">Profile</a></li>
      <li class="mb-4"><a href="#about">About</a></li>
      <li class="mb-4"><a href="#project">Project</a></li>
      <li class="mb-4"><a href="#contact">Contact</a></li>
    </ul>
  </nav> -->

  <!-- Overlay -->
  <!-- <div
    v-if="isSidebarOpen"
    @click.stop="toggleSidebar"
    class="fixed inset-0 bg-black opacity-50 z-[18000] md:hidden"
  ></div> -->

  <!-- Header Desktop -->
  <header
    class="hidden md:flex fixed top-0 left-0 w-full bg-pinkk z-[17000] justify-center"
  >
    <ul class="text-lg font-semibold px-8 flex font-poppins text-pinkmuda">
      <li class="md:px-8 px-2 mt-8"><a href="#profile">Profile</a></li>
      <li class="md:px-8 px-2 mt-8"><a href="#about">About</a></li>
      <li class="md:px-8 px-3 mt-8"><a href="#project">Project</a></li>
      <li class="md:px-8 px-2 mt-8"><a href="#contact">Contact</a></li>
    </ul>
  </header>
</template>

<script>
// export default {
//   props: {
//     isSidebarOpen: Boolean,
//   },

//   emits: ["toggle"],

//   methods: {
//     toggleSidebar() {
//       this.$emit("toggle");
//       console.log("Tombol Header diklik");
//     },
//   },
// };
</script>
