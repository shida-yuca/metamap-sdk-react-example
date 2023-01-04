import { useRef, useEffect, useState } from 'react';

function App() {
  const button = useRef(null);
  const [clientid] = useState('62d1582947b7d9001dd20c1a');
  const [flowid] = useState('63ade1bd0f7132001bd93608');
  const [metadata] = useState('{"userId": "29428231-efa7-44f7-b1cc-897d186025f9"}');

  useEffect(() => {
    if (button.current) {
      button.current.addEventListener('metamap:loaded', ({ detail }) => console.log('[METAMAP] Loaded', detail));
      button.current.addEventListener('metamap:userStartedSdk', ({ detail }) => console.log('[METAMAP] User started verification', detail));
      button.current.addEventListener('metamap:userFinishedSdk', ({ detail }) => console.log('[METAMAP] User finished verification', detail));
      button.current.addEventListener('metamap:exitedSdk', ({ detail }) => console.log('[METAMAP] User exited verification', detail));
    }
  }, [button]);

  return (
    <metamap-button
      ref={button}
      clientid={clientid}
      flowid={flowid}
      metadata={metadata}
    >
    </metamap-button>
  );
}

export default App;
