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
    <div class="!bg-birutua">
    <div class="flex justify-center ">
  <div class="translate-y-4 ">
  <div class="bg-cream mt-12 rounded-3xl grid grid-cols-1 md:grid-cols-2 justify-center shadow-2xl animate-fade-in mb-20"
       :class="{
        'w-[90vw] py-10': !isDesktop,
        'md:w-[80vw] md:min-h-[70vh]': isDesktop
       }">

    <div class="md:py-5 md:mx-16 md:mt-24 mx-5 ">
          <div class="flex flex-row">
            <h1 class="text-lg md:text-5xl font-playfair font-bold text-birutua"
                style="text-shadow: 2px 2px 4px rgba(0,0,0,0.3);">
              I'm
            </h1> 
            <h1 class="text-lg md:text-5xl font-playfair font-bold ml-3 text-pink"
                style="text-shadow: 2px 2px 4px rgba(0,0,0,0.3);">
              NALINI KARINA,
            </h1>
          </div>
            <h1 class="text-lg md:text-5xl font-playfair font-bold text-birutua"
                style="text-shadow: 2px 2px 4px rgba(0,0,0,0.3);">
              Aspiring Quality Assurance Engineer
            </h1> 
  
      <p class="text-xs md:text-lg font-poppins text-birutua my-5 mb-1">Fresh Graduate in Information Technology with a background in Frontend and Fullstack Development. Passionate about software testing, designing test cases, identifying bugs, and delivering high-quality user experiences.</p>
      <div class="md:mt-7 mt-3 flex gap-6 md:ml-10">
        <RouterLink
          to="/about"
          class="bg-pink2 md:px-8 px-4 py-2 rounded-md text-white hover:bg-birutua md:text-lg text-xs inline-block"
        >
          About
        </RouterLink>

        <!-- <button class="bg-birutua px-8 py-2 rounded-md text-white hover hover:bg-pinkmuda text-md ">Download CV</button> -->
         <a
          href="/cv/Nalini Karina Andhini-resume QA (2).pdf"
          download="CV-Nalini-Karina.pdf"
          class="bg-birutua md:px-8 px-4 py-2 rounded-md text-white hover:bg-pinkmuda md:text-lg text-xs inline-block"
        >
          Download CV
        </a>
      </div>
     </div>

<div class="items-center hidden md:block translate-x-6 md:translate-x-0 mt-20 ml-24">
    <div class="bg-birutua rounded-[40px] inline-block">
  <img src="../assets/img/hmm2.svg" class="w-[150px] md:w-full max-w-[300px] h-auto">
  </div>
        <div class="flex ml-24">
        <img src="../assets/img/github.png" class="cursor-pointer w-5 h-5 md:w-8 md:h-8 mt-2 transition-all duration-1000 ease-in-out transform hover:scale-[1.10]" @click="openLink('https://github.com/nalinikarinaa')" alt="GitHub">
        <img src="../assets/img/linkenln.png" class="ml-2 cursor-pointer w-4 h-4 md:w-7 md:h-7 mt-3 transition-all duration-1000 ease-in-out transform hover:scale-[1.10]" @click="openLink('https://www.linkedin.com/in/nalini-karina-andhini-913944240/')" alt="LinkedIn">
        <img src="../assets/img/ig.png" class="ml-1 cursor-pointer w-6 h-6 md:w-10 md:h-auto mt-1 md:mt-1.5 transition-all duration-1000 ease-in-out transform hover:scale-[1.10]" @click="openLink('https://www.instagram.com/nalinikarinaa/')" alt="Instagram">
      </div>
</div>
  </div>
    </div>
      </div>
      
