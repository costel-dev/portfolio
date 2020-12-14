/* Skills animation gravitation */
$(document).ready(function() {
    var entries = [
      {
        label: "AWS",
        url: "https://aws.amazon.com/",
        target: "_blank"
      },
      {
        label: "Bootstrap",
        url: "https://getbootstrap.com/",
        target: "_blank"
      },
      {
        label: "CSS3",
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        target: "_blank"
      },
      {
        label: "firebase",
        url: "https://firebase.google.com/",
        target: "_blank"
      },
      {
        label: "git",
        url: "https://git-scm.com/",
        target: "_blank"
      },
      {
        label: "HTML5",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        target: "_blank"
      },
      {
        label: "JavaScript",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        target: "_blank"
      },
      {
        label: "MongoDB",
        url: "https://www.mongodb.com/1",
        target: "_blank"
      },
      {
        label: "MySQL",
        url: "https://www.mysql.com/",
        target: "_blank"
      },
      {
        label: "NodeJS",
        url: "https://nodejs.org/en/",
        target: "_blank"
      },
      {
        label: "ReactJS",
        url: "https://reactjs.org/",
        target: "_blank"
      },
      {
        label: "VS Code",
        url: "https://code.visualstudio.com/",
        target: "_blank"
      },
      {
        label: "VueJS",
        url: "https://vuejs.org/",
        target: "_blank"
      },
      {
        label: "AWS",
        url: "https://aws.amazon.com/",
        target: "_blank"
      },
      {
        label: "Bootstrap",
        url: "https://getbootstrap.com/",
        target: "_blank"
      },
      {
        label: "CSS3",
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        target: "_blank"
      },
      {
        label: "firebase",
        url: "https://firebase.google.com/",
        target: "_blank"
      },
      {
        label: "git",
        url: "https://git-scm.com/",
        target: "_blank"
      },
      {
        label: "HTML5",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        target: "_blank"
      },
      {
        label: "JavaScript",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        target: "_blank"
      },
      {
        label: "MongoDB",
        url: "https://www.mongodb.com/1",
        target: "_blank"
      },
      {
        label: "MySQL",
        url: "https://www.mysql.com/",
        target: "_blank"
      },
      {
        label: "NodeJS",
        url: "https://nodejs.org/en/",
        target: "_blank"
      },
      {
        label: "ReactJS",
        url: "https://reactjs.org/",
        target: "_blank"
      },
      {
        label: "VS Code",
        url: "https://code.visualstudio.com/",
        target: "_blank"
      },
      {
        label: "VueJS",
        url: "https://vuejs.org/",
        target: "_blank"
      },
    ];
  
    var settings = {
      entries: entries,
      width: 580,
      height: 580,
      radius: "80%",
      radiusMin: 75,
      bgDraw: true,
      bgColor: "transparent",
      opacityOver: 1.0,
      opacityOut: 0.1,
      opacitySpeed: 6,
      fov: 800,
      speed: 0.3,
      fontFamily: "Helvetica, Arial, sans-serif",
      fontSize: "20px",
      fontColor: "#18d26e",
      fontWeight: "normal",
      fontStyle: "normal",
      fontStretch: "normal",
    };
  
    $("#tag-cloud").svg3DTagCloud(settings);
  });