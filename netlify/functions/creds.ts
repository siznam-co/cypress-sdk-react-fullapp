import { Handler } from "@netlify/functions";
var crypto = require("crypto");

const handler: Handler = async (event, context) => {
  const appKey = process.env.INTEGRY_APP_KEY;
  const appSecret = process.env.INTEGRY_APP_SECRET;
  const deploymentId = process.env.INTEGRY_DEPLOYMENT_ID;
  const userId = "USER_ID";

  const hash = crypto
    .createHmac("sha256", appSecret)
    .update(userId)
    .digest("hex");

  return {
    statusCode: 200,
    body: JSON.stringify({
      appKey,
      hash,
      userId,
      deploymentId,
    }),
  };
};

export { handler };
