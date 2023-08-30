import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import { useCameraStore } from "./store/CameraStore";
import { ImageCaptureModal } from "./components"; // Importe o componente modal

const CameraCapture: React.FC = () => {
  const webcamRef = useRef<Webcam>(null);
  const setCapturedImage = useCameraStore((state) => state.setCapturedImage);
  const { capturedImage } = useCameraStore();
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const captureImage = () => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      setCapturedImage(imageSrc);
      setModalVisible(true);
    }
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div>
      <h2>Camera Capture</h2>

      <div className="flex flex-col items-center max-w-md mx-auto">
        <Webcam audio={false} ref={webcamRef} className="w-full h-auto" />
      </div>
      <button
        onClick={captureImage}
        className="fixed bottom-4 right-1/2 transform translate-x-1/2 p-4 bg-sky-500 rounded-full shadow-lg"
      >
        Capture Image
      </button>

      {modalVisible && (
        <ImageCaptureModal
          visible={modalVisible}
          imageSrc={capturedImage}
          onClose={closeModal}
          onConfirm={closeModal}
          onRetake={closeModal}
        />
      )}
    </div>
  );
};

export default CameraCapture;
