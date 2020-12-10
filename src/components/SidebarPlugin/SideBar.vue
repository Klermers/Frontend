<template>
  <div class="sidebar"
       :data="backgroundColor">
    <!--
            Tip 1: you can change the color of the sidebar's background using: data-background-color="white | black | darkblue"
            Tip 2: you can change the color of the active button using the data-active-color="primary | info | success | warning | danger"
        -->
    <!-- -->
    <div class="sidebar-wrapper" id="style-3">
      <div class="logo">
        <a class="simple-text">
          {{title}}
        </a>
      </div>
      <slot>
      </slot>
      <ul class="nav">
      </ul>
      <slot>
          <sidebar>
            <div class="btn-group">
              <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Choose Prediction data
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Separated link</a>
              </div>
            </div>
            <div class="btn-group">
              <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Prediction Length
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Separated link</a>
              </div>
            </div>
            <div>
              <button class="btn btn-secondary">
                Model Prediction
              </button>
            </div>
        
          </sidebar>
      </slot>
    </div>
  </div>
  
</template>
<script>
  export default {
    props: {
      title: {
        type: String,
        default: "Chart Prediction Settings"
      },
      backgroundColor: {
        type: String,
        default: "vue"
      },
      activeColor: {
        type: String,
        default: "success",
        validator: value => {
          let acceptedValues = [
            "primary",
            "info",
            "success",
            "warning",
            "danger"
          ];
          return acceptedValues.indexOf(value) !== -1;
        }
      },
      autoClose: {
        type: Boolean,
        default: true
      }
    },
    provide() {
      return {
        autoClose: this.autoClose,
        addLink: this.addLink,
        removeLink: this.removeLink
      };
    },
    computed: {
      /**
       * Styles to animate the arrow near the current active sidebar link
       * @returns {{transform: string}}
       */
      arrowMovePx() {
        return this.linkHeight * this.activeLinkIndex;
      },
      shortTitle() {
        return this.title.split(' ')
          .map(word => word.charAt(0))
          .join('').toUpperCase();
      }
    },
    data() {
      return {
        linkHeight: 65,
        activeLinkIndex: 0,
        windowWidth: 0,
        isWindows: false,
        hasAutoHeight: false,
        links: []
      };
    },
    methods: {
      findActiveLink() {
        this.links.forEach((link, index) => {
          if (link.isActive()) {
            this.activeLinkIndex = index;
          }
        });
      },
    },
    mounted() {
      this.$watch("$route", this.findActiveLink, {
        immediate: true
      });
    }
  };
</script>
