import Webcam from "react-webcam";
import { useRef, useState } from "react";

function PhotoResult() {
  const webcamRef = useRef(null);
  const [image, setImage] = useState(null);

  const capture = () => {
    const imgSrc = webcamRef.current.getScreenshot();
    setImage(imgSrc);
  };

  return (
    <div>
      <h2>Capture Photo</h2>

      {!image ? (
        <>
          <Webcam ref={webcamRef} screenshotFormat="image/jpeg" />
          <button onClick={capture}>Capture</button>
        </>
      ) : (
        <img src={image} alt="Captured" />
      )}
    </div>
  );
}

export default PhotoResult;