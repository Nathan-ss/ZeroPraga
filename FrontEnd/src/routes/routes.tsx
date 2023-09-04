import { Routes, Route } from "react-router-dom";
import CameraCapture from "../features/CameraCapture";
import Home from "../features/Home";

export default function BaseRoutes() {
  return (
    <div className="flex flex-col justify-center w-full items-center">
      <Routes>
        <Route path="/CameraCapture" element={<CameraCapture />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
