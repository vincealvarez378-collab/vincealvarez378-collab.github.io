const astronomyBook = {
    id: "astronomy",
    title: "Astronomy Made Understandable",
    category: "Astronomy",
    icon: "🔭",
    description:
        "A fascinating journey through the universe, stars, planets, galaxies, black holes, space exploration, and humanity's search to understand the cosmos.",

    chapters: [
        {
            id: 1,
            title: "What Is Astronomy?",
            content: `
                <p>Astronomy is the scientific study of objects and phenomena beyond Earth's atmosphere. It includes planets, moons, stars, galaxies, nebulae, black holes, and the universe itself.</p>

                <h3>Looking Into Space</h3>
                <p>Astronomers use telescopes, spacecraft, satellites, computers, and mathematical models to study the cosmos.</p>

                <h3>Why Astronomy Matters</h3>
                <p>Studying space helps us understand Earth's place in the universe and the physical processes that shape stars, planets, and galaxies.</p>

                <p><strong>Key idea:</strong> Astronomy helps humanity understand the universe beyond our planet.</p>
            `
        },

        {
            id: 2,
            title: "The Solar System",
            content: `
                <p>The Solar System consists of the Sun and all the objects gravitationally bound to it.</p>

                <h3>The Sun</h3>
                <p>The Sun is a star at the center of our Solar System. Its gravity keeps planets and many other objects in orbit.</p>

                <h3>The Planets</h3>
                <p>The eight planets are Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune.</p>

                <h3>Other Objects</h3>
                <p>The Solar System also contains dwarf planets, moons, asteroids, comets, and smaller bodies.</p>

                <p>The Solar System is only a tiny part of the much larger universe.</p>
            `
        },

        {
            id: 3,
            title: "The Sun",
            content: `
                <p>The Sun is a massive ball of extremely hot plasma and the primary source of energy for life on Earth.</p>

                <h3>Energy Production</h3>
                <p>The Sun produces energy through nuclear fusion in its core, where hydrogen nuclei combine to form helium.</p>

                <h3>Layers</h3>
                <p>The Sun has several regions, including the core, radiative zone, convective zone, photosphere, chromosphere, and corona.</p>

                <h3>Solar Activity</h3>
                <p>The Sun produces phenomena such as solar flares and coronal mass ejections. Solar activity can affect Earth's space environment.</p>

                <p>Without the Sun's energy, Earth's surface would be dramatically different and most known life could not survive.</p>
            `
        },

        {
            id: 4,
            title: "Earth and the Moon",
            content: `
                <p>Earth is the third planet from the Sun and the only world currently known to support life.</p>

                <h3>Earth</h3>
                <p>Earth has liquid surface water, an atmosphere, a magnetic field, and environments capable of supporting diverse forms of life.</p>

                <h3>The Moon</h3>
                <p>The Moon is Earth's natural satellite. Its gravity contributes to ocean tides and it has influenced human culture for thousands of years.</p>

                <h3>Moon Phases</h3>
                <p>The Moon appears to change shape during its monthly cycle because we see different portions of its sunlit half as it orbits Earth.</p>

                <p>Earth and the Moon form an important planetary system within the Solar System.</p>
            `
        },

        {
            id: 5,
            title: "Stars",
            content: `
                <p>Stars are enormous astronomical objects made mostly of extremely hot plasma. They produce energy through nuclear processes.</p>

                <h3>Star Formation</h3>
                <p>Stars can form when clouds of gas and dust collapse under gravity and become dense and hot enough for nuclear fusion to begin.</p>

                <h3>Star Colors</h3>
                <p>Stars can appear different colors depending largely on their surface temperatures. Hotter stars tend toward blue-white colors, while cooler stars appear more reddish.</p>

                <h3>Star Lifetimes</h3>
                <p>A star's evolution depends strongly on its mass. Massive stars generally live shorter lives than lower-mass stars.</p>

                <p>Stars are important because they create and distribute many of the elements needed to form planets and life.</p>
            `
        },

        {
            id: 6,
            title: "Galaxies",
            content: `
                <p>A galaxy is a huge system containing stars, gas, dust, dark matter, and other structures bound together by gravity.</p>

                <h3>Types of Galaxies</h3>
                <p>Galaxies can have different shapes, including spiral, elliptical, and irregular forms.</p>

                <h3>Our Galaxy</h3>
                <p>The Solar System is located inside the Milky Way, a large spiral galaxy containing enormous numbers of stars.</p>

                <h3>Galactic Scale</h3>
                <p>Galaxies can be separated by vast distances. Many galaxies exist in groups and clusters.</p>

                <p>The universe contains an enormous number of galaxies, each containing countless astronomical objects.</p>
            `
        },

        {
            id: 7,
            title: "Black Holes",
            content: `
                <p>A black hole is a region of spacetime where gravity is so strong that nothing that crosses its event horizon can escape.</p>

                <h3>Formation</h3>
                <p>Some black holes form from the collapse of massive stars. Supermassive black holes exist at the centers of many galaxies.</p>

                <h3>Event Horizon</h3>
                <p>The event horizon is the boundary beyond which escape is impossible according to our current understanding of physics.</p>

                <h3>Not Cosmic Vacuums</h3>
                <p>Black holes do not automatically pull in everything around them. Objects can orbit black holes just as planets orbit stars when their paths are stable.</p>

                <p>Black holes remain among the most extreme objects studied by modern astronomy.</p>
            `
        },

        {
            id: 8,
            title: "Nebulae and Cosmic Clouds",
            content: `
                <p>Nebulae are large clouds of gas and dust found throughout space.</p>

                <h3>Star-Forming Nebulae</h3>
                <p>Some nebulae contain dense regions where new stars can form.</p>

                <h3>Emission Nebulae</h3>
                <p>Some clouds glow because energetic radiation excites atoms within the gas.</p>

                <h3>Remnants</h3>
                <p>Other nebulae are produced by dying stars or explosions such as supernovae.</p>

                <p>Nebulae are important parts of the cosmic cycle because they can contain the material from which future stars and planets form.</p>
            `
        },

        {
            id: 9,
            title: "The Expanding Universe",
            content: `
                <p>Observations show that the universe has been expanding over cosmic time.</p>

                <h3>Galaxies Moving Apart</h3>
                <p>On very large scales, distant galaxies generally appear to be moving away from one another as space expands.</p>

                <h3>The Big Bang</h3>
                <p>The Big Bang model describes the early universe as an extremely hot and dense state that has expanded and cooled over time.</p>

                <h3>Cosmic Background</h3>
                <p>The cosmic microwave background is faint radiation left over from the early universe and provides important evidence about cosmic history.</p>

                <p>Modern cosmology continues to investigate how the universe began, evolved, and may change in the future.</p>
            `
        },

        {
            id: 10,
            title: "Exoplanets",
            content: `
                <p>An exoplanet is a planet located outside our Solar System.</p>

                <h3>Finding Exoplanets</h3>
                <p>Astronomers can detect exoplanets using methods such as observing tiny dips in a star's brightness when a planet passes in front of it.</p>

                <h3>Planet Diversity</h3>
                <p>Exoplanets come in many sizes and orbital configurations. Some are very different from the planets in our Solar System.</p>

                <h3>Habitability</h3>
                <p>Scientists study whether some planets could have conditions suitable for life, considering factors such as temperature, atmosphere, and the presence of liquid water.</p>

                <p>Thousands of exoplanets have been confirmed, showing that planetary systems are common throughout the galaxy.</p>
            `
        },

        {
            id: 11,
            title: "Space Exploration",
            content: `
                <p>Space exploration uses spacecraft, satellites, robots, telescopes, and human missions to investigate space.</p>

                <h3>Robotic Missions</h3>
                <p>Robotic spacecraft have visited planets, moons, asteroids, comets, and distant regions of the Solar System.</p>

                <h3>Human Exploration</h3>
                <p>Humans have traveled beyond low Earth orbit and landed on the Moon. Future missions may explore the Moon and Mars in greater detail.</p>

                <h3>Why Explore?</h3>
                <p>Space exploration expands scientific knowledge, develops technology, and helps us understand our planetary neighborhood.</p>

                <p>Exploration allows humanity to investigate places that cannot be reached by ordinary observation from Earth.</p>
            `
        },

        {
            id: 12,
            title: "Telescopes",
            content: `
                <p>Telescopes collect and analyze electromagnetic radiation from astronomical objects.</p>

                <h3>Optical Telescopes</h3>
                <p>Optical telescopes observe visible light and can reveal stars, planets, galaxies, and other objects.</p>

                <h3>Radio Telescopes</h3>
                <p>Radio telescopes detect radio waves from space and can study objects and processes that may be difficult to observe using visible light.</p>

                <h3>Space Telescopes</h3>
                <p>Telescopes placed above Earth's atmosphere can observe wavelengths that are blocked or distorted by the atmosphere.</p>

                <p>Modern astronomy combines observations from many types of telescopes to build a more complete picture of the universe.</p>
            `
        },

        {
            id: 13,
            title: "Gravity in Space",
            content: `
                <p>Gravity is one of the fundamental forces that shapes astronomical systems.</p>

                <h3>Orbits</h3>
                <p>Planets orbit stars because their motion combines with gravitational attraction. Similar principles apply to moons, satellites, and other objects.</p>

                <h3>Mass and Gravity</h3>
                <p>More massive objects generally produce stronger gravitational fields.</p>

                <h3>Gravity and the Universe</h3>
                <p>Gravity helps form stars, planets, galaxies, and large-scale structures throughout the universe.</p>

                <p>Understanding gravity is essential for understanding motion and structure in space.</p>
            `
        },

        {
            id: 14,
            title: "Life Beyond Earth",
            content: `
                <p>Scientists have not yet confirmed life beyond Earth. However, the possibility of extraterrestrial life is an important scientific question.</p>

                <h3>Searching for Life</h3>
                <p>Scientists study planets and moons that may contain conditions suitable for life and search for chemical or environmental signs that could provide evidence.</p>

                <h3>Our Solar System</h3>
                <p>Mars and several icy moons are among the objects studied for possible environments that could have supported or might support microbial life.</p>

                <h3>Beyond the Solar System</h3>
                <p>Exoplanet research allows scientists to investigate whether potentially habitable worlds exist around other stars.</p>

                <p>The search for life beyond Earth remains an open scientific investigation.</p>
            `
        },

        {
            id: 15,
            title: "Humanity and the Cosmos",
            content: `
                <p>Humanity has looked toward the sky for thousands of years. Astronomy transformed those observations into a scientific understanding of the universe.</p>

                <h3>Our Place</h3>
                <p>Earth is one planet orbiting one star among enormous numbers of stars in the observable universe.</p>

                <h3>What We Have Learned</h3>
                <p>We have discovered planets, stars, galaxies, black holes, cosmic radiation, and evidence describing the evolution of the universe.</p>

                <h3>The Future</h3>
                <p>Future telescopes, spacecraft, and scientific discoveries may answer questions we cannot yet solve.</p>

                <h3>Final Thought</h3>
                <p>The universe is vast, but our ability to study it continues to grow.</p>

                <p><strong>Astronomy reminds us that curiosity can turn a simple question about the night sky into a journey of discovery across the cosmos.</strong></p>
            `
        }
    ]
};
