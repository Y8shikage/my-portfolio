import SplitText from '../components/SplitText/SplitText';
import TypeWriter from '../components/TypeWriter';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative h-screen shrink-0 flex flex-col justify-center items-center px-6 py-32 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto text-center">
        <SplitText
          text="Hi, my name is Dzhokhar"
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-white block w-full"
          delay={40}
          duration={1.2}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 50 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-50px"
          textAlign="center"
          tag="h1"
        />

        <div className="mt-6 min-h-[2.5em]">
          <TypeWriter
            className="text-lg sm:text-xl md:text-2xl text-gray-light font-light tracking-wide"
            startDelay={2000}
          />
        </div>

        <div className="mt-16 space-y-8 max-w-2xl mx-auto">
          <SplitText
            text="I am actively learning new technologies and methods of layout with animation."
            className="text-base md:text-lg text-gray-medium block w-full"
            delay={20}
            duration={1}
            ease="power2.out"
            splitType="words"
            from={{ opacity: 0, y: 30 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-80px"
            textAlign="center"
          />

          <SplitText
            text="I combine web development and animation in After Effects."
            className="text-base md:text-lg text-gray-medium block w-full"
            delay={20}
            duration={1}
            ease="power2.out"
            splitType="words"
            from={{ opacity: 0, y: 30 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-80px"
            textAlign="center"
          />

          <SplitText
            text="I work on both personal and commercial projects."
            className="text-base md:text-lg text-gray-medium block w-full"
            delay={20}
            duration={1}
            ease="power2.out"
            splitType="words"
            from={{ opacity: 0, y: 30 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-80px"
            textAlign="center"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
