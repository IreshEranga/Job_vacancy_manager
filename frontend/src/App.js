// import './App.css';
// import { Link } from 'react-router-dom';
// import AppRoutes from './routes/app-routes';

// function App() {
//   return (
//     <div className="App">
//       hi

//       <Link href="/home">Home</Link>
//     </div>
//   );
// }

// export default App;
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AppRoutes from "./routes/app-routes";

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Toaster position="top-center" reverseOrder={false} />
        <AppRoutes />
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </>
  );
};

export default App;
