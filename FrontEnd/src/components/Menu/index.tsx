import { ReactNode } from "react";
import { AliwangwangOutlined, CameraOutlined, HomeOutlined } from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";

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
        <button
          className="text-white z-0 text-4xl fixed bottom-2 right-1/2 transform translate-x-1/2 bg-gradient-to-t from-green-800  to-emerald-500  flex justify-center p-4 rounded-full"
          onClick={() => {
            navigate("/CameraCapture");
          }}
        >
          <CameraOutlined />
        </button>
        <button className="text-white text-2xl">
          <AliwangwangOutlined />
        </button>
      </div>
      <div className="mt-16 overflow-auto">
        {/* Renderiza o componente filho dentro da área de visualização */}
        {children}
      </div>
    </>
  );
};
