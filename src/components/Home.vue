<script setup>
import 'vue3-carousel/dist/carousel.css'
import Dropdown from './DetailsDropdown.vue'
import Footer from './Footer.vue'
import Header from './Header.vue'
import PopUp from './PopUp.vue'
import Flipcard from './Flipcard.vue'

// import slider1 from '../assets/img/bakingclass.jpg';
// import slider2 from '../assets/img/cookingclass.jpg';
// import slider3 from '../assets/img/flowerclass.jpg';
// import slider4 from '../assets/img/potteryclayclass.jpg';
// import slider5 from '../assets/img/cakedekor.jpg';
// import slider6 from '../assets/img/craftingclass.jpg';
</script>
 
<template>
  <!-- Menambahkan komponen Header di sini -->

  <Header 
    :is-sidebar-open="isSidebarOpen"
    @toggle="handleToggleSidebar"
  /> 
  
  <div id="porto">
    <div class="!bg-pink">
    <div class="flex justify-center ">
  <div class="translate-y-4 ">
  <div class="bg-cream mt-12 rounded-3xl  justify-center flex-col grid grid-cols-2 shadow-2xl animate-fade-in"
       :class="{
         'w-[80vw] h-[40vh]': !isDesktop,
         'md:w-[80vw] lg:h-[70vh]': isDesktop
       }">
        <div class="py-5 md:mx-10 md:mt-32 mx-5 mt-5">
<h1 class="text-2xl md:text-6xl font-playfair font-bold text-pink"
    style="text-shadow: 2px 2px 4px rgba(0,0,0,0.3);">
  NALINI KARINA ANDHINI
</h1>
      <p class="text-sm md:text-2xl font-poppins font-medium my-5 mb-1">Web Developer</p>
      <div class="bg-pinkk md:w-48 w-28 py-0.5 md:mb-5 md:mt-2"></div>
      <div class="flex">
        <img src="../assets/img/github.png" class="cursor-pointer w-10 h-10 md:w-16 md:h-16 mt-2 transition-all duration-1000 ease-in-out transform hover:scale-[1.10]" @click="openLink('https://github.com/nalinikarinaa')" alt="GitHub">
        <img src="../assets/img/linkenln.png" class="ml-2 cursor-pointer w-8 h-8 md:w-14 md:h-14 mt-3 transition-all duration-1000 ease-in-out transform hover:scale-[1.10]" @click="openLink('https://www.linkedin.com/in/nalini-karina-andhini-913944240/')" alt="LinkedIn">
        <img src="../assets/img/ig.png" class="ml-1 cursor-pointer w-12 h-12 md:w-20 md:h-auto mt-1 md:mt-0 transition-all duration-1000 ease-in-out transform hover:scale-[1.10]" @click="openLink('https://www.instagram.com/nalinikarinaa/')" alt="Instagram">
      </div>
    
        </div>
 
<div class="items-center flex justify-end md:translate-y-[-170px] translate-x-6 md:translate-x-0">
  <img src="../assets/img/hmm.svg" class="w-[250px] md:w-full max-w-[540px] h-auto md:mt-44 mt-6">
