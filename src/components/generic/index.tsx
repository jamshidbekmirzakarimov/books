import { useLocation } from "react-router-dom";

const GenericComp = () => {
  const { pathname } = useLocation();

  return <div>{pathname} - page nasib bo'lsa tez orada.</div>;
};

export default GenericComp;
