import { Header } from "../components/Header";

export const NotFound = ({ cart }) => {
  return (
    <>
      <Header cart={cart} />
      <div className="" style={{ marginTop: "120px", fontSize: "60px" }}>
        Not found page
      </div>
    </>
  );
};
