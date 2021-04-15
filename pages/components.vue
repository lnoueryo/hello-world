<template>
    <div>
        a
    </div>
</template>

<script>
export default {
    layout: 'layout2',
    layoutTransition: {
        name: 'layout',
        mode: 'out-in'
    }
}
</script>
<style>
.layout-enter-active,
.layout-leave-active {
  transition: opacity 0.5s;
}
.layout-enter,
.layout-leave-active {
  opacity: 0;
}
</style>