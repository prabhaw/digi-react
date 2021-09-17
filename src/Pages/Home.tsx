import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/rootReducer";
import { requestFetch } from "../Redux/FeatchRaw/action";

const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  const { fetchData, loading } = useSelector((state: RootState) => state.raws);

  const fetchDataCall = useCallback(() => {
    dispatch(requestFetch());
  }, [dispatch]);

  useEffect(() => {
    fetchDataCall();
  }, [fetchDataCall]);
  console.log("type>>>", typeof fetchData);
  console.log("DATA", fetchData);
  return (
    <>
      {loading
        ? "...loading...."
        : // @ts-ignore
          fetchData.map((item) => (
            <div key={item.id}>
              <h1>{item.title}</h1>
            </div>
          ))}
    </>
  );
};

export default HomePage;
