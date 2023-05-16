function animateAd() {
  var tl = new TimelineMax({repeat:-1, paused: false, yoyo: false});
  tAnim = 0.7,

  tl.staggerTo('.txt_1', tAnim/2, {
    opacity: 0,
    y: -10
  }, tAnim/6, '+=' + tAnim*2)
  .set('.txt_1', {
    y: 10
  })
  .to('#clp_1 polygon', tAnim, {
    attr:{points:"460,0 460,0 160,400 160,400"},
    ease:Power3.easeIn
  }, '-=' + tAnim)
  .to('#clp_2 polygon', tAnim, {
    attr:{points:"0,0 460,0 160,400 -300,400"},
    ease:Power3.easeOut
  }, '-=' + tAnim/6)
  .set('#clp_1 polygon', {
    attr:{points:"0,0 0,0 -300,400 -300,400"}
  })
  .staggerFromTo('.txt_2', tAnim, {
    opacity: 0,
    y: 10
  }, {
    opacity: 1,
    y: 0
  }, tAnim/3, '-=' + tAnim/2)
  .staggerTo('.txt_2', tAnim/2, {
    opacity: 0,
    y: -10
  }, tAnim/6, '+=' + tAnim*2.5)
  .to('#clp_2 polygon', tAnim, {
    attr:{points:"460,0 460,0 160,400 160,400"},
    ease:Power3.easeIn
  }, '-=' + tAnim)
  .to('#clp_3 polygon', tAnim, {
    attr:{points:"0,0 460,0 160,400 -300,400"},
    ease:Power3.easeOut
  }, '-=' + tAnim/6)
  .fromTo('#ad_cta', tAnim/3, {
    opacity: 0,
    transformOrigin: "50% 50%",
    scale: 0.001
  }, {
    opacity: 1,
    transformOrigin: "50% 50%",
    scale: 1,
    ease: Back.easeOut.config(1.7)
  }, "-=" + tAnim/2)
  .to('#ad_cta', tAnim/2, {
    opacity: 0,
    y: -10
  }, '+=' + tAnim*3)
  .to('#clp_3 polygon', tAnim, {
    attr:{points:"460,0 460,0 160,400 160,400"},
    ease:Power3.easeIn
  }, '-=' + tAnim)
  .to('#clp_1 polygon', tAnim, {
    attr:{points:"0,0 460,0 160,400 -300,400"},
    ease:Power3.easeOut
  }, '-=' + tAnim/6)
  .staggerTo('.txt_1', tAnim, {
    opacity: 1,
    y: 0
  }, tAnim/3, '-=' + tAnim/2);
}
animateAd();