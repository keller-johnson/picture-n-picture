const videoElement = document.getElementById("video");
const button = document.getElementById("button");

//Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.onplay();
    };
  } catch (error) {
    //catch errors
    console.log("opsie", error);
  }
}

button.addEventListener("click", async () => {
  //Display Button
  button.disabled = true;
  //Start Picture in Picture
  await videoElement.requestPictureInPicture();
  //Reset Button
  button.disabled = false;
});
//on load
selectMediaStream();
