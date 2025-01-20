import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useVideoContext } from "../../Contexts/VideoContext";
import {
  FormContainer,
  Input,
  Textarea,
  Button,
  FormTitle,
} from "./NewVideo.styled";

const NewVideo = () => {
  const { addVideo, updateVideo } = useVideoContext();
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    titulo: "",
    categoria: "",
    img: "",
    video: "",
    descricao: "",
  });

  useEffect(() => {
    if (location.state && location.state.video) {
      setFormData(location.state.video);
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.id) {
      updateVideo(formData.id, formData);
    } else {
      addVideo(formData);
    }
    navigate("/");
  };

  const handleReset = () => {
    setFormData({
      titulo: "",
      categoria: "",
      img: "",
      video: "",
      descricao: "",
    });
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormTitle>{formData.id ? "Editar Video" : "Agregar nuevo Video"}</FormTitle>
      <Input
        type="text"
        name="titulo"
        placeholder="Título"
        value={formData.titulo}
        onChange={handleChange}
        required
      />
      <Input
        type="text"
        name="categoria"
        placeholder="Categoria"
        value={formData.categoria}
        onChange={handleChange}
        required
      />
      <Input
        type="text"
        name="img"
        placeholder="URL de la Imagen"
        value={formData.img}
        onChange={handleChange}
        required
      />
      <Input
        type="text"
        name="video"
        placeholder="URL del Video"
        value={formData.video}
        onChange={handleChange}
        required
      />
      <Textarea
        name="descricao"
        placeholder="Descripcion"
        value={formData.descricao}
        onChange={handleChange}
        required
      />
      <Button type="submit">{formData.id ? "Actualizar" : "Guardar"}</Button>
      <Button type="button" onClick={handleReset}>
        Limpiar
      </Button>
    </FormContainer>
  );
};

export default NewVideo;