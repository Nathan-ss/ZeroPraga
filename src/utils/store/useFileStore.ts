import { UploadFile } from "antd";
import create from "zustand";

interface FileStore {
  file: UploadFile<unknown> | undefined;
  setFile: (file: UploadFile<unknown> | undefined) => void;
}

export const useFileStore = create<FileStore>((set) => ({
  file: undefined,
  setFile: (file) => set({ file }),
}));
