import React, { useMemo, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";


initParticlesEngine(async (engine) => {
    await loadFull(engine);
});

const Particle = ({ theme }) => {

    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };

    const options = useMemo(() => ({
        fpsLimit: 120,
        fullScreen: {
            enable: true,
            zIndex: 0,
        },
        interactivity: {
            events: {
                onClick: {
                    enable: false,
                },
                onHover: {
                    enable: true,
                    mode: theme === 'dark' ? "grab" : "bubble",
                },
            },
            modes: {
                grab: {
                    distance: 150,
                    line_linked: {
                        opacity: 0.1,
                    },
                    color: {
                        value: '#ffffff'
                    }
                },
                bubble: {
                    opacity: 1,
                    size: 5,
                    color: {
                        value: theme === 'dark' ? "#ffffff" : "#cd05ff",
                    },
                },
            },
        },
        particles: {
            color: {
                value: theme === "dark" ? "#000000" : "#ffffff",
            },
            links: {
                color: theme === "dark" ? "#ffffff" : "#000000",
                distance: theme === "dark" ? 220 : 150,
                enable: theme === 'dark' ? false : true,
                opacity: 0.1,
                width: 2,
                triangles: {
                    enable: true,
                    color: theme === "dark" ? "#000000" : "#000000",
                    opacity: 0.025,
                }
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 0.5,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                },
                value: theme === 'dark' ? 300 : 100,
            },
            opacity: {
                value: { min: 0.1, max: 0.5 },
            },
            shape: {
                type: theme === 'dark' ? "circle" : "triangle"
            },
            size: {
                value: { min: 1, max: 3 },
            },
            twinkle: {
                particles: {
                    enable: true,
                    color: theme === 'dark' ? "#000000" : "#cd05ff",
                    frequency: 0.005,
                    opacity: 1
                },
                lines: {
                    enable: true,
                    color: theme === 'dark' ? "#000000" : "#cd05ff",
                    frequency: 0.005,
                    opacity: 1
                }
            },
        },
        detectRetina: true,
    }),
        [theme],
    );

    if (init) {
        return (
            <Particles
                id="tsparticles"
                particlesLoaded={particlesLoaded}
                options={options}
            />

        );
    }

    return <></>;
};

export default Particle;
