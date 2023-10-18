export const getLatLng = () => {
  return new Promise((resolve, reject) => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          resolve({ lat: latitude, lng: longitude }); // Return an object with lat and lng
        },
        (error) => {
          reject(
            "An error occurred while fetching coordinates: " + error.message,
          );
        },
      );
    } else {
      reject("Geolocation is not supported by this browser.");
    }
  });
};
