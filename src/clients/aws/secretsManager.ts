import { SecretsManagerClient, SecretsManagerClientConfig } from "@aws-sdk/client-secrets-manager";
import { awsProvider } from "./config";
import { region } from "../../utils/constants";

const getSecretsManagerClient = (options?: SecretsManagerClientConfig): SecretsManagerClient => {
  return new SecretsManagerClient({
    region,
    credentials: awsProvider,
    ...options,
  });
};

export default {
  getSecretsManagerClient,
};
