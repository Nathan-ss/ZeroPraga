import { ReactNode } from "react";
import { HeartOutlined, HomeOutlined } from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";
import SimpleDialogDemo from "../Dialog";

interface MobileAppBarProps {
  children: ReactNode;
}

export const MenuComponent: React.FC<MobileAppBarProps> = ({ children }) => {
  const navigate = useNavigate();
  const path = useLocation().pathname;

  return (
    <>
      <div
        style={{ borderTop: "1px #d5d5d5 black", borderTopRightRadius: "20px", borderTopLeftRadius: "20px" }}
        className={`${path == "/CameraCapture" && "hidden"} bg-gray-200  border-black p-2 px-10 z-40 fixed bottom-0 left-0 w-full flex justify-between items-center text-gray-500 shadow-md `}
      >
        <button
          className=" text-2xl"
          onClick={() => {
            navigate("/");
          }}
        >
          <HomeOutlined />
        </button>
        <button className=" text-2xl">
          <HeartOutlined />
        </button>
        <SimpleDialogDemo />
      </div>
      <div className=" overflow-auto">
        {/* Renderiza o componente filho dentro da área de visualização */}
        {children}
      </div>
    </>
  );
};
