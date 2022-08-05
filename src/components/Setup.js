import React from "react";

export default function Setup() {

  let canvas = document.createElement("canvas");
  document.body.appendChild(canvas);

  canvas.width = window.screen.width;
  canvas.height = window.screen.height;

  let context = canvas.getContext("2d");


  async function loop(position, size, times) {
      times++;
      position += 5;
      if (position > size) {
        return times;
      };
      position -= 2;
      return loop(position, size, times);
  }


 console.log(loop(0, 20, 0));

  return (
    <div>
      Teste
    </div>
  )
}
