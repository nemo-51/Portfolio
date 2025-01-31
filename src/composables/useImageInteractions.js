// image zoom
import { ref } from "vue";

const fullscreenImage = ref(null);
const fullscreenImagesArray = ref([]);
const fullscreenImagesIndex = ref(0);

export function useImageInteractions() {
  const openFullscreen = (imagesArray, index = 0) => {
    fullscreenImagesArray.value = imagesArray;
    fullscreenImagesIndex.value = index;
    fullscreenImage.value = imagesArray[index];
  };
  const closeFullscreen = () => {
    fullscreenImage.value = null;
  };
  const fullscreenNextImage = () => {
    if (fullscreenImagesIndex.value < fullscreenImagesArray.value.length - 1) {
      fullscreenImage.value =
        fullscreenImagesArray.value[fullscreenImagesIndex.value + 1];
      fullscreenImagesIndex.value = fullscreenImagesIndex.value + 1;
    }
  };
  const fullscreenPreviousImage = () => {
    if (fullscreenImagesIndex.value > 0) {
      fullscreenImage.value =
        fullscreenImagesArray.value[fullscreenImagesIndex.value - 1];
      fullscreenImagesIndex.value = fullscreenImagesIndex.value - 1;
    }
  };

  return {
    fullscreenImage,
    fullscreenImagesArray,
    fullscreenImagesIndex,
    openFullscreen,
    closeFullscreen,
    fullscreenNextImage,
    fullscreenPreviousImage,
  };
}
