<template>
  <video-player 
    ref="videoPlayer"
    class="video-player vjs-big-play-centered"
    :sources="currentVideoSources"
    poster="https://vjs.zencdn.net/v/oceans.png"
    crossorigin="anonymous"
    playsinline
    autoplay="muted"
    :volume="0.6"
    :playback-rates="[0.7, 1.0, 1.5, 2.0]"
    @ended="playNextVideo"
    @mouseenter="showControls"
    @mouseleave="hideControls"
  />
</template>

<script>
import { defineComponent, ref } from "vue";
import { VideoPlayer } from "@videojs-player/vue";
import "video.js/dist/video-js.css";
import axios from "axios";
import { VIDEOS_ENDPOINT } from "@/config.js";

export default defineComponent({
  components: {
    VideoPlayer,
  },
  data() {
    return {
      videos: [],
      currentVideoIndex: 0,
      showPlayerControls: false,
    };
  },
  computed: {
    currentVideoSources() {
      return [this.videos[this.currentVideoIndex]];
    },
  },
  methods: {
    async fetchVideos() {
      const response = await axios.get(VIDEOS_ENDPOINT);
      this.videos = this.getLinks(response.data);
    },
    getLinks(videosResponse) {
      return videosResponse.map((video) => ({
        src: video.path,
        type: video.type,
      }));
    },
    playNextVideo() {
      this.fetchVideos();
      if (this.currentVideoIndex < this.videos.length - 1) {
        this.currentVideoIndex++;
      } else {
        this.currentVideoIndex = 0; // Loop back to the first video
      }
      this.$refs.videoPlayer.player.dispose(); // Dispose the current player instance
      this.$refs.videoPlayer.player.load(); // Load the new video
      this.$refs.videoPlayer.player.play(); // Start playing the new video
    },
    showControls() {
      this.showPlayerControls = true;
    },
    hideControls() {
      this.showPlayerControls = false;
    },
  },
  async created() {
    await this.fetchVideos();
  },
});
</script>

<style scoped>
.video-player .vjs-control-bar {
  opacity: 0;
  transition: opacity 0.3s ease-out;
}

.video-player:hover .vjs-control-bar,
.video-player .vjs-control-bar:focus {
  opacity: 1;
}
</style>
