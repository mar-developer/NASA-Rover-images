<template>
  <page-wrapper>
    <menu-container>
      <menu-wrapper>
        <router-link tag="a" :to="{ name: 'homePage' }">Home</router-link>
        <router-link tag="a" :to="{ name: 'marsYesterday' }"
          >Mars Yesterday</router-link
        >
        <router-link tag="a" :to="{ name: 'marsToday' }"
          >Mars Today</router-link
        >
      </menu-wrapper>
    </menu-container>
    <page-title>Welcome! Check out Nasa's photo of the day</page-title>
    <loading-container v-if="isDailyLoading || !todayImage">
      <loader />
    </loading-container>
    <card-container v-else>
      <card-wrapper>
        <card-grid>
          <card-title>
            {{ todayImage.title }}
          </card-title>
          <card-image :src="todayImage.url" />
          <card-description>
            {{ todayImage.explanation }}
          </card-description>
        </card-grid>
      </card-wrapper>
    </card-container>
  </page-wrapper>
</template>

<script>
import axios from "axios"
import styled from "vue-styled-components"
import { mapGetters, mapMutations } from "vuex"

const MenuContainer = styled.div`
  background-color: ${(props) => props.theme.colors.grey2};
  padding: 20px;
`

const MenuWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto 1fr;
  gap: 20px;

  a {
    color: ${(props) => props.theme.colors.blue};
    text-decoration: none;
  }

  a:not(:last-child) {
    border-right: 1px solid ${(props) => props.theme.colors.white};
    padding-right: 20px;
  }
`

const PageWrapper = styled.div``

const PageTitle = styled.div`
  font-size: 24px;
  text-align: center;
  margin: 16px 0;
`

const CardContainer = styled.div`
  display: grid;
  grid-gap: 30px;
  align-items: center;
  justify-items: center;
  margin-top: 30px;
  padding: 20px;
`

const CardWrapper = styled.div`
  box-shadow: 0 2px 7px 3px rgba(0, 0, 0, 0.25);
  max-width: 500px;
  margin: 0 auto;
  border-radius: 4px;
  height: 100%;
  min-width: 300px;
`

const CardGrid = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-gap: 16px;
  align-items: center;
  justify-items: center;
`

const CardTitle = styled.div`
padding: 20px
  font-size: 18px;
  text-align: center;
  border-bottom: 1px solid ${(props) => props.theme.colors.grey3};
`

const CardImage = styled.img`
  max-width: 100%;
`

const CardDescription = styled.div`
  font-size: 14px;
  padding: 14px;
`

const LoadingContainer = styled.div`
  width: 100%;
`
const Loader = styled.div`
  border: 6px solid ${(props) => props.theme.colors.grey3};
  border-top: 6px solid ${(props) => props.theme.colors.blue};
  border-radius: 100%;
  width: 30px;
  height: 30px;
  animation: spin 2s linear infinite;
  margin: 0 auto;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export default {
  name: "home-page",
  components: {
    PageWrapper,
    MenuContainer,
    MenuWrapper,
    PageTitle,
    CardContainer,
    CardWrapper,
    Loader,
    LoadingContainer,
    CardTitle,
    CardImage,
    CardDescription,
    CardGrid,
  },
  data() {
    return {
      todayImage: null,
    }
  },
  methods: {
    ...mapMutations({
      setIsDailyLoading: "mutate_isDailyImageLoading",
    }),
  },
  computed: {
    ...mapGetters({
      isDailyLoading: "getIsDailyImageLoading",
    }),
  },
  mounted() {
    this.setIsDailyLoading(true)
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=jfhpZIbfdDVGKSNbIzVmeXUVt4kcaibRCKoj4iuw"
      )
      .then((res) => {
        this.todayImage = res.data
        this.setIsDailyLoading(false)
      })
  },
}
</script>
