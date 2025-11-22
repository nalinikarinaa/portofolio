<template>
  <div class="header-container">
    <button
      @click.stop="toggleSidebar"
      class="md:hidden fixed top-4 left-4 z-[9999] p-2 rounded bg-pinkk text-white shadow"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
    
    <nav
      class="sidebar md:hidden fixed top-0 left-0 w-64 h-full bg-pinkmuda text-white shadow-lg z-50 transform transition-transform duration-300"
      :class="isSidebarOpen ? 'translate-x-0' : '-translate-x-full'"
    >
  <ul class="flex flex-col p-4">
    <li class="mb-4 mt-12"><a href="#profile">Profile</a></li>
    <li class="mb-4"><a href="#about">About</a></li>
    <li class="mb-4"><a href="#project">Project</a></li>
    <li class="mb-4"><a href="#contact">Contact</a></li>
  </ul>
</nav>

    <div
      v-if="isSidebarOpen"
      @click.stop.prevent="toggleSidebar" 
      class="md:hidden fixed inset-0 bg-black opacity-50 z-40 transition-opacity duration-300"
    ></div>

    <header
      class="fixed top-0 left-0 w-full bg-pinkk z-40 hidden md:flex justify-center"
    >
      <ul
        class="text-lg font-semibold px-8 text-center items-center justify-center flex font-poppins text-pinkmuda"
      >
        <li class="md:px-8 px-2 mt-8"><a href="#profile">Profile</a></li>
        <li class="md:px-8 px-2 mt-8"><a href="#about">About</a></li>
        <li class="md:px-8 px-3 mt-8"><a href="#project">Project</a></li>
        <li class="md:px-8 px-2 mt-8"><a href="#contact">Contact</a></li>
      </ul>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header",
  // 1. Terima status sebagai prop
  props: {
    isSidebarOpen: {
      type: Boolean,
      default: false,
    },
  },
  // 2. Deklarasikan event yang akan di-emit
  emits: ['toggle'], 
  
  methods: {
    toggleSidebar() {
      // 3. Emit event ke parent, bukan mengubah state internal
      this.$emit('toggle'); 
      console.log("Tombol Header diklik");
      // Tidak perlu console.log state di sini, biarkan parent yang mencetak
    },
  },
};
</script>

<style scoped>
/* Hapus override aneh yg bikin sidebar kecil */

</style>






<!-- <template>
    <header>
      <div class="bg-pink">
        <ul class="text-lg font-semibold px-8 text-center items-center justify-center flex font-poppins text-pinkmuda">
        <li class="md:px-8 px-2 mt-8 text"><a href="#profile">Profile</a></li>
        <li class="md:px-8 px-2 mt-8"><a href="#about">About</a></li>
        <li class="md:px-8 px-3 mt-8"><a href="#project">Project</a></li>
        <li class="md:px-8 px-2 mt-8"><a href="#contact">Contact</a></li>
      </ul>
      </div>
    </header> -->

    <!-- sidebar -->
     
  <!-- </template>
  
  <script>
  export default {
    name: "Header",
  };
  </script> -->
  
  <!-- <style scoped>
  header {
    background-color: #FDB0C0;
    padding: 20px 0; /* Mengurangi padding untuk membuat header lebih kecil */
    position: fixed; /* Membuat header tetap di atas */
    width: 100%; /* Pastikan header melebar ke seluruh lebar layar */
    top: 0;
    z-index: 1000; /* Pastikan header berada di atas konten lain */
    font-size: 14px; /* Mengatur ukuran font agar lebih sesuai dengan header yang lebih kecil */
  }
  
  nav ul {
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  
  nav ul li {
    margin: 0 10px; /* Mengurangi jarak antar item navigasi */
  }
  
  nav ul li a {
    color: #FEDDDE; /* Mengubah warna teks menjadi hitam untuk kontras */
    text-decoration: none;
  }
  
  main {
    padding-top: 40px; /* Menyesuaikan padding-top sesuai dengan tinggi header yang baru */
    padding-left: 20px;
    padding-right: 20px;
  }
  </style> -->