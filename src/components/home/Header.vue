<template>
  <div class="header">
    <div class="header-container">
      <div class="container">
        <div class="logo">
          <!-- 声明式导航 -->
            <router-link :to="{name : 'home'}">
            <img src="../../assets/logo.png" alt />
            </router-link>
        </div>
        <ul class="nav">
          <li>
            <router-link :to="{name : 'home'}">首页</router-link>
          </li>
          <li>
            <router-link :to="{name : 'home'}">图库检索</router-link>
          </li>
          <li>
            <router-link :to="{name : 'home'}">最新动态</router-link>
          </li>
          <li>
            <router-link :to="{name : 'home'}">古钱币百科</router-link>
          </li>
        </ul>
        <ul class="user">
          <li>
            <router-link :to="{name : 'home'}">登录</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  height: 60px;
  margin-bottom: 16px;
}

.header-container {
  height: 60px;
  background: black;
  color: #fff;
  line-height: 60px;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  display: flex;
  font-size: 16px;
}
.container {
  display: flex;
  width: 1060px;
  margin: 0 auto;
}
.logo a {
  display: flex;
  align-items: center;
  height: 100%;
}
.logo img {
  width: auto;
  height: 40px;
}
.nav {
  margin: 0 60px;
  display: flex;
  flex-grow: 1;
}
.nav a {
  display: block;
  padding: 0 30px;
}
 .nav :hover{
  background-color: #364a5d;
} 
.user {
  font-size: 16px;
}
.user * {
  margin-left: 10px;
}
.header a {
  color: #fff;
}
</style>