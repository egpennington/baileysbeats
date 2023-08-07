// Define the drum buttons and their corresponding sounds
const drumElements = [
  { buttonId: "hi-hat", soundId: "hihat-sound", key: "d" },
  { buttonId: "snare", soundId: "snare-sound", key: "f" },
  { buttonId: "kick", soundId: "kick-sound", key: "a" },
  { buttonId: "tom", soundId: "tom-sound", key: "g" },
  { buttonId: "ride", soundId: "ride-sound", key: "s" },
  { buttonId: "boom", soundId: "boom-sound", key: "j" },
  { buttonId: "clap", soundId: "clap-sound", key: "k" },
  { buttonId: "tink", soundId: "tink-sound", key: "l" },
];

// Function to play a drum sound and light up the button
function playDrumSoundAndLightUp(soundElement, buttonElement) {
  soundElement.currentTime = 0; // Reset sound to the beginning
  soundElement.play();

  // Light up the button by adding a class
  buttonElement.classList.add("active");

  // Remove the class after a short delay
  setTimeout(() => {
    buttonElement.classList.remove("active");
  }, 100); // Adjust the duration as needed
}


// Add click event listeners to drum buttons
drumElements.forEach(drum => {
  const button = document.getElementById(drum.buttonId);
  const sound = document.getElementById(drum.soundId);

  button.addEventListener("click", () => {
    playDrumSoundAndLightUp(sound, button);
  });
});

// Add keydown event listener to play drum sounds and light up buttons
document.addEventListener("keydown", event => {
  const key = event.key;
  const drum = drumElements.find(drum => drum.key === key);

  if (drum) {
    const button = document.getElementById(drum.buttonId);
    const sound = document.getElementById(drum.soundId);

    playDrumSoundAndLightUp(sound, button);
  }
});
