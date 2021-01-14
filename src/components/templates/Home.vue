<template>
  <div class="home">
    <dl>
      <dt>OPEN</dt>
      <dd>Click, Tap</dd>
    </dl>
    <dl>
      <dt>FLAG</dt>
      <dd>Right-Click, Long-Tap</dd>
    </dl>
  </div>
</template>

<style scoped>
.home {
  width: 20em;
  margin: 0 auto;
}

dl {
  display: flex;
  margin: 0;
}

dt,
dd {
  padding: 1em 1em;
  margin: 0;
}

dt {
  text-align: right;
  color: #42b983;
  border-right: #42b983 solid 4px;
}

dd {
    text-align: left;
}
</style>
