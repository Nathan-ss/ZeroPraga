import create from "zustand";

type CameraStore = {
  capturedImage: string | null;
  setCapturedImage: (image: string | null) => void;
};

export const useCameraStore = create<CameraStore>((set) => ({
  capturedImage: null,
  setCapturedImage: (image) => set({ capturedImage: image }),
}));
