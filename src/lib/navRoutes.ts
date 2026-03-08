interface Route {
    path: string;
    name: string;
}   

export const ROUTES: Route[] = [
    { path: '/', name: 'Home' },
    { path: '/#about-us', name: 'About Us' },
    { path: '/events', name: 'Events' },
    { path: '/gallery', name: 'Gallery' },
    { path: '/teams', name: 'Our Team' },
    { path: '/founders', name: 'Founders' },
    // { path: '/recursion', name: 'Recursion 6.0' },
    { path: '/sih-2025', name: 'SIH 2025' },
    { path: '/codertine-25', name: 'Codertine 6.0' }
]