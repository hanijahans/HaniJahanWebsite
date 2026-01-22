<script setup>
defineProps({
  id: {
    type: String,
    required: true
  },
  width: {
    type: String,
    default: '100%' // Default to full width if not specified
  }
})
</script>

<template>
  <div class="video-container" :style="{ maxWidth: width }">
    <div class="video-responsive">
      <iframe
        :src="`https://www.youtube.com/embed/${id}`"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<style scoped>
/* Wrapper to handle the width constraint */
.video-container {
  margin: 0 auto; /* Optional: Centers the video */
}

/* The responsive aspect ratio lock */
.video-responsive {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
  height: 0;
  overflow: hidden;
  border-radius: 8px;
}

.video-responsive iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>