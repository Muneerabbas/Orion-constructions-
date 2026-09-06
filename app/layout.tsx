import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title:'Orion Constructions | Built for the life ahead', description:'Thoughtful construction for homes, businesses and the places that bring Kashmir forward.', icons:{ icon:'/assets/logo.jpeg' }, openGraph:{title:'Orion Constructions | Built for the life ahead',description:'Construction, civil works and commercial spaces across Kashmir.',type:'website'} };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }
