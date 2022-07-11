import NxWelcome from './nx-welcome';
import { QueryClient, QueryClientProvider } from "react-query";
import { trpc } from '../trpc';
import { useState } from 'react';

const client = new QueryClient();



function App() {
  const [trpcClient] = useState(() => {
    return trpc.createClient({
      url: "http://localhost:3333/trpc"
    })
  })

  return (
    <trpc.Provider client={trpcClient} queryClient={client}>
      <QueryClientProvider client={client}>
          <NxWelcome title="app" />
      </QueryClientProvider>
    </trpc.Provider>
  );
}

export default App;
