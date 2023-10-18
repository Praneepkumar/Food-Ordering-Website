//Restaurant Card component
import { IMG_URL } from "../utils/constants";
const RestaurantCard = ({
  name,
  areaName,
  avgRating,
  cuisines,
  cloudinaryImageId,
}) => (
  <div className='rest-card'>
    <div className='img-container'>
      <img src={IMG_URL + cloudinaryImageId} className='img-responsive' />
    </div>
    <div className='card-description'>
      <header className='card-header'>
        <div className='card-header-left'>
          <h4 className='card-title'>{name}</h4>
          <p className='card-location'>{areaName}</p>
          <span className='keywords'>{cuisines.join(", ")}</span>
        </div>
        <div className='card-header-right'>
          <em className='ratings'>{avgRating || "No Rating"}</em>
        </div>
      </header>
      <div className='card-cta'>
        <a href='#' role='button'>
          Order food
        </a>
      </div>
    </div>
  </div>
);
export default RestaurantCard;
