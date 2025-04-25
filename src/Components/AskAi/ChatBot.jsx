import React, { useEffect } from 'react';

const ChatBot = () => {
  useEffect(() => {
    // Wait for the script to be loaded before rendering df-messenger
    const checkInterval = setInterval(() => {
      if (window.customElements && customElements.get('df-messenger')) {
        clearInterval(checkInterval);
        const existing = document.getElementById('df-chat');
        if (!existing) {
          const container = document.createElement('div');
          container.id = 'df-chat';
          container.innerHTML = `
            <df-messenger
              oauth-client-id="INSERT_OAUTH_CLIENT_ID"
              access-token-name="INSERT_ACCESS_TOKEN_NAME"
              project-id="bajajbotravi"
              agent-id="33597351-07ab-4638-addd-fe1bda397df0"
              language-code="en"
              max-query-length="-1"
              allow-feedback="all">
              <df-messenger-chat chat-title="BajajBP"></df-messenger-chat>
            </df-messenger>
          `;
          document.body.appendChild(container);
        }
      }
    }, 100);
  }, []);

  return null; // No need to render anything inside the component directly
};

export default ChatBot;
