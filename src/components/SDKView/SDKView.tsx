import React, { ReactElement, useEffect } from "react";
import fetch from "unfetch";
import { useAuth0 } from "@auth0/auth0-react";
import { IntegryJS } from "@integry/sdk";

import "./styles.css";

export default function SDKView(): ReactElement {
  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const init = async () => {
      // fetch auth token from Auth0
      const token = await getAccessTokenSilently();

      // call API to retrieve integry keys
      const tokenResponse = (await fetch("http://127.0.0.1:1234/integry-keys", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => res.json())) as {
        appKey: string;
        hash: string;
        userId: string;
        deploymentId: string;
      };

      const { appKey, hash, userId, deploymentId } = tokenResponse;

      const instance = new IntegryJS({
        appKey,
        hash,
        userId,
        deploymentId,
        // give our tabs some custom names
        userConfig: {
          availableFlowsLabel: "Available Flows",
          myFlowsLabel: "My Integrations",
        },
      });

      instance.init({
        containerId: "sdk-container",
        renderMode: IntegryJS.RenderModes.INLINE, // show setup forms inline, other option is 'MODAL'
      });

      // when integration is created, show our endpoint URL
      instance.eventEmitter.on("did-save-integration", (res) => {
        console.log(`The endpoint created is: ${res.callbackUrl}`);
      });
    };
    init();
  }, [getAccessTokenSilently]);

  return <div id='sdk-container'></div>;
}
