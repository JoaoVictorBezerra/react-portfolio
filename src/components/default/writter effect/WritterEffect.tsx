import Typewriter from 'typewriter-effect';

export function WritterEffect({ texts }: WritterEffectProps) {
  return (
    <Typewriter
      options={{
        strings: texts,
        autoStart: true,
        loop: true,
      }}
    />
  );
}
