const app = Vue.createApp({
  data() {
    return {
      images: [
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/blue-romantic-collage-landscape-poster-design-template-38bf62795f5e1926e1c4e73310c33a2a_screen.jpg?ts=1561451098",
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/blue-wedding-anniversary-landscape-poster-design-template-f897ed4ceead6ec7054a7a0a50c43511_screen.jpg?ts=1623323220",
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/blue-fundraising-landscape-poster-design-template-50100f5a768d7c85a8073d79181e00a8_screen.jpg?ts=1561427338",
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/charity-and-donation-poster-template-design-df22f96f559dcd2dbadd12555b474144_screen.jpg?ts=1561425988",
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/pink-charity-fundraiser-for-cancer-poster-design-template-508e3864bdf28cf4a7b1c524bad8a3e1_screen.jpg?ts=1561431149",
      ],
      slideIndex: 0,
      currenimage: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/blue-romantic-collage-landscape-poster-design-template-38bf62795f5e1926e1c4e73310c33a2a_screen.jpg?ts=1561451098"
    };
  },
  methods: {
    NextSlide() {
      this.slideIndex++;
      if(this.slideIndex > this.images.length-1) {
        this.slideIndex = 0;
      }
      if(this.slideIndex < 0){
        this.slideIndex = this.images.length-1
      }
      this.currenimage = this.images[this.slideIndex]
    },
    PrevSlide() {
      this.slideIndex--;
      if(this.slideIndex > this.images.length-1) {
        this.slideIndex = 0;
      }
      if(this.slideIndex < 0){
        this.slideIndex = this.images.length-1
      }
      this.currenimage = this.images[this.slideIndex]
    },
    Change(n){
      this.slideIndex = n;
      this.currenimage = this.images[this.slideIndex]
    }
  },
});
app.mount("#slide");
