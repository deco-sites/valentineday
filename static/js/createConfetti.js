document.getElementById("envelope").addEventListener("click", function() {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  const emojiShape = confetti.shapeFromText({
    text: "❤️", // You can use any emoji here
    scalar: 3,
  });

  confetti({
    particleCount: 225, // You can change the number of confetti particles
    scalar: 3, // Make it a bit larger
    angle: 90, // You can change the angle of the confetti launch
    spread: 360, // You can change the spread of the confetti launch
    startVelocity: 25, // You can change the initial velocity of the confetti particles
    decay: 0.95, // You can change the decay rate of the confetti particles
    shapes: [emojiShape], // You can pass an array of shapes to use as confetti particles
    origin: { x: 0.5, y: 0.4 }, // You can change the origin of the confetti launch
  });
});
