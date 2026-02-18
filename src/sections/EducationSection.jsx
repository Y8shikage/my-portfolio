import SplitText from '../components/SplitText/SplitText';
import TextPressure from '../components/TextPressure/TextPressure';

const EducationSection = () => {
  return (
    <section
      id="education"
      className="relative h-screen shrink-0 flex flex-col justify-center items-center px-6 py-24 overflow-hidden"
    >
      <div className="relative w-full h-[100px] md:h-[150px] mb-20 max-w-4xl mx-auto">
        <TextPressure
          text="Education"
          flex
          alpha={false}
          stroke={false}
          width
          weight
          italic
          textColor="#ffffff"
          strokeColor="#5227FF"
          minFontSize={32}
        />
      </div>

      <div className="max-w-3xl mx-auto w-full">
        <div className="glass rounded-2xl p-8 md:p-12 space-y-6 text-center">
          <SplitText
            text="Secondary professional education"
            className="text-sm md:text-base text-gray-medium uppercase tracking-[3px] block w-full"
            delay={30}
            duration={1}
            splitType="words"
            from={{ opacity: 0, y: 20 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-80px"
            textAlign="center"
          />

          <SplitText
            text='GBPOU MO "Sergievo-Posadsky College"'
            className="text-xl md:text-3xl font-bold text-white block w-full"
            delay={30}
            duration={1.1}
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-80px"
            textAlign="center"
            tag="h3"
          />

          <SplitText
            text="Information Systems and Programming"
            className="text-base md:text-xl text-gray-light block w-full"
            delay={25}
            duration={1}
            splitType="words"
            from={{ opacity: 0, y: 25 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-80px"
            textAlign="center"
          />

          <SplitText
            text="Web and multimedia application developer"
            className="text-base md:text-lg text-primary-light font-semibold block w-full"
            delay={25}
            duration={1}
            splitType="words"
            from={{ opacity: 0, y: 25 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-80px"
            textAlign="center"
          />
        </div>
      </div>
      <div className="section-divider" />
    </section>
  );
};

export default EducationSection;
