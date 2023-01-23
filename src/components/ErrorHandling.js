import { useRouteError } from "react-router-dom";

const ErrorHandling = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <>
      <h1>404 Path is not found</h1>
      <h2>Please check your Path 😛</h2>
      <p>
        Please reload your page or check your path. Something is wrong your
        internet connection might be slow or your path is not correct
      </p>
    </>
  );
};
export default ErrorHandling;
