export const FETCH_RESTAURANTS = (lat, lng) =>
  `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&page_type=DESKTOP_WEB_LISTING`;

export const MENU_API = (lat, lng) =>
  `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&restaurantId=`;

export const IMG_URL = "https://media-assets.swiggy.com/swiggy/image/upload/";
