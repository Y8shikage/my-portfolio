import StaggeredMenu from './components/StaggeredMenu/StaggeredMenu';
import Beams from './components/Beams/Beams';
import HeroSection from './sections/HeroSection';
import EducationSection from './sections/EducationSection';
import SkillsSection from './sections/SkillsSection';
import WorkSection from './sections/WorkSection';

const menuItems = [
  { label: 'About me', ariaLabel: 'Go to about section', link: '#home' },
  { label: 'Education', ariaLabel: 'Go to education section', link: '#education' },
  { label: 'Skills', ariaLabel: 'Go to skills section', link: '#skills' },
  { label: 'Work experience', ariaLabel: 'Go to work section', link: '#work' }
];

const socialItems = [
  { label: 'Telegram', link: 'https://t.me/Y8shikage' },
  { label: 'GitHub', link: 'https://github.com' }
];

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Fixed animated background */}
      <div className="fixed inset-0 z-0">
        <Beams
          beamWidth={3}
          beamHeight={30}
          beamNumber={20}
          lightColor="#5227FF"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={30}
        />
      </div>

      {/* Navigation menu */}
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials
        displayItemNumbering
        menuButtonColor="#ffffff"
        openMenuButtonColor="#fff"
        changeMenuColorOnOpen
        colors={['#0a0a1a', '#5227FF']}
        logoText="Dzhokhar Suleimanov"
        accentColor="#5227FF"
        isFixed
      />

      {/* Main scrollable content */}
      <main className="relative z-10">
        <HeroSection />
        <div className="section-divider" />
        <EducationSection />
        <div className="section-divider" />
        <SkillsSection />
        <div className="section-divider" />
        <WorkSection />

        {/* Footer spacer */}
        <div className="h-24" />
      </main>
    </div>
  );
}

export default App;
