'use client';
import { useCallback } from 'react';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';
import { optionsParticles } from '../utils/particleOptions';
// import { Introduction } from '../Introduction';

export function Cover() {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async () => {}, []);

    return (
        <div id="cover">
            <Particles
                className="absolute w-full h-full translate-z-0"
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={optionsParticles}
            />
            {/* <Introduction /> */}
        </div>
    );
}
