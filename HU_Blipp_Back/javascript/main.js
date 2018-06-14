var blipp = require('blippar').blipp;
scene = blipp.addScene();

// Global variables
var mW = blipp.getMarker().getWidth();
var mH = blipp.getMarker().getHeight();
var sW = blipp.getScreenWidth() * 1.003;
var sH = blipp.getScreenHeight() * 1.003;

// Scene creation
scene.onCreate = function() {

  var imgButton1 = scene.addSprite().setTexture('button_img_1.png').setScale(180, 180, 0).setTranslation(157.5, 270, 1),
		buttonText1 = scene.addSprite().setTexture('button_text_1.jpg').setScale(340, 60, 0).setTranslation( -75, 270, 0),
        textLayer1 = scene.addSprite().setTexture('text_layer_1.jpg').setScale(369, 567, 0).setTranslation( -150, -63, 100).setHidden(true),
          videoButton1 = scene.addSprite().setTexture('button_video_1.jpg').setScale(330, 55, 0).setTranslation(-150, -235, 110).setHidden(true),
          websiteButton1 = scene.addSprite().setTexture('button_website_1.jpg').setScale(330, 55, 0).setTranslation(-150, -300, 110).setHidden(true),
        closeButton1 = scene.addSprite().setTexture('close_button.png').setScale(60, 60, 0).setTranslation(-317, 240.5,120).setHidden(true),
      imgButton2 = scene.addSprite().setTexture('button_img_2.png').setScale(180, 180, 0).setTranslation(157.5, 80, 1),
		buttonText2 = scene.addSprite().setTexture('button_text_2.jpg').setScale(340, 60, 0).setTranslation( -75, 80, 0),
        textLayer2 = scene.addSprite().setTexture('text_layer_2.jpg').setScale(369, 537, 0).setTranslation( -150, -243, 101).setHidden(true),
          videoButton2 = scene.addSprite().setTexture('button_video_2.jpg').setScale(330, 55, 0).setTranslation(-150, -395, 111).setHidden(true),
          websiteButton2 = scene.addSprite().setTexture('button_website_1.jpg').setScale(330, 55, 0).setTranslation(-150, -460, 111).setHidden(true),
        closeButton2 = scene.addSprite().setTexture('close_button.png').setScale(60, 60, 0).setTranslation(-317, 51,120).setHidden(true),
      imgButton3 = scene.addSprite().setTexture('button_img_3.png').setScale(180, 180, 0).setTranslation(157.5, -107.5, 1),
		buttonText3 = scene.addSprite().setTexture('button_text_3.jpg').setScale(340, 60, 0).setTranslation( -75, -107.5, 0),
	  infoButton = scene.addSprite().setTexture('more_info.jpg').setScale(315, 120, 0).setTranslation((mW * 0.35), (mH - (mH * 1.45)), 0),
	  webURL = "http://lisette.work/campagne_a/";


  textLayer1.onCreate = function(time) {
    this.animationStartT = this.getTranslation();
    this.animationEndT = this.getTranslation();
    this.animationStartO = 0;
    this.animationEndO = 0;
  }

  closeButton1.onCreate = function(time) {
    this.animationStartT = this.getTranslation();
    this.animationEndT = this.getTranslation();
    this.animationStartO = 0;
    this.animationEndO = 0;
  }

  videoButton1.onCreate = function(time) {
    this.animationStartT = this.getTranslation();
    this.animationEndT = this.getTranslation();
    this.animationStartO = 0;
    this.animationEndO = 0;
  }

  websiteButton1.onCreate = function(time) {
    this.animationStartT = this.getTranslation();
    this.animationEndT = this.getTranslation();
    this.animationStartO = 0;
    this.animationEndO = 0;
  }
  
  textLayer2.onCreate = function(time) {
    this.animationStartT = this.getTranslation();
    this.animationEndT = this.getTranslation();
    this.animationStartO = 0;
    this.animationEndO = 0;
  }

  closeButton2.onCreate = function(time) {
    this.animationStartT = this.getTranslation();
    this.animationEndT = this.getTranslation();
    this.animationStartO = 0;
    this.animationEndO = 0;
  }

  videoButton2.onCreate = function(time) {
    this.animationStartT = this.getTranslation();
    this.animationEndT = this.getTranslation();
    this.animationStartO = 0;
    this.animationEndO = 0;
  }

  websiteButton2.onCreate = function(time) {
    this.animationStartT = this.getTranslation();
    this.animationEndT = this.getTranslation();
    this.animationStartO = 0;
    this.animationEndO = 0;
  }

  imgButton1.onCreate = function(time) {
    this.animationStartT = this.getTranslation();
    this.animationEndT = this.getTranslation();
    this.animationStartO = 1;
    this.animationEndO = 1;
    this.animationStartTime = -1;
    this.animationDuration = 500;
  }
  
  imgButton2.onCreate = function(time) {
    this.animationStartT = this.getTranslation();
    this.animationEndT = this.getTranslation();
    this.animationStartO = 1;
    this.animationEndO = 1;
    this.animationStartTime = -1;
    this.animationDuration = 500;
  }
  
  imgButton3.onCreate = function(time) {
    this.animationStartT = this.getTranslation();
    this.animationEndT = this.getTranslation();
    this.animationStartO = 1;
    this.animationEndO = 1;
    this.animationStartTime = -1;
    this.animationDuration = 500;
  }
  
  buttonText1.onCreate = function(time) {
    this.animationStartT = this.getTranslation();
    this.animationEndT = this.getTranslation();
    this.animationStartO = 1;
    this.animationEndO = 1;
    this.animationStartTime = -1;
    this.animationDuration = 500;
  }
  
  buttonText2.onCreate = function(time) {
    this.animationStartT = this.getTranslation();
    this.animationEndT = this.getTranslation();
    this.animationStartO = 1;
    this.animationEndO = 1;
    this.animationStartTime = -1;
    this.animationDuration = 500;
  }
  
  buttonText3.onCreate = function(time) {
    this.animationStartT = this.getTranslation();
    this.animationEndT = this.getTranslation();
    this.animationStartO = 1;
    this.animationEndO = 1;
    this.animationStartTime = -1;
    this.animationDuration = 500;
  }


  textLayer1.onUpdate = function(time) {
    animateObj(this, time);
  }
  

  closeButton1.onUpdate = function(time) {
    animateObj(this, time);
  }

  videoButton1.onUpdate = function(time) {
    animateObj(this, time);
  }

  websiteButton1.onUpdate = function(time) {
    animateObj(this, time);
  }
  
  textLayer2.onUpdate = function(time) {
    animateObj(this, time);
  }
  

  closeButton2.onUpdate = function(time) {
    animateObj(this, time);
  }

  videoButton2.onUpdate = function(time) {
    animateObj(this, time);
  }

  websiteButton2.onUpdate = function(time) {
    animateObj(this, time);
  }

  imgButton1.onUpdate = function(time) {
    animateObj(this, time);
  }
  
  imgButton2.onUpdate = function(time) {
    animateObj(this, time);
  }
  
  imgButton3.onUpdate = function(time) {
    animateObj(this, time);
  }
  
  buttonText1.onUpdate = function(time) {
    animateObj(this, time);
  }
  
  buttonText2.onUpdate = function(time) {
    animateObj(this, time);
  }
  
  buttonText3.onUpdate = function(time) {
    animateObj(this, time);
  }

  imgButton1.on('touchEnd', function() {
	  if (!textLayer2.getHidden()) {
		hide([textLayer2,closeButton2,videoButton2,websiteButton2]);
		imgButton2.animationStartT = [127.5, 50, 121];
		imgButton2.animationEndT = [157.5, 80, 1];
		imgButton2.animationStartTime = -1;
		imgButton2.animationDuration = 500;
		// button text
		buttonText2.animationStartT = [-120, 50, 120];
		buttonText2.animationEndT = [-75, 80, 0];
		buttonText2.animationStartTime = -1;
		buttonText2.animationDuration = 500;
		var timeout = setTimeout(function(){
		imgButton2.setTranslationZ(1);
		buttonText2.setTranslationZ(0);
	  },500);
	}
    if (textLayer1.getHidden()) {
      show([textLayer1,closeButton1,videoButton1,websiteButton1]);
      this.animationStartT = [157.5, 270, 1];
      this.animationEndT = [127.5, 240, 121];
      this.animationStartTime = -1;
      this.animationDuration = 500;
	  this.setTranslationZ(121);
	  // button text
	  buttonText1.animationStartT = [-75, 270, 0];
      buttonText1.animationEndT = [-120, 240, 120];
      buttonText1.animationStartTime = -1;
      buttonText1.animationDuration = 500;
	  var timeout = setTimeout(function(){
		imgButton1.setTranslationZ(121);
		buttonText1.setTranslationZ(120);
	  },500);
	  console.log(this.getTranslationZ());
    }
  });
  
  buttonText1.on('touchEnd',function() {
	  if (!textLayer2.getHidden()) {
		hide([textLayer2,closeButton2,videoButton2,websiteButton2]);
		imgButton2.animationStartT = [127.5, 50, 121];
		imgButton2.animationEndT = [157.5, 80, 1];
		imgButton2.animationStartTime = -1;
		imgButton2.animationDuration = 500;
		// button text
		buttonText2.animationStartT = [-120, 50, 120];
		buttonText2.animationEndT = [-75, 80, 0];
		buttonText2.animationStartTime = -1;
		buttonText2.animationDuration = 500;
		var timeout = setTimeout(function(){
		imgButton2.setTranslationZ(1);
		buttonText2.setTranslationZ(0);
	  },500);
	}
	  if (textLayer1.getHidden()) {
      show([textLayer1,closeButton1,videoButton1,websiteButton1]);
      imgButton1.animationStartT = [157.5, 270, 1];
      imgButton1.animationEndT = [127.5, 240, 121];
      imgButton1.animationStartTime = -1;
      imgButton1.animationDuration = 500;
	  // button text
	  buttonText1.animationStartT = [-75, 270, 0];
      buttonText1.animationEndT = [-120, 240, 120];
      buttonText1.animationStartTime = -1;
      buttonText1.animationDuration = 500;
	  var timeout = setTimeout(function(){
		imgButton1.setTranslationZ(121);
		buttonText1.setTranslationZ(120);
	  },500);
    }
  });

  closeButton1.on('touchEnd', function() {
    hide([textLayer1,closeButton1,videoButton1,websiteButton1]);
		imgButton1.animationStartT = [127.5, 240, 121];
		imgButton1.animationEndT = [157.5, 270, 1];
		imgButton1.animationStartTime = -1;
		imgButton1.animationDuration = 500;
		// button text
		buttonText1.animationStartT = [-120, 240, 120];
		buttonText1.animationEndT = [-75, 270, 0];
		buttonText1.animationStartTime = -1;
		buttonText1.animationDuration = 500;
		var timeout = setTimeout(function(){
		imgButton1.setTranslationZ(1);
		buttonText1.setTranslationZ(0);
	  },500);
  });

  videoButton1.on('touchEnd', function() {
    blipp.openURL("https://youtu.be/wYRymhZrFmk?t=62");
  });
  
  videoButton2.on('touchEnd', function() {
    blipp.openURL("https://www.youtube.com/watch?v=gzuXFcYdl-U");
  });

  websiteButton1.on('touchEnd', function() {
    blipp.openURL(webURL);
  });
  websiteButton2.on('touchEnd', function() {
    blipp.openURL(webURL);
  });
  imgButton2.on('touchEnd', function() {
	if (!textLayer1.getHidden()) {
		hide([textLayer1,closeButton1,videoButton1,websiteButton1]);
		imgButton1.animationStartT = [127.5, 240, 121];
		imgButton1.animationEndT = [157.5, 270, 1];
		imgButton1.animationStartTime = -1;
		imgButton1.animationDuration = 500;
		// button text
		buttonText1.animationStartT = [-120, 240, 120];
		buttonText1.animationEndT = [-75, 270, 0];
		buttonText1.animationStartTime = -1;
		buttonText1.animationDuration = 500;
		var timeout = setTimeout(function(){
		imgButton1.setTranslationZ(1);
		buttonText1.setTranslationZ(0);
	  },500);
	}
	if (textLayer2.getHidden()) {
      show([textLayer2,closeButton2,videoButton2,websiteButton2]);
      imgButton2.animationStartT = [157.5, 80, 1];
      imgButton2.animationEndT = [127.5, 50, 121];
      imgButton2.animationStartTime = -1;
      imgButton2.animationDuration = 500;
	  // button text
	  buttonText2.animationStartT = [-75, 80, 0];
      buttonText2.animationEndT = [-120, 50, 120];
      buttonText2.animationStartTime = -1;
      buttonText2.animationDuration = 500;
	  var timeout = setTimeout(function(){
		imgButton2.setTranslationZ(121);
		buttonText2.setTranslationZ(120);
	  },500);
    }
  });
  
  buttonText2.on('touchEnd', function() {
	if (!textLayer1.getHidden()) {
		hide([textLayer1,closeButton1,videoButton1,websiteButton1]);
		imgButton1.animationStartT = [127.5, 240, 121];
		imgButton1.animationEndT = [157.5, 270, 1];
		imgButton1.animationStartTime = -1;
		imgButton1.animationDuration = 500;
		// button text
		buttonText1.animationStartT = [-120, 240, 120];
		buttonText1.animationEndT = [-75, 270, 0];
		buttonText1.animationStartTime = -1;
		buttonText1.animationDuration = 500;
		var timeout = setTimeout(function(){
		imgButton1.setTranslationZ(1);
		buttonText1.setTranslationZ(0);
	  },500);
	}
	if (textLayer2.getHidden()) {
      show([textLayer2,closeButton2,videoButton2,websiteButton2]);
      imgButton2.animationStartT = [157.5, 80, 1];
      imgButton2.animationEndT = [127.5, 50, 121];
      imgButton2.animationStartTime = -1;
      imgButton2.animationDuration = 500;
	  // button text
	  buttonText2.animationStartT = [-75, 80, 0];
      buttonText2.animationEndT = [-120, 50, 120];
      buttonText2.animationStartTime = -1;
      buttonText2.animationDuration = 500;
	  var timeout = setTimeout(function(){
		imgButton2.setTranslationZ(121);
		buttonText2.setTranslationZ(120);
	  },500);
    }
  });
  
  closeButton2.on('touchEnd', function() {
    hide([textLayer2,closeButton2,videoButton2,websiteButton2]);
		imgButton2.animationStartT = [127.5, 50, 121];
		imgButton2.animationEndT = [157.5, 80, 1];
		imgButton2.animationStartTime = -1;
		imgButton2.animationDuration = 500;
		// button text
		buttonText2.animationStartT = [-120, 50, 120];
		buttonText2.animationEndT = [-75, 80, 0];
		buttonText2.animationStartTime = -1;
		buttonText2.animationDuration = 500;
		var timeout = setTimeout(function(){
		imgButton2.setTranslationZ(1);
		buttonText2.setTranslationZ(0);
	  },500);
  });
  
  imgButton3.on('touchEnd', function() {
    blipp.openURL(webURL);
  });

  infoButton.on('touchEnd', function() {
    blipp.openURL("https://www.studiekeuze.hu.nl/opleidingen/Leraar-Techniek-tweedegraads");
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

  var newScale = node.getScale();
  if (node.animationEndSc && node.animationStartSc) {
    newScale = ((node.animationEndSc - node.animationStartSc) * interp) + node.animationStartSc;
  }

  node.setTranslation(newTranslation);
  node.setAlpha(newAlpha);
}

function show(array){
  for (var i = 0; i < array.length; i++) {
    array[i].setHidden(false);
    array[i].animationStartO = 0;
    array[i].animationEndO = 1;
    array[i].animationStartTime = -1;
    array[i].animationDuration = 500;
  }
  var timeout = setTimeout(function(){
    for (var i = 0; i < array.length; i++) {
      array[i].setAlpha(1);
    }
  },500);
}

function hide(array){
  for (var i = 0; i < array.length; i++) {
    array[i].animationStartO = 1;
    array[i].animationEndO = 0;
    array[i].animationStartTime = -1;
    array[i].animationDuration = 500;
  }
  var timeout = setTimeout(function(){
    for (var i = 0; i < array.length; i++) {
      array[i].setHidden(true);
    }
  },500);
}

function showContent1(state) {
	if(state){
		
	}
	else if(!state){
		
	}
}

scene.onShow = function() {
  console.log("Marker: " + blipp.getMarker().getWidth() + "*" + blipp.getMarker().getHeight() + " px");
  console.log("Screen: " + blipp.getScreenWidth() + "*" + blipp.getScreenHeight() + " px");
}
