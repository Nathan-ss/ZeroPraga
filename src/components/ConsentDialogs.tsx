import React from "react";
import Dialog from "@mui/material/Dialog";
import { Box, DialogContent, Typography } from "@mui/material";
import { CloseCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import GrassIcon from "@mui/icons-material/Grass";
import { iaResponse } from "../services";

interface DialogProps {
  open: boolean;
  onClose: () => void;
  onOther: () => void;
  result: iaResponse | undefined;
}

export const SuccessDialog: React.FC<DialogProps> = ({ open, onClose, onOther, result }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent className="text-center">
        <GrassIcon style={{ fontSize: 48, color: "#52c41a" }} />
        <Typography variant="h6" mt={2}>
          Praga identificada com sucesso!
        </Typography>
        <Typography variant="h5" color={"red"}>
          Atenção a sua planta está com <strong>Pulgões</strong>
        </Typography>
        <Box display={"flex"} gap={2}>
          <Typography variant="h6" mt={2} fontSize={12}>
            Probabilidade de não ter praga :<strong>{result?.probabilidadeDeNaoTerPraga}%</strong>
          </Typography>
          <Typography variant="h6" mt={2} fontSize={12}>
            Probabilidade de ter praga :<strong>{result?.probabilidadeDeTerPraga}%</strong>
          </Typography>
        </Box>
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
            Tentar novamente
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};
