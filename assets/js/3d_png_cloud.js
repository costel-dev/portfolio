/* Skills animation gravitation */
$(document).ready(function() {
var entries = [
    {
        image: "../../assets/img/code.png",
        width: "50",
        height: "50",
        url: "https://aws.amazon.com/",
        target: "_blank"
    },
    {
        image: "../../assets/img/bootstrap.png",
        width: "50",
        height: "50",
        url: "https://getbootstrap.com/",
        target: "_blank"
    },
    {
        image: "../../assets/img/css3.png",
        width: "50",
        height: "50",
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        target: "_blank"
    },
    {
        image: "../../assets/img/firebase.png",
        width: "50",
        height: "50",
        url: "https://firebase.google.com/",
        target: "_blank"
    },
    {
        image: "../../assets/img/git.png",
        width: "50",
        height: "50",
        url: "https://git-scm.com/",
        target: "_blank"
    },
    {
        image: "../../assets/img/html5.png",
        width: "50",
        height: "50",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        target: "_blank"
    },
    {
        image: "../../assets/img/javascript.png",
        width: "50",
        height: "50",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        target: "_blank"
    },
    {
        image: "../../assets/img/mongodb.png",
        width: "50",
        height: "50",
        url: "https://www.mongodb.com/1",
        target: "_blank"
    },
    {
        image: "../../assets/img/mysql.png",
        width: "50",
        height: "50",
        url: "https://www.mysql.com/",
        target: "_blank"
    },
    {
        image: "../../assets/img/nodejs.png",
        width: "50",
        height: "50",
        url: "https://nodejs.org/en/",
        target: "_blank"
    },
    {
        image: "../../assets/img/reactjs.png",
        width: "50",
        height: "50",
        url: "https://reactjs.org/",
        target: "_blank"
    },
    {
        image: "../../assets/img/vscode.png",
        width: "50",
        height: "50",
        url: "https://code.visualstudio.com/",
        target: "_blank"
    },
    {
        image: "../../assets/img/vue.png",
        width: "50",
        height: "50",
        url: "https://vuejs.org/",
        target: "_blank"
    },
    {
        image: "../../assets/img/redux.png",
        width: "50",
        height: "50",
        url: "https://redux.js.org/",
        target: "_blank"
    },
    {
        image: "../../assets/img/slack.png",
        width: "50",
        height: "50",
        url: "https://slack.com/intl/en-de/",
        target: "_blank"
    },
    {
        image: "../../assets/img/github.png",
        width: "50",
        height: "50",
        url: "https://github.com/",
        target: "_blank"
    },
];
  
    var settings = {
      entries: entries,
      width: "100%,",
      height: "100%",
      radius: "80%",
      radiusMin: 75,
      bgDraw: true,
      bgColor: "transparent",
      opacityOver: 1.0,
      opacityOut: 0.1,
      opacitySpeed: 6,
      fov: 800,
      speed: 0.3,
    };
  
    $("#png-cloud").svg3DTagCloud(settings);
  });