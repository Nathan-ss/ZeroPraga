import { UploadFile } from "antd";
import axios, { AxiosResponse } from "axios";

export const DetectarPragasApi = async (imagem: UploadFile<unknown> | undefined): Promise<iaResponse | undefined> => {
  if (!imagem) {
    console.warn("Nenhuma imagem selecionada para enviar.");
    return undefined;
  }

  const formData = new FormData();

  if (imagem) {
    const blob = new Blob([imagem.originFileObj!], { type: imagem.type });
    formData.append("ImageFile", blob);
  }
  try {
    const response: AxiosResponse<iaResponse> = await axios.post("https://localhost:7124/api/plants/detectar-pragas", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log("Resposta da API:", response.data);
    return response.data; // Retorna a resposta da API
  } catch (error) {
    console.error("Erro ao enviar imagem para a API:", error);
    throw new Error("Erro ao enviar imagem para a API"); // Retorna undefined em caso de erro
  }
};

export type iaResponse = {
  imagem: string;
  eta: string;
  step: string;
  previsao: string;
  probabilidadeDeTerPraga: string;
  probabilidadeDeNaoTerPraga: string;
  ehPraga: boolean;
  error: string;
};
