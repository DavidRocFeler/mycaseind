const Footer = () => {
  return (
    <footer className="header-bg border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <p className="title-purple text-sm">
            Todos los hechos aquí presentados son verídicos y se declaran bajo juramento.
          </p>
          <p className="text-muted-foreground text-xs mt-2">
            Documentación presentada al IND - {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;