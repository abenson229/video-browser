<template>
    <div class="container">
        <SearchBar @termChange="onTermChange"></SearchBar>
        <VideoList :videos="videos"></VideoList>
    </div>
</template>

<script>
  import axios from "axios";
  import SearchBar from "./components/SearchBar";
  import VideoList from "./components/VideoList";

  const API_KEY = "AIzaSyDEunT6kgL7GFlk9IYMPxCDoGzazygq68k";
  const youTubeEndpoint = "https://www.googleapis.com/youtube/v3/search";

  export default {
    name: "App",
    components: {SearchBar, VideoList},
    data() {
      return {
        videos: []
      };
    },
    methods: {
      onTermChange(searchTerm) {
        axios.get(youTubeEndpoint, {
          params: {
            key: API_KEY,
            type: "video",
            part: "snippet",
            q: searchTerm
          }
        })
          .then(response => {
            this.videos = response.data.items;
          });
      }
    }
  }
</script>

<style scoped>

</style>