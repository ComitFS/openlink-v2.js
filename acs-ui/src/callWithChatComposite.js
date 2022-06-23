// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import React from 'react';
import ReactDOM from 'react-dom';
import { AzureCommunicationTokenCredential } from '@azure/communication-common';
import { CallWiithChatComposite, createAzureCommunicationCallWithChatAdapter } from '@azure/communication-react';

export const loadCallWithChatComposite = async function (args, htmlElement, props) {
  const { endpoint, userId, token, locator, displayName } = args;
  const adapter = await createAzureCommunicationCallWithChatAdapter({
    endpoint,	  
    userId,
    displayName: displayName ?? 'anonymous',
    credential: new AzureCommunicationTokenCredential(token),
    locator
  });
  ReactDOM.render(React.createElement(CallWiithChatComposite, { ...props, adapter }, null), htmlElement);
  return adapter;
};
