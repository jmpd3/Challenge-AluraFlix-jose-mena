import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {
  CardActions,
  CardContainer,
  CardImage,
  IconButton,
} from "./Card.styled";

import { useVideoContext } from "../../Contexts/VideoContext";

const Card = ({ video }) => {
  const { deleteVideo } = useVideoContext();
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate("/new-video", { state: { video } });
  };

  return (
    <CardContainer>
      <CardImage src={video.img} alt={video.title} />
      <CardActions>
        <IconButton onClick={() => deleteVideo(video.id)}>
          <FaTrashAlt />
        </IconButton>

        <IconButton onClick={handleEdit}>
          <FaEdit />
        </IconButton>
      </CardActions>
    </CardContainer>
  );
};

export default Card;