<section id="about" class="overflow-hidden bg-cream mt-20 rounded-t-[300px] shadow-2xl"
 :class="{
        'w-full min-h-[70vh] rounded-t-[60px]': !isDesktop,
        'w-full lg:min-h-[60vh] rounded-t-[300px]': isDesktop
      }">

  <div class="md:mt-16 max-w-6xl mx-auto md:px-6 px-4">

  <!-- ================= MOBILE VERSION ================= -->
  <div class="md:hidden pb-28">

    <!-- TITLE -->
    <div class="mb-8 mt-10">
      <h1 class="text-2xl font-bold leading-tight font-poppins text-pink">
        TOOLS
      </h1>

      <p class="text-birutua text-xs leading-relaxed">
        A collection of tools that support <br>
        my software testing and quality assurance workflow <br>
        in ensuring reliable and high-quality applications.
      </p>
    </div>

    <!-- GRID MOBILE -->
    <div class="grid grid-cols-2 gap-4 mt-[-50px]">

      <!-- VS CODE (span 2) -->
      <div class=" bg-birutua rounded-3xl p-3 animate-fade-in w-fit h-fit">
         <div>
          <div class="bg-white rounded-md inline-block p-1 mb-1">
            <img src="../assets/img/vscode.svg" class="w-[15px] h-auto">
          </div>

          <h1 class="text-white text-sm font-semibold">VS Code</h1>

          <p class="text-white text-xs leading-relaxed">
            My go-to code editor for building <br>
            web applications efficiently.
          </p>
        </div>

        <div class="flex items-end mt-1">
          <img src="../assets/img/vscode.jpg" class="h-14 w-auto">
        </div>
      </div>

    <!-- </div> -->

      <!-- LARAGON -->
      <div class="bg-birutua rounded-3xl p-3 animate-fade-in w-fit h-fit">
      <div>
          <div class="bg-white rounded-md inline-block p-1 mb-1">
            <img src="../assets/img/github3.png" class="w-[15px] h-auto">
          </div>

          <h1 class="text-white text-sm font-semibold">GIT & GitHub</h1>

          <p class="text-white text-xs leading-relaxed">
         Version control platform for <br>
          code management and collaboration.
          </p>
        </div>

        <div class="flex items-end mt-3">
          <img src="../assets/img/github2.png" class="h-14 w-auto">
        </div>
      </div>

      <!-- FIGMA -->
      <div class="bg-birutua rounded-3xl p-3 animate-fade-in w-fit h-fit">
        <div>
          <div class="bg-white rounded-md inline-block p-1 mb-1">
            <img src="../assets/img/postman.png" class="w-[15px] h-auto">
          </div>

          <h1 class="text-white text-sm font-semibold">POSTMAN</h1>

          <p class="text-white text-xs leading-relaxed">
            A powerful tool for designing <br> modern
            and interactive UI/UX.
          </p>
        </div>

        <div class="flex items-end mt-1">
          <img src="../assets/img/postman2.png" class="h-14 w-auto">
        </div>
      </div>


      <!-- CANVA (span 2) -->
      <div class=" bg-birutua rounded-3xl p-3 animate-fade-in">
         <div>
          <div class="bg-white rounded-md inline-block p-1 mb-1">
            <img src="../assets/img/trello.png" class="w-[15px] h-auto">
          </div>

          <h1 class="text-white text-sm font-semibold">TRELLO</h1>

          <p class="text-white text-xs leading-relaxed">
            A design tool for creating visual content and supporting creative projects.
          </p>
        </div>

        <div class="flex items-end mt-1">
          <img src="../assets/img/trello2.jpg" class="h-10 w-20">
        </div>
      </div>


    </div>
  </div>


  <!-- ================= DESKTOP VERSION (ASLI KAMU) ================= -->
  <div class="hidden md:block">

    <div class="md:flex items-start gap-3 rounded-3xl p-8 animate-fade-in">
      
      <div class="md:mt-20">
        <h1 class="md:text-5xl text-2xl font-bold leading-tight mb-3 font-poppins text-pink">
          TOOLS
        </h1>

        <p class="text-birutua md:text-lg text-sm leading-relaxed">
          A collection of tools that support <br>
          my testing and quality assurance workflow <br>
          in ensuring reliable and high-quality applications.
        </p>
      </div>

      <!-- VS CODE -->
      <div class="flex gap-9 bg-birutua rounded-3xl px-6 pt-4 pb-5 self-start md:mt-[-50px] animate-fade-in">
        <div>
          <div class="bg-white rounded-lg inline-block p-1 mb-1">
            <img src="../assets/img/vscode.svg" class="w-[20px] h-auto">
          </div>

          <h1 class="text-white text-sm font-semibold">VS Code</h1>

          <p class="text-white text-xs leading-relaxed">
            My go-to code editor for building <br>
            web applications efficiently.
          </p>
        </div>

        <div class="flex items-end">
          <img src="../assets/img/vscode.jpg" class="h-24 w-auto">
        </div>
      </div>

      <!-- POSTMAN -->
      <div class="bg-birutua rounded-3xl px-6 pt-4 pb-5 self-start mt-[-70px] animate-fade-in">
        <div>
          <div class="bg-white rounded-lg inline-block p-1 mb-1">
            <img src="../assets/img/postman.png" class="w-[30px] h-auto">
          </div>

          <h1 class="text-white text-sm font-semibold">POSTMAN</h1>

          <p class="text-white text-xs leading-relaxed">
            A powerful tool for <br>
            API testing and <br>
            request validation.
          </p>
        </div>

        <div class="flex items-end mt-1">
          <img src="../assets/img/postman2.png" class="h-24 w-auto">
        </div>
      </div>

    </div>

    <div class="flex items-start gap-3 rounded-3xl p-8 animate-fade-in">
  
      <div class="invisible">
        <h1 class="text-5xl font-bold leading-tight mb-3 font-poppins text-pink">
          TOOLS
        </h1>

        <p class="text-birutua text-lg leading-relaxed">
          A collection of tools that support <br>
          my testing and quality assurance workflow <br>
          in ensuring reliable and high-quality applications.
        </p>
      </div>

      <!-- LARAGON -->
      <div class="bg-birutua rounded-3xl px-6 pt-4 pb-5 self-start md:mt-[-200px] animate-fade-in">
        <div>
          <div class="bg-white rounded-lg inline-block p-1 mb-1">
            <img src="../assets/img/github3.png" class="w-[20px] h-auto">
          </div>

          <h1 class="text-white text-sm font-semibold">GIT & GitHub</h1>

          <p class="text-white text-xs leading-relaxed">
              A platform for managing <br>
              code repositories and <br>
              collaborative development.
          </p>
        </div>

        <div class="flex items-end mt-2">
          <img src="../assets/img/github2.png" class="h-20 w-auto">
        </div>
      </div>

      <!-- TRELLO -->
      <div class="flex gap-6 bg-birutua rounded-3xl px-6 pt-4 pb-5 self-start md:mt-[-100px] animate-fade-in">
        <div>
          <div class="bg-white rounded-lg inline-block p-1 mb-1">
            <img src="../assets/img/trello.png" class="w-[20px] h-auto">
          </div>

          <h1 class="text-white text-sm font-semibold">TRELLO</h1>

          <p class="text-white text-xs leading-relaxed">
           A powerful tool for <br>
            task management and <br>
            team collaboration.
          </p>
        </div>

        <div class="flex items-end">
          <img src="../assets/img/trello2.jpg" class="h-20 w-32">
        </div>
      </div>

    </div>

  </div>

</div>

</section>

