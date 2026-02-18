import SplitText from '../components/SplitText/SplitText';
import TextPressure from '../components/TextPressure/TextPressure';
import TiltedCard from '../components/TiltedCard/TiltedCard';

const skills = [
  {
    name: 'HTML',
    level: 4,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg'
  },
  {
    name: 'CSS',
    level: 4,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg'
  },
  {
    name: 'JavaScript',
    level: 3,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg'
  },
  {
    name: 'Tailwind',
    level: 4,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg'
  },
  {
    name: 'SASS',
    level: 4,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg'
  },
  {
    name: 'React',
    level: 2,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg'
  },
  {
    name: 'Laravel',
    level: 2,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg'
  },
  {
    name: 'Python',
    level: 3,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg'
  },
  {
    name: 'After Effects',
    level: 4,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/aftereffects/aftereffects-original.svg'
  },
  {
    name: 'Illustrator',
    level: 3,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-plain.svg'
  },
  {
    name: 'Photoshop',
    level: 2,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-plain.svg'
  },
  {
    name: 'Cinema 4D',
    level: 2,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cinema4d/cinema4d-plain.svg'
  }
];

const SkillDots = ({ level, name }) => (
  <div className="flex flex-col items-center gap-2 w-full">
    <span className="text-white text-sm font-semibold tracking-wide drop-shadow-lg">{name}</span>
    <div className="flex gap-1.5">
      {[1, 2, 3, 4, 5].map(i => (
        <span
          key={i}
          className={`w-2.5 h-2.5 rounded-full border border-white/40 transition-colors ${
            i <= level ? 'bg-primary' : 'bg-transparent'
          }`}
        />
      ))}
    </div>
  </div>
);

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="relative h-screen shrink-0 flex flex-col items-center justify-center px-6 py-24 overflow-hidden"
    >
      <div className="relative w-full h-[100px] md:h-[150px] mb-50 max-w-4xl mx-auto">
        <TextPressure
          text="Skills"
          flex
          alpha={false}
          stroke={false}
          width
          weight
          italic
          textColor="#ffffff"
          strokeColor="#5227FF"
          minFontSize={36}
        />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-10 max-w-6xl mx-auto w-full mb-16">
        {skills.map(skill => (
          <div key={skill.name} className="flex justify-center">
            <TiltedCard
              imageSrc={skill.icon}
              altText={skill.name}
              captionText={skill.name}
              containerHeight="240px"
              containerWidth="220px"
              imageHeight="160px"
              imageWidth="160px"
              rotateAmplitude={12}
              scaleOnHover={1.08}
              showMobileWarning={false}
              showTooltip
              displayOverlayContent
              overlayContent={<SkillDots level={skill.level} name={skill.name} />}
            />
          </div>
        ))}
      </div>
      <div className="section-divider" />
    </section>
  );
};

export default SkillsSection;
