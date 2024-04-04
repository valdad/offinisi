function updateFrame(timestamp) {
  // Perform the animation logic here

  // Recursively request the next frame
  requestAnimationFrame(updateFrame);
}

// Start the animation
requestAnimationFrame(updateFrame);
