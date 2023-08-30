import React from "react";
import { Modal, Button } from "antd";

interface ImageCaptureModalProps {
  visible: boolean;
  imageSrc: string | null;
  onClose: () => void;
  onConfirm: () => void;
  onRetake: () => void;
}

export const ImageCaptureModal: React.FC<ImageCaptureModalProps> = ({
  visible,
  imageSrc,
  onClose,
  onConfirm,
  onRetake,
}) => {
  return (
    <Modal
      visible={visible}
      onCancel={onClose}
      footer={[
        <Button key="retake" onClick={onRetake}>
          Tirar Outra Foto
        </Button>,
        <Button key="confirm" type="primary" onClick={onConfirm}>
          Confirmar
        </Button>,
      ]}
    >
      {imageSrc && <img src={imageSrc} alt="Captured" />}
    </Modal>
  );
};
