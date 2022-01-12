<template>
  <the-header></the-header>
  <div class="error-page">
    <h1>ERROR 404</h1>
    <h1>!!!</h1>
    <p>
      The page you are looking for doesn't exist! To return to the Homepage you
      can click on the logo (MovieApp) in the top left corner, or click on the
      Home in the navigation menu!
    </p>
  </div>
</template>


<style scoped>
.error-page {
  text-align: center;
  padding: 50px;
}
h1:first-of-type{
  font-size: 50px;
  color: #3d008d;;
  margin-bottom: 30px;
}
h1:last-of-type{
  font-size: 70px;
  color: red;
  margin-bottom: 30px;
}
p{
  font-size: 20px;
  color: #3d008d;
  font-weight: 700;
}
</style>