<!-- KL MAU TAMBAHIN KONTEN DISINI -->
</div>


  <!-- <div class="bg-cream"> -->
   <!-- Konten  -->

 <!-- <section id="about" class="px-4">
  <div class="flex justify-center text-cream">
    <div class="bg-pink rounded-3xl shadow-2xl translate-y-10
                w-full max-w-4xl md:max-w-5xl p-6 md:p-10">

      <h1 class="text-2xl md:text-4xl font-playfair font-bold text-center mb-8">
        ABOUT
      </h1>

      <div class="space-y-6"> -->

        <!-- EDUCATION -->
        <!-- <Dropdown title="Education" class="cursor-pointer font-poppins text-base md:text-xl">
          <ul class="list-none mt-4">
            <li class="flex items-center ml-4 md:ml-8 mb-4 text-sm md:text-lg">
              <img src="../assets/img/logoUB.svg" alt="" class="w-7 h-auto mr-3">
              <span>
                2022 - 2025 <br>
                <p>Brawijaya University – Information Technology</p>
              </span>
            </li>
          </ul>
        </Dropdown> -->

        <!-- <hr class="border-cream opacity-30"> -->

        <!-- SOFT SKILL -->
        <!-- <Dropdown title="Soft skill" class="cursor-pointer font-poppins text-base md:text-xl">
          <ul class="list-none mt-4 ml-4 md:ml-8 text-sm md:text-lg space-y-3">
            <li>Effective Communication</li>
            <li>Teamwork</li>
            <li>Time Management</li>
          </ul>
        </Dropdown>

        <hr class="border-cream opacity-30"> -->

        <!-- FRAMEWORK -->
        <!-- <Dropdown title="Framework" class="cursor-pointer font-poppins text-base md:text-xl">
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

        <hr class="border-cream opacity-30"> -->

        <!-- PROGRAMMING LANGUAGE -->
        <!-- <Dropdown title="Programming Language" class="cursor-pointer font-poppins text-base md:text-xl">
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

        <hr class="border-cream opacity-30"> -->

        <!-- TOOLS -->
        <!-- <Dropdown title="Tools" class="cursor-pointer font-poppins text-base md:text-xl">
          <ul class="list-none mt-4 ml-4 md:ml-8 text-sm md:text-lg space-y-4 mb-2 md:mb-0">
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

    </div> --> 
<!-- </section> -->


 <section id="project">
  <div class="bg-birutua pb-10">
<div
  class="relative bg-fixed bg-cover bg-center hidden md:block"
  style="background-image: url('/sertiff.svg'); height: 40vh;"
>
  <div class="absolute inset-0 bg-cream bg-opacity-50 flex items-center justify-center">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-16 text-center">

    </div>
  </div>
</div>

   <div class="md:mt-16 pt-8  text-center items-center mb-8 md:mb-1">
         <h1 class="text-xl md:text-4xl font-poppins font-bold text-pinkmuda drop-shadow-md">
        PROJECT
      </h1>
      <p class="text-white md:text-lg text-xs">A selection of projects that showcase my skills <br>
         in building responsive and user-focused web applications.</p>
  </div>

  <!-- weekendplan -->
  <div class="grid grid-cols-2 anim-project md:px-10 px-3 md:gap-1 gap-2 md:mt-20">
     <div class="md:text-5xl font-bold md:flex md:justify-center ml-3 md:ml-0 ">
        <img src="../assets/img/weekendplan.svg" class="md:w-80 w-44 h-45 anim-project">
     </div>
     <div>
      <h1 class="inline-block md:text-sm text-xs font-semibold tracking-wide text-cream bg-pink px-4 py-2 rounded-full md:mt-4">
        WEB APPLICATION
      </h1>
      <h1 class="md:text-2xl text-md text-cream md:mt-6">
        ADMISSION WEB WEEKENDPLAN 
      </h1>

      <button 
        @click="openPopup('popup6')"
        class="group inline-flex items-center md:gap-3 gap-1 text-cream md:text-base font-semibold text-xs border-b border-cream pb-1 hover:gap-4 transition-all duration-300 md:mt-20 mt-6"
      >
        See Details
        <span class="transform group-hover:translate-x-1 transition">
          →
        </span>
      </button>
     </div>
  </div>

   <!-- project manajemen -->
  <div class="grid grid-cols-2 anim-project md:px-10 px-6 md:gap-1 gap-1 mt-10">
     <div class="md:ml-44">
      <h1 class="inline-block md:text-sm text-xs font-semibold tracking-wide text-cream bg-pink px-4 py-2 rounded-full md:mt-4">
        WEB APPLICATION
      </h1>
      <h1 class="md:text-2xl text-md text-cream md:mt-6">
        PROJECT MANAJEMEN WEB 
      </h1>

      <button 
        @click="openPopup('popup7')"
        class="group inline-flex items-center md:gap-3 gap-1 text-cream md:text-base font-semibold text-xs border-b border-cream pb-1 hover:gap-4 transition-all duration-300 md:mt-20 mt-6"
      >
        See Details
        <span class="transform group-hover:translate-x-1 transition">
          →
        </span>
      </button>
     </div>
      <div class="md:text-5xl font-bold md:flex md:justify-center">
           <img src="../assets/img/finaltaskcover 1.svg" class="w-32 md:w-60 lg:w-72 h-auto">
     </div>
  </div>


  <!-- simapres -->
  <div class="grid grid-cols-2 anim-project md:px-10 px-6 md:gap-1 gap-1 mt-10">
     <div class="md:text-5xl font-bold md:flex md:justify-center font-playfair">
                 <img src="../assets/img/simapres.svg" class="w-40 md:w-80 h-auto anim-project">
     </div>
     <div>
      <h1 class="inline-block md:text-sm text-xs font-semibold tracking-wide text-cream bg-pink px-4 py-2 rounded-full md:mt-4">
        WEB APPLICATION
      </h1>
     <h1 class="md:text-2xl text-md text-cream md:mt-6">
        SISTEM MAHASISWA BERPRESTASI <br class="hidden md:block">
         (SIMAPRES)
      </h1>

      <button 
        @click="openPopup('popup3')"
         class="group inline-flex items-center md:gap-3 gap-1 text-cream md:text-base text-xs font-medium border-b border-cream pb-1 hover:gap-4 transition-all duration-300 md:mt-20 mt-5"
      >
        See Details
        <span class="transform group-hover:translate-x-1 transition">
          →
        </span>
      </button>
     </div>
  </div>

   <!-- washnjoy -->
  <div class="grid grid-cols-2 anim-project md:px-10 px-6 md:gap-1 gap-2 mt-10">
     <div class="md:ml-44">
      <h1 class="inline-block md:text-sm text-xs font-semibold tracking-wide text-cream bg-pink px-4 py-2 rounded-full md:mt-4">
        WEB APPLICATION
      </h1>
      <h1 class="md:text-2xl text-md text-cream md:mt-6">
        WASHNJOY E-LAUNDRY
      </h1>

      <button 
        @click="openPopup('popup2')"
        class="group inline-flex items-center md:gap-3 gap-1 text-cream md:text-base font-semibold text-xs border-b border-cream pb-1 hover:gap-4 transition-all duration-300 md:mt-20 mt-9"
      >
        See Details
        <span class="transform group-hover:translate-x-1 transition">
          →
        </span>
      </button>
     </div>
      <div class="md:text-5xl font-bold md:flex md:justify-center font-playfair">
           <img src="../assets/img/washnjoy.svg" class="md:w-60 w-32 h-45 anim-project">
     </div>
  </div>

    <!-- uiux -->
  <div class="grid grid-cols-2 anim-project md:px-10 px-3 md:gap-1 md:mt-15 mt-5">
     <div class="md:text-5xl font-bold md:flex md:justify-center ml-4 md:ml-0">
                 <img src="../assets/img/uiux 1.svg" class="md:w-60 w-32 h-45 anim-project">
     </div>
     <div>
      <h1 class="inline-block md:text-sm text-xs font-semibold tracking-wide text-cream bg-pink px-4 py-2 rounded-full md:mt-4">
        WEB DESIGN
      </h1>
      <h1 class="md:text-2xl text-md text-cream md:mt-6">
        UI/UX <br> WASHNJOY LAUNDRY
      </h1>

      <button 
        @click="openPopup('popup4')"
        class="group inline-flex items-center md:gap-3 gap-1 text-cream md:text-base font-semibold text-xs border-b border-cream pb-1 hover:gap-4 transition-all duration-300 md:mt-20 mt-8"
      >
        See Details
        <span class="transform group-hover:translate-x-1 transition">
          →
        </span>
      </button>
     </div>
  </div>

  </div>


