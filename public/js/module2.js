export function createGUIInDiv(div) {
     var gui = new dat.GUI({ autoPlace: false });

      var customContainer = document.getElementById('controls');
      customContainer.appendChild(gui.domElement);
  return gui;
}

export function myFunction() {
  console.log(5 + 6);
}

