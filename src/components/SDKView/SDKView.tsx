import React, { ReactElement, useEffect } from "react";
import fetch from "unfetch";
import { IntegryJS } from "@integry/sdk";

import "./styles.css";

export default function SDKView(): ReactElement {
  useEffect(() => {
    const init = async () => {
      // call API to retrieve integry keys
      const tokenResponse = (await fetch("/.netlify/functions/creds/", {
        method: "GET",
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
  }, []);

  return <div id='sdk-container'></div>;
}
