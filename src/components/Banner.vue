<template>
  <div class="banner-container">
    <ul class="bannerImage" :style="{width: Banners.length*100 + '%', marginLeft: -index*100+ '%'}">
      <li v-for="(item, i) in Banners" :key="i">
        <a :href="item.link">
          <img :src="item.url" alt="" />
        </a>
      </li>
    </ul>
    <ul class="dots">
      <li v-for="(item, i) in Banners" :key="i"></li>
    </ul>
  </div>
</template>

<script>
export default {
  //接收父组件的参数
  props: {
    Banners: {
      type: Array, //要求传递数组类型
      required: true, //必须传递
    },
  },
  data() {
    return {
      index: 0,
    };
  },
};
</script>

<style scoped>
.banner-container {
    height: 350px;
    position: relative;
    overflow: hidden;
}

.bannerImage {
    height: 100%;
    transition: 1s;
}
.bannerImage li {
    display: block;
    width: 1080px;
    height: 100%;
    float: left;
}
.bannerImage img {
    width: 1080px;
}

.dots {
    width: 10px;
    height: 10px;
    
}
</style>