</div>

  </div>
    </div>
      </div>
      
  <section id="profile" class="overflow-hidden">
       <div class="bg-cream mt-28 justify-center shadow-2xl animate-fade-in overflow-hidden"
           :class="{
             'w-[100vw] h-[70vh] rounded-t-[60px] rounded-b-none': !isDesktop,
             'md:w-full lg:h-[70vh] rounded-t-[300px] rounded-b-none': isDesktop
           }">

         <div
       class="md:text-3xl text-xl font-bold p-4 justify-center text-center md:px-28 font-playfair mt-10"
     >
       <p class="anim-text text-pink">PROFILE</p>
     </div>

  <div class="text-sm flex flex-col md:grid md:grid-cols-2 mt-4 text-pink">
     <!-- Kolom kiri -->
     <div
       class="md:text-3xl text-xl font-bold p-4 md:flex md:justify-center md:px-28 font-playfair mt-5"
     >
       <p class="anim-text">PROFILE</p>
     </div>

     <!-- Kolom kanan -->
     <div class="md:text-xl p-4 md:justify-center md:px-28 font-poppins">
       <h2 class="font-bold anim-text">
         Hello, <br />I am Nalini Karina Andhini
       </h2>
       <p class="anim-text">
         Information Technology Student at Brawijaya University.<br />
         I have an interest in the world of programming, during college have
         experience running several projects. Trained in using several
         programming languages such as PHP, HTML, Javascript and SQL database,
         and experienced in building websites using several frameworks such as
         Laravel, Bootstrap, and Tailwind CSS.
       </p>
     </div>
   </div>

       </div>
 </section>

  <div class="bg-cream">
  <!-- Konten -->

 <section id="about" class="py-10">
     <div class="flex justify-center text-cream">
     <div class="bg-pink translate-y-10 rounded-3xl justify-center shadow-2xl " style="min-height: 60vh; width: 90vw; max-width: 1200px;">
         <h1 class="text-xl md:text-3xl font-playfair font-bold py-5 mx-10 my-2 text-center anim-about">ABOUT</h1>
         <div class="about my-4 px-4 md:ml-28 md:mr-40 mb-5 anim-about">
             <Dropdown title="Education" class="cursor-pointer md:text-xl text-sm md:mt-4 font-poppins mb-3">
                 <ul class="list-none">
                     <li class="flex items-center ml-8 mb-4 md:text-lg text-sm">
                         <img src="../assets/img/logoUB.svg" alt="" class="w-8 h-auto mr-2">
                         <span class="ml-3">2022 - 2025 <br><p class="">Universitas Brawijaya - Teknologi Informasi</p> 
                        </span>
                     </li>
                 </ul>
             </Dropdown>
             <hr>
             <Dropdown title="Soft skill" class="cursor-pointer md:text-xl md:mt-4 text-sm font-poppins mb-2">
                 <ul class="list-none md:text-lg text-sm">
                     <li class="md:text-medium ml-8 mt-2">Komunikasi efektif</li>
                     <li class="md:text-medium ml-8 mt-4">Kerjasama tim</li>
                     <li class="md:text-medium ml-8 mt-4">Manajemen waktu</li>
                 </ul>
             </Dropdown>
             <hr>
             <Dropdown title="Framework" class="cursor-pointer md:text-xl md:mt-4 text-sm font-poppins mb-2">
                 <ul class="list-none md:text-lg text-sm">
                     <li class="flex items-center ml-8 mb-4">
                         <img src="../assets/img/tailwind.svg" alt="TailwindCSS" class="w-8 h-auto mr-2">
                         <span>TailwindCSS</span>
                     </li>
                     <li class="flex items-center ml-8 mb-4">
                         <img src="../assets/img/butrap.svg" alt="Bootstrap" class="w-8 h-auto mr-2">
                         <span>Bootstrap</span>
                     </li>
                     <li class="flex items-center ml-8">
                         <img src="../assets/img/laravel.svg" alt="Laravel" class="w-8 h-auto mr-2">
                         <span>Laravel</span>
                     </li>
                     <li class="flex items-center ml-8 mt-3">
                         <img src="../assets/img/vue.svg" alt="Vue.js" class="w-8 h-auto mr-2">
                         <span>Vue.js</span>
                     </li>
                 </ul>
             </Dropdown>
             <hr>
             <Dropdown title="Programing Language" class="cursor-pointer md:text-xl md:mt-4 text-sm font-poppins mb-2">
                 <ul class="list-none md:text-lg text-sm">
                     <li class="flex items-center ml-8 mb-4">
                         <img src="../assets/img/html.svg" alt="HTML" class="w-8 h-auto mr-2">
                         <span>HTML</span>
                     </li>
                     <li class="flex items-center ml-8 mb-4">
                         <img src="../assets/img/css.svg" alt="CSS" class="w-8 h-auto mr-2">
                         <span>CSS</span>
                     </li>
                     <li class="flex items-center ml-8">
                         <img src="../assets/img/js.svg" alt="JavaScript" class="w-8 h-auto mr-2">
                         <span>JavaScript</span>
                     </li>
                     <li class="flex items-center ml-8 mt-3">
                         <img src="../assets/img/php.svg" alt="PHP" class="w-8 h-auto mr-2">
                         <span>PHP</span>
                     </li>
                 </ul>
             </Dropdown>
             <hr>
             <Dropdown title="Tools" class="cursor-pointer md:text-xl md:mt-4 text-sm font-poppins mb-2">
                 <ul class="list-none md:text-lg text-sm">
                     <li class="flex items-center ml-8 mb-4">
                         <img src="../assets/img/vscode.svg" alt="VSCode" class="w-8 h-auto mr-2">
                         <span>VSCode</span>
                     </li>
                     <li class="flex items-center ml-8 mb-4">
                         <img src="../assets/img/xampp.svg" alt="XAMPP" class="w-8 h-auto mr-2">
                         <span>XAMPP</span>
                     </li>
                     <li class="flex items-center ml-8">
                         <img src="../assets/img/figma.svg" alt="Figma" class="w-8 h-auto mr-2">
                         <span>Figma</span>
                     </li>
                     <li class="flex items-center ml-8 mt-3">
                         <img src="../assets/img/canva.svg" alt="Canva" class="w-8 h-auto mr-2">
                         <span>Canva</span>
                     </li>
                 </ul>
             </Dropdown>
             <hr>
         </div>
     </div>
 </div>
 </section>

 <section id="project">

  <div class="relative h-screen bg-fixed bg-cover bg-center mt-20" style="background-image: url('/src/assets/img/sertiff.svg'); height: 40vh;">
                <!-- Layer overlay hitam yang bergerak saat di-scroll -->
                <div class="absolute inset-0 bg-cream bg-opacity-50 flex items-center justify-center">
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-16 text-center">
                  <div>
                      <h1 class="text-xl md:text-3xl font-playfair font-bold 
                                  text-center text-pink bg-pinkmuda px-10 py-4 rounded-full">
                          PROJECT
                      </h1>
                  </div>
                    <div>
                      <h1 class="text-xl md:text-3xl font-playfair font-bold 
                                  text-center text-cream bg-pink px-10 py-4 rounded-full">
                          EXPERIENCE
                      </h1>
                  </div>
                    <div>
                      <h1 class="text-xl md:text-3xl font-playfair font-bold 
                                  text-center text-pink bg-pinkmuda px-10 py-4 rounded-full">
                          SERTIFICATE
                      </h1>
                  </div>
        </div>
                </div>
            </div>

 <!-- <div class="flex justify-center mt-14 md:mt-10 anim-project">
     <h1 class="text-xl md:text-3xl font-playfair font-bold 
                 text-center text-pink bg-pinkmuda px-10 py-4 rounded-full">
         PROJECT
     </h1>
 </div> -->

 <div class="flex flex-col md:grid md:grid-cols-2 anim-project px-10 gap-20">
 <div class="flex justify-center anim-project">
     <div class="bg-pinkmuda translate-y-10 rounded-3xl justify-center p-4 shadow-2xl" md:style="height: 30vh; width: 50vh;">
         <div class="text-sm flex flex-col md:grid md:grid-cols-2 items-center h-full anim-project">
             <!-- Konten 1 -->
             <div class="md:text-5xl font-bold md:flex md:justify-center font-playfair">
                 <img src="../assets/img/simapres.svg" class="w-45 h-45 anim-project">
             </div>

             <!-- Konten 2 -->
             <div class="md:text-3xl font-bold px-16 md:justify-center font-poppins text-lg md:w-80 anim-project text-pink">
                 <p>SIMAPRES</p>
                 <button @click="openPopup('popup3')"class="cursor-pointer mt-5  px-4 w-fit h-fit md:text-lg text-sm bg-pink hover:text-pinkmuda hover:bg-pinkmuda border border-pink text-cream font-poppins rounded-full transition-all duration-1000 ease-in-out transform hover:scale-[1.10]">
                     more
                 </button>
                 <button @click="openLink('https://github.com/nalinikarinaa/simapres')" class="cursor-pointer md:mt-5 mt-2  px-4 w-fit h-fit flex items-center justify-center text-lg bg-pink hover:text-pinkmuda hover:bg-pinkmuda border border-pink rounded-full text-cream font-poppins transition-all duration-1000 ease-in-out transform hover:scale-[1.10]">
                     <img src="../assets/img/github2.svg"
                     class="mr-2 cursor-pointer w-5"
                     @click="openLink('https://github.com/nalinikarinaa/simapres')"
                    alt="projectsimapres"><p class="md:text-lg text-sm">github</p>
                 </button>
             </div>
         </div>
     </div>
 </div>


 <div class="flex justify-center mt-5 anim-project">
     <div class="bg-pinkmuda translate-y-10 rounded-3xl justify-center p-4 shadow-2xl" md:style="height: 30vh; width: 50vh;">
         <div class="text-sm flex flex-col md:grid md:grid-cols-2 items-center h-full">
             <!-- Konten 1 -->
             <div class="md:text-5xl font-bold md:flex md:justify-center font-playfair">
                 <img src="../assets/img/washnjoy.svg" class="w-45 h-45 anim-project">
             </div>

             <!-- Konten 2 -->
             <div class="md:text-3xl text-lg font-bold px-16 md:justify-center text-pink font-poppins md:w-80">
                 <p>WashNJoy <br> E-Laundry</p>
                 <button @click="openPopup('popup2')"class="cursor-pointer mt-5  px-4 w-fit h-fit md:text-lg text-sm bg-pink hover:text-pinkmuda hover:bg-pinkmuda border border-pink rounded-full text-cream font-poppins transition-all duration-1000 ease-in-out transform hover:scale-[1.10]">
                     more
                 </button>
                 <button @click="openLink('https://github.com/nalinikarinaa/washnjoy')" class="cursor-pointer mt-5  px-4 w-fit h-fit flex items-center justify-center text-lg bg-pink hover:text-pinkmuda hover:bg-pinkmuda border border-pink rounded-full text-cream transition-all duration-1000 ease-in-out transform hover:scale-[1.10]">
                     <img src="../assets/img/github2.svg" 
                     class="mr-2 cursor-pointer w-5"
                     @click="openLink('https://github.com/nalinikarinaa/washnjoy')"
                    alt="projectwashnjoy"><p class="md:text-lg text-sm">github</p>
                 </button>
             </div>
         </div>
     </div>
 </div>


 <div class="flex justify-center anim-project">
     <div class="bg-pinkmuda translate-y-10 rounded-3xl justify-center p-4 shadow-2xl" md:style="height: 30vh; width: 50vh;">
         <div class="text-sm flex flex-col md:grid md:grid-cols-2 items-center h-full">
             <!-- Konten 1 -->
             <div class="md:text-5xl font-bold md:flex md:justify-center font-playfair">
                 <img src="../assets/img/uiux 1.svg" class="w-45 h-45 anim-project">
             </div>

             <!-- Konten 2 -->
             <div class="md:text-3xl text-lg font-bold px-16 md:justify-center text-pink font-poppins md:w-80">
                 <p>UI/UX WashNJoy</p>
                 <button @click="openPopup('popup4')"class="cursor-pointer mt-5  px-4 w-fit h-fit md:text-lg text-sm bg-pink hover:text-pinkmuda hover:bg-pinkmuda border border-pink rounded-full text-cream font-poppins transition-all duration-1000 ease-in-out transform hover:scale-[1.10]">
                     more
                 </button>
                 <button @click="openLink('https://www.figma.com/proto/u73Eqw4DH1bYSTw9dWPG2Z/PBL-E-LAUNDRY?node-id=259-2699&t=ebwIu5x0UtTgN1PZ-0&scaling=min-zoom&content-scaling=fixed&page-id=259%3A2680&starting-point-node-id=259%3A2699')" class="cursor-pointer mt-5  px-4 w-fit h-fit flex items-center justify-center md:text-lg text-sm bg-pink hover:text-pinkmuda hover:bg-pinkmuda border border-pink rounded-full text-cream font-poppins transition-all duration-1000 ease-in-out transform hover:scale-[1.10]">
                     prototype
                 </button>
             </div>
         </div>
     </div>
 </div>
 </div>
 <!-- <div class="flex justify-center mt-14 md:mt-20 anim-project">
     <h1 class="text-xl md:text-3xl font-playfair font-bold 
                 text-center text-cream bg-pink px-10 py-4 rounded-full">
         EXPERIENCE
     </h1>
 </div> -->
 <div class="flex justify-center anim-project flex-col md:grid md:grid-cols-2 gap-20 px-10 mt-10">
     <div class="bg-pink translate-y-10 rounded-3xl justify-center p-4 shadow-2xl" md:style="height: 30vh; width: 50vh; anim-project">
         <div class="text-sm flex flex-col md:grid md:grid-cols-2 items-center h-full">
             <!-- Konten 1 -->
             <div class="md:text-5xl font-bold md:flex md:justify-center font-playfair anim-project">
                 <img src="../assets/img/yuwaraja.svg" class="w-50 h-50">
             </div>

             <!-- Konten 2 -->
             <div class="md:text-3xl text-cream text-lg font-bold px-16 md:justify-center font-poppins md:w-80 anim-project">
                 <p class="text-cream">YUWARAJA XV</p>
                 <button @click="openPopup('popup1')"class="cursor-pointer mt-5  px-4 w-fit h-fit md:text-lg text-sm bg-cream hover:text-pinkmuda hover:bg-pinkmuda border border-pink rounded-full text-pink">
                     more</button>
             </div>
         </div>
     </div>

     <div class="bg-pink translate-y-10 rounded-3xl justify-center p-4 shadow-2xl" md:style="height: 30vh; width: 50vh; anim-project">
         <div class="text-sm flex flex-col md:grid md:grid-cols-2 items-center h-full">
             <!-- Konten 1 -->
             <div class="md:text-5xl font-bold md:flex md:justify-center font-playfair anim-project">
                 <img src="../assets/img/msib (2).png" class="w-48 h-48">
             </div>

             <!-- Konten 2 -->
             <div class="md:text-3xl text-cream text-lg font-bold px-4 md:justify-center font-poppins md:w-80 anim-project">
                 <p class="text-cream">MSIB <br></br> Batch 7</p>
                 <button @click="openPopup('popup5')"class="cursor-pointer mt-5  px-4 w-fit h-fit md:text-lg text-sm bg-cream hover:text-pinkmuda hover:bg-pinkmuda border border-pink rounded-full text-pink">
                     more</button>
             </div>
         </div>
     </div>

 </div>

 <!-- SERTIFIKAT -->
