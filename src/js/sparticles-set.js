// 背景動畫

let colorType = {
  type: "multi"
};

let colors = {
  color1: "rgba(255,255,255,1)",
  color2: "rgba(233,239,250,1)",
  color3: "rgba(222,241,250,1)",
  color4: "rgba(178,209,219,1)",
  color5: "rgba(135,143,145,1)"
};

let options = {
  alphaSpeed: 2,
  alphaVariance: 1,
  color: [colors.color1, colors.color2, colors.color3, colors.color4],
  composition: "source-over",
  count: 80,
  direction: 160,
  drift: 2,
  glow: 50,
  imageUrl: [
    "https://assets.codepen.io/13471/snowflake.png",
    "https://assets.codepen.io/13471/snowflake(1).png",
    "https://assets.codepen.io/13471/snowflake(2).png",
    "https://assets.codepen.io/13471/snowflake(3).png",
    "https://assets.codepen.io/13471/snowflake(4).png",
    "https://assets.codepen.io/13471/snowflake(5).png",
    "https://assets.codepen.io/13471/snowflake(6).png",
    "https://assets.codepen.io/13471/snowflake(7).png",
    "https://assets.codepen.io/13471/snowflake(8).png",
  ],
  maxAlpha: 2,
  maxSize: 20,
  minAlpha: -0.2,
  minSize: 3,
  parallax: 2,
  rotation: 0.5,
  shape: ["diamond"], // 動畫
  speed: 2.5,
  style: "fill",
  twinkle: false,
  xVariance: 20,
  yVariance: 20,
};

window.onload = function() {
  initStats();
  initSparticles();
  initGui();
}

window.initSparticles = function() {
  var $main = document.querySelector("main");
  window.mySparticles = new Sparticles($main,options);
};

window.initStats = function() {
  var stats = new Stats();
  stats.domElement.classList.add("stats");
  // document.body.appendChild(stats.domElement);
  function statsDisplay() {
    stats.begin();
    stats.end();
    requestAnimationFrame(statsDisplay);
  }
  requestAnimationFrame(statsDisplay);
};

window.initGui = function() {
  const s = window.mySparticles;
  const shapes = ["circle", "square", "triangle", "diamond", "line", "image"];
  const styles = ["fill", "stroke", "both"];
  const colorOptions = ["single", "multi", "rainbow"];
  const composites = [
    "source-over",
    "source-in",
    "source-out",
    "source-atop",
    "destination-over",
    "destination-in",
    "destination-out",
    "destination-atop",
    "lighter",
    "copy",
    "xor",
    "multiply",
    "screen",
    "overlay",
    "darken",
    "color-dodge",
    "color-burn",
    "hard-light",
    "soft-light",
    "difference",
    "exclusion",
    "hue",
    "saturation",
    "color",
    "luminosity"
  ];
  const rerender = () => {
    window.mySparticles.destroy();
    window.initSparticles();
  };
  var rerenderColors = function(v) {
    if (colorType.type === "rainbow") {
      options.color = "rainbow";
    } else if (colorType.type === "single") {
      options.color = colors.color1;
    } else {
      options.color = Object.keys(colors).map(i => {
        return colors[i];
      });
    }
    rerender();
  };
};