<template>
  <div id="app">
    <div style="width: 1000px; margin: 0 auto">
      <Header />
      <Banner :Banners="Banners" :duration="duration" />
      <Channel />
      <NewsList :news="news" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from "../components/home/Banner";
import Header from "../components/home/Header";
import Channel from "../components/home/Channel";
import NewsList from "../components/home/NewsList";
import { getNews } from "../service/newsList"
export default {
  components: {
    Banner,
    Header,
    Channel,
    NewsList
  },
  data() {
    return {
      //传递banner数组
      Banners: [
        {
          url: require("../assets/banner/banner1.png"),
          name: "banner1",
          link: "www.baidu.com",
        },
        {
          url: require("../assets/banner/banner2.png"),
          name: "banner2",
          link: "www.baidu.com",
        },
        {
          url: require("../assets/banner/banner3.png"),
          name: "banner3",
          link: "www.baidu.com",
        },
        {
          url: require("../assets/banner/banner4.png"),
          name: "banner4",
          link: "www.baidu.com",
        },
        {
          url: require("../assets/banner/banner5.png"),
          name: "banner5",
          link: "www.baidu.com",
        },
      ],
      //传递定时器banner切换时间
      duration: 2000,
      news: []
    };
  },
  created() {
    getNews().then(async (resp) => {
      this.news = resp;
    });
  },
};
</script>
