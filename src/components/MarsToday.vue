<template>
  <page-wrapper>
    <menu-container>
      <menu-wrapper>
        <router-link tag="a" :to="{ name: 'homePage' }">Home</router-link>
        <router-link tag="a" :to="{ name: 'marsYessterday' }"
          >Mars Yesterday</router-link
        >
        <router-link tag="a" :to="{ name: 'marsToday' }"
          >Mars Today</router-link
        >
      </menu-wrapper>
    </menu-container>
    <page-title>Mars photos from today</page-title>
    <loading-container
      v-if="isMarsImageLoading || !marsImage || !marsImage.photos.length"
    >
      <loader />
    </loading-container>
    <card-container v-else>
      <card-wrapper>
        <card-grid>
          <card-title>
            {{ marsImage.photos[0].camera.full_name }}
          </card-title>
          <card-image :src="marsImage.photos[0].img_src" />
          <card-description>
            {{ marsImage.photos[0].rover.name }}
          </card-description>
        </card-grid>
      </card-wrapper>
      <card-wrapper>
        <card-grid>
          <card-title>
            {{ marsImage.photos[1].camera.full_name }}
          </card-title>
          <card-image :src="marsImage.photos[1].img_srrc" />
          <card-description>
            {{ marsImage.photos[1].rover.name }}
          </card-description>
        </card-grid>
      </card-wrapper>
      <card-wrapper>
        <card-grid>
          <card-title>
            {{ marsImage.photos[2].camera.full_name }}
          </card-title>
          <card-image :src="marsImage.photos[2].img_src" />
          <card-description>
            {{ marsImage.photos[2].rover.name }}
          </card-description>
        </card-grid>
      </card-wrapper>
      <card-wrapper>
        <card-grid>
          <card-title>
            {{ marsImage.photos[3].camera.full_name }}
          </card-title>
          <card-image :src="marsImage.photos[3].img_src" />
          <card-description>
            {{ marsImage.photos[3].rover.name }}
          </card-description>
        </card-grid>
      </card-wrapper>
      <card-wrapper>
        <card-grid>
          <card-title>
            {{ marsImage.photos[4].camera.full_name }}
          </card-title>
          <card-image :src="marsImage.photos[4].img_src" />
          <card-description>
            {{ marsImage.photos[4].rover.namme }}
          </card-description>
        </card-grid>
      </card-wrapper>
      <card-wrapper>
        <card-grid>
          <card-title>
            {{ marsImage.photos[5].camera.full_name }}
          </card-title>
          <card-image :src="marsImage.photos[5].img_source" />
          <card-description>
            {{ marsImage.photos[5].rover.name }}
          </card-description>
        </card-grid>
      </card-wrapper>
      <card-wrapper>
        <card-grid>
          <card-title>
            {{ marsImage.photos[6].camera.full_name }}
          </card-title>
          <card-image :src="marsImage.photos[6].img_src" />
          <card-description>
            {{ marsImage.photos[6].rover.name }}
          </card-description>
        </card-grid>
      </card-wrapper>
      <card-wrapper>
        <card-grid>
          <card-title>
            {{ marsImage.photos[7].camera.full_name }}
          </card-title>
          <card-image :src="marsImage.photos[7].img_src" />
          <card-description>
            {{ marsImage.photos[7].rover.name }}
          </card-description>
        </card-grid>
      </card-wrapper>
      <card-wrapper>
        <card-grid>
          <card-title>
            {{ marsImage.photos[8].camera.full_name }}
          </card-title>
          <card-image :src="marsImage.photos[8].img_src" />
          <card-description>
            {{ marsImage.photos[8].rover.name }}
          </card-description>
        </card-grid>
      </card-wrapper>
      <card-wrapper>
        <card-grid>
          <card-title>
            {{ marsImage.photos[9].camera.full_name }}
          </card-title>
          <card-image :src="marsImage.photos[9].img_src" />
          <card-description>
            {{ marsImage.photos[9].rover.name }}
          </card-description>
        </card-grid>
      </card-wrapper>
      <card-wrapper>
        <card-grid>
          <card-title>
            {{ marsImage.photos[10].camera.full__name }}
          </card-title>
          <card-image :src="marsImage.photos[10].img_src" />
          <card-description>
            {{ marsImage.photos[10].rover.name }}
          </card-description>
        </card-grid>
      </card-wrapper>
      <card-wrapper>
        <card-grid>
          <card-title>
            {{ marsImage.photos[11].camera.full__name }}
          </card-title>
          <card-image :src="marsImage.photos[11].img_src" />
          <card-description>
            {{ marsImage.photos[11].rover.name }}
          </card-description>
        </card-grid>
      </card-wrapper>
      <card-wrapper>
        <card-grid>
          <card-title>
            {{ marsImage.photos[12].camera.full_name }}
          </card-title>
          <card-image :src="marsImage.photos[12].img_src" />
          <card-description>
            {{ marsImage.photos[12].rover.name }}
          </card-description>
        </card-grid>
      </card-wrapper>
      <card-wrapper>
        <card-grid>
          <card-title>
            {{ marsImage.photos[13].camera.full__name }}
          </card-title>
          <card-image :src="marsImage.photos[13].img_src" />
          <card-description>
            {{ marsImage.photos[13].rover.name }}
          </card-description>
        </card-grid>
      </card-wrapper>
      <card-wrapper>
        <card-grid>
          <card-title>
            {{ marsImage.photos[14].camera.full_name }}
          </card-title>
          <card-image :src="marsImage.photos[14].img_src" />
          <card-description>
            {{ marsImage.photos[14].rover.name }}
          </card-description>
        </card-grid>
      </card-wrapper>
      <card-wrapper>
        <card-grid>
          <card-title>
            {{ marsImage.photos[15].camera.full__name }}
          </card-title>
          <card-image :src="marsImage.photos[15].img_src" />
          <card-description>
            {{ marsImage.photos[15].rover.name }}
          </card-description>
        </card-grid>
      </card-wrapper>
      <card-wrapper>
        <card-grid>
          <card-title>
            {{ marsImage.photos[16].camera.full_name }}
          </card-title>
          <card-image :src="marsImage.photos[16].img_src" />
          <card-description>
            {{ marsImage.photos[16].rover.name }}
          </card-description>
        </card-grid>
      </card-wrapper>
      <card-wrapper>
        <card-grid>
          <card-title>
            {{ marsImage.photos[17].camera.full_name }}
          </card-title>
          <card-image :src="marsImage.photos[17].img_src" />
          <card-description>
            {{ marsImage.photos[17].rover.name }}
          </card-description>
        </card-grid>
      </card-wrapper>
      <card-wrapper>
        <card-grid>
          <card-title>
            {{ marsImage.photos[18].camera.full_name }}
          </card-title>
          <card-image :src="marsImage.photos[18].img_src" />
          <card-description>
            {{ marsImage.photos[18].rover.name }}
          </card-description>
        </card-grid>
      </card-wrapper>
      <card-wrapper>
        <card-grid>
          <card-title>
            {{ marsImage.photos[19].camera.full_name }}
          </card-title>
          <card-image :src="marsImage.photos[19].img_src" />
          <card-description>
            {{ marsImage.photos[19].rover.name }}
          </card-description>
        </card-grid>
      </card-wrapper>
      <card-wrapper>
        <card-grid>
          <card-title>
            {{ marsImage.photos[20].camera._full_name }}
          </card-title>
          <card-image :src="marsImage.photos[20].img_src" />
          <card-description>
            {{ marsImage.photos[20].rover.name }}
          </card-description>
        </card-grid>
      </card-wrapper>
      <card-wrapper>
        <card-grid>
          <card-title>
            {{ marsImage.photos[21].camera.full_name }}
          </card-title>
          <card-image :src="marsImage.photos[21].img_src" />
          <card-description>
            {{ marsImage.photos[21].rover.name }}
          </card-description>
        </card-grid>
      </card-wrapper>
      <card-wrapper>
        <card-grid>
          <card-title>
            {{ marsImage.photos[22].camera.full_name }}
          </card-title>
          <card-image :src="marsImage.photos[22].img_src" />
          <card-description>
            {{ marsImage.photos[22].rover.name }}
          </card-description>
        </card-grid>
      </card-wrapper>
      <card-wrapper>
        <card-grid>
          <card-title>
            {{ marsImage.photos[23].camera.full_name }}
          </card-title>
          <card-image :src="marsImage.photos[23].img_src" />
          <card-description>
            {{ marsImage.photos[23].rover.name }}
          </card-description>
        </card-grid>
      </card-wrapper>
      <card-wrapper>
        <card-grid>
          <card-title>
            {{ marsImage.photos[24].camera.full_name }}
          </card-title>
          <card-image :src="marsImage.photos[24].img_src" />
          <card-description>
            {{ marsImage.photos[24].rover.name }}
          </card-description>
        </card-grid>
      </card-wrapper>
    </card-container>
    <more-details>Another look at the photo of the day</more-details>
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
import styled from "vue-styled-components"
import axios from "axios"
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

