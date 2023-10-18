const useFetchLatLng = () => {
  try {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            resolve([position.coords.latitude, position.coords.longitude]);
          },
          (error) => {
            reject(`Error getting location: ${error.message}`);
          },
        );
      } else {
        reject("Geolocation is not supported by this browser.");
      }
    });
  } catch (e) {
    console.error(e);
  }
};
export default useFetchLatLng;
