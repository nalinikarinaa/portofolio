<script setup>
import 'vue3-carousel/dist/carousel.css'
import Dropdown from './DetailsDropdown.vue'
import Footer from './Footer.vue'
import Header from './Header.vue'
import PopUp from './PopUp.vue'
</script>
 
<template>
  <!-- Menambahkan komponen Header di sini -->
<Header
  :isSidebarOpen="isSidebarOpen"
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
  <div
    class="bg-cream mt-20 justify-center shadow-2xl animate-fade-in overflow-hidden"
    :class="{
      'w-[100vw] h-[47vh] rounded-t-[60px] rounded-b-none': !isDesktop,
      'md:w-full lg:h-[60vh] rounded-t-[300px] rounded-b-none': isDesktop
    }"
  >
    <div class="text-sm mt-4 text-pink">
      <div class="md:text-xl p-4 md:justify-center md:px-28 font-poppins">
        <h2 class="font-bold anim-text text-center md:text-3xl md:mt-20 mt-10">
         Hello, <br />I am Nalini Karina Andhini,
       </h2>
       <p class="anim-text text-center mt-3">
         a fresh graduate in Information Technology from Universitas Brawijaya with a strong interest in developing interactive and responsive web interfaces. Experienced in working on various projects during my studies using PHP, HTML, CSS, JavaScript, and SQL, and proficient in building websites with frameworks and libraries such as Laravel, Vue.js, Bootstrap, and Tailwind CSS. Highly enthusiastic about learning new technologies and focused on creating functional and visually appealing results. Known for strong communication skills, a high eagerness to learn, and the ability to work effectively in a team.
       </p>
     </div>
   </div>

       </div>
 </section>

  <div class="bg-cream">
  <!-- Konten -->

 <section id="about" class="px-4">
  <div class="flex justify-center text-cream">
    <div class="bg-pink rounded-3xl shadow-2xl translate-y-10 
                w-full max-w-4xl md:max-w-5xl p-6 md:p-10">

      <h1 class="text-2xl md:text-4xl font-playfair font-bold text-center mb-8">
        ABOUT
      </h1>

      <div class="space-y-6">

        <!-- EDUCATION -->
        <Dropdown title="Education" class="cursor-pointer font-poppins text-base md:text-xl">
          <ul class="list-none mt-4">
            <li class="flex items-center ml-4 md:ml-8 mb-4 text-sm md:text-lg">
              <img src="../assets/img/logoUB.svg" alt="" class="w-7 h-auto mr-3">
              <span>
                2022 - 2025 <br>
                <p>Brawijaya University – Information Technology</p>
              </span>
            </li>
          </ul>
        </Dropdown>

        <hr class="border-cream opacity-30">

        <!-- SOFT SKILL -->
        <Dropdown title="Soft skill" class="cursor-pointer font-poppins text-base md:text-xl">
          <ul class="list-none mt-4 ml-4 md:ml-8 text-sm md:text-lg space-y-3">
            <li>Effective Communication</li>
            <li>Teamwork</li>
            <li>Time Management</li>
          </ul>
        </Dropdown>

        <hr class="border-cream opacity-30">

        <!-- FRAMEWORK -->
        <Dropdown title="Framework" class="cursor-pointer font-poppins text-base md:text-xl">
          <ul class="list-none mt-4 ml-4 md:ml-8 text-sm md:text-lg space-y-4">
            <li class="flex items-center">
              <img src="../assets/img/tailwind.svg" class="w-7 mr-3">
              <span>TailwindCSS</span>
            </li>
            <li class="flex items-center">
              <img src="../assets/img/butrap.svg" class="w-7 mr-3">
              <span>Bootstrap</span>
            </li>
            <li class="flex items-center">
              <img src="../assets/img/laravel.svg" class="w-7 mr-3">
              <span>Laravel</span>
            </li>
            <li class="flex items-center">
              <img src="../assets/img/vue.svg" class="w-7 mr-3">
              <span>Vue.js</span>
            </li>
          </ul>
        </Dropdown>

        <hr class="border-cream opacity-30">

        <!-- PROGRAMMING LANGUAGE -->
        <Dropdown title="Programming Language" class="cursor-pointer font-poppins text-base md:text-xl">
          <ul class="list-none mt-4 ml-4 md:ml-8 text-sm md:text-lg space-y-4">
            <li class="flex items-center">
              <img src="../assets/img/html.svg" class="w-7 mr-3">
              <span>HTML</span>
            </li>
            <li class="flex items-center">
              <img src="../assets/img/css.svg" class="w-7 mr-3">
              <span>CSS</span>
            </li>
            <li class="flex items-center">
              <img src="../assets/img/js.svg" class="w-7 mr-3">
              <span>JavaScript</span>
            </li>
            <li class="flex items-center">
              <img src="../assets/img/php.svg" class="w-7 mr-3">
              <span>PHP</span>
            </li>
          </ul>
        </Dropdown>

        <hr class="border-cream opacity-30">

        <!-- TOOLS -->
        <Dropdown title="Tools" class="cursor-pointer font-poppins text-base md:text-xl">
          <ul class="list-none mt-4 ml-4 md:ml-8 text-sm md:text-lg space-y-4">
            <li class="flex items-center">
              <img src="../assets/img/vscode.svg" class="w-7 mr-3">
              <span>VSCode</span>
            </li>
            <li class="flex items-center">
              <img src="../assets/img/xampp.svg" class="w-7 mr-3">
              <span>XAMPP</span>
            </li>
            <li class="flex items-center">
              <img src="../assets/img/figma.svg" class="w-7 mr-3">
              <span>Figma</span>
            </li>
            <li class="flex items-center">
              <img src="../assets/img/canva.svg" class="w-7 mr-3">
              <span>Canva</span>
            </li>
          </ul>
        </Dropdown>

      </div>

    </div>
  </div>
