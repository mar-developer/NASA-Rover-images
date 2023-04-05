<template>
    <div>
        <loading-container>
            <loader />
        </loading-container>
    </div>
</template>
<script>
import {
    LoadingContainer,
    Loader
} from "./styles.js";

export default {
  name: "LoaderSpinner",
  components: {
    LoadingContainer,
    Loader
  },
  data() {
    return {};
  },
};
</script>