<!-- 
 <div class="flex flex-col md:grid md:grid-cols-2 anim-project md:px-10 px-6 md:gap-20 gap-10">

 <div class="flex justify-center mt-2 anim-project">
     <div class="bg-pinkmuda md:translate-y-10 rounded-3xl justify-center p-4 shadow-2xl" md:style="height: 30vh; width: 50vh;">
         <div class="text-sm flex md:grid md:grid-cols-2 items-center h-full"> -->
             <!-- Konten 1 -->
             <!-- <div class="md:text-5xl font-bold md:flex md:justify-center font-playfair">
                 <img src="../assets/img/weekendplan.svg" class="w-45 h-45 anim-project">
             </div> -->

             <!-- Konten 2 -->
             <!-- <div class="md:text-3xl font-bold px-10 md:justify-center text-pink font-poppins md:w-80">
                 <p>Admission Web <br> Weekendplan </p>
                 <button @click="openPopup('popup6')"class="cursor-pointer md:mt-5 mt-2  px-4 w-fit h-fit md:text-lg text-xs bg-pink hover:text-pinkmuda hover:bg-pinkmuda border border-pink rounded-full text-cream font-poppins transition-all duration-1000 ease-in-out transform hover:scale-[1.10]">
                     more
                 </button>
                 <button @click="openLink('https://github.com/nalinikarinaa/admission-web-fe')" class="cursor-pointer md:mt-5 mt-2  px-4 w-fit h-fit flex items-center justify-center text-lg bg-pink hover:text-pinkmuda hover:bg-pinkmuda border border-pink rounded-full text-cream transition-all duration-1000 ease-in-out transform hover:scale-[1.10]">
                     <img src="../assets/img/github2.svg" 
                     class="mr-2 cursor-pointer w-5"
                     @click="openLink('https://github.com/nalinikarinaa/admission-web-fe')"
                    alt="projectwashnjoy"><p class="md:text-lg text-xs">github</p>
                 </button>
             </div>
         </div>
     </div>
 </div>


 <div class="flex justify-center mt-2 anim-project">
     <div class="bg-pinkmuda md:translate-y-10 rounded-3xl justify-center p-4 shadow-2xl" md:style="height: 30vh; width: 50vh;">
         <div class="text-sm flex md:grid md:grid-cols-2 items-center h-full"> -->
             <!-- Konten 1 -->
             <!-- <div class="md:text-5xl font-bold md:flex md:justify-center font-playfair">
                 <img src="../assets/img/finaltaskcover 1.svg" class="w-45 h-45 anim-project">
             </div> -->

            <!-- Konten 2 -->
             <!-- <div class="md:text-3xl text-md font-bold px-10 md:justify-center text-pink font-poppins md:w-80">
                 <p>Project Manajemen Web </p>
                 <button @click="openPopup('popup7')"class="cursor-pointer md:mt-5 mt-2  px-4 w-fit h-fit md:text-lg text-xs bg-pink hover:text-pinkmuda hover:bg-pinkmuda border border-pink rounded-full text-cream font-poppins transition-all duration-1000 ease-in-out transform hover:scale-[1.10]">
                     more
                 </button>
                 <button @click="openLink('https://github.com/nalinikarinaa/final-task-project-management-FE')" class="cursor-pointer md:mt-5 mt-2  px-4 w-fit h-fit flex items-center justify-center text-lg bg-pink hover:text-pinkmuda hover:bg-pinkmuda border border-pink rounded-full text-cream transition-all duration-1000 ease-in-out transform hover:scale-[1.10]">
                     <img src="../assets/img/github2.svg" 
                     class="mr-2 cursor-pointer w-5"
                     @click="openLink('https://github.com/nalinikarinaa/final-task-project-management-FE')"
                    alt="projectwashnjoy"><p class="md:text-lg text-xs">github</p>
                 </button>
             </div>
         </div>
     </div>
 </div>


  <div class="flex justify-center anim-project">
     <div class="bg-pinkmuda md:translate-y-10 rounded-3xl justify-center p-4 shadow-2xl" md:style="height: 30vh; width: 50vh;">
         <div class="text-sm flex md:grid md:grid-cols-2 items-center h-full"> -->
             <!-- Konten 1 -->
             <!-- <div class="md:text-5xl font-bold md:flex md:justify-center font-playfair">
                 <img src="../assets/img/simapres.svg" class="w-45 h-45 anim-project">
             </div> -->

             <!-- Konten 2 -->
             <!-- <div class="md:text-3xl text-md font-bold px-10 md:justify-center font-poppins text-lg md:w-80 anim-project text-pink">
                 <p>SIMAPRES</p>
                 <button @click="openPopup('popup3')"class="cursor-pointer md:mt-5 mt-2 px-4 w-fit h-fit md:text-lg text-xs bg-pink hover:text-pinkmuda hover:bg-pinkmuda border border-pink text-cream font-poppins rounded-full transition-all duration-1000 ease-in-out transform hover:scale-[1.10]">
                     more
                 </button>
                 <button @click="openLink('https://github.com/nalinikarinaa/simapres')" class="cursor-pointer md:mt-5 mt-2 px-4 w-fit h-fit flex items-center justify-center text-lg bg-pink hover:text-pinkmuda hover:bg-pinkmuda border border-pink rounded-full text-cream font-poppins transition-all duration-1000 ease-in-out transform hover:scale-[1.10]">
                     <img src="../assets/img/github2.svg"
                     class="mr-2 cursor-pointer w-5"
                     @click="openLink('https://github.com/nalinikarinaa/simapres')"
                    alt="projectsimapres"><p class="md:text-lg text-xs">github</p>
                 </button>
             </div>
         </div>
     </div>
 </div>


 <div class="flex justify-center anim-project">
     <div class="bg-pinkmuda md:translate-y-10 rounded-3xl justify-center p-4 shadow-2xl" md:style="height: 30vh; width: 50vh;">
         <div class="text-sm flex md:grid md:grid-cols-2 items-center h-full "> -->
             <!-- Konten 1 -->
             <!-- <div class="md:text-5xl font-bold md:flex md:justify-center font-playfair">
                 <img src="../assets/img/washnjoy.svg" class="w-45 h-45 anim-project">
             </div> -->

             <!-- Konten 2 -->
             <!-- <div class="md:text-3xl text-md font-bold px-10 md:justify-center text-pink font-poppins md:w-80">
                 <p>WashNJoy <br> E-Laundry</p>
                 <button @click="openPopup('popup2')"class="cursor-pointer md:mt-5 mt-2 px-4 w-fit h-fit md:text-lg text-xs bg-pink hover:text-pinkmuda hover:bg-pinkmuda border border-pink rounded-full text-cream font-poppins transition-all duration-1000 ease-in-out transform hover:scale-[1.10]">
                     more
                 </button>
                 <button @click="openLink('https://github.com/nalinikarinaa/washnjoy')" class="cursor-pointer md:mt-5 mt-2 px-4 w-fit h-fit flex items-center justify-center text-lg bg-pink hover:text-pinkmuda hover:bg-pinkmuda border border-pink rounded-full text-cream transition-all duration-1000 ease-in-out transform hover:scale-[1.10]">
                     <img src="../assets/img/github2.svg" 
                     class="mr-2 cursor-pointer w-5"
                     @click="openLink('https://github.com/nalinikarinaa/washnjoy')"
                    alt="projectwashnjoy"><p class="md:text-lg text-xs">github</p>
                 </button>
             </div>
         </div>
     </div>
 </div>


 <div class="flex justify-center anim-project">
     <div class="bg-pinkmuda md:translate-y-10 rounded-3xl justify-center p-4 shadow-2xl" md:style="height: 30vh; width: 50vh;">
         <div class="text-sm flex md:grid md:grid-cols-2 items-center h-full"> -->
             <!-- Konten 1 -->
             <!-- <div class="md:text-5xl text-md font-bold md:flex md:justify-center font-playfair">
                 <img src="../assets/img/uiux 1.svg" class="w-45 h-45 anim-project">
             </div> -->

             <!-- Konten 2 -->
             <!-- <div class="md:text-3xl text-md font-bold px-10 md:justify-center text-pink font-poppins md:w-80">
                 <p>UI/UX WashNJoy</p>
                 <button @click="openPopup('popup4')"class="cursor-pointer md:mt-5 mt-2 px-4 w-fit h-fit md:text-lg text-xs bg-pink hover:text-pinkmuda hover:bg-pinkmuda border border-pink rounded-full text-cream font-poppins transition-all duration-1000 ease-in-out transform hover:scale-[1.10]">
                     more
                 </button>
                 <button @click="openLink('https://www.figma.com/proto/u73Eqw4DH1bYSTw9dWPG2Z/PBL-E-LAUNDRY?node-id=259-2699&t=ebwIu5x0UtTgN1PZ-0&scaling=min-zoom&content-scaling=fixed&page-id=259%3A2680&starting-point-node-id=259%3A2699')" class="cursor-pointer md:mt-5 mt-2 px-4 w-fit h-fit flex items-center justify-center md:text-lg text-xs bg-pink hover:text-pinkmuda hover:bg-pinkmuda border border-pink rounded-full text-cream font-poppins transition-all duration-1000 ease-in-out transform hover:scale-[1.10]">
                     prototype
                 </button>
             </div>
         </div>
     </div>
 </div>
 </div>
 </div> -->
 <!-- <div class="flex justify-center mt-14 md:mt-20 anim-project">
     <h1 class="text-xl md:text-3xl font-playfair font-bold 
                 text-center text-cream bg-pink px-10 py-4 rounded-full">
         EXPERIENCE
     </h1>
 </div> -->
  </section>


