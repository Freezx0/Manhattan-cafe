import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';

const techRiders = [
  {
    title: "LOUDSPEAKERS",
    items: [
      "Acoustic system BELL Top 600W x 2",
      "Acoustic system BELL Mid 600W x 2",
      "Acoustic system BELL Sub 1000W x 2",
      "Front monitor Yamaha SM12V 300w x 2",
      "Backside monitor Dynacord 500W x 2"
    ]
  },
  { title: "AMPLIFIER", items: ["Yamaha P7000S x 2", "Crown XTi 4002 x 1"] },
  { title: "FOH", items: ["Behringer X32", "Soundcraft Ui24R"] },
  { title: "BACKLINE", items: ["Fender Twin Reverb", "Ampeg SVT-810E", "Pearl Export Drum Kit"] },
  { title: "MICROPHONE SET", items: ["Shure SM58 x 4", "Shure SM57 x 4", "Sennheiser e904 x 3"] },
  { title: "DJ EQUIPMENT", items: ["Pioneer CDJ-2000NXS2 x 2", "Pioneer DJM-900NXS2"] }
];

const menuItems = [
  {
    id: 1,
    title: "AMET DONEC.",
    weight: "200 гр",
    description: "Placerat id auctor nunc id vel vel curabitur. Urna fames maecenas leo elit diam nibh elit.",
    price: "550 ₽",
    image: "https://i.ibb.co/m59cWn4M/6d769d1536bd89900daf1d31e299baba4eb26aa0-1.jpg"
  },
  {
    id: 2,
    title: "AMET DONEC.",
    weight: "500 гр",
    description: "Elit imperdiet faucibus euismod tortor risus volutpat molestie morbi sed. Porta ac eu.",
    price: "550 ₽",
    image: "https://i.ibb.co/Z1wTG25Q/b25a37fe480613158b61d883ba9ced49a286eec4.jpg"
  },
  {
    id: 3,
    title: "AMET DONEC.",
    weight: "400 гр",
    description: "Pharetra morbi purus hendrerit risus vel consequat nunc, sed. Pharetra nulla imperdiet.",
    price: "550 ₽",
    image: "https://i.ibb.co/jPWDc6GZ/ed63aee55f3c5badf56fd663f1fb0f2676cf61ed.jpg"
  },
  {
    id: 4,
    title: "AMET DONEC.",
    weight: "200 гр",
    description: "Leo in arcu in gravida vivamus scelerisque non. Euismod nec amet amet egestas nisl iaculis.",
    price: "550 ₽",
    image: "https://i.ibb.co/vx3t6WXs/5e1b67dce4c1918fde6ffcb619ba3c5d5d5a5ea3.jpg"
  },
  {
    id: 5,
    title: "AMET DONEC.",
    weight: "300 гр",
    description: "In mauris, elit nisl sed. Nulla accumsan vestibulum sed velit sagittis quis accumsan.",
    price: "550 ₽",
    image: "https://i.ibb.co/d4mpXz18/a79c68eb2ef201b2b79a1e37ca780eabe9aa5bb6.jpg"
  },
  {
    id: 6,
    title: "AMET DONEC.",
    weight: "500 гр",
    description: "Duis quisque tristique nulla cursus justo, etiam viverra nulla cras. Consectetur eget augue.",
    price: "550 ₽",
    image: "https://i.ibb.co/KzbFGMR6/7daa6ed26ffb165e236168a79163b364a7d205b2.jpg"
  },
  {
    id: 7,
    title: "AMET DONEC.",
    weight: "100 гр",
    description: "In cras pharetra aliquet laoreet. Lectus nisi ante felis quam pharetra in maecenas ut felis.",
    price: "550 ₽",
    image: "https://i.ibb.co/DHnx6h6J/cc3f2a7a9b8e324e3d57e5cb79be624f95ae0ee5.jpg"
  },
  {
    id: 8,
    title: "AMET DONEC.",
    weight: "300 гр",
    description: "Integer dolor et sed tempus non. Adipiscing viverra in viverra quisque pretium. Commodo.",
    price: "550 ₽",
    image: "https://i.ibb.co/xShBjQ3b/dbae966165e940fcfef374c3c3e6db19c32ffc99.jpg"
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'soon'>('upcoming');
  const [activeRider, setActiveRider] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#160d08] text-white font-sans selection:bg-[#d97736] selection:text-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 md:px-12 py-8 max-w-[1440px] mx-auto">
        {/* Logo */}
        <div className="flex items-center cursor-pointer">
          <img 
            src="https://i.ibb.co/qFrsj1sk/2cd43ac7d2389ed9bea6693acd96d30980d6d676-1.png" 
            alt="Manhattan Club and Bar Logo" 
            className="h-10 md:h-12 object-contain"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium">
          <a href="#" className="hover:text-[#d97736] transition-colors">Главная</a>
          <a href="#" className="hover:text-[#d97736] transition-colors">Меню</a>
          <a href="#" className="hover:text-[#d97736] transition-colors">Афиша</a>
          <a href="#" className="hover:text-[#d97736] transition-colors">Сотрудничество</a>
          <a href="#" className="hover:text-[#d97736] transition-colors">Галерея</a>
          <a href="#" className="hover:text-[#d97736] transition-colors">Новости</a>
        </nav>

        {/* Booking Button */}
        <button className="hidden md:block border border-[#d97736] text-white px-8 py-3 text-sm font-semibold tracking-widest hover:bg-[#d97736] transition-colors rounded-sm">
          БРОНИРОВАНИЕ
        </button>
      </header>

      {/* Main Content */}
      <main className="max-w-[1440px] mx-auto px-6 md:px-12 pb-12 flex flex-col xl:flex-row gap-6">
        {/* Hero Section */}
        <div className="flex-1 relative rounded-sm overflow-hidden group min-h-[400px] xl:min-h-[550px]">
          <img 
            src="https://i.ibb.co/zTJDf5zj/038ff6f7774b4e230b0731eb1cff8a45aa7b9524.png" 
            alt="Club Interior" 
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          {/* Overlay gradient for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
          
          {/* Text Content */}
          <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
            <div className="bg-white text-black px-4 py-1.5 inline-block font-bold tracking-widest text-xs md:text-sm mb-4 rounded-sm">
              SINCE 1996
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-[52px] font-black tracking-wider leading-[1.15]">
              TRUE. FONTANKA.<br />
              UNDERGROUND.
            </h1>
          </div>
        </div>

        {/* Sidebar Section */}
        <div className="w-full xl:w-[400px] bg-[#22150e] rounded-sm overflow-hidden flex flex-col shrink-0">
          {/* Tabs */}
          <div className="flex w-full border-b border-[#1a0f0a]">
            <button 
              onClick={() => setActiveTab('upcoming')}
              className={`flex-1 py-5 text-center font-bold tracking-widest text-sm transition-colors ${
                activeTab === 'upcoming' ? 'bg-[#2a1a12] text-white' : 'bg-[#1a0f0a] text-gray-400 hover:text-gray-200'
              }`}
            >
              БЛИЖАЙШИЕ
            </button>
            <button 
              onClick={() => setActiveTab('soon')}
              className={`flex-1 py-5 text-center font-bold tracking-widest text-sm transition-colors ${
                activeTab === 'soon' ? 'bg-[#2a1a12] text-white' : 'bg-[#1a0f0a] text-gray-400 hover:text-gray-200'
              }`}
            >
              СКОРО
            </button>
          </div>

          {/* Posters Grid */}
          <div className="p-4 grid grid-cols-2 grid-rows-2 gap-4 h-[500px] xl:h-[490px] bg-[#2a1a12] overflow-hidden">
            {/* Poster 1 */}
            <div className="relative group cursor-pointer flex justify-center items-center w-full h-full overflow-hidden">
              <img src="https://i.ibb.co/TB6sPZNf/808570bb98f771656661b1b7d1f6da588d1de402.jpg" alt="Event 1" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
            </div>

            {/* Poster 2 */}
            <div className="relative group cursor-pointer flex justify-center items-center w-full h-full overflow-hidden">
              <img src="https://i.ibb.co/3yGZVR1n/f8cd3025e84aa3bd7330702d035f3591b9adfe40.jpg" alt="Event 2" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
            </div>

            {/* Poster 3 */}
            <div className="relative group cursor-pointer flex justify-center items-center w-full h-full overflow-hidden">
              <img src="https://i.ibb.co/SDY1LmdK/f872ddf89ba7e05313a6169f020424f6a763f768.jpg" alt="Event 3" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
            </div>

            {/* Poster 4 */}
            <div className="relative group cursor-pointer flex justify-center items-center w-full h-full overflow-hidden">
              <img src="https://i.ibb.co/JFjpW0Yv/911298623892a6c2bf69eba6cc6dad0cc0ce0da5.jpg" alt="Event 4" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </main>

      {/* Menu Section */}
      <section className="bg-[#1a0f0a] py-20 relative">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          {/* Section Header */}
          <div className="flex flex-col items-center mb-16">
            <div className="bg-white text-black px-4 py-2 font-bold tracking-widest text-xs mb-6 rounded-sm">
              TOP "MANHATTAN" MENU
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-wider uppercase">
              КУХНЯ
            </h2>
          </div>

          <div className="relative">
            {/* Navigation Arrows */}
            <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 lg:-translate-x-12 w-10 h-10 bg-[#d97736] flex items-center justify-center rounded-sm hover:bg-[#e88a4a] transition-colors z-10">
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            
            <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 lg:translate-x-12 w-10 h-10 bg-[#d97736] flex items-center justify-center rounded-sm hover:bg-[#e88a4a] transition-colors z-10">
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Menu Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-10 px-10 md:px-12 lg:px-4">
              {menuItems.map((item) => (
                <div key={item.id} className="flex gap-6 items-start">
                  <div className="w-28 h-28 md:w-32 md:h-32 shrink-0">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover rounded-sm" />
                  </div>
                  <div className="flex-1 flex flex-col pt-1">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="text-lg font-bold tracking-wider">{item.title}</h3>
                      <div className="border border-[#d97736] px-3 py-1 text-sm font-bold whitespace-nowrap rounded-sm">
                        {item.price}
                      </div>
                    </div>
                    <div className="text-[#d97736] text-sm mb-3">{item.weight}</div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* All Menu Button */}
          <div className="flex justify-center mt-16">
            <button className="bg-[#d97736] text-white px-8 py-4 text-sm font-bold tracking-widest hover:bg-[#e88a4a] transition-colors rounded-sm uppercase">
              ВСЕ МЕНЮ
            </button>
          </div>
        </div>
      </section>

      {/* Events and Tourists Section */}
      <section className="bg-[#160d08] py-24 relative">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            
            {/* Left Column - Banquets */}
            <div className="flex flex-col items-center text-center px-4">
              <div className="bg-white text-black px-4 py-2 font-bold tracking-widest text-xs mb-8 rounded-sm uppercase">
                TOP "MANHATTAN" EVENTS
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-wider uppercase mb-8">
                БАНКЕТЫ
              </h2>
              <div className="space-y-6 text-gray-300 text-sm leading-relaxed mb-10">
                <p>Quam massa pretium et venenatis. Fringilla sagittis, arcu massa, in sem viverra consequat. Tempus sed est interdum eget nisi, nec fames. Eget amet hac varius aliquam. Mattis egestas suspendisse convallis eu arcu et aliquet.</p>
                <p>Porttitor risus sociis vitae nunc id lacus eget felis. Viverra et purus nibh ut. Sed ac leo sit posuere vulputate sed morbi. Donec gravida at turpis sed pulvinar. A nibh non consectetur morbi in arcu, in pellentesque mauris.</p>
                <p>Eu sodales netus faucibus interdum interdum platea massa egestas. Facilisis donec gravida pretium diam semper at id eleifend.</p>
              </div>
              <button className="border border-[#d97736] text-white px-8 py-3 text-sm font-bold tracking-widest hover:bg-[#d97736] transition-colors rounded-sm uppercase">
                ПОДРОБНЕЕ
              </button>
            </div>

            {/* Middle Column - Image */}
            <div className="h-[600px] w-full">
              <img 
                src="https://i.ibb.co/60R9PkBM/fce5fd41e5a02d0652db792ceec7639eb273c300.png" 
                alt="Manhattan Events" 
                className="w-full h-full object-cover rounded-sm"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Right Column - Tourists */}
            <div className="flex flex-col items-center text-center px-4">
              <div className="bg-white text-black px-4 py-2 font-bold tracking-widest text-xs mb-8 rounded-sm uppercase">
                TOP "MANHATTAN" TOURISTS
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-wider uppercase mb-8">
                ТУРИСТЫ
              </h2>
              <div className="space-y-6 text-gray-300 text-sm leading-relaxed mb-10">
                <p>Quam massa pretium et venenatis. Fringilla sagittis, arcu massa, in sem viverra consequat. Tempus sed est interdum eget nisi, nec fames. Eget amet hac varius aliquam. Mattis egestas suspendisse convallis eu arcu et aliquet.</p>
                <p>Porttitor risus sociis vitae nunc id lacus eget felis. Viverra et purus nibh ut. Sed ac leo sit posuere vulputate sed morbi. Donec gravida at turpis sed pulvinar. A nibh non consectetur morbi in arcu, in pellentesque mauris.</p>
                <p>Eu sodales netus faucibus interdum interdum platea massa egestas. Facilisis donec gravida pretium diam semper at id eleifend.</p>
              </div>
              <button className="border border-[#d97736] text-white px-8 py-3 text-sm font-bold tracking-widest hover:bg-[#d97736] transition-colors rounded-sm uppercase">
                ПОДРОБНЕЕ
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Tech Rider Section */}
      <section className="bg-[#1a0f0a] py-24 relative">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12">
          {/* Section Header */}
          <div className="flex flex-col items-center mb-16">
            <div className="bg-white text-black px-4 py-2 font-bold tracking-widest text-xs mb-6 rounded-sm uppercase">
              TOP "MANHATTAN" PARTY
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-wider uppercase">
              ТЕХРАЙДЕР
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Accordion */}
            <div className="flex flex-col gap-4">
              {techRiders.map((rider, index) => (
                <div key={index} className={`rounded-sm overflow-hidden transition-colors ${activeRider === index ? 'bg-[#d97736]' : 'bg-[#22150e]'}`}>
                  <button 
                    className="w-full px-6 py-5 flex justify-between items-center font-bold tracking-wider uppercase text-left"
                    onClick={() => setActiveRider(activeRider === index ? null : index)}
                  >
                    {rider.title}
                    <ChevronDown className={`w-5 h-5 transition-transform ${activeRider === index ? 'rotate-180' : ''}`} />
                  </button>
                  {activeRider === index && (
                    <div className="px-6 pb-6">
                      <ul className="list-disc list-inside space-y-2 text-sm text-white/90">
                        {rider.items.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Column - Sound Engineers */}
            <div className="flex flex-col">
              <h3 className="text-2xl md:text-3xl font-black tracking-wider uppercase mb-10">
                ЗВУКОРЕЖИССЕРЫ<br/>КЛУБА МАНХЭТТЕН
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Engineer 1 */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-full aspect-square mb-6">
                    <img src="https://i.ibb.co/QFpvy9B7/7d3a5e1263dc36af5110c68120a449c1b0deb7b1.jpg" alt="Изотов Константин" className="w-full h-full object-cover rounded-sm" referrerPolicy="no-referrer" />
                  </div>
                  <h4 className="font-bold tracking-wider uppercase text-sm mb-4">ИЗОТОВ<br/>КОНСТАНТИН</h4>
                  <div className="flex gap-3">
                    <a href="#" className="w-10 h-10 border border-[#d97736] flex items-center justify-center rounded-sm hover:bg-[#d97736] transition-colors">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.07 13.84h-1.38c-.54 0-.7-.43-1.66-1.41-.83-.83-1.18-.95-1.38-.95-.28 0-.35.07-.35.45v1.34c0 .35-.11.57-1.6.57-2.36 0-4.52-1.46-5.96-3.53-2.16-3.08-2.74-5.43-2.74-5.85 0-.22.08-.42.48-.42h1.38c.35 0 .49.16.63.53.66 1.95 2.01 4.14 2.53 4.14.2 0 .29-.09.29-.59V7.98c-.04-.64-.38-.85-.38-1.12 0-.14.11-.28.32-.28h2.04c.3 0 .4.15.4.48v2.79c0 .33.15.41.25.41.2 0 .4-.08.81-.49 1.25-1.55 1.83-3.32 1.83-3.32.08-.2.25-.33.5-.33h1.38c.43 0 .53.22.43.53-.16.53-2.03 3.12-2.03 3.12-.15.22-.2.33 0 .59.15.2 1.35 1.29 1.8 1.86.35.45.52.74.07.74z"/></svg>
                    </a>
                    <a href="#" className="w-10 h-10 border border-[#d97736] flex items-center justify-center rounded-sm hover:bg-[#d97736] transition-colors">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                    </a>
                  </div>
                </div>
                {/* Engineer 2 */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-full aspect-square mb-6">
                    <img src="https://i.ibb.co/kgzyc3vw/86611d09a30961e912916e68c5f4bec4826f08ff.jpg" alt="Давид Хозиев" className="w-full h-full object-cover rounded-sm" referrerPolicy="no-referrer" />
                  </div>
                  <h4 className="font-bold tracking-wider uppercase text-sm mb-4">ДАВИД<br/>ХОЗИЕВ</h4>
                  <div className="flex gap-3">
                    <a href="#" className="w-10 h-10 border border-[#d97736] flex items-center justify-center rounded-sm hover:bg-[#d97736] transition-colors">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.07 13.84h-1.38c-.54 0-.7-.43-1.66-1.41-.83-.83-1.18-.95-1.38-.95-.28 0-.35.07-.35.45v1.34c0 .35-.11.57-1.6.57-2.36 0-4.52-1.46-5.96-3.53-2.16-3.08-2.74-5.43-2.74-5.85 0-.22.08-.42.48-.42h1.38c.35 0 .49.16.63.53.66 1.95 2.01 4.14 2.53 4.14.2 0 .29-.09.29-.59V7.98c-.04-.64-.38-.85-.38-1.12 0-.14.11-.28.32-.28h2.04c.3 0 .4.15.4.48v2.79c0 .33.15.41.25.41.2 0 .4-.08.81-.49 1.25-1.55 1.83-3.32 1.83-3.32.08-.2.25-.33.5-.33h1.38c.43 0 .53.22.43.53-.16.53-2.03 3.12-2.03 3.12-.15.22-.2.33 0 .59.15.2 1.35 1.29 1.8 1.86.35.45.52.74.07.74z"/></svg>
                    </a>
                    <a href="#" className="w-10 h-10 border border-[#d97736] flex items-center justify-center rounded-sm hover:bg-[#d97736] transition-colors">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section className="bg-[#160d08] py-24 relative">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12">
          {/* Section Header */}
          <div className="flex flex-col items-center mb-16">
            <div className="bg-white text-black px-4 py-2 font-bold tracking-widest text-xs mb-6 rounded-sm uppercase">
              TOP "MANHATTAN" PLACE
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-wider uppercase">
              КОНТАКТЫ
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="border border-[#d97736] p-10 rounded-sm flex flex-col justify-center bg-transparent">
              <div className="space-y-8">
                <div>
                  <h4 className="font-bold tracking-wider uppercase mb-3">АДРЕС</h4>
                  <p className="text-white/90 text-sm leading-relaxed">Набережная реки Фонтанки, 90 (вход в<br/>арке с белыми колоннами)</p>
                </div>
                <div>
                  <h4 className="font-bold tracking-wider uppercase mb-3">ТЕЛЕФОН</h4>
                  <p className="text-white/90 text-sm leading-relaxed">+7 (812) 713-1945</p>
                </div>
                <div>
                  <h4 className="font-bold tracking-wider uppercase mb-3">РЕЖИМ РАБОТЫ</h4>
                  <p className="text-white/90 text-sm leading-relaxed">Ежедневно с 12:00 до 06:00</p>
                </div>
                
                <div className="h-px bg-white/20 w-full my-8"></div>
                
                <div>
                  <h4 className="font-bold tracking-wider uppercase mb-3">ДИРЕКТОР</h4>
                  <p className="text-white/90 text-sm leading-relaxed">Лидия Эмильевна, +7(921) 963-55-50</p>
                </div>
                <div>
                  <h4 className="font-bold tracking-wider uppercase mb-3">АРТ-ДИРЕКТОР</h4>
                  <p className="text-white/90 text-sm leading-relaxed">Илиния Ионашко, +7(981) 989-43-30</p>
                </div>
              </div>
            </div>

            {/* Map Image */}
            <div className="border border-[#d97736] rounded-sm overflow-hidden h-full min-h-[400px]">
              <img 
                src="https://i.ibb.co/PGXPF4ny/713f676b05682b1a99978da0dcfdfffc3614da4b-1.png" 
                alt="Map" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6 md:px-12 max-w-[1440px] mx-auto w-full flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
        <p>Copyright © 2022. Все права защищены.</p>
        <p className="mt-4 sm:mt-0">Разработано d-e-n.ru</p>
      </footer>
      
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #1a0f0a;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #d97736;
          border-radius: 3px;
        }
      `}} />
    </div>
  );
}
