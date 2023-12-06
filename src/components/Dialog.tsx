import * as React from "react";
import { Button } from "antd";
import Dialog from "@mui/material/Dialog";

import { CameraOutlined, UploadOutlined } from "@ant-design/icons";
import { Upload, UploadFile, UploadProps, message } from "antd";
import { useNavigate } from "react-router-dom";
import { Box, DialogContent, Typography } from "@mui/material";
import { useState } from "react";
import { RcFile } from "antd/es/upload";
import { Loading } from "./Loading";
import { useFileStore } from "../utils/store/useFileStore";
import { ErrorDialog, SuccessDialog } from "./ConsentDialogs";
import { DetectarPragasApi, iaResponse } from "../services";

const emails = ["username@gmail.com", "user02@gmail.com"];

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
  onOpen: () => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const navigate = useNavigate();
  const { onClose, selectedValue, open, onOpen } = props;

  const { file, setFile } = useFileStore(); // Obtenha o estado file do store

  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [uploading, setUploading] = useState(false);

  const [isLoading, setLoading] = useState(false);

  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [showErrorDialog, setShowErrorDialog] = useState(false);

  const [result, setResult] = useState<iaResponse | undefined>(undefined);

  const handleClose = () => {
    if (!isLoading && !uploading) {
      onClose(selectedValue);
    }
  };
  const handleUpload = async () => {
    const formData = new FormData();
    fileList.forEach((file) => {
      formData.append("files[]", file as RcFile);
    });
    setUploading(true);
    await DetectarPragasApi(file)
      .then((r) => {
        console.log(r);
        setResult(r);
        if (r) {
          if (!r.ehPraga) {
            setShowErrorDialog(true);
            onClose(selectedValue);
          } else {
            setShowSuccessDialog(true);
            onClose(selectedValue);

            //setFileList([]);
            //message.success("upload successfully.");
          }
        }
      })
      .catch(() => {
        setShowErrorDialog(true);
        onClose(selectedValue);
        message.error("upload failed.");
      })
      .finally(() => {
        setUploading(false);
      });
  };

  const propsUpload: UploadProps = {
    action: "",
    listType: "picture",
    maxCount: 1, // Adicionado aqui

    onRemove: () => {
      setFile(undefined);
      setFileList([]);
    },
    beforeUpload: (file) => {
      // Verifique se já existe um arquivo na lista antes de adicionar um novo
      setFile(file);
      setFileList([file]);
      return false;
    },
    fileList,
  };
  React.useEffect(() => {
    if (isLoading && !file) {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  }, [file, isLoading]);
  if (isLoading) {
    return (
      <Dialog onClose={handleClose} open={open} className="flex flex-col p-12">
        <DialogContent sx={{ display: "flex", gap: 1, flexDirection: "column" }}>
          <Loading />{" "}
        </DialogContent>
      </Dialog>
    );
  }
  return (
    <>
      <Dialog onClose={handleClose} open={open} className="flex flex-col p-12">
        <DialogContent sx={{ display: "flex", gap: 1, flexDirection: "column", alignItems: file == undefined ? "center" : "" }}>
          {file == undefined && <Typography variant="h6">Escolha uma opção</Typography>}
          <Box sx={{ display: "flex", gap: 1, flexDirection: "column" }}>
            {file == undefined && (
              <Button
                onClick={() => {
                  navigate("/CameraCapture");
                  handleClose();
                }}
              >
                Tirar foto
              </Button>
            )}

            <Upload {...propsUpload} maxCount={1}>
              <Button style={{ display: "flex", gap: 1 }}>
                {file ? "Subir outra imagem" : "Subir imagem"}
                <UploadOutlined />
              </Button>
            </Upload>
          </Box>
          {file && (
            <Box sx={{ display: "flex", gap: 1, w: "100%", justifyContent: "space-between" }}>
              <Button
                onClick={() => {
                  setFileList([]);
                  setFile(undefined);
                  setLoading(true);
                }}
                style={{ marginTop: 16 }}
                danger
              >
                Voltar
              </Button>
              <Button onClick={handleUpload} loading={uploading} style={{ marginTop: 16 }}>
                {uploading ? "Enviando..." : "Enviar imagem"}
              </Button>
            </Box>
          )}
        </DialogContent>
      </Dialog>
      <SuccessDialog
        open={showSuccessDialog}
        onClose={() => {
          setShowSuccessDialog(false);
          setFile(undefined);
          setFileList([]);
        }}
        onOther={() => {
          setShowSuccessDialog(false);
          onOpen();
        }}
        result={result}
      />
      <ErrorDialog
        open={showErrorDialog}
        onClose={() => {
          setShowErrorDialog(false);
          setFile(undefined);
          setFileList([]);
        }}
        onOther={() => {
          setShowErrorDialog(false);
          onOpen();
        }}
        result={undefined}
      />
    </>
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
      <button onClick={handleClickOpen} className="bg-gradient-to-t text-white from-green-800  to-emerald-500  flex justify-center items-center gap-2 px-4 py-2 rounded-md">
        Capturar Praga <CameraOutlined />
      </button>
      <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} onOpen={handleClickOpen} />
    </>
  );
}