<section id="experience" class="bg-cream pb-28">
    <div class="flex flex-col md:grid md:grid-cols-2 anim-project gap-8 animate-fade-in">
      <h1 class="text-4xl font-poppins font-semibold text-pink md:ml-72 md:pt-14 ml-8"> EXPERIENCE </h1>
      <p class="md:pt-14 pt-3 text-birutua ml-8 md:ml-0">Experiences from participating in organizational activities <br>
         and internship programs that enhanced my leadership, 
         <br>collaboration, and professional development.</p>
    </div>

<div class="flex flex-col md:grid md:grid-cols-2 gap-12 anim-project justify-items-center items-start mt-12 px-6 max-w-5xl mx-auto">
<div class="bg-birutua rounded-3xl px-6 py-7 w-full max-w-sm animate-fade-in flex flex-col">
    <div>
        <h1 class="text-pink text-lg font-semibold leading-snug">
            FRONTEND DEVELOPER INTERN
        </h1>

        <p class="text-white text-xs leading-relaxed mt-1">
            Contributed to developing and optimizing responsive 
            web interfaces, collaborating with the team to deliver 
            user-friendly and efficient web applications.
        </p>
    </div>

    <div class="flex justify-center mt-4">
        <img src="../assets/img/MSIBB.png" 
             class="w-32 md:w-44 h-auto object-contain">
    </div>

    <button 
        @click="openPopup('popup5')"
        class="group inline-flex items-center gap-2 
               text-cream text-xs font-medium 
               border-b border-cream pb-1 
               hover:gap-3 transition-all duration-300 
               mt-4">
        See Details
        <span class="transform group-hover:translate-x-1 transition">
            →
        </span>
    </button>

