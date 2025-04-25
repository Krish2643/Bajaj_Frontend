// src/Chatbot.js
import React, { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    // 1. Inject the DF-Messenger CSS
    if (!document.querySelector('link[href="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/themes/df-messenger-default.css"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/themes/df-messenger-default.css';
      document.head.appendChild(link);
    }

    // 2. Inject the DF-Messenger JS
    if (!document.querySelector('script[src="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js';
      script.async = true;
      document.body.appendChild(script);
    }

    // 3. Inject custom styles
    if (!document.getElementById('df-messenger-styles')) {
      const style = document.createElement('style');
      style.id = 'df-messenger-styles';
      style.textContent = `
        df-messenger {
          z-index: 999;
          --df-messenger-font-color: #000;
          --df-messenger-font-family: Google Sans;
          --df-messenger-chat-background: #f3f6fc;
          --df-messenger-message-user-background: #d3e3fd;
          --df-messenger-message-bot-background: #fff;
          margin-top: 30px;
          height: 620px;
          width: 550px;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <df-messenger
      project-id="bajajbotravi"
      agent-id="33597351-07ab-4638-addd-fe1bda397df0"
      language-code="en"
      max-query-length="-1"
      allow-feedback="all"
    >
      <df-messenger-chat chat-title="BajajBP" />
    </df-messenger>
  );
};

export default Chatbot;
