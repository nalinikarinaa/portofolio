<template>
<transition name="popup-fade">
  <div v-if="visible" class="popup-overlay">
    <div class="popup-content">
      <button class="close-button" @click="$emit('close')">✕</button>
      <slot></slot>
    </div>
  </div>
</transition>

  </template>
  
  <script>
  export default {
    name: 'PopUp',
    props: {
      visible: {
        type: Boolean,
        default: false,
      }
    },
    methods: {
      closePopup() {
        this.$emit('close');
      }
    }
  };
  </script>
  
  
  <style scoped>
  /* .popup-overlay {
    position: fixed;
    max-width: 500px;
    width: 100%;
    background: rgba(199, 189, 189, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99999; 
     inset: 0;
  } */

  .popup-overlay {
  position: fixed;
  inset: 0; /* = top:0; left:0; right:0; bottom:0 */
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999; /* lebih tinggi dari semua card */
}

  .popup-content {
    position: relative;
    background: white;
    padding: 20px;
    border-radius: 8px;
    max-width: 700px;
    height: 100%;
    z-index: 100;
    max-height: 80vh;
    overflow-y: auto;
}
  
  
  /* Styling untuk tombol close */
  .close-button {
    background: none;
    border: none;
    color: #f56565; /* Warna merah untuk teks tombol close */
    font-size: 16px;
    cursor: pointer;
    top: 10px;
    right: 10px;
     position: absolute;
  }
  
  /* Styling tambahan saat hover */
  .close-button:hover {
    color: #c53030; /* Warna merah lebih gelap saat hover */
  }

  /* Animasi overlay */
.popup-fade-enter-active, .popup-fade-leave-active {
  transition: opacity 0.3s ease;
}
.popup-fade-enter-from, .popup-fade-leave-to {
  opacity: 0;
}

.popup-fade-enter-active .popup-content {
  transform: scale(1);
  opacity: 1;
}

.popup-fade-leave-active .popup-content {
  transform: scale(0.9);
  opacity: 0;
}

  </style>
  