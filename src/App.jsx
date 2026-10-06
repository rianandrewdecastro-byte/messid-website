import React, { useState } from 'react';
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';
import {
  Shield,
  Zap,
  Tag,
  Handshake,
  Store,
  TrendingUp,
  ArrowRight,
  Cpu,
  Wrench,
  MapPin,
  Phone,
  Mail,
  Globe,
  HelpCircle,
  ChevronDown,
  Send,
  Info,
  Calendar,
  Target,
  Eye,
  Users,
  Home,
  Search,
  CheckCircle,
} from 'lucide-react';

// --- FULL PARTNER DATA ---
const partnerData = [
  {
    id: 2,
    name: 'Bitbase Computer & Tech',
    logo: 'https://raw.githubusercontent.com/rianandrewdecastro-byte/mess-id-assets/main/bitbase.png',
    category: 'General',
    location: 'P. Gomez, Batangas City',
    discount:
      '5% OFF on replacement parts, cleaning services, other selected repair and technical services, and selected products',
  },
  {
    id: 3,
    name: 'But First, Coffee – Sta. Rita',
    logo: 'https://raw.githubusercontent.com/rianandrewdecastro-byte/mess-id-assets/main/bfc.png',
    category: 'General',
    location: 'Sta. Rita, Batangas',
    discount:
      '10% OFF on all drinks. One (1) discount may be availed per transaction',
  },
  {
    id: 4,
    name: 'Engr. Guides Office and School Supplies',
    logo: 'https://raw.githubusercontent.com/rianandrewdecastro-byte/mess-id-assets/main/engrguides.png',
    category: 'General',
    location: 'Alangilan, Batangas City',
    discount: '5% OFF on all items',
  },
  {
    id: 5,
    name: 'Engr. Labs',
    logo: 'https://raw.githubusercontent.com/rianandrewdecastro-byte/mess-id-assets/main/engrlabs.png',
    category: 'General',
    location: 'Alangilan, Batangas City',
    discount: '10% OFF',
  },
  {
    id: 6,
    name: 'CALQ Scientific Calculators',
    logo: 'https://raw.githubusercontent.com/rianandrewdecastro-byte/mess-id-assets/main/calq.png',
    category: 'General',
    location: 'Alangilan, Batangas City',
    discount: '10% OFF',
  },
  {
    id: 7,
    name: 'Vertex Prints',
    logo: 'https://raw.githubusercontent.com/rianandrewdecastro-byte/mess-id-assets/main/vertexprints.png',
    category: 'General',
    location: 'Alangilan, Batangas City',
    discount:
      '10% OFF, subject to a minimum of 150 pages for printing and 50 pages for photocopying',
  },
  {
    id: 8,
    name: 'Golden Tub Laundry Shop',
    logo: 'https://raw.githubusercontent.com/rianandrewdecastro-byte/mess-id-assets/main/goldentub.png',
    category: 'General',
    location:
      'Lot 4 Blk 10 Neptune St., Golden Country Homes, Alangilan, Batangas City',
    discount: '₱10 OFF per load',
  },
  {
    id: 9,
    name: 'InvincibiliTEA',
    logo: 'https://raw.githubusercontent.com/rianandrewdecastro-byte/mess-id-assets/main/inivibilitea.png',
    category: 'General',
    location: 'Neptune St., Golden Country Homes, Alangilan, Batangas City',
    discount:
      '₱5 OFF on rice meals; 5% OFF on purchases worth ₱500 and above; 10% OFF on purchases worth ₱1,500 and above; applicable free or discounted meals on the member’s birthdate and during their birth month',
  },
  {
    id: 10,
    name: 'JM 3D DESIGN',
    logo: 'https://raw.githubusercontent.com/rianandrewdecastro-byte/mess-id-assets/main/jm3d.png',
    category: 'General',
    location: 'Purok Uno, Brgy. Mabini, Lipa City',
    discount: '5% OFF on 3D printing; 3% OFF on design projects',
  },
  {
    id: 11,
    name: 'Klasik Fades and Clothing',
    logo: 'https://raw.githubusercontent.com/rianandrewdecastro-byte/mess-id-assets/main/klasikfades.png',
    category: 'General',
    location: 'Neptune 1, Golden Country Homes, Alangilan, Batangas City',
    discount:
      '₱10 OFF on the third haircut; 1 FREE HAIRCUT during the member’s birthday month; ₱50 OFF on clothing purchases worth ₱600 or more',
  },
  {
    id: 12,
    name: 'LCKD IN Study Hub',
    logo: 'https://raw.githubusercontent.com/rianandrewdecastro-byte/mess-id-assets/main/lckdin.png',
    category: 'General',
    location: 'Alangilan, Batangas City',
    discount:
      'Exclusive Benefit — Choose ONE: Free study session after every 8 study sessions; ₱10 OFF for every 15 accumulated study-session hours; free 3-hour study session after exceeding 60 accumulated hours; Group Session Discount: 10% OFF for 5–9 members, 15% OFF for 10–14 members, 20% OFF for 15+ members. Organization Officer Benefit: 1 free study-session hour for up to 12 MESS officers for every 200 accumulated MESS member study-session hours',
  },
  {
    id: 13,
    name: 'Local Hippie Crafts',
    logo: 'https://raw.githubusercontent.com/rianandrewdecastro-byte/mess-id-assets/main/localhippiecraft.jpg',
    category: 'General',
    location: 'San Isidro, Sitio Gitna, Batangas City',
    discount: '5% OFF on all products',
  },
  {
    id: 14,
    name: 'Max Mango',
    logo: 'https://raw.githubusercontent.com/rianandrewdecastro-byte/mess-id-assets/main/maxmango.png',
    category: 'General',
    location: 'Lipa City, Batangas',
    discount: '10% OFF on all drinks',
  },
  {
    id: 15,
    name: 'Modesto’s Farm and Resort',
    logo: 'https://raw.githubusercontent.com/rianandrewdecastro-byte/mess-id-assets/main/modestoresort.png',
    category: 'General',
    location: 'Sitio Sahingan, Brgy. Balete, Batangas City',
    discount:
      'Farm & Resort: 15% OFF for groups where all individuals present valid MESS IDs. For mixed groups, the minimum rate applies to the first 20 persons, while MESS members among excess persons receive ₱50 OFF each',
  },
  {
    id: 16,
    name: 'Modesto’s Pickleball',
    logo: 'https://raw.githubusercontent.com/rianandrewdecastro-byte/mess-id-assets/main/modestopickleball.png',
    category: 'General',
    location: 'Sitio Sahingan, Brgy. Balete, Batangas City',
    discount:
      '₱50 OFF/hour for groups where all individuals have valid MESS IDs; ₱25 OFF/hour for mixed groups with at least 2 MESS members',
  },
  {
    id: 17,
    name: 'Papelia',
    logo: 'https://raw.githubusercontent.com/rianandrewdecastro-byte/mess-id-assets/main/papelia.png',
    category: 'General',
    location: 'E-Commerce Business',
    discount: '20% OFF on all bouquets with a minimum spend of ₱500',
  },
  {
    id: 18,
    name: 'Ta Mila’s Shawarma',
    logo: 'https://raw.githubusercontent.com/rianandrewdecastro-byte/mess-id-assets/main/tamilasshawarma.png',
    category: 'General',
    location: 'Arce Subdivision, Batangas City',
    discount: '20% OFF on all food and drinks',
  },
  {
    id: 19,
    name: 'The Good Coffee',
    logo: 'https://raw.githubusercontent.com/rianandrewdecastro-byte/mess-id-assets/main/tgc.png',
    category: 'General',
    location: 'Kumintang Ilaya, Batangas City',
    discount:
      '10% OFF on all drinks. One (1) discount may be availed per transaction',
  },
  {
    id: 20,
    name: 'Zafira Fitness Gym',
    logo: 'https://raw.githubusercontent.com/rianandrewdecastro-byte/mess-id-assets/main/zafirafitnessgym.png',
    category: 'General',
    location:
      '3rd Flr., PPG Commercial Building, National Road, Kumintang Ilaya, Batangas City',
    discount:
      '20% OFF on the Lifetime Membership Fee; 25% OFF on the Monthly Gym Fee',
  },
  {
    id: 21,
    name: 'Butch (Alangilan & Lipa)',
    logo: 'https://raw.githubusercontent.com/rianandrewdecastro-byte/mess-id-assets/main/butch.png',
    category: 'Silver Peak',
    location: 'Alangilan & Lipa City',
    discount: '10% OFF',
  },
  {
    id: 22,
    name: 'Hungry Hippo (Multiple Locations)',
    logo: 'https://raw.githubusercontent.com/rianandrewdecastro-byte/mess-id-assets/main/hungryhippo.png',
    category: 'Silver Peak',
    location: 'SM City Batangas, UB Lipa, Caltex Tanauan, KM 36 SLEX',
    discount: '10% OFF',
  },
  {
    id: 23,
    name: 'Shakey’s (Multiple Locations)',
    logo: 'https://raw.githubusercontent.com/rianandrewdecastro-byte/mess-id-assets/main/shakeys.png',
    category: 'Silver Peak',
    location:
      'Batangas, Diversion, SLEX, SM Sto. Tomas, Sto. Tomas Hi-way, Montalban',
    discount: '10% OFF',
  },
  {
    id: 24,
    name: '232 Café',
    logo: 'https://raw.githubusercontent.com/rianandrewdecastro-byte/mess-id-assets/main/232cafe.png',
    category: 'Silver Peak',
    location: '232 Caltex Rd, Batangas City',
    discount: '10% OFF',
    whiteBg: true,
  },
  {
    id: 25,
    name: '232 Restaurant / Taco Joe’s',
    logo: 'https://raw.githubusercontent.com/rianandrewdecastro-byte/mess-id-assets/main/232resto.png',
    category: 'Silver Peak',
    location: '232 Caltex Rd, Batangas City',
    discount: '10% OFF',
    whiteBg: true,
  },
  {
    id: 26,
    name: 'South Peak',
    logo: 'https://raw.githubusercontent.com/rianandrewdecastro-byte/mess-id-assets/main/southpeaks.png',
    category: 'Silver Peak',
    location: '232 Caltex Rd, Batangas City',
    discount: '10% OFF',
    whiteBg: true,
  },
];

