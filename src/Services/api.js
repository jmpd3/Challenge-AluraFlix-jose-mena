import axios from "axios";

const api = axios.create({
baseURL: "https://678ff78649875e5a1a93fd00.mockapi.io/",
});

export const getVideos = async () => {
  try {
    const response = await api.get("/video");
    return response.data;
  } catch (error) {
    console.error("Error al buscar videos", error);
    throw new Error("No se pudieron obtener los videos. Intente de nuevo.");
  }
};

export const saveVideo = async (video) => {
  try {
    const response = await api.post("/video", video);
    return response.data;
  } catch (error) {
    console.error("Error al crear videos", error);
    throw error;
  }
};

export const deleteVideo = async (videoId) => {
  try {
    const response = await api.delete(`/video/${videoId}`);
    return response.data;
  } catch (error) {
    console.error("Error al borrar video", error);
    throw error;
  }
};

export const updateVideo = async (videoId, updatedVideo) => {
  try {
    const response = await api.put(`/video/${videoId}`, updatedVideo);
    return response.data;
  } catch (error) {
    console.error("Error al actualizar video", error);
    throw error;
  }
};

export default api;
