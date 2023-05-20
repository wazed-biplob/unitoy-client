import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `UniToy | ${title}`;
  }, [title]);
};

export default useTitle;