// --- COMPONENTS ---
const MechanicalBackground = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-[#050c08]">
    <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-[#39B54A] rounded-full blur-[150px] opacity-20 animate-pulse-glow"></div>
    <div
      className="absolute bottom-[-10%] right-[-10%] w-[30vw] h-[30vw] bg-[#00f0ff] rounded-full blur-[150px] opacity-10 animate-pulse-glow"
      style={{ animationDelay: '2s' }}
    ></div>
    <div
      className="absolute inset-0 opacity-[0.05]"
      style={{
        backgroundImage:
          'linear-gradient(#39B54A 1px, transparent 1px), linear-gradient(90deg, #39B54A 1px, transparent 1px)',
        backgroundSize: '50px 50px',
      }}
    ></div>
    <div className="absolute top-[10%] right-[10%] opacity-10">
      <svg
        className="w-64 h-64 animate-spin-slow text-[#39B54A]"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v4H7v2h4v4h2v-4h4v-2h-4V7z" />
      </svg>
    </div>
    <div className="absolute bottom-[20%] left-[5%] opacity-10">
      <svg
        className="w-96 h-96 animate-spin-reverse text-[#00f0ff]"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.06-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.73,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.06,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z" />
      </svg>
    </div>
  </div>
);

const InteractiveIDCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 200, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 200, damping: 25 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['20deg', '-20deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-20deg', '20deg']);
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ['0%', '100%']);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ['0%', '100%']);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <div
      className="relative w-full max-w-[500px] aspect-[1.58/1] perspective-1000 cursor-pointer group z-20"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="w-full h-full"
      >
        <motion.div
          className="w-full h-full relative preserve-3d"
          style={{
            rotateX: isFlipped ? 0 : rotateX,
            rotateY: isFlipped ? 180 : rotateY,
          }}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{
            duration: 0.8,
            type: 'spring',
            stiffness: 120,
            damping: 20,
          }}
        >
          <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(57,181,74,0.3)] border-2 border-[#39B54A]/50 bg-[#0A1C14]">
            <img
              src="https://raw.githubusercontent.com/rianandrewdecastro-byte/mess-id-assets/main/front-id.png"
              alt="MESS ID Front"
              className="w-full h-full object-cover z-10 relative"
            />
            <motion.div
              className="absolute inset-0 z-50 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay"
              style={{
                background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.8) 0%, transparent 60%)`,
              }}
            />
          </div>
          <div
            className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(57,181,74,0.3)] border-2 border-[#39B54A]/50 bg-[#0A1C14]"
            style={{ transform: 'rotateY(180deg)' }}
          >
            <img
              src="https://raw.githubusercontent.com/rianandrewdecastro-byte/mess-id-assets/main/back-id.png"
              alt="MESS ID Back"
              className="w-full h-full object-cover z-10 relative"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

// --- INFINITE PARTNER MARQUEE COMPONENT ---
const PartnerMarquee = () => {
  // Duplicate the array to create a seamless infinite loop
  const marqueeItems = [...partnerData, ...partnerData];

  return (
    <div className="marquee-container marquee-fade py-10 w-full bg-[#050c08]">
      <div className="animate-marquee">
        {marqueeItems.map((partner, index) => (
          <div
            key={`${partner.id}-${index}`}
            className={`w-36 h-36 rounded-xl flex items-center justify-center p-4 mx-4 shrink-0 transition-all duration-300 border ${
              partner.whiteBg
                ? 'bg-white border-white/50 shadow-[0_0_15px_rgba(255,255,255,0.2)]'
                : 'glass-panel border-[#39B54A]/20 hover:border-[#39B54A]'
            }`}
          >
            {partner.logo ? (
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-full h-full object-contain drop-shadow-[0_0_10px_rgba(57,181,74,0.3)]"
              />
            ) : (
              <Store className="text-gray-500 w-12 h-12" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// --- MAIN APP ---
const MESSLandingPage = () => {
  const [activePage, setActivePage] = useState('home');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');

  const filteredPartners = partnerData.filter((partner) => {
    const matchesSearch =
      partner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      partner.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      partner.discount.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      filterCategory === 'All' || partner.category === filterCategory;
    return matchesSearch && matchesFilter;
  });

  const navItems = [
    { id: 'home', label: 'HOME', icon: <Home size={16} /> },
    { id: 'partners', label: 'PARTNERS', icon: <Store size={16} /> },
    { id: 'about', label: 'ABOUT', icon: <Info size={16} /> },
    { id: 'faq', label: 'FAQ', icon: <HelpCircle size={16} /> },
    { id: 'contact', label: 'CONTACT', icon: <Mail size={16} /> },
  ];

  return (
    <div className="min-h-screen bg-transparent text-white font-sans selection:bg-[#39B54A] selection:text-black relative">
      <MechanicalBackground />

      {/* --- FIXED TOP NAVIGATION --- */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 md:px-12 py-4 backdrop-blur-xl border-b border-[#39B54A]/20 bg-[#050c08]/90 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
        <div className="flex items-center gap-4 shrink-0">
          <img
            src="/mess-logo.png"
            alt="MESS Logo"
            className="h-12 md:h-16 object-contain drop-shadow-[0_0_15px_rgba(57,181,74,0.5)] cursor-pointer"
            onClick={() => setActivePage('home')}
          />
        </div>

        <div className="flex-1 flex justify-center lg:justify-end items-center gap-2 md:gap-6 mx-4 overflow-x-auto hide-scrollbar">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className={`relative flex items-center gap-2 px-4 py-2 font-mono text-sm font-bold tracking-wider transition-all duration-300 whitespace-nowrap ${
                activePage === item.id
                  ? 'text-[#39B54A]'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {item.icon} {item.label}
              {activePage === item.id && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-[#39B54A] shadow-[0_0_10px_#39B54A]"
                />
              )}
            </button>
          ))}
        </div>

        <div className="shrink-0">
          <button className="hidden md:block bg-[#39B54A] hover:bg-[#2d913b] text-black font-bold py-3 px-6 rounded-none skew-x-[-10deg] transition-all duration-300 hover:shadow-[0_0_30px_rgba(57,181,74,0.6)] border border-[#8aff9e]">
            <span className="block skew-x-[10deg] text-sm">PRE ORDER</span>
          </button>
        </div>
      </nav>

      {/* --- MAIN CONTENT AREA --- */}
      <main className="relative z-10 pt-28 md:pt-32 min-h-screen flex flex-col">
        <AnimatePresence mode="wait">
          {/* ================= HOME PAGE ================= */}
          {activePage === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex-1"
            >
              <section className="min-h-[85vh] flex flex-col lg:flex-row items-center justify-center px-6 md:px-12 gap-16 py-20">
                <div className="flex-1 max-w-2xl">
                  <h1 className="text-6xl md:text-8xl font-black leading-none mb-6 tracking-tighter">
                    UNLOCK YOUR <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#39B54A] to-[#00f0ff] drop-shadow-[0_0_20px_rgba(57,181,74,0.4)]">
                      ENGINEERING EDGE
                    </span>
                  </h1>
                  <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-lg font-mono border-l-4 border-[#39B54A] pl-4">
                    Your official MESS Identification Card is more than just an
                    ID. It's your access key to exclusive privileges, academic
                    validation, and a network of accredited partners.
                  </p>
                  <div className="flex flex-wrap gap-6">
                    <button className="bg-[#39B54A] hover:bg-[#2d913b] text-black font-bold py-4 px-10 rounded-none flex items-center gap-3 transition-all duration-300 hover:shadow-[0_0_40px_rgba(57,181,74,0.6)] border-2 border-transparent hover:border-white">
                      PRE ORDER NOW <ArrowRight size={20} />
                    </button>
                    <button
                      onClick={() => setActivePage('partners')}
                      className="border-2 border-[#39B54A]/50 hover:border-[#39B54A] hover:bg-[#39B54A]/10 text-white font-bold py-4 px-10 rounded-none transition-all duration-300 font-mono"
                    >
                      VIEW PARTNERS
                    </button>
                  </div>
                </div>
                <div className="flex-1 flex justify-center items-center">
                  <InteractiveIDCard />
                </div>
              </section>

              <section className="py-24 px-6 md:px-12 bg-[#050c08]/60 border-y border-[#39B54A]/20 relative">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex-1"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <Info className="text-[#00f0ff]" size={32} />
                      <h2 className="text-4xl font-black tracking-tight">
                        WHAT IS THE{' '}
                        <span className="text-[#39B54A]">MESS ID?</span>
                      </h2>
                    </div>
                    <p className="text-gray-300 leading-relaxed text-lg mb-6 font-light">
                      The MESS Identification Card is the official institutional
                      ID for members of the Mechanical Engineering Student
                      Society at Batangas State University - Alangilan Campus.
                    </p>
                    <p className="text-gray-400 leading-relaxed mb-8">
                      It serves as your primary proof of membership, granting
                      you access to organization events, academic resources, and
                      a vast network of accredited commercial partners. Designed
                      with a scannable QR verification system, it ensures
                      security and authenticity for both students and business
                      owners.
                    </p>
                    <ul className="space-y-4 font-mono text-sm">
                      <li className="flex items-center gap-3 text-[#8aff9e]">
                        <CheckCircle size={18} /> Valid for Academic Year
                        2026-2027
                      </li>
                      <li className="flex items-center gap-3 text-[#8aff9e]">
                        <CheckCircle size={18} /> QR-Code Verified for
                        Anti-Fraud
                      </li>
                      <li className="flex items-center gap-3 text-[#8aff9e]">
                        <CheckCircle size={18} /> Official Institutional
                        Credential
                      </li>
                    </ul>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex-1 flex justify-center"
                  >
                    <div className="relative w-full max-w-md aspect-square rounded-full border border-[#00f0ff]/30 flex items-center justify-center animate-spin-slow">
                      <div className="absolute inset-4 rounded-full border border-[#00f0ff]/50 border-dashed"></div>
                      <div className="absolute inset-12 rounded-full border border-[#39B54A]/30 animate-spin-reverse"></div>
                      <div className="w-40 h-40 bg-[#00f0ff]/20 rounded-full blur-3xl animate-pulse-glow"></div>
                      <Shield className="text-[#00f0ff] w-20 h-20 relative z-10" />
                    </div>
                  </motion.div>
                </div>
              </section>

              <section className="py-32 px-6 md:px-12 relative">
                <div className="max-w-7xl mx-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                  >
                    <div className="flex justify-center items-center gap-4 mb-4">
                      <Cpu className="text-[#39B54A]" size={32} />
                      <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase">
                        Why Get a MESS ID?
                      </h2>
                      <Cpu className="text-[#39B54A]" size={32} />
                    </div>
                    <p className="text-gray-400 max-w-2xl mx-auto font-mono">
                      Unlock a suite of benefits designed to optimize your
                      academic journey and daily operations.
                    </p>
                  </motion.div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                      {
                        icon: <Tag size={32} />,
                        title: 'EXCLUSIVE DISCOUNTS',
                        desc: 'Enjoy special price reductions and deals exclusively negotiated for MESS members at partner establishments.',
                      },
                      {
                        icon: <Shield size={32} />,
                        title: 'SENSE OF UNITY',
                        desc: 'Having the MESS ID deepens your connection to our ever growing community.',
                      },
                      {
                        icon: <Zap size={32} />,
                        title: 'PROMOTIONAL OFFERS',
                        desc: 'Receive limited-time promotional offers and bundled packages from our accredited partners.',
                      },
                      {
                        icon: <Handshake size={32} />,
                        title: 'PARTNER NETWORK',
                        desc: 'Connect with a growing network of local businesses that value and support the engineering community.',
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="glass-panel hud-corner p-8 group transition-all duration-500 hover:bg-[#0A1C14]"
                      >
                        <div className="text-[#39B54A] mb-6 bg-[#39B54A]/10 w-16 h-16 flex items-center justify-center rounded-lg border border-[#39B54A]/30 group-hover:scale-110 transition-transform duration-300">
                          {item.icon}
                        </div>
                        <h3 className="text-lg font-bold mb-3 tracking-wider font-mono text-[#8aff9e]">
                          {item.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed text-sm">
                          {item.desc}
                        </p>
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-[#39B54A] opacity-0 group-hover:opacity-100 group-hover:animate-scanline"></div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>

              {/* PARTNER MARQUEE SECTION */}
              <section className="py-24 bg-[#0A1C14]/80 border-t border-[#39B54A]/20 overflow-hidden">
                <div className="text-center mb-10">
                  <h3 className="text-2xl font-bold mb-4 text-gray-400 font-mono tracking-widest uppercase">
                    Trusted by Our Accredited Partners
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Show your MESS ID to avail of exclusive discounts from these
                    establishments.
                  </p>
                </div>
                <PartnerMarquee />
              </section>
            </motion.div>
          )}

          {/* ================= PARTNERS PAGE ================= */}
          {activePage === 'partners' && (
            <motion.div
              key="partners"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="flex-1 px-6 md:px-12 py-12 max-w-7xl mx-auto w-full"
            >
              <div className="text-center mb-12">
                <h2 className="text-5xl font-black mb-4">
                  ACCREDITED <span className="text-[#39B54A]">PARTNERS</span>
                </h2>
                <p className="text-gray-400 font-mono">
                  Show your MESS ID to avail of these exclusive discounts.
                </p>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 bg-[#0A1C14]/60 p-6 border border-[#39B54A]/20 backdrop-blur-md">
                <div className="relative w-full md:w-1/2">
                  <Search
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                    size={20}
                  />
                  <input
                    type="text"
                    placeholder="Search partners, locations, or discounts..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-[#050c08] border border-white/10 focus:border-[#39B54A] text-white px-12 py-4 outline-none transition-colors font-mono"
                  />
                </div>
                <div className="flex gap-4 w-full md:w-auto overflow-x-auto hide-scrollbar pb-2 md:pb-0">
                  {['All', 'General', 'Silver Peak'].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setFilterCategory(cat)}
                      className={`px-6 py-4 font-mono text-sm font-bold tracking-wider transition-all duration-300 whitespace-nowrap border ${
                        filterCategory === cat
                          ? 'bg-[#39B54A] text-black border-[#39B54A]'
                          : 'bg-transparent text-gray-400 border-white/20 hover:border-[#39B54A] hover:text-[#39B54A]'
                      }`}
                    >
                      {cat.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence>
                  {filteredPartners.map((partner) => (
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      key={partner.id}
                      className="glass-panel hud-corner p-8 flex flex-col items-center text-center hover:bg-[#0A1C14] transition-all duration-300 relative group"
                    >
                      <div
                        className={`w-32 h-32 rounded-xl flex items-center justify-center p-4 mb-6 group-hover:scale-105 transition-transform duration-300 border ${
                          partner.whiteBg
                            ? 'bg-white border-white/50 shadow-[0_0_15px_rgba(255,255,255,0.2)]'
                            : 'bg-white/5 border-white/10'
                        }`}
                      >
                        {partner.logo ? (
                          <img
                            src={partner.logo}
                            alt={partner.name}
                            className="w-full h-full object-contain drop-shadow-[0_0_10px_rgba(57,181,74,0.2)]"
                          />
                        ) : (
                          <Store className="text-gray-500 w-12 h-12" />
                        )}
                      </div>

                      <h3 className="text-2xl font-bold font-mono text-[#8aff9e] mb-2">
                        {partner.name}
                      </h3>
                      <div className="w-full space-y-4 text-left border-t border-white/10 pt-6 mt-4 flex-grow">
                        <div className="flex items-start gap-3 text-sm text-gray-300">
                          <MapPin
                            size={16}
                            className="text-[#39B54A] mt-1 shrink-0"
                          />
                          <span>{partner.location}</span>
                        </div>
                        <div className="flex items-start gap-3 text-sm text-[#00f0ff] font-bold bg-[#00f0ff]/10 p-4 rounded border border-[#00f0ff]/20 mt-4">
                          <Tag size={16} className="shrink-0 mt-1" />
                          <span>{partner.discount}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
              {filteredPartners.length === 0 && (
                <div className="text-center py-20 text-gray-500 font-mono">
                  <p>No partners found matching your search.</p>
                </div>
              )}
            </motion.div>
          )}

          {/* ================= ABOUT PAGE ================= */}
          {activePage === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="flex-1 px-6 md:px-12 py-12 max-w-6xl mx-auto w-full space-y-16"
            >
              <div className="text-center mb-12">
                <h2 className="text-5xl font-black mb-4">
                  ABOUT <span className="text-[#39B54A]">MESS</span>
                </h2>
                <p className="text-gray-400 font-mono">
                  The Mechanical Engineering Student Society.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="glass-panel hud-corner p-8">
                  <div className="flex items-center gap-4 mb-4 text-[#00f0ff]">
                    <Target size={32} />
                    <h3 className="text-2xl font-bold font-mono">
                      ProgMESS: Where Partnerships Shape Progress
                    </h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    This is a flagship initiative of the Mechanical Engineering
                    Student Society (MESS) that introduces and promotes the MESS
                    ID as an exclusive membership card that grants students
                    access to partner establishments, special discounts, and
                    various privileges. The project aims to expand and
                    strengthen MESS's network of sponsors and partners to
                    continuously enhance the benefits of the MESS ID while
                    providing meaningful opportunities for its members. Through
                    these strategic collaborations, the initiative also seeks to
                    secure support for MESS programs, projects, and events,
                    fostering mutually beneficial relationships between MESS,
                    its partners, and the Mechanical Engineering community.
                  </p>
                </div>
                <div className="glass-panel hud-corner p-8">
                  <div className="flex items-center gap-4 mb-4 text-[#39B54A]">
                    <Eye size={32} />
                    <h3 className="text-2xl font-bold font-mono">
                      OUR MISSION
                    </h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    We aim to establish and strengthen partnerships with
                    businesses, organizations, and institutions. Sustain and
                    enhance the benefits of the MESS ID Program by expanding
                    partner establishments and improving member privileges.
                    Extend the MESS ID to 5th-year students, higher-year
                    students, and faculty, allowing them to enjoy exclusive
                    partner benefits and services. Secure sponsorships and
                    collaborations to support MESS programs, projects, and
                    events. Foster long-term partnerships that create value for
                    both MESS and its stakeholders.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* ================= FAQ PAGE ================= */}
          {activePage === 'faq' && (
            <motion.div
              key="faq"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="flex-1 px-6 md:px-12 py-12 max-w-3xl mx-auto w-full"
            >
              <div className="text-center mb-16">
                <h2 className="text-5xl font-black mb-4">
                  FAQ & <span className="text-[#39B54A]">GUIDELINES</span>
                </h2>
                <p className="text-gray-400 font-mono">
                  Common questions about the MESS Identification Card.
                </p>
              </div>
              <div className="space-y-6">
                {[
                  {
                    q: 'How do I claim my MESS ID?',
                    a: 'Each Block Officer Representative will be contacted by the Committee on Sponsorship and Partnership (CSP) regarding the claiming and sorting of their respective block’s MESS IDs. All students may claim their MESS ID through the Class Representative. ',
                  },
                  {
                    q: 'What if I lose my ID?',
                    a: 'Report it immediately to a MESS officer. A replacement fee of ₱70 will be charged for a new card.',
                  },
                  {
                    q: 'How long is the validity of the ID?',
                    a: 'The MESS ID is valid for the current academic year (2026-2027). You will need to renew it next year.',
                  },
                  {
                    q: 'How do partners verify my ID?',
                    a: 'Presenting your MESS ID to their establishment confirms your active membership status.',
                  },
                ].map((item, index) => (
                  <details
                    key={index}
                    className="glass-panel group p-6 cursor-pointer"
                  >
                    <summary className="flex justify-between items-center font-bold text-lg font-mono text-[#8aff9e] list-none">
                      {item.q}
                      <ChevronDown className="text-[#39B54A] group-open:rotate-180 transition-transform duration-300" />
                    </summary>
                    <p className="mt-4 text-gray-400 leading-relaxed border-t border-white/10 pt-4">
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>
            </motion.div>
          )}

          {/* ================= CONTACT PAGE ================= */}
          {activePage === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="flex-1 px-6 md:px-12 py-12 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12"
            >
              <div className="space-y-8">
                <h3 className="text-5xl font-black mb-6">
                  GET IN <span className="text-[#39B54A]">TOUCH</span>
                </h3>
                <p className="text-gray-400 mb-8 text-lg">
                  Have questions about your ID, partnerships, or events? Reach
                  out to the MESS officers.
                </p>
                <div className="glass-panel p-6 flex items-center gap-6">
                  <div className="bg-[#39B54A]/10 p-4 rounded-lg border border-[#39B54A]/30">
                    <Globe className="text-[#39B54A]" size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold font-mono">SOCIAL MEDIA</h4>
                    <p className="text-gray-400">
                      https://www.facebook.com/batstateumess
                    </p>
                  </div>
                </div>
                <div className="glass-panel p-6 flex items-center gap-6">
                  <div className="bg-[#39B54A]/10 p-4 rounded-lg border border-[#39B54A]/30">
                    <Mail className="text-[#39B54A]" size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold font-mono">EMAIL</h4>
                    <p className="text-gray-400">
                      messpartnership.bsu@gmail.com
                    </p>
                  </div>
                </div>
              </div>
              <div className="glass-panel hud-corner p-10">
                <h3 className="text-2xl font-bold mb-8 font-mono text-[#8aff9e]">
                  SEND A MESSAGE
                </h3>
                <form
                  className="space-y-6"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div>
                    <label className="block text-sm font-mono text-gray-400 mb-2">
                      FULL NAME
                    </label>
                    <input
                      type="text"
                      className="w-full bg-[#050c08] border border-white/20 focus:border-[#39B54A] p-4 text-white outline-none transition-colors"
                      placeholder="Juan Dela Cruz"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-mono text-gray-400 mb-2">
                      EMAIL ADDRESS
                    </label>
                    <input
                      type="email"
                      className="w-full bg-[#050c08] border border-white/20 focus:border-[#39B54A] p-4 text-white outline-none transition-colors"
                      placeholder="juan@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-mono text-gray-400 mb-2">
                      MESSAGE
                    </label>
                    <textarea
                      rows="4"
                      className="w-full bg-[#050c08] border border-white/20 focus:border-[#39B54A] p-4 text-white outline-none transition-colors"
                      placeholder="Type your inquiry here..."
                    ></textarea>
                  </div>
                  <button className="w-full bg-[#39B54A] hover:bg-[#2d913b] text-black font-bold py-4 flex items-center justify-center gap-3 transition-all duration-300">
                    SEND MESSAGE <Send size={20} />
                  </button>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-[#39B54A]/20 py-10 text-center text-gray-500 text-sm font-mono bg-[#050c08] mt-auto">
        <p>
          © 2026 Mechanical Engineering Student Society. All rights reserved.
        </p>
        <p className="mt-2 text-xs text-[#39B54A]">
          BATANGAS STATE UNIVERSITY - THE NATIONAL ENGINEERING UNIVERSITY
        </p>
      </footer>
    </div>
  );
};

export default MESSLandingPage;
