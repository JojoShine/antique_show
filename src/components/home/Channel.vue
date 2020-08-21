<template>
  <div class="news-types" v-if="this.channels.length > 0">
    <div
      class="item"
      :class="{ active: item.id === chooseId }"
      v-for="item in showChannels"
      :key="item.id"
      @click="switchTo(item.id)"
    >
      <span class="name">{{ item.content }}</span>
    </div>
    <a @click="isCollapse = !isCollapse">{{ isCollapse ? "展开" : "收起" }}</a>
  </div>
</template>

<script >
import { getChannels } from "@/service/antiqueChannel";
export default {
  data() {
    return {
      channels: [],
      isCollapse: true, //当前是否为折叠状态
      chooseId: null, //当前选中的频道id
    };
  },
  computed: {
    showChannels() {
      if (this.isCollapse) {
        //折叠状态
        return this.channels.slice(0, 10); //折叠状态只需要8个
      } else {
        return this.channels;
      }
    },
  },
  created() {
     getChannels().then((resp) => {
      this.channels = resp;
      //改变channelId
      this.switchTo(this.channels[0].id);
    });
  },
  methods: {
    //切换id
    switchTo(id) {
      this.chooseId = id;
      //触发事件
      //this.$emit("change", this.chooseId);
    },
  },
};
</script>

<style>
.news-types {
  margin: 30px 0;
  border-bottom: 1px solid #ccc;
  display: flex;
  flex-wrap: wrap;
  font-size: 16px;
  padding-bottom: 15px;
}
.item {
  padding: 10px 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-right: 15px;
  margin: 7px 15px 7px 0;
  cursor: pointer;
  position: relative;
}
.item:hover {
  background: #ccc;
}
.item.active {
  background: rgb(50, 146, 224);
  color: #fff;
  border: 0px;
}
.news-types a {
  align-self: flex-end;
  margin-bottom: 20px;
  color: #409eff;
}
</style>