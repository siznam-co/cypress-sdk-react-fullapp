import React, { ReactElement, useEffect } from "react";
import fetch from "unfetch";
import { useAuth0 } from "@auth0/auth0-react";
import { IntegryJS } from "@integry/sdk";


export default function SDKView(): ReactElement {
  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const init = async () => {
      const deploymentId = "964";
      const token = await getAccessTokenSilently();

      // call API to retrieve info
      const tokenResponse = (await fetch("http://127.0.0.1:1234/integry-keys", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => res.json())) as {
        appKey: string;
        hash: string;
        userId: string;
      };

      const { appKey, hash, userId } = tokenResponse;

      new IntegryJS({
        appKey,
        hash,
        userId,
        deploymentId,
      }).init({
        containerId: "sdk-container",
        renderMode: IntegryJS.RenderModes.MODAL,
      });
    };
    init();
  }, [getAccessTokenSilently]);

  return <div id='sdk-container'></div>;
}
