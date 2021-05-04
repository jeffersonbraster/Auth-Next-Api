import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { setupApiClient } from "../services/api";
import { withSSRAuth } from "../utils/withSSRAuth";

export default function Dashboard() {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h1>dashboard: {user?.email}</h1>
    </div>
  );
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  //const apiClient = setupApiClient(ctx)
  return {
    props: {},
  };
});