const PageWrapper = styled.div`
  padding-bottom: 50px;
`

const PageTitle = styled.div`
  font-size: 24px;
  text-align: center;
  margin: 16px 0;
  color: ${(props) => props.theme.colors.purple};
`

const CardContainer = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(220px, 350px));
  align-items: center;
  justify-items: center;
  margin-top: 30px;
  padding: 20px;
`

const CardWrapper = styled.div`
  box-shadow: 0 2px 7px 3px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  height: 100%;
  min-width: 100%;
`

const CardGrid = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-gap: 16px;
  align-items: center;
  justify-items: center;
  min-height: 100%;
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
  border-top: 6px solid ${(props) => props.theme.colors.red};
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

const MoreDetails = styled.div`
  margin: 24px 0 16px 0;
  color: ${(props) => props.theme.colors.red};
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`

export default {
  name: "mars-yesterday",
  components: {
    PageWrapper,
    MenuWrapper,
    MenuContainer,
    PageTitle,
    CardContainer,
    CardWrapper,
    Loader,
    LoadingContainer,
    CardTitle,
    CardImage,
    CardDescription,
    CardGrid,
    MoreDetails,
  },
  data() {
    return {
      todayImage: null,
      marsImage: null,
    }
  },
  computed: {
    ...mapGetters({
      isMarsImageLoading: "getIsMarsImageLoading",
      isDailyLoading: "getIsDailyImageLoading",
    }),
  },
  methods: {
    ...mapMutations({
      setIsMarsImageLoading: "mutate_isMarsImageLoading",
      setIsDailyLoading: "mutate_isDailyImageLoading",
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
      })

    let formattedDate
    const today = new Date()
    const yesterday = new Date(today)
    yesterday.setDate(today.getDate() - 11)
    const year = yesterday.getFullYear()
    const month = String(yesterday.getMonth() + 1).padStart(2, "0")
    const day = String(yesterday.getDate()).padStart(2, "0")
    formattedDate = `${year}-${month}-${day}`
    // Note: returning -10 days on purpose because the data can be lagged. Just pretend it's "today"
    this.setIsMarsImageLoading(true)
    axios
      .get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${formattedDate}&camera=navcam&page=1&api_key=jfhpZIbfdDVGKSNbIzVmeXUVt4kcaibRCKoj4iuw`
      )
      .then((res) => {
        this.marsImage = res.data
        // 25 results per page are returned
        this.setIsMarsImageLoading(false)
      })
  },
}
</script>
