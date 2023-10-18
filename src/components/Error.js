import { useRouteError } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  return (
    <>
      <h3>OOPS, Something went wrong</h3>
      <h4>
        {error.status} {error.statusText}
      </h4>
    </>
  );
};
export default Error;
