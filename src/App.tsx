import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Caso from "./pages/Caso";
import Pruebas from "./pages/Pruebas";
import Extorsion from "./pages/Extorsion";
import Noticias from "./pages/Noticias";
import NotFound from "./pages/NotFound";
import Peligros from "./pages/Amenazas";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout isIndex={true} />} />
          <Route path="/caso" element={
            <Layout>
              <Caso />
            </Layout>
          } />
          <Route path="/pruebas" element={
            <Layout>
              <Pruebas />
            </Layout>
          } />
          <Route path="/extorsion" element={
            <Layout>
              <Extorsion />
            </Layout>
          } />
          <Route path="/peligros" element={
            <Layout>
              <Peligros />
            </Layout>
          } />
          <Route path="/noticias" element={
            <Layout>
              <Noticias />
            </Layout>
          } />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={
            <Layout>
              <NotFound />
            </Layout>
          } />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;