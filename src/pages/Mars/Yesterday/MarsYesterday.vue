<template>
  <page-wrapper>
    <page-title>Mars photos yesterday!</page-title>
    <Loader v-if="IsMarsImageLoading || !MarsImages" />
    <image-list-wrapper v-else>
      <Card
        v-for="image in MarsImages.photos" :key="image.id"
        :title="image.camera.full_name"
        :img-src="image.img_src"
        :name="image.rover.name"
      />
    </image-list-wrapper>

    <page-title>Another look at the  photo of the day!</page-title>
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
import moment from "moment";
import Loader from "@/components/Loader/Loader";
import Card from "@/components/Card/Card";

import {
  PageTitle,
  PageWrapper,
  ImageListWrapper
} from "./styles.js";

export default {
  name: "DashboardPage",
  components: {
    ImageListWrapper,
    PageWrapper,
    PageTitle,
    Card,
    Loader,
  },
  methods: {
    ...mapActions('Dashboard', ['fetchPhotoOfTheDay']),
    ...mapActions('Mars', ['fetchMarsImages'])
  },
  computed: {
    ...mapGetters({
      isDailyImageLoading: 'Dashboard/getIsDailyImageLoading',
      IsMarsImageLoading: 'Mars/getIsMarsImageLoading',
      photoOfTheDay: "Dashboard/getPhotoOfTheDay",
      MarsImages: "Mars/getMarsImages",
    }),
  },
  async mounted() {
    //i used the date a month ago because the api doesn't have images for yesterday
    const yesterdayDate = moment().subtract({days: 1, months: 1}).format("YYYY-MM-DD");

    await this.fetchMarsImages({date: yesterdayDate});

    if (!this.photoOfTheDay || this.photoOfTheDay.date !== moment().format('YYYY-MM-DD') ) {
      await this.fetchPhotoOfTheDay();
    }
  }
};
</script>