import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Caso from "./pages/Caso";
import Pruebas from "./pages/Pruebas";
import Extorsion from "./pages/Extorsion";
import Amenazas from "./pages/Amenazas";
import Noticias from "./pages/Noticias";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/caso" element={<Caso />} />
          <Route path="/pruebas" element={<Pruebas />} />
          <Route path="/extorsion" element={<Extorsion />} />
          <Route path="/amenazas" element={<Amenazas />} />
          <Route path="/noticias" element={<Noticias />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
