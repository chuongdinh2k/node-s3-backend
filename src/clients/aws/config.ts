import { defaultProvider } from "@aws-sdk/credential-provider-node";

export const awsProvider = defaultProvider({
  maxRetries: 5,
  timeout: 2000,
});