</section>


 <section id="project">

<div
  class="relative bg-fixed bg-cover bg-center mt-20 hidden md:block"
  style="background-image: url('/sertiff.svg'); height: 40vh;"
>
  <div class="absolute inset-0 bg-cream bg-opacity-50 flex items-center justify-center">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-16 text-center">

      <!-- <h1 class="text-2xl md:text-3xl font-playfair font-bold text-pink drop-shadow-md">
        PROJECT
      </h1>

      <h1 class="text-2xl md:text-3xl font-playfair font-bold text-pink drop-shadow-md">
        EXPERIENCE
      </h1>

      <h1 class="text-2xl md:text-3xl font-playfair font-bold text-pink drop-shadow-md">
        CERTIFICATE
      </h1> -->

    </div>
  </div>
</div>

 <!-- <div class="flex justify-center mt-14 md:mt-10 anim-project">
     <h1 class="text-xl md:text-3xl font-playfair font-bold 
                 text-center text-pink bg-pinkmuda px-10 py-4 rounded-full">
         PROJECT
     </h1>
 </div> -->

   <div class="md:mt-10 mt-24 text-center items-center">
         <h1 class="text-2xl md:text-3xl font-playfair font-bold text-pink drop-shadow-md">
        PROJECT
      </h1>
  </div>

 <div class="flex flex-col md:grid md:grid-cols-2 anim-project px-10 gap-20">


 <div class="flex justify-center mt-2 anim-project">
     <div class="bg-pinkmuda translate-y-10 rounded-3xl justify-center p-4 shadow-2xl" md:style="height: 30vh; width: 50vh;">
         <div class="text-sm flex flex-col md:grid md:grid-cols-2 items-center h-full">
             <!-- Konten 1 -->
             <div class="md:text-5xl font-bold md:flex md:justify-center font-playfair">
                 <img src="../assets/img/weekendplan.svg" class="w-45 h-45 anim-project">
             </div>

             <!-- Konten 2 -->
             <div class="md:text-3xl text-lg font-bold px-10 md:justify-center text-pink font-poppins md:w-80">
                 <p>Admission Web <br> Weekendplan </p>
                 <button @click="openPopup('popup6')"class="cursor-pointer mt-5  px-4 w-fit h-fit md:text-lg text-sm bg-pink hover:text-pinkmuda hover:bg-pinkmuda border border-pink rounded-full text-cream font-poppins transition-all duration-1000 ease-in-out transform hover:scale-[1.10]">
                     more
                 </button>
                 <button @click="openLink('https://github.com/nalinikarinaa/admission-web-fe')" class="cursor-pointer mt-5  px-4 w-fit h-fit flex items-center justify-center text-lg bg-pink hover:text-pinkmuda hover:bg-pinkmuda border border-pink rounded-full text-cream transition-all duration-1000 ease-in-out transform hover:scale-[1.10]">
                     <img src="../assets/img/github2.svg" 
                     class="mr-2 cursor-pointer w-5"
                     @click="openLink('https://github.com/nalinikarinaa/admission-web-fe')"
                    alt="projectwashnjoy"><p class="md:text-lg text-sm">github</p>
                 </button>
             </div>
         </div>
     </div>
 </div>


  <div class="flex justify-center mt-2 anim-project">
     <div class="bg-pinkmuda translate-y-10 rounded-3xl justify-center p-4 shadow-2xl" md:style="height: 30vh; width: 50vh;">
         <div class="text-sm flex flex-col md:grid md:grid-cols-2 items-center h-full ">
             <!-- Konten 1 -->
             <div class="md:text-5xl font-bold md:flex md:justify-center font-playfair">
                 <img src="../assets/img/finaltaskcover 1.svg" class="w-45 h-45 anim-project">
             </div>

             <!-- Konten 2 -->
             <div class="md:text-3xl text-lg font-bold px-10 md:justify-center text-pink font-poppins md:w-80">
                 <p>Project Manajemen Web </p>
                 <button @click="openPopup('popup7')"class="cursor-pointer mt-5  px-4 w-fit h-fit md:text-lg text-sm bg-pink hover:text-pinkmuda hover:bg-pinkmuda border border-pink rounded-full text-cream font-poppins transition-all duration-1000 ease-in-out transform hover:scale-[1.10]">
                     more
                 </button>
                 <button @click="openLink('https://github.com/nalinikarinaa/final-task-project-management-FE')" class="cursor-pointer mt-5  px-4 w-fit h-fit flex items-center justify-center text-lg bg-pink hover:text-pinkmuda hover:bg-pinkmuda border border-pink rounded-full text-cream transition-all duration-1000 ease-in-out transform hover:scale-[1.10]">
                     <img src="../assets/img/github2.svg" 
                     class="mr-2 cursor-pointer w-5"
                     @click="openLink('https://github.com/nalinikarinaa/final-task-project-management-FE')"
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


 <div class="flex justify-center anim-project">
     <div class="bg-pinkmuda translate-y-10 rounded-3xl justify-center p-4 shadow-2xl" md:style="height: 30vh; width: 50vh;">
         <div class="text-sm flex flex-col md:grid md:grid-cols-2 items-center h-full ">
             <!-- Konten 1 -->
             <div class="md:text-5xl font-bold md:flex md:justify-center font-playfair">
                 <img src="../assets/img/washnjoy.svg" class="w-45 h-45 anim-project">
             </div>

             <!-- Konten 2 -->
             <div class="md:text-3xl text-lg font-bold px-10 md:justify-center text-pink font-poppins md:w-80">
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
             <div class="md:text-3xl text-lg font-bold px-10 md:justify-center text-pink font-poppins md:w-80">
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

    <div class="mt-24 text-center items-center mb-5">
         <h1 class="text-2xl md:text-3xl font-playfair font-bold text-pink drop-shadow-md">
        EXPERIENCE
      </h1>
  </div>

 <div class="flex justify-center anim-project flex-col md:grid md:grid-cols-2 gap-20 px-10 mt-5">
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

 </section>

 <section id="CERTIFICATE">
    <div class="mt-24 text-center items-center mb-14">
         <h1 class="text-2xl md:text-3xl font-playfair font-bold text-pink drop-shadow-md">
        CERTIFICATE
      </h1>
  </div>
  
  <!-- swipper -->