<!-- <div class="w-full mt-20">
   <div class="w-full mt-20">
    <div class="grid grid-cols-3">
      <Flipcard
        v-for="(item, index) in projects"
        :key="index"
        :image="item.image"
        :title="item.title"
        :backText="item.backText"
        @openFlip="openFlip(item)"  
      />
    </div> -->

    <!-- Popup flipcard-->
    <!-- <div
      v-if="showFlipPopup"
      class="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
    >
      <div class="bg-white p-6 rounded-lg shadow-xl max-w-lg w-full relative">
        <button
          class="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          @click="closeFlipPopup"
        >
          ✕
        </button>
        <h2 class="text-xl font-bold mb-4">{{ selectedFlip?.title }}</h2>
        <img
          v-if="selectedFlip?.image"
          :src="selectedFlip.image"
          class="w-full h-48 object-cover rounded-md mb-4"
        />
        <p>{{ selectedFlip?.backText }}</p>
      </div>
    </div> -->
  <!-- </div>
</div> -->

 </section>

 <section id="sertificate">
  <div class="mt-20 text-center items-center">
    <span class="text-center font-playfair text-2xl text-pinkk">SERTIFICATE</span>
  </div>
  
  <!-- swipper -->
<MySwiper />


 </section>
 

 <section id="contact">
     <div class="bg-pinkmuda">
 <div class="text-sm flex-col md:grid md:grid-cols-2 mt-32 md:px-52">
             <!-- Konten 1 -->
             <div class="md:text-2xl p-4 md:justify-center font-poppins">
               <li class="flex items-center md:ml-8 ml-2 mb-4 md:text-lg text-xs">
                         <img src="../assets/img/profill.svg" alt="" class="md:w-12 w-8 h-8 md:h-12 md:mr-2">
                         <span class="ml-3 font-bold">@nalinikarinaa <br><p class="md:text-sm text-xs font-normal">Social media instagram</p></span>
               </li>
               <li class="flex items-center md:ml-8 ml-2 mb-4 md:text-lg text-xs">
                         <img src="../assets/img/emaill.svg" alt="" class="md:w-12 w-8 h-8 md:h-12 md:mr-2">
                         <span class="ml-3 font-bold">nalinikarina613@gmail.com <br><p class="md:text-sm text-xs font-normal">Email</p></span>
               </li>
               <li class="flex items-center md:ml-8 ml-2 mb-4 md:text-lg text-xs">
                         <img src="../assets/img/lokasii.svg" alt="" class="md:w-12 w-8 h-8 md:h-12 md:mr-2">
                         <span class="ml-3 font-bold">Malang, Jawa Timur <br><p class="md:text-sm text-xs font-normal">Lokasi saat ini</p></span>
               </li>
             </div>

             <!-- Konten 2 -->
         <div class="hidden md:text-5xl font-bold p-4 md:flex md:justify-center font-playfair mt-16">
                 <p>CONTACT</p>
             </div>
 </div>
 </div>

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

                 <!-- POPUP WASHNJOY -->
                 <div class="text-xl font-poppins font-normal">
                     <PopUp :visible="activePopup === 'popup2'" @close="closePopup">
                     <h2 class="text-sm">WashNJoy E-Laundry</h2>
                       <p class="mt-4 text-xs">
                         Becoming a Fullstack Developer on the WashNJoy E-Laundry project was a very valuable experience for me. I worked on this project starting from designing the user interface (UI), designing and building the Front-End using HTML and Tailwind CSS, designing and managing the database structure using SQL, building and developing the Back-End using the Laravel Framework and Laravel Breeze for the sign up feature so that can connect to the user's email, and test the code created to ensure there are no bugs or errors.</p>
                     <div class="items-center justify-center flex mt-8"><img src="../assets/img/washnjoy2.svg" class=" items-center w-full h-auto"> </div>
                     </PopUp>
                 </div>

                 <!-- POPUP UI/UX  -->
                   <div class="text-xl font-poppins font-normal">
                     <PopUp :visible="activePopup === 'popup4'" @close="closePopup">
                     <h2 class="text-sm">UI/UX WashNJoy E-Laundry</h2>
                       <p class="mt-4 text-xs">
                         Becoming a Fullstack Developer on the WashNJoy E-Laundry project was a very valuable experience for me. I worked on this project starting from designing the user interface (UI), designing and building the Front-End using HTML and Tailwind CSS, designing and managing the database structure using SQL, building and developing the Back-End using the Laravel Framework and Laravel Breeze for the sign up feature so that can connect to the user's email, and test the code created to ensure there are no bugs or errors.</p>
                     <div class="items-center justify-center flex mt-8"><img src="../assets/img/washnjoy2.svg" class=" items-center w-full h-auto"> </div>
                     </PopUp>
                 </div>

                 <!-- POP UP EXPERIENCE -->
                    <div class="text-xl font-poppins font-normal">
                     <PopUp :visible="activePopup === 'popup1'" @close="closePopup">
                     <h2 class="text-sm">YUWARAJA XV</h2>
                       <p class="mt-4 text-xs">Being a supervisor at the 2023 Vocational Faculty PKKMB was a very extraordinary experience for me, I met a lot of new people and trained my ability to work well in teams. As a supervisor, I am also responsible for accompanying, guiding, and helping new students get to know and adapt to the campus environment, be a source of information and consultation, monitor and organize activities, and coordinate activities with other committees</p>
                     <div class="items-center justify-center flex mt-8"><img src="../assets/img/yuwaraja.svg" class=" items-center"> </div>
                     <div class="items-center justify-center flex mt-3"><img src="../assets/img/yuwaraja2.svg" class=""> 
                     <img src="../assets/img/yuwaraja3.svg" class="ml-5 w-36 h-auto"> </div>
                     </PopUp>
                 </div>

                  <div class="text-xl font-poppins font-normal">
                     <PopUp :visible="activePopup === 'popup5'" @close="closePopup">
                     <h2 class="text-sm">MSIB Batch 7</h2>
                       <p class="mt-4 text-xs">Being a supervisor at the 2023 Vocational Faculty PKKMB was a very extraordinary experience for me, I met a lot of new people and trained my ability to work well in teams. As a supervisor, I am also responsible for accompanying, guiding, and helping new students get to know and adapt to the campus environment, be a source of information and consultation, monitor and organize activities, and coordinate activities with other committees</p>
                     <div class="items-center justify-center flex mt-8"><img src="../assets/img/msib.jpg" class=" items-center h-auto w-60"> </div>
                     <div class="items-center justify-center flex mt-3"><img src="../assets/img/msibfotbar.jpeg" class="h-auto w-48"> 
                     <img src="../assets/img/fotbarmsib (2).jpeg" class="ml-5 w-64 h-auto"> </div>
                     <h2 class="text-sm pt-6 ml-6">Some project when i was intern</h2>
                     <div class="items-center justify-center flex mt-3"><img src="../assets/img/finaltask.png" class="h-auto w-72"> 
                     <img src="../assets/img/finaltask2.png" class="ml-5 w-72 h-auto"> </div>
                     </PopUp>
                 </div>

 </section>
   </div>
   </div>
   </div>



  </template>

  <style scoped>
 .title {
   font-family: 'Playfair Display', serif;
   font-weight: 600; /* Optional: menyesuaikan berat font */
 }

 .content {
   font-family: 'Poppins', sans-serif;
   font-weight: 400; /* Optional: menyesuaikan berat font */
 }

 .animate-fade-in {
   animation: fade-in 2s ease-out forwards;
 }
 .animate-slide-down {
   animation: slide-down 2s ease-out forwards;
 }
 .animate-slide-up {
   animation: slide-up 2s ease-out forwards;
 }
 .animate-fade-in-right {
   animation: fade-in-right 2s ease-out forwards;
 }

 @keyframes fade-in {
   from { opacity: 0; transform: translateY(2.5rem) scale(0.95); } /* 2.5rem = translate-y-10 */
   to { opacity: 1; transform: translateY(2.5rem) scale(1); }
 }

 @keyframes slide-down {
   from { opacity: 0; transform: translateY(-10px); }
   to { opacity: 1; transform: translateY(0); }
 }
 @keyframes slide-up {
   from { opacity: 0; transform: translateY(10px); }
   to { opacity: 1; transform: translateY(0); }
 }
 @keyframes fade-in-right {
   from { opacity: 0; transform: translateX(20px); }
   to { opacity: 1; transform: translateX(0); }
 }
 .fade-in {
   opacity: 0;
   transform: translateY(20px);
   transition: all 0.8s ease-out;
 }

 .fade-in.show {
   opacity: 1;
   transform: translateY(0);
 }


 </style>

