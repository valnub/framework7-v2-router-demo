<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-title>City Wok</f7-nav-title>
    </f7-navbar>
    <f7-block-title>Menu</f7-block-title>
    <f7-list>
      <f7-list-item v-for="dish in dishes" :key="dish.id" v-bind:link="dish | toUrl" :title="dish.name"></f7-list-item>
    </f7-list>
  </f7-page>
</template>

<script>
  import Service from '../service';

  export default {
    data() {
      return {
        dishes: Service.getMenu(),
      };
    },

    filters: {
      toUrl(dish) {
        return `/dish/${dish.id}/`;
      },
    },
  };
</script>