<MySwiper />


 </section>
 

 <section id="contact">
     <div class="bg-pinkmuda">
 <div class="text-sm flex-col md:grid md:grid-cols-2 mt-14 md:px-52">
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
                        Developed the full UI/UX design for the WashnJoy Laundry project, starting from user research, wireframing, and prototyping to crafting high-fidelity interface designs. The design focuses on clarity, ease of use, and smooth user flows to ensure a convenient and enjoyable laundry service experience. This project highlights my ability to translate user needs into clean, functional, and visually consistent interfaces.</p>
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
                       <p class="mt-4 text-xs">During the MSIB program, I actively participated in weekly mentoring sessions to discuss task progress, challenges, and evaluations from mentors. As a Frontend Developer, I worked on implementing UI designs from Figma/AI into Vue.js, integrating APIs using Axios, and developing various features for company projects. I also received weekly evaluations based on the tasks assigned.
                        <br> At the end of the program, I completed a final task in the form of a project management application developed in a team. I served as the Frontend Developer, contributing to UI design, slicing in Figma, implementing the interface in Vue.js, integrating APIs, and handling HTTP requests. I also gained experience as a rotating Project Manager. This program strengthened my technical skills—such as web development, problem-solving, and understanding programming syntax—as well as soft skills including communication, teamwork, and time management.</br>
                       </p>
                     <div class="items-center justify-center flex mt-8"><img src="../assets/img/msib.jpg" class=" items-center h-auto w-60"> </div>
                     <div class="items-center justify-center flex mt-3"><img src="../assets/img/msibfotbar.jpeg" class="h-auto w-48"> 
                     <img src="../assets/img/fotbarmsib (2).jpeg" class="ml-5 w-64 h-auto"> </div>
                     <!-- <h2 class="text-sm pt-6 ml-6">Some project when i was intern</h2>
                     <div class="items-center justify-center flex mt-3"><img src="../assets/img/finaltask.png" class="h-auto w-72"> 
                     <img src="../assets/img/finaltask2.png" class="ml-5 w-72 h-auto"> </div> -->
                     </PopUp>
                 </div>

                 <!-- POPUP WEEKENDPLAN -->
                 <div class="text-xl font-poppins font-normal">
                     <PopUp :visible="activePopup === 'popup6'" @close="closePopup">
                     <h2 class="text-sm">Weekendplan Admission Web</h2>
                       <p class="mt-4 text-xs">
                         Admission Web Weekendplan is my final project, where I served as a Fullstack Developer. On the frontend side, I built a responsive and consistent interface using Vue.js and Tailwind CSS. On the backend, I developed REST APIs using Laravel and implemented Laravel Sanctum to ensure secure and structured authentication processes.
                        <br>Throughout this project, I developed several core features such as user registration, login and logout authentication, class selection for the creative class program, attendance (clock-in), transaction history, activity notifications, and an admin dashboard for managing CRUD operations on classes, users, and reports. I also designed the database structure, created API endpoints from scratch, implemented user roles (admin and user), and integrated the frontend with the backend using Axios.</br>
                        <br>On the frontend side, I ensured component reusability, aligned the UI flow with the designs I created in Figma, and maintained responsive behavior across different devices. During development, I also learned various important concepts such as handling CORS, optimizing API performance, managing Sanctum tokens, and structuring Vue components efficiently.</br>
                        </p>
                      <div class="flex flex-col items-center justify-center mt-3 w-full">
                      <img src="../assets/img/homepage.png" class="w-full max-w-md mt-3 h-auto">
                      <img src="../assets/img/class list.png" class="w-full max-w-md mt-3 h-auto">
                       <img src="../assets/img/register class.png" class="w-full max-w-md mt-3 h-auto">
                       <img src="../assets/img/dashboard admin.png" class="w-full max-w-md mt-3 h-auto">
                       <img src="../assets/img/detail class manajemen.png" class="w-full max-w-md mt-3 h-auto">
                    </div>
                     <p class="mt-4 text-xs">
                        The tech stack I used includes Vue.js, Laravel, Laravel Sanctum, Tailwind CSS, MySQL, and Axios.
                      </p>
                     </PopUp>
                 </div>

                <!-- POPUP WEB MANAGEMENT -->
                <div class="text-xl font-poppins font-normal">
                     <PopUp :visible="activePopup === 'popup7'" @close="closePopup">
                     <h2 class="text-sm">Project Manajemen Web</h2>
                       <p class="mt-4 text-xs">This project management web application was my final project during the MSIB program. In this final task, I worked in a team and took on the role of Frontend Developer. I also had the opportunity to serve as Project Manager on a weekly rotation. In this project, I handled UI planning, created designs in Figma, performed slicing, and implemented the interface using Vue.js according to the company’s SOP. Additionally, I integrated the Backend API into the Frontend and implemented HTTP requests using Axios.</p>
                    <div class="flex flex-col items-center justify-center mt-3 w-full">
                      <img src="../assets/img/finaltask.png" class="w-full max-w-md mt-3 h-auto">
                      <img src="../assets/img/finaltask2.png" class="w-full max-w-md h-auto mt-6 md:ml-5">
                    </div>

                     </PopUp>
                 </div>

 </section>
   </div>
   </div>
   </div>

  </template>


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

gsap.registerPlugin(ScrollTrigger);


export default {
  components: {
    PopUp,
    Header,
    Dropdown,
    Footer,
    MySwiper

  },
 

  data() {
    return {
      activePopup: null,
      isDesktop: false,
      isSidebarOpen: false,

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

    handleToggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
      console.log("Sidebar open? (Parent)", this.isSidebarOpen);
    },

  }
};
</script>



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