<script>
import { ref } from 'vue'
import 'vue3-carousel/dist/carousel.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Dropdown from './DetailsDropdown.vue';
import Footer from './Footer.vue';
import Header from './Header.vue';
import PopUp from './PopUp.vue';

 import MySwiper from './MySwiper.vue'
// import Flipcard from './Flipcard.vue'

// import slider1 from '../assets/img/msib.jpg';
// import slider2 from '../assets/img/msib.jpg';
// import slider3 from '../assets/img/msib.jpg';
// import slider4 from '../assets/img/msib.jpg';
// import slider5 from '../assets/img/msib.jpg';
// import slider6 from '../assets/img/msib.jpg';

gsap.registerPlugin(ScrollTrigger);

export default {
  components: {
    PopUp,
    Header,
    Flipcard,
    Dropdown,
    Footer,
    MySwiper

  },
 

  data() {
    return {
      // projects: [
      //   {
      //     image: slider1,
      //     title: "Baking Class",
      //     backText: "Baking Class",
      //     popupContent: "Ini detail lengkap untuk Baking Class...",
      //   },
      //   {
      //     image: slider2,
      //     title: "Cooking Class",
      //     backText: "Cooking Class",
      //     popupContent: "Penjelasan detail Cooking Class...",
      //   },
      //   {
      //     image: slider3,
      //     title: "Flower Class",
      //     backText: "Flower Class",
      //     popupContent: "Belajar merangkai bunga dalam Flower Class...",
      //   },
      //   {
      //     image: slider4,
      //     title: "Cake Decor Class",
      //     backText: "Cake Decor Class",
      //     popupContent: "Dekorasi kue ala profesional di kelas ini...",
      //   },
      //   {
      //     image: slider5,
      //     title: "Pottery & Clay Class",
      //     backText: "Pottery & Clay Class",
      //     popupContent: "Membuat kerajinan tanah liat dan pottery...",
      //   },
      //   {
      //     image: slider6,
      //     title: "Crafting Class",
      //     backText: "Crafting Class",
      //     popupContent: "Berbagai kerajinan tangan kreatif di Crafting Class...",
      //   },
      // ],
      activePopup: null,
      isDesktop: false,
      isSidebarOpen: false,

      // popup flipcard
      // showFlipPopup: false,
      // selectedFlip: null,
    };
  },

  mounted() {
    this.checkScreenSize();
    window.addEventListener("resize", this.checkScreenSize);

    gsap.utils.toArray(".anim-text").forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          end: "top 20%",
          scrub: 1.5,
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    });

    // ANIMASI ABOUT
    gsap.from("#about .anim-about", {
      scrollTrigger: {
        trigger: "#about",
        start: "top 85%",
        end: "top 20%",
        scrub: 1.5
      },
      opacity: 0,
      y: 50,
      stagger: 0.4,
      ease: "power3.out"
    });

    // Animasi kotak pink
    gsap.from(".bg-pink", {
      scrollTrigger: {
        trigger: "#about",
        start: "top 75%",
        end: "top 20%",
        scrub: 1.5
      },
      opacity: 0,
      scale: 0.9,
      ease: "power3.out"
    });

    // Animasi kotak pinkmuda
    gsap.from(".bg-pinkmuda", {
      scrollTrigger: {
        trigger: "#project",
        start: "top 75%",
        end: "top 20%",
        scrub: 1.5,
      },
      opacity: 0,
      y: 20,
      scale: 0.9,
      ease: "power3.out",
    });

    gsap.utils.toArray("#project .anim-project").forEach(el => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          end: "top 20%",
          scrub: 1.5,
        },
        opacity: 0,
        y: 20,
        ease: "power3.out",
      });
    });
  },

  beforeUnmount() {
    window.removeEventListener("resize", this.checkScreenSize);
  },

  methods: {
    openPopup(popup) {
      this.activePopup = popup;
    },
    closePopup() {
      this.activePopup = null;
    },
    openLink(url) {
      window.open(url, '_blank');
    },
    checkScreenSize() {
      this.isDesktop = window.innerWidth >= 768;
    },
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },

      handleToggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    console.log("Sidebar open? (Parent)", this.isSidebarOpen); // Untuk debugging
  },

    // Flipcard popup methods
    // openFlipPopup(item) {
    //   this.selectedFlip = item;
    //   this.showFlipPopup = true;
    // },
    // closeFlipPopup() {
    //   this.showFlipPopup = false;
    //   this.selectedFlip = null;
    // }
  }
};
</script>
