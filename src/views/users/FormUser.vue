<template>
  <div class="container">
    <form>
      <div class="body">
        <div class="input">
          <label for="name">Name:</label>
          <input type="text" />
        </div>
        <div class="input">
          <label for="date">Date of Birth:</label>
          <input type="date" />
        </div>
        <div class="input">
          <label for="office">Office:</label>
          <input type="text" />
        </div>
        <div class="input">
          <label for="email">Email:</label>
          <input type="text" />
        </div>
        <div class="input">
          <label for="phone">Phone:</label>
          <input type="text" />
        </div>
      </div>
      <div class="footer"></div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
@import '../../styles/views/users/users';
</style>
