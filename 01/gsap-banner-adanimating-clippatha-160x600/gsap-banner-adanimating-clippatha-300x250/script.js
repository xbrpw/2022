function animateAd() {
  var tl = new TimelineMax({repeat:-1, paused: false, yoyo: false});
  tAnim = 0.7,

  tl.to('#clp_1 polygon', tAnim, {
    attr:{points:"425,0 300,0 300,250 300,250"},
    ease:Power3.easeIn
  }, '+=' + tAnim)
  .to('#clp_2 polygon', tAnim, {
    attr:{points:"425,0 425,0 300,250 300,250"},
    ease:Power3.easeIn
  }, '-=' + tAnim/(1.5))
  .to('#clp_3 polygon', tAnim, {
    attr:{points:"0,0 225,0 75,250 -125,250"},
    ease:Power3.easeOut
  }, '-=' + tAnim/6)
  .staggerFromTo('.txt_1', tAnim, {
    opacity: 0,
    y: 10
  }, {
    opacity: 1,
    y: 0
  }, tAnim/3, '-=' + tAnim/2)
  .to('#clp_3 polygon', tAnim, {
    attr:{points:"0,0 425,0 300,250 -125,250"},
    ease:Power3.easeIn
  }, '+=' + tAnim*1.5)
  .set('.txt_1', {
    opacity: 0
  })
  .to('#clp_3 polygon', tAnim, {
    attr:{points:"425,0 425,0 300,250 300,250"},
    ease:Power3.easeOut
  })
  .to('#clp_4 polygon', tAnim, {
    attr:{points:"0,0 225,0 75,250 -125,250"},
    ease:Power3.easeOut
  }, '-=' + tAnim)
  .staggerFromTo('.txt_2', tAnim, {
    opacity: 0,
    y: 10
  }, {
    opacity: 1,
    y: 0
  }, tAnim/3, '-=' + tAnim/2)
  .to('#clp_4 polygon', tAnim, {
    attr:{points:"0,0 425,0 300,250 -125,250"},
    ease:Power3.easeIn
  }, '+=' + tAnim*2)
  .set('.txt_2', {
    opacity: 0
  })
  .set('#logo_2', {
    opacity: 0
  })
  .set('#logo_3', {
    rotation: 180,
    y: 1,
    x: 19,
    transformOrigin: "50% 100%"
  })
  .to('#clp_4 polygon', tAnim, {
    attr:{points:"425,0 425,0 300,250 300,250"},
    ease:Power3.easeOut
  })
  .to('#logo', tAnim/2, {
    opacity: 1
  }, '-=' + tAnim/2)
  .to('#logo_3', tAnim/2, {
    rotation: 0,
    y: 0,
    x: 19,
    transformOrigin: "50% 100%",
    ease:Power3.easeIn
  }, '-=' + tAnim/1.5)
  .set('#logo_2', {
    opacity: 1
  })
  .to('#logo_3', tAnim/2, {
    x: 0,
    transformOrigin: "50% 100%",
    ease:Power3.easeOut
  })
  .to('#logo_clp polygon', tAnim*1.6, {
    attr:{points:"0,0 300,0 300,250 0,250"},
    ease:Power3.easeOut
  }, '-=' + tAnim)
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
  .set('#clp_1 polygon', {
    attr:{points:"225,0 300,0 300,0 225,0"},
    ease:Power3.easeIn
  })
  .set('#clp_2 polygon', {
    attr:{points:"0,250 75,250 75,250 0,250"},
    ease:Power3.easeIn
  })
  .to('#clp_1 polygon', tAnim, {
      attr:{points:"225,0 300,0 300,250 75,250"},
      ease:Power3.easeInOut
  }, '+=' + tAnim*5)
  .to('#clp_2 polygon', tAnim, {
    attr:{points:"0,0 225,0 75,250 0,250"},
    ease:Power3.easeInOut
  }, '-=' + tAnim);
}
animateAd();