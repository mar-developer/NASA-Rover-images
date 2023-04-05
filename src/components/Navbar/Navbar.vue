<template>
  <Container>
    <nav-wrapper>
      <logo-wrapper>
        <img src="../../assets/nasa_logo.png" alt="logo" />
      </logo-wrapper>
      <router-link :to="{name: 'dashboard'}">Home</router-link>
      <router-link :to="{name: 'mars-yesterday'}">Mars Yesterday</router-link>
      <router-link :to="{name: 'mars-today'}">Mars Today</router-link>
    </nav-wrapper>
  </Container>
</template>
<script>
import {
  Container,
  NavWrapper,
  LogoWrapper
} from "./styles.js";

export default {
  name: "NavbarMenu",
  data: () => ({}),
  components: { Container, NavWrapper, LogoWrapper },
};
</script>