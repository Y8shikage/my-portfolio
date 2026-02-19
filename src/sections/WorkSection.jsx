import SplitText from '../components/SplitText/SplitText';
import TextPressure from '../components/TextPressure/TextPressure';
import Plasma from '../components/Plasma/Plasma';
import CardSwap, { Card } from '../components/CardSwap/CardSwap';

const WorkSection = () => {
  return (
    <section
      id="work"
      className="relative h-screen shrink-0 flex flex-col items-center justify-center px-6 py-24 overflow-hidden"
    >
      {/* Solid bg to fully block the main Beams background */}
      <div className="absolute inset-0 z-0 bg-[#0a0a0f]" />

      {/* Plasma — own animated background for this section */}
      <div className="absolute inset-0 z-[1]">
        <Plasma
          color="#5227FF"
          speed={0.4}
          direction="forward"
          scale={1.2}
          opacity={0.5}
          mouseInteractive
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/70 via-transparent to-[#0a0a0f]/70" />
      </div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-5xl mx-auto">
        <div className="relative w-full h-[100px] md:h-[150px] mb-20">
          <TextPressure
            text="Experience"
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

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Text content */}
          <div className="flex-1 space-y-8">
            <div className="glass rounded-2xl p-6 md:p-8">
              <SplitText
                text="Developer of the website novi-jewelry.com"
                className="text-base md:text-xl text-white block w-full"
                delay={25}
                duration={1}
                splitType="words"
                from={{ opacity: 0, y: 25 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-80px"
                textAlign="left"
              />
            </div>

            <div className="glass rounded-2xl p-6 md:p-8">
              <SplitText
                text="Completed an internship at Evropeyskiy LLC europe-tc.ru"
                className="text-base md:text-xl text-white block w-full"
                delay={25}
                duration={1}
                splitType="words"
                from={{ opacity: 0, y: 25 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-80px"
                textAlign="left"
              />
            </div>

            <div className="glass rounded-2xl p-6 md:p-8">
              <p className="text-base md:text-xl text-white">
                Always open to{' '}
                <a
                  href="https://t.me/Y8shikage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#5227FF] hover:text-primary-light font-semibold transition-colors duration-300 underline decoration-primary/30 hover:decoration-primary underline-offset-4"
                >
                  collaboration
                </a>{' '}
                to improve my skills and experience
              </p>
            </div>
          </div>

          {/* Card swap with project screenshots */}
          <div className="flex-shrink-0 relative h-[450px] w-full lg:w-[500px] lg:mt-26">
            <CardSwap
              cardDistance={50}
              verticalDistance={60}
              delay={5000}
              pauseOnHover={false}
              width={420}
              height={280}
            >
              <Card customClass="swap-card-project">
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-dark-secondary to-dark p-6">
                  <div className="w-full h-[200px] rounded-lg overflow-hidden mb-3">
                    <img src="/imgs/novi.png" alt="novi-jewelry.com" className="w-full h-full object-cover" />
                  </div>
                  <span className="text-white text-sm font-medium">novi-jewelry.com</span>
                </div>
              </Card>
              <Card customClass="swap-card-project">
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-dark-secondary to-dark p-6">
                  <div className="w-full h-[200px] rounded-lg overflow-hidden mb-3">
                    <img src="/imgs/euro.png" alt="europe-tc.ru" className="w-full h-full object-cover" />
                  </div>
                  <span className="text-white text-sm font-medium">europe-tc.ru</span>
                </div>
              </Card>
              <Card customClass="swap-card-project">
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-dark-secondary to-dark p-6">
                  <div className="w-full h-[200px] rounded-lg overflow-hidden mb-3">
                    <img src="/imgs/github.png" alt="GitHub" className="w-full h-full object-cover" />
                  </div>
                  <span className="text-white text-sm font-medium">More projects on GitHub</span>
                </div>
              </Card>
            </CardSwap>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
