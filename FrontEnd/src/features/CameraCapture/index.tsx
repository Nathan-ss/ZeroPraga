import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import { useCameraStore } from "./store/CameraStore";
import { ImageCaptureModal } from "./components"; // Importe o componente modal
import { CameraOutlined, LeftOutlined, ExpandOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const CameraCapture: React.FC = () => {
  const webcamRef = useRef<Webcam>(null);
  const setCapturedImage = useCameraStore((state) => state.setCapturedImage);
  const { capturedImage } = useCameraStore();
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const navigate = useNavigate();
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
  const webcamStyles = {
    width: "40rem",
    height: "40rem", // 100% da largura da tela
    // 100% da altura da tela
  };
  const webCamIcon = {
    fontSize: "15rem",
  };
  //full
  return (
    <div className="w-full h-full flex items-center ">
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="flex  z-10 fixed top-10 transform translate-x-1/4 p-4 bg-emerald-800 rounded-full shadow-lg text-white text-xl"
      >
        <LeftOutlined />
      </button>
      <ExpandOutlined className={`flex z-10 fixed  right-1/2 transform translate-x-1/2 p-4  text-emerald-800 opacity-50 rounded-full shadow-lg `} style={webCamIcon} />
      <div className="flex flex-col items-center justify-center bg-emerald-500 px-2" style={{ width: "100%", height: "100vh" }}>
        <Webcam audio={false} ref={webcamRef} style={webcamStyles} />
      </div>
      <button onClick={captureImage} className="flex z-10 fixed bottom-10 right-1/2 transform translate-x-1/2 p-4 bg-emerald-800 rounded-full shadow-lg text-white text-2xl">
        <CameraOutlined />
      </button>

      {modalVisible && <ImageCaptureModal visible={modalVisible} imageSrc={capturedImage} onClose={closeModal} onConfirm={closeModal} onRetake={closeModal} />}
    </div>
  );
};

export default CameraCapture;
