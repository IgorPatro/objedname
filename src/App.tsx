import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Calendar } from "./components/calendar";
import { Navbar } from "./components/navbar";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="w-screen h-screen bg-slate-800 flex justify-center items-center text-white flex-col gap-4">
        <div className="max-w-[450px] flex flex-col gap-6 justify-center items-center">
          <Navbar />
          <Calendar />
        </div>
      </main>
    </QueryClientProvider>
  );
};

export default App;
