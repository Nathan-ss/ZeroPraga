import * as React from "react";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";

import { CameraOutlined, UploadOutlined } from "@ant-design/icons";
import { Upload } from "antd";
import { useNavigate } from "react-router-dom";
import { DialogContent } from "@mui/material";

const emails = ["username@gmail.com", "user02@gmail.com"];

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open } = props;
  const navigate = useNavigate();
  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog onClose={handleClose} open={open} className="flex flex-col p-12">
      <DialogContent>
        <Button
          type="primary"
          onClick={() => {
            navigate("/CameraCapture");
            handleClose();
          }}
        >
          Tirar foto
        </Button>
        <Upload {...props}>
          <Button icon={<UploadOutlined />}>Subir imagem</Button>
        </Upload>
      </DialogContent>
    </Dialog>
  );
}

export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <>
      <button
        onClick={handleClickOpen}
        className="text-white z-0 text-4xl fixed bottom-2 right-1/2 transform translate-x-1/2 bg-gradient-to-t from-green-800  to-emerald-500  flex justify-center p-4 rounded-full"
      >
        <CameraOutlined />
      </button>
      <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
    </>
  );
}
