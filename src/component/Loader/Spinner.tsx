import { CSSProperties } from "react";
import Spinner from "react-bootstrap/Spinner";

type LoaderPropType = {
  width?: string | number;
  textAlign?: CSSProperties["textAlign"];
} & React.HTMLAttributes<HTMLDivElement>;

function Loader({ width, textAlign, ...rest }: LoaderPropType) {
  const style = {
    width,
    textAlign,
  };
  return (
    <div style={style} {...rest}>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}

export default Loader;
