<template>
  <div>
    <h1>App page</h1>
    <p>new</p>
  </div>
</template>

<script>
export default {
  setup() {
    const testFunction = () => {
      console.log('test')
    }
    return { testFunction }
  },
}
</script>

<style>
div {
  color: yellowgreen;
}
</style>
