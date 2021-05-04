import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useCan } from "../hooks/useCan";

import { setupApiClient } from "../services/api";
import { withSSRAuth } from "../utils/withSSRAuth";

export default function Dashboard() {
  const { user } = useContext(AuthContext);

  const userCanSeeMatrics = useCan({
    permissions: ["metrics.list"],
  });
  return (
    <div>
      <h1>dashboard: {user?.email}</h1>

      {userCanSeeMatrics && <div>Métricas</div>}
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
