<template>
  <f7-page>
    <f7-navbar title="Dish Details" back-link="Back"></f7-navbar>

    <f7-card>
      <f7-card-header>{{ dish.name }}</f7-card-header>
      <f7-card-content>
        <img style="width: 100%;border-radius:8px" :src="dish.img.src" />
        <p>{{ dish.description }}</p>
      </f7-card-content>
    </f7-card>

    <f7-block strong>
      <f7-link @click="$f7router.back()">Go back via Router API</f7-link>
    </f7-block>

  </f7-page>
</template>

<script>
import Service from '../service';

export default {
  data() {
    return {
      dish: Service.getDish(this.$f7route.params.id),
    };
  }
};
</script>
