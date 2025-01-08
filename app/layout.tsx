// import global css
import "./globals.css"
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss =  false;
export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>  
        {/* content */}
        <section>
        {children}
        </section>
          

        {/* footer */}
        <footer className="py-4 mt-4 text-center">
          copyright &copy; 2024 - 2P 
        </footer>
      </body>
    </html>
  );
}
