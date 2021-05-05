import { setupApiClient } from "../services/api";
import { withSSRAuth } from "../utils/withSSRAuth";

export default function Metrics() {
  return (
    <div>
      <h1>metrics</h1>

      <div>Métricas 2 </div>
    </div>
  );
}

export const getServerSideProps = withSSRAuth(
  async (ctx) => {
    const apiClient = setupApiClient(ctx);

    const response = await apiClient.get("/me");

    return {
      props: {},
    };
  },
  {
    permissions: ["users.list"],
    roles: ["administrator"],
  }
);
