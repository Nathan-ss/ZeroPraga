import { ReactNode, useState } from "react";
import { AliwangwangOutlined, CameraOutlined, HomeOutlined, UploadOutlined } from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";
import { Button, Modal, Upload, message } from "antd";
import SimpleDialogDemo from "../Dialog";

interface MobileAppBarProps {
  children: ReactNode;
}

export const MenuComponent: React.FC<MobileAppBarProps> = ({ children }) => {
  const navigate = useNavigate();
  const path = useLocation().pathname;

  return (
    <>
      <div className={`${path == "/CameraCapture" && "hidden"} bg-emerald-500  p-2 px-16 z-40 fixed bottom-0 left-0 w-full flex justify-between items-center shadow-md `}>
        <button
          className="text-white text-2xl"
          onClick={() => {
            navigate("/");
          }}
        >
          <HomeOutlined />
        </button>
        <SimpleDialogDemo />
        <button className="text-white text-2xl">
          <AliwangwangOutlined />
        </button>
      </div>
      <div className=" overflow-auto">
        {/* Renderiza o componente filho dentro da área de visualização */}
        {children}
      </div>
    </>
  );
};
