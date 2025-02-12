// image zoom
import { ref } from "vue";

const fullscreenImage = ref(null);

export function useImageInteractions() {
  const openFullscreen = (image) => {
    fullscreenImage.value = image;
  };
  const closeFullscreen = () => {
    fullscreenImage.value = null;
  };

  return { fullscreenImage, openFullscreen, closeFullscreen };
}
