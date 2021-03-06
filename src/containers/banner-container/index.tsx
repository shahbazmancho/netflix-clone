import Banner from "../../components/banner";
import { useGetRandomMovie } from "../../hooks/use-get-random-movie";
import { imageBaseUrlLarge } from "../../util/constants";
import { useNavigate } from "react-router-dom";

export default function BannerContainer() {
  const navigate = useNavigate();
  const { movie } = useGetRandomMovie();
  const { name, title, original_title } = movie || {};
  const movieName = title || original_title || name || "";
  return (
    <Banner
      title={movieName}
      description={movie?.overview ?? ""}
      imageUrl={`${imageBaseUrlLarge}${movie?.backdrop_path}`}
      onClickMyList={() => {
        navigate("/my-list");
      }}
    />
  );
}
