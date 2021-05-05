import { useContext } from "react";
import { Can } from "../components/can";
import { AuthContext } from "../context/AuthContext";

import { setupApiClient } from "../services/api";
import { withSSRAuth } from "../utils/withSSRAuth";

export default function Dashboard() {
  const { user, signOut } = useContext(AuthContext);

  return (
    <div>
      <h1>dashboard: {user?.email}</h1>
      <button onClick={signOut}>Sair</button>

      <Can permissions={["metrics-list"]}>
        <div>Métricas</div>
      </Can>
    </div>
  );
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupApiClient(ctx);

  const response = await apiClient.get("/me");

  return {
    props: {},
  };
});
