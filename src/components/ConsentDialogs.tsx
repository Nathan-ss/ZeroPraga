import React from "react";
import Dialog from "@mui/material/Dialog";
import { Box, DialogContent, Typography } from "@mui/material";
import { CloseCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import GrassIcon from "@mui/icons-material/Grass";

interface DialogProps {
  open: boolean;
  onClose: () => void;
  onOther: () => void;
}

export const SuccessDialog: React.FC<DialogProps> = ({ open, onClose, onOther }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent className="text-center">
        <GrassIcon style={{ fontSize: 48, color: "#52c41a" }} />
        <Typography variant="h6" mt={2}>
          Praga identificada com sucesso!
        </Typography>
        <Typography variant="h5" color={"red"}>
          Atenção a sua planta está com uma praga
        </Typography>
        <Box sx={{ display: "flex", gap: 1, w: "100%", justifyContent: "space-between", mt: 2 }}>
          <Button onClick={onClose} style={{ marginTop: 3 }} danger>
            Fechar
          </Button>
          <Button onClick={onOther} style={{ marginTop: 3 }}>
            Tirar outra foto
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export const ErrorDialog: React.FC<DialogProps> = ({ open, onClose, onOther }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent className="text-center">
        <CloseCircleOutlined style={{ fontSize: 48, color: "#ff4d4f" }} />
        <Typography variant="h5" mt={2}>
          Praga não identificada. Tente tirar outra foto.
        </Typography>
        <Box sx={{ display: "flex", gap: 1, w: "100%", justifyContent: "space-between", mt: 2 }}>
          <Button color="primary" onClick={onClose} style={{ marginTop: 3 }} danger>
            Fechar
          </Button>
          <Button onClick={onOther} style={{ marginTop: 3 }}>
            Tirar outra foto
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};
