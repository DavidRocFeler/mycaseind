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
import { useState } from 'react';

const queryClient = new QueryClient();

const App = () => {
  // Estado global del idioma en el componente App
  const [currentLanguage, setCurrentLanguage] = useState<'nl' | 'es'>('nl');

  const handleLanguageChange = (lang: 'nl' | 'es') => {
    setCurrentLanguage(lang);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={
              <Layout 
                isIndex={true} 
                currentLanguage={currentLanguage}
                onLanguageChange={handleLanguageChange}
              />
            } />
            <Route path="/caso" element={
              <Layout 
                currentLanguage={currentLanguage}
                onLanguageChange={handleLanguageChange}
              >
                <Caso currentLanguage={currentLanguage} />
              </Layout>
            } />
            <Route path="/pruebas" element={
              <Layout 
                currentLanguage={currentLanguage}
                onLanguageChange={handleLanguageChange}
              >
                <Pruebas currentLanguage={currentLanguage} />
              </Layout>
            } />
            <Route path="/extorsion" element={
              <Layout 
                currentLanguage={currentLanguage}
                onLanguageChange={handleLanguageChange}
              >
                <Extorsion currentLanguage={currentLanguage} />
              </Layout>
            } />
            <Route path="/peligros" element={
              <Layout 
                currentLanguage={currentLanguage}
                onLanguageChange={handleLanguageChange}
              >
                <Peligros currentLanguage={currentLanguage} />
              </Layout>
            } />
            {/* <Route path="/noticias" element={
              <Layout 
                currentLanguage={currentLanguage}
                onLanguageChange={handleLanguageChange}
              >
                <Noticias currentLanguage={currentLanguage} />
              </Layout>
            } /> */}
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={
              <Layout 
                currentLanguage={currentLanguage}
                onLanguageChange={handleLanguageChange}
              >
                <NotFound currentLanguage={currentLanguage} />
              </Layout>
            } />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;