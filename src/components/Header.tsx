import logoImage from '@/assets/logo.png';

const Header = () => {
  console.log('Header está renderizando');
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-green-500/20">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img src={logoImage} alt="ABCN Logo" className="h-10 w-auto" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;