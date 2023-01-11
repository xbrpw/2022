# Clouds using CSS 3D Transforms

A Pen created on CodePen.io. Original URL: [https://codepen.io/miyavibest/pen/DPrQRp](https://codepen.io/miyavibest/pen/DPrQRp).

How to use CSS 3D Transforms to create sprite-based 3D-like clouds.
Demo: http://www.clicktorelease.com/code/css3dclouds/

There are several div elements, distributed randomly with transform: translate3d() inside a world div that is rotated with transform: rotate3d() using JavaScript in the onmousemove handler.

Each cluster contains several div elements with a cloud texture that are distributed in 3d with transform: translate3d() rotateZ() scale().

Every frame each layer is updated to face the camera, by rotating the sprite in X and Y the inverse amount of the rotation of the world.

There's a way more detailed step-by-step tutorial here: http://www.clicktorelease.com/blog/how-to-make-clouds-with-css-3d
