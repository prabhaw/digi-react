import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/rootReducer";
import { requestFetch } from "../Redux/FeatchRaw/action";

const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  const fetchData = useSelector((state: RootState) => state.raws.data);

  useEffect(() => {
    dispatch(requestFetch());
  }, []);

  return (
    <>
      {fetchData.map((item) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
        </div>
      ))}
    </>
  );
};

export default HomePage;
