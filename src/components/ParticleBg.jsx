import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import "../App.css"; 

const ParticleBg = () => {
    const [init, setInit] = useState(false);

    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);


    return (
        <>
            {init && (
                <Particles
                    id="tsparticles"
                    options={{
                      "autoPlay": true,
                      "background": {
                          "color": {
                              "value": "#0c0c1D"
                          },
                          "opacity": 1
                      },
                      "fullScreen": {
                          "enable": true,
                          "zIndex": -5
                      },
                      "detectRetina": true,
                      "fpsLimit": 60,
                      "interactivity": {
                          "events": {
                              "onClick": {
                                  "enable": true,
                                  "mode": "push"
                              }
                          }
                      },
                      "particles": {
                          "color": {
                              "value": "#fff"
                          },
                          "move": {
                              "enable": true,
                              "speed": 0.25,
                              "direction": "left",
                              "outModes": {
                                  "default": "out",
                                  "right": "out"
                              }
                          },
                          "number": {
                              "value": 200
                          },
                          "opacity": {
                              "value": 0.3
                          },
                          "shape": {
                              "type": "circle"
                          },
                          "size": {
                              "value": 3
                          },
                          "stroke": {
                              "width": 0
                          },
                          "zIndex": {
                              "value": 5
                          }
                      },
                      "pauseOnBlur": true,
                      "pauseOnOutsideViewport": true,
                      "emitters": {
                          "autoPlay": true,
                          "rate": {
                              "quantity": 1,
                              "delay": 7
                          },
                          "particles": {
                              "shape": {
                                  "type": "images",
                                  "options": {
                                      "images": {
                                          "src": "https://particles.js.org/images/cyan_amongus.png",
                                          "width": 500,
                                          "height": 634
                                      }
                                  }
                              },
                              "size": {
                                  "value": 40
                              },
                              "move": {
                                  "speed": 10,
                                  "outModes": {
                                      "default": "none",
                                      "right": "destroy"
                                  }
                              },
                              "zIndex": {
                                  "value": -999
                              },
                              "rotate": {
                                  "value": {
                                      "min": 0,
                                      "max": 360
                                  },
                                  "animation": {
                                      "enable": true,
                                      "speed": 50,
                                      "sync": true
                                  }
                              }
                          },
                          "position": {
                              "x": -5,
                              "y": 55
                          }
                      }
                  }}
                  
                />
            )}
        </>
    );
};

export default ParticleBg;

