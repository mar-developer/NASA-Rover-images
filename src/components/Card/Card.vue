<template>
  <card-wrapper>
    <card-title>
      {{ title }}
    </card-title>
    <card-image :src="imgSrc" />
    <card-description>
      <p>{{ name }}</p>
    </card-description>
  </card-wrapper>
</template>

<script>
import {
  CardTitle,
  CardImage,
  CardWrapper,
  CardDescription
} from "./styles.js";

export default {
  name: "CardComponent",
  components: {
    CardWrapper,
    CardTitle,
    CardImage,
    CardDescription,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    imgSrc: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
};
</script>