</div>

<div class="bg-birutua rounded-3xl px-6 py-7 w-full max-w-sm animate-fade-in flex flex-col">
    <div>
        <h1 class="text-pink text-lg font-semibold leading-snug">
            YUWARAJA XV
        </h1>

        <p class="text-white text-xs leading-relaxed mt-1">
            Served as a committee member in Yuwaraja,<br>
          the faculty orientation program, <br>
          contributing to event coordination and ensuring <br>
          a welcoming experience for new students.
        </p>
    </div>

    <div class="flex justify-center mt-4">
        <img src="../assets/img/yuwaraja.svg" 
             class="w-32 md:w-44 h-auto object-contain">
    </div>

    <button 
        @click="openPopup('popup1')"
        class="group inline-flex items-center gap-2 
               text-cream text-xs font-medium 
               border-b border-cream pb-1 
               hover:gap-3 transition-all duration-300 
               mt-4">
        See Details
        <span class="transform group-hover:translate-x-1 transition">
            →
        </span>
    </button>
</div>

</div>


</section>


    <!-- <div class="md:mt-24 mt-14 text-center items-center md:mb-5 mb-10">
         <h1 class="text-2xl md:text-3xl font-playfair font-bold text-pink drop-shadow-md">
        EXPERIENCE
      </h1>
  </div>

 <div class="flex justify-center anim-project flex-col md:grid md:grid-cols-2 md:px-10 px-6 md:gap-20 gap-10">
     <div class="bg-pink md:translate-y-10 rounded-3xl justify-center p-4 shadow-2xl" md:style="height: 30vh; width: 50vh; anim-project">
         <div class="text-sm flex md:grid md:grid-cols-2 items-center h-full"> -->
             <!-- Konten 1 -->
             <!-- <div class="md:text-5xl font-bold md:flex md:justify-center font-playfair anim-project">
                 <img src="../assets/img/yuwaraja.svg" class="w-20 h-20">
             </div> -->

             <!-- Konten 2 -->
             <!-- <div class="md:text-xl text-md text-cream font-bold px-10 md:justify-center font-poppins md:w-80 anim-project">
                 <p class="text-cream">YUWARAJA XV</p>
                 <button @click="openPopup('popup1')"class="cursor-pointer md:mt-5 mt-2 px-4 w-fit h-fit md:text-lg text-xs bg-cream hover:text-pinkmuda hover:bg-pinkmuda border border-pink rounded-full text-pink">
                     more</button>
             </div>
         </div>
     </div>

     <div class="bg-pink md:translate-y-10 rounded-3xl justify-center p-4 shadow-2xl" md:style="height: 30vh; width: 50vh; anim-project">
         <div class="text-sm flex md:grid md:grid-cols-2 items-center h-full"> -->
             <!-- Konten 1 -->
             <!-- <div class="md:text-5xl font-bold md:flex md:justify-center font-playfair anim-project">
                 <img src="../assets/img/MSIBB.png" class="w-40 h-28 md:w-60 md:h-auto">
             </div> -->

             <!-- Konten 2 -->
             <!-- <div class="md:text-3xl text-md font-bold md:px-4 px-12 md:justify-center font-poppins md:w-80 anim-project">
                 <p class="text-cream">MSIB <br></br> Batch 7</p>
                 <button @click="openPopup('popup5')"class="cursor-pointer md:mt-5 mt-2  px-4 w-fit h-fit md:text-lg text-xs bg-cream hover:text-pinkmuda hover:bg-pinkmuda border border-pink rounded-full text-pink">
                     more</button>
             </div>
         </div>
     </div>

 </div> -->



 <section id="CERTIFICATE" class="bg-birutua pb-20">
    <div class="md:pt-24 pt-14 text-center items-center">
         <h1 class="text-2xl md:text-3xl font-poppins font-bold text-pink drop-shadow-md">
        CERTIFICATE
      </h1>
      <p class="text-sm text-cream mt-3">A collection of certifications earned through academic programs,<br>
         internships, and professional training that demonstrate my commitment <br>
         to continuous learning and skill development in technology and web developmen</p>
  </div>
 
  <!-- swipper -->
