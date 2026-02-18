import { useEffect, useRef, useState } from 'react';

const TypeWriter = ({ className = '', startDelay = 2500 }) => {
  const [text, setText] = useState('');
  const [phase, setPhase] = useState('waiting');
  const [started, setStarted] = useState(false);
  const cursorRef = useRef(null);

  const firstText = 'I am a motion designer';
  const deleteUntil = 'I am a ';
  const secondText = 'I am a full-stack web and multimedia application developer';

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(timer);
  }, [startDelay]);

  useEffect(() => {
    if (!started) return;
    if (phase === 'waiting') {
      setPhase('typing-first');
      return;
    }

    let timeout;

    if (phase === 'typing-first') {
      if (text.length < firstText.length) {
        timeout = setTimeout(() => setText(firstText.slice(0, text.length + 1)), 70);
      } else {
        timeout = setTimeout(() => setPhase('pause'), 1500);
      }
    } else if (phase === 'pause') {
      timeout = setTimeout(() => setPhase('deleting'), 500);
    } else if (phase === 'deleting') {
      if (text.length > deleteUntil.length) {
        timeout = setTimeout(() => setText(text.slice(0, -1)), 35);
      } else {
        setPhase('typing-second');
      }
    } else if (phase === 'typing-second') {
      if (text.length < secondText.length) {
        timeout = setTimeout(() => setText(secondText.slice(0, text.length + 1)), 45);
      } else {
        setPhase('done');
      }
    }

    return () => clearTimeout(timeout);
  }, [text, phase, started]);

  return (
    <p className={className}>
      <span>{text}</span>
      <span
        ref={cursorRef}
        className={`inline-block w-[2px] h-[1em] bg-primary ml-1 align-middle ${
          phase !== 'done' ? 'animate-pulse' : 'opacity-0'
        } transition-opacity duration-500`}
      />
    </p>
  );
};

export default TypeWriter;
