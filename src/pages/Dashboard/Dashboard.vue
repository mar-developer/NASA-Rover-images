<template>
  <page-wrapper>
    <page-title>Welcome! Check out Nasa's photo of the day</page-title>
    <Loader v-if="isDailyImageLoading || !photoOfTheDay" />
    <Card
      v-else
      :title="photoOfTheDay.title"
      :img-src="photoOfTheDay.url"
      :name="photoOfTheDay.explanation"
    />
  </page-wrapper>
</template>

<script>
import { mapGetters,  mapActions } from "vuex"
import moment from "moment"
import Loader from "@/components/Loader/Loader";
import Card from "@/components/Card/Card";

import {
  PageTitle,
  PageWrapper,
} from "./styles.js";

export default {
  name: "DashboardPage",
  components: {
    PageWrapper,
    PageTitle,
    Card,
    Loader,
  },
  methods: {
    ...mapActions('Dashboard', ['fetchPhotoOfTheDay'])
  },
  computed: {
    ...mapGetters({
      isDailyImageLoading: 'Dashboard/getIsDailyImageLoading',
      photoOfTheDay: "Dashboard/getPhotoOfTheDay",
    }),
  },
  async mounted() {
    if (!this.photoOfTheDay || this.photoOfTheDay.date !== moment().format('YYYY-MM-DD') ) {
      await this.fetchPhotoOfTheDay();
    }
  }
};
</script>