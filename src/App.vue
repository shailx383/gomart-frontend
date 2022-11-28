<template>
  <nav>
    <router-link to="/">Login</router-link> |
    <router-link to="/signup">Sign up</router-link> |
    <router-link to="/product">Product</router-link> |
    <router-link to="/manadmapply">Apply</router-link> |
    <router-link to="/prodsearch">Product Search Result</router-link> |
    <router-link to="/manadmlist">List</router-link> |
    <router-link to="/rstpass">Reset Password</router-link> |
    <router-link to="/PastOrders">Past Orders</router-link> |
    <!-- <router-link to="/viewprof">View Profile</router-link> -->
  </nav>
  <Test></Test>
  <router-view/>
</template>


<!-- 
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style> -->
