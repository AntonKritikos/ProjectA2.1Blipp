var blipp = require('blippar').blipp;
scene = blipp.addScene();

// Global variables
var mW = blipp.getMarker().getWidth();
var mH = blipp.getMarker().getHeight();
var sW = blipp.getScreenWidth() * 1.003;
var sH = blipp.getScreenHeight() * 1.003;

// Scene creation
scene.onCreate = function() {

  var bodyLayer = scene.addSprite().setTexture('robot.png').setScale(680, 910, 0).setTranslation(0, 0, 0),
        textLayer = scene.addSprite().setTexture('text_front.png').setScale(360, 370, 0).setTranslation(0, 0, 50),
          websiteButton = scene.addSprite().setTexture('website_button.jpg').setScale(320, 60, 0).setTranslation(0, 0, 70),
          huButton = scene.addSprite().setTexture('hu_button.jpg').setScale(320, 60, 0).setTranslation(0, 0, 70),
        blueLayer = scene.addSprite().setTexture('leraar_techniek.png').setScale(320, 110, 0).setTranslation(0, 0, 100),
        redLayer = scene.addSprite().setTexture('leid_op.png').setScale(350, 230, 0).setTranslation(0, 0, -50),
		webURL = "http://lisette.work/campagne_a/";

  bodyLayer.onCreate = function(time) {
    this.animationStartT = [0, 0, 0];
    this.animationEndT = [0, 0, 50];
    this.animationStartO = 0;
    this.animationEndO = 1;
    this.animationStartTime = -1;
    this.animationDuration = 500;
  }
  
  textLayer.onCreate = function(time) {
    this.animationStartT = [155, -65, 0];
    this.animationEndT = [155, -65, 80];
    this.animationStartO = 0;
    this.animationEndO = 1;
    this.animationStartTime = -1;
    this.animationDuration = 500;
  }

  blueLayer.onCreate = function(time) {
    this.animationStartT = [-155, -120, 0];
    this.animationEndT = [-155, -120, 110];
    this.animationStartO = 0;
    this.animationEndO = 1;
    this.animationStartTime = -1;
    this.animationDuration = 500;
  }
  
  redLayer.onCreate = function(time) {
    this.animationStartT = [180, 320, 0];
    this.animationEndT = [180, 320, 70];
    this.animationStartO = 0;
    this.animationEndO = 1;
    this.animationStartTime = -1;
    this.animationDuration = 500;
  }

  huButton.onCreate = function(time) {
    this.animationStartT = [155, -185, 0];
    this.animationEndT = [155, -185, 100];
    this.animationStartO = 0;
    this.animationEndO = 1;
    this.animationStartTime = -1;
    this.animationDuration = 500;
  }

  websiteButton.onCreate = function(time) {
    this.animationStartT = [155, -115, 0];
    this.animationEndT = [155, -115, 100];
    this.animationStartO = 0;
    this.animationEndO = 1;
    this.animationStartTime = -1;
    this.animationDuration = 500;
  }


  textLayer.onUpdate = function(time) {
    animateObj(this, time);
  }

  bodyLayer.onUpdate = function(time) {
    animateObj(this, time);
  }

  huButton.onUpdate = function(time) {
    animateObj(this, time);
  }

  websiteButton.onUpdate = function(time) {
    animateObj(this, time);
  }
  
  blueLayer.onUpdate = function(time) {
    animateObj(this, time);
  }
  
  redLayer.onUpdate = function(time) {
    animateObj(this, time);
  }
  
	huButton.on('touchEnd',function() {
		blipp.openURL("https://www.studiekeuze.hu.nl/opleidingen/Leraar-Techniek-tweedegraads");
	});
	
	websiteButton.on('touchEnd',function() {
		blipp.openURL(webURL);
	});
}

// User functions
function animateObj(node, time) {
  if (node.animationStartTime == -1) {
    node.animationStartTime = time;
  }
  if ((time - node.animationStartTime) >= node.animationDuration) {
    return;
  }

  var interp = (time - node.animationStartTime) / node.animationDuration;

  var newTranslation = node.getTranslation();
  for (var i = 0; i < node.animationStartT.length; i++) {
    newTranslation[i] = ((node.animationEndT[i] - node.animationStartT[i]) * interp) + node.animationStartT[i];
  }


  var newAlpha = node.getAlpha();
    newAlpha = ((node.animationEndO - node.animationStartO) * interp) + node.animationStartO;

  node.setTranslation(newTranslation);
  node.setAlpha(newAlpha);
  
  var timeout = setTimeout(function(){
      node.setAlpha(node.animationEndO);
  },500);
}

scene.onShow = function() {
  console.log("Marker: " + blipp.getMarker().getWidth() + "*" + blipp.getMarker().getHeight() + " px");
  console.log("Screen: " + blipp.getScreenWidth() + "*" + blipp.getScreenHeight() + " px");
}