<MySwiper />


 </section>
 

 <section id="contact">
     <div class="bg-pink">
 <div class="text-sm flex-col md:grid md:grid-cols-2 md:px-52">
             <!-- Konten 1 -->
             <div class="md:text-2xl p-4 md:justify-center font-poppins">
               <li class="flex items-center md:ml-8 ml-2 mb-4 md:text-lg text-xs">
                          <img src="../assets/img/ig.png" class="ml-1 cursor-pointer w-6 h-6 md:w-14 md:h-auto mt-1 md:mt-1.5 transition-all duration-1000 ease-in-out transform hover:scale-[1.10]" 
                          @click="openLink('https://www.instagram.com/nalinikarinaa/')" alt="Instagram">
                         <span class="ml-3 font-bold text-cream">@nalinikarinaa <br><p class="md:text-sm text-xs font-normal"></p></span>
               </li>
               <li class="flex items-center md:ml-8 ml-2 mb-4 md:text-lg text-xs">
                          <img src="../assets/img/email.png" class="ml-1 cursor-pointer w-6 h-6 md:w-12 md:h-auto mt-1 md:mt-1.5 transition-all duration-1000 ease-in-out transform hover:scale-[1.10]" 
                          @click="openLink('mailto:nalinikarina613@gmail.com')" alt="Email">
                         <span class="ml-3 text-cream font-bold">nalinikarina613@gmail.com <br><p class="md:text-sm text-xs font-normal"></p></span>
               </li>
               <li class="flex items-center md:ml-8 ml-2 mb-4 md:text-lg text-xs">
                          <img src="../assets/img/lokasi.png" class="ml-1 cursor-pointer w-6 h-6 md:w-12 md:h-auto mt-1 md:mt-1.5 transition-all duration-1000 ease-in-out transform hover:scale-[1.10]" alt="Lokasi">
                         <span class="ml-3 text-cream font-bold">Malang, Jawa Timur <br><p class="md:text-sm text-xs font-normal"></p></span>
               </li>
             </div>

             <!-- Konten 2 -->
         <div class="hidden md:text-5xl font-bold p-4 md:flex md:justify-center font-poppins text-cream mt-16">
                 <p>CONTACT</p>
             </div>
          </div>
          </div>

                 <!-- POPUP SIMAPRES -->
                  <div class="text-xl font-poppins font-normal">
                     <PopUp :visible="activePopup === 'popup3'" @close="closePopup">
                     <h2 class="md:text-lg text-md text-center text-pink font-bold">SIMAPRES</h2>
                       <p class=" mt-4 text-sm text-birutua md:text-md">
                         SIMAPRES Project Base Learning (PBL) is a web-based application platform that aims to display and edit high-achieving student data, and make it easier to submit and validate achievements. And in this project there are 2 actors, user and admin, each user has a different role.<br><br>
                         As a Back-End Developer on the SIMAPRES Learning Base Project is a very valuable experience for me. I am in charge of planning and developing servers, designing and managing database structures that are efficient and according to needs, building and developing Back-End using PHP Native, 
                         and developing and integrating features.</p>
                     <div class="items-center justify-center flex mt-8"><img src="../assets/img/simapres2.svg" class=" items-center w-full h-auto"> </div>
                     </PopUp>
                 </div>

                 <!-- POPUP WASHNJOY -->
                 <div class="text-xl font-poppins font-normal">
                     <PopUp :visible="activePopup === 'popup2'" @close="closePopup">
                     <h2 class="md:text-lg text-md text-center text-pink font-bold">WashNJoy E-Laundry</h2>
                       <p class="mt-4 text-sm text-birutua md:text-md">
                         Becoming a Fullstack Developer on the WashNJoy E-Laundry project was a very valuable experience for me. I worked on this project starting from designing the user interface (UI), designing and building the Front-End using HTML and Tailwind CSS, designing and managing the database structure using SQL, building and developing the Back-End using the Laravel Framework and Laravel Breeze for the sign up feature so that can connect to the user's email, and test the code created to ensure there are no bugs or errors.</p>
                     <div class="items-center justify-center flex mt-8"><img src="../assets/img/washnjoy2.svg" class=" items-center w-full h-auto"> </div>
                     </PopUp>
                 </div>

                 <!-- POPUP UI/UX  -->
                   <div class="text-xl font-poppins font-normal">
                     <PopUp :visible="activePopup === 'popup4'" @close="closePopup">
                     <h2 class="md:text-lg text-md text-center text-pink font-bold">UI/UX WashNJoy E-Laundry</h2>
                       <p class="mt-4 text-sm text-birutua md:text-md">
                        Developed the full UI/UX design for the WashnJoy Laundry project, starting from user research, wireframing, and prototyping to crafting high-fidelity interface designs. The design focuses on clarity, ease of use, and smooth user flows to ensure a convenient and enjoyable laundry service experience. This project highlights my ability to translate user needs into clean, functional, and visually consistent interfaces.</p>
                        <p class="mt-4 text-xs text-birutua">
                        For prototype from the WashNJoy project, you can access this link:
                        <a
                          href="https://figma.com/proto/u73Eqw4DH1bYSTw9dWPG2Z/PBL-E-LAUNDRY?node-id=259-2680"
                          target="_blank"
                          rel="noopener noreferrer"
                          class="text-pink underline hover:opacity-80"
                        >
                          prototype WashNJoy
                        </a>
                      </p>
                     <div class="items-center justify-center flex mt-8"><img src="../assets/img/washnjoy2.svg" class=" items-center w-full h-auto"> </div>
                     </PopUp>
                 </div>

                 <!-- POP UP EXPERIENCE -->
                    <div class="text-xl font-poppins font-normal">
                     <PopUp :visible="activePopup === 'popup1'" @close="closePopup">
                     <h2 class="md:text-lg text-md text-center text-pink font-bold">YUWARAJA XV</h2>
                       <p class="mt-4 text-sm text-birutua md:text-md">Being a supervisor at the 2023 Vocational Faculty PKKMB was a very extraordinary experience for me, I met a lot of new people and trained my ability to work well in teams. As a supervisor, I am also responsible for accompanying, guiding, and helping new students get to know and adapt to the campus environment, be a source of information and consultation, monitor and organize activities, and coordinate activities with other committees</p>
                     <div class="items-center justify-center flex mt-8"><img src="../assets/img/yuwaraja.svg" class=" items-center"> </div>
                     <div class="items-center justify-center flex mt-3"><img src="../assets/img/yuwaraja2.svg" class=""> 
                     <img src="../assets/img/yuwaraja3.svg" class="ml-5 w-36 h-auto"> </div>
                     </PopUp>
                 </div>

                  <div class="text-xl font-poppins font-normal">
                     <PopUp :visible="activePopup === 'popup5'" @close="closePopup">
                     <h2 class="md:text-lg text-md text-center text-pink font-bold">MSIB Batch 7</h2>
                       <p class="mt-4 text-sm text-birutua md:text-md">During the MSIB program, I actively participated in weekly mentoring sessions to discuss task progress, challenges, and evaluations from mentors. As a Frontend Developer, I worked on implementing UI designs from Figma/AI into Vue.js, integrating APIs using Axios, and developing various features for company projects. I also received weekly evaluations based on the tasks assigned.
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
                     <h2 class="md:text-lg text-md text-center text-pink font-bold">Weekendplan Admission Web</h2>
                       <p class="mt-4 text-sm text-birutua md:text-md">
                         Admission Web Weekendplan is my final project, where I served as a Fullstack Developer. On the frontend side, I built a responsive and consistent interface using Vue.js and Tailwind CSS. On the backend, I developed REST APIs using Laravel and implemented Laravel Sanctum to ensure secure and structured authentication processes. <br>
                        <br>Throughout this project, I developed several core features such as user registration, login and logout authentication, class selection for the creative class program, attendance (clock-in), transaction history, activity notifications, and an admin dashboard for managing CRUD operations on classes, users, and reports. I also designed the database structure, created API endpoints from scratch, implemented user roles (admin and user), and integrated the frontend with the backend using Axios.</br> <br>
                        <br>On the frontend side, I ensured component reusability, aligned the UI flow with the designs I created in Figma, and maintained responsive behavior across different devices. During development, I also learned various important concepts such as handling CORS, optimizing API performance, managing Sanctum tokens, and structuring Vue components efficiently.</br>
                        </p>
                      <p class="mt-4 text-xs text-birutua">
                        The tech stack I used includes Vue.js, Laravel, Laravel Sanctum, Tailwind CSS, MySQL, and Axios.
                      </p>
                      <p class="mt-4 text-xs text-birutua">
                        For videos from the Weekendplan project, you can access this link:
                        <a
                          href="https://drive.google.com/file/d/1Za5i-U_Zw9vDEgBbvPbYr0eOpYvr24hu/view?usp=sharing"
                          target="_blank"
                          rel="noopener noreferrer"
                          class="text-pink underline hover:opacity-80"
                        >
                          demo project weekendplan
                        </a>
                      </p>
                      <div class="flex flex-col items-center justify-center mt-3 w-full">
                      <img src="../assets/img/homepage.png" class="w-full max-w-md mt-3 h-auto">
                      <img src="../assets/img/class list.png" class="w-full max-w-md mt-3 h-auto">
                       <img src="../assets/img/register class.png" class="w-full max-w-md mt-3 h-auto">
                       <img src="../assets/img/dashboard admin.png" class="w-full max-w-md mt-3 h-auto">
                       <img src="../assets/img/detail class manajemen.png" class="w-full max-w-md mt-3 h-auto">
                    </div>
                     </PopUp>
                 </div>

                <!-- POPUP WEB MANAGEMENT -->
                <div class="text-xl font-poppins font-normal">
                     <PopUp :visible="activePopup === 'popup7'" @close="closePopup">
                     <h2 class="md:text-lg text-md text-center text-pink font-bold">Project Manajemen Web</h2>
                       <p class="mt-4 text-sm text-birutua md:text-md">This project management web application was my final project during the MSIB program. In this final task, I worked in a team and took on the role of Frontend Developer. I also had the opportunity to serve as Project Manager on a weekly rotation. In this project, I handled UI planning, created designs in Figma, performed slicing, and implemented the interface using Vue.js according to the company’s SOP. Additionally, I integrated the Backend API into the Frontend and implemented HTTP requests using Axios.</p>
                    <div class="flex flex-col items-center justify-center mt-3 w-full">
                      <img src="../assets/img/finaltask.png" class="w-full max-w-md mt-3 h-auto">
                      <img src="../assets/img/finaltask2.png" class="w-full max-w-md h-auto mt-6 md:ml-5">
                    </div>

                     </PopUp>
                 </div>

 </section>
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
import About from "../components/About.vue";


 import MySwiper from './MySwiper.vue'

gsap.registerPlugin(ScrollTrigger);


export default {
  components: {
    PopUp,
    Header,
    Dropdown,
    Footer,
    MySwiper,
    About

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