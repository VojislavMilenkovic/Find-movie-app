<template>
  <header>
    <router-link class="logo" to="/">MovieApp</router-link>
    <nav>
      <ul>
        <router-link class="link" to="/home">Home</router-link>
        <router-link class="link" to="/about">About</router-link>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #3d008d;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
}
.logo {
  color: #f391e3;
  text-decoration: none;
  font-size: 40px;
  padding: 0 10px;
}

.link {
  color: #f391e3;
  text-decoration: none;
  font-size: 25px;
  margin-right: 20px;
  padding: 5px;
}

.link.router-link-active,
.link:hover {
  border-bottom: 2px solid #f391e3;
}
</style>

