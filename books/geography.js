const geographyBook = {
    id: "geography",
    title: "Geography Made Understandable",
    category: "Geography",
    icon: "🗺️",
    description:
        "Explore Earth's continents, landscapes, climate, population, maps, natural resources, cities, and the relationships between people and places.",

    chapters: [
        {
            id: 1,
            title: "What Is Geography?",
            content: `
                <p>Geography is the study of places, environments, people, and the relationships between them.</p>
                <h3>Physical Geography</h3>
                <p>Physical geography studies natural features such as mountains, rivers, oceans, climate, soils, and ecosystems.</p>
                <h3>Human Geography</h3>
                <p>Human geography studies populations, cultures, cities, economies, migration, and how people use space.</p>
                <p><strong>Key idea:</strong> Geography helps us understand where things are and why places are different.</p>
            `
        },

        {
            id: 2,
            title: "Maps and Coordinates",
            content: `
                <p>Maps represent locations and geographic features on a smaller surface.</p>
                <h3>Latitude</h3>
                <p>Latitude measures distance north or south of the Equator.</p>
                <h3>Longitude</h3>
                <p>Longitude measures distance east or west of the Prime Meridian.</p>
                <h3>Coordinates</h3>
                <p>Latitude and longitude can be combined to identify locations on Earth.</p>
            `
        },

        {
            id: 3,
            title: "Earth's Continents",
            content: `
                <p>Earth's land is commonly divided into seven continents: Asia, Africa, North America, South America, Antarctica, Europe, and Australia.</p>
                <h3>Different Environments</h3>
                <p>Continents contain many different climates, landscapes, ecosystems, and cultures.</p>
                <h3>Connected World</h3>
                <p>Although continents are separated by oceans and geography, trade, migration, communication, and technology connect their populations.</p>
            `
        },

        {
            id: 4,
            title: "Mountains and Volcanoes",
            content: `
                <p>Mountains are elevated areas of Earth's surface formed through processes including tectonic activity, volcanism, and erosion.</p>
                <h3>Mountain Formation</h3>
                <p>Collisions between tectonic plates can create mountain ranges.</p>
                <h3>Volcanoes</h3>
                <p>Volcanoes form where magma reaches or approaches Earth's surface.</p>
                <h3>Benefits and Risks</h3>
                <p>Volcanic regions can have fertile soils and valuable minerals but may also face hazards such as eruptions, ash, and lahars.</p>
            `
        },

        {
            id: 5,
            title: "Rivers and Oceans",
            content: `
                <p>Water shapes landscapes and supports life throughout Earth.</p>
                <h3>Rivers</h3>
                <p>Rivers transport water, sediment, nutrients, and materials across landscapes.</p>
                <h3>Oceans</h3>
                <p>Oceans cover most of Earth's surface and play major roles in climate, ecosystems, and global water cycles.</p>
                <h3>Human Dependence</h3>
                <p>People depend on rivers and oceans for water, food, transportation, energy, recreation, and other resources.</p>
            `
        },

        {
            id: 6,
            title: "Climate and Biomes",
            content: `
                <p>Climate strongly influences the types of ecosystems found in different regions.</p>
                <h3>Biomes</h3>
                <p>Major biomes include deserts, tropical forests, grasslands, temperate forests, and tundra.</p>
                <h3>Temperature and Rainfall</h3>
                <p>Temperature and precipitation are major factors determining the characteristics of ecosystems.</p>
                <h3>Human Influence</h3>
                <p>Human land use can transform natural landscapes and ecosystems.</p>
            `
        },

        {
            id: 7,
            title: "Population",
            content: `
                <p>Population geography studies where people live, how populations change, and how people interact with places.</p>
                <h3>Population Density</h3>
                <p>Population density describes the number of people living within a particular area.</p>
                <h3>Population Growth</h3>
                <p>Population size changes through births, deaths, immigration, and emigration.</p>
                <h3>Distribution</h3>
                <p>People are unevenly distributed across Earth because climate, resources, history, economics, and geography influence settlement.</p>
            `
        },

        {
            id: 8,
            title: "Cities",
            content: `
                <p>Cities are densely populated settlements that concentrate homes, businesses, services, transportation, and infrastructure.</p>
                <h3>Urbanization</h3>
                <p>Urbanization occurs when an increasing share of a population lives in urban areas.</p>
                <h3>City Planning</h3>
                <p>Urban planning involves transportation, housing, public spaces, utilities, environmental protection, and other needs.</p>
                <h3>Challenges</h3>
                <p>Cities can face traffic, pollution, housing shortages, waste management challenges, and pressure on infrastructure.</p>
            `
        },

        {
            id: 9,
            title: "Natural Resources",
            content: `
                <p>Natural resources are materials and environmental features that people use.</p>
                <h3>Examples</h3>
                <p>Resources include water, forests, minerals, soil, fossil fuels, sunlight, and wind.</p>
                <h3>Distribution</h3>
                <p>Resources are not evenly distributed around the world, influencing economies and human settlement.</p>
                <h3>Sustainability</h3>
                <p>Responsible resource management can help maintain supplies and protect ecosystems.</p>
            `
        },

        {
            id: 10,
            title: "Agriculture",
            content: `
                <p>Agriculture involves growing crops and raising animals for food, materials, and other products.</p>
                <h3>Physical Geography</h3>
                <p>Climate, soil, water availability, and terrain affect agricultural production.</p>
                <h3>Technology</h3>
                <p>Irrigation, machinery, improved crop varieties, fertilizers, and other technologies can increase agricultural productivity.</p>
                <h3>Environmental Challenges</h3>
                <p>Agriculture can contribute to soil degradation, water use, habitat loss, and pollution if poorly managed.</p>
            `
        },

        {
            id: 11,
            title: "Transportation and Trade",
            content: `
                <p>Transportation allows people and goods to move between places.</p>
                <h3>Transportation Networks</h3>
                <p>Roads, railways, airports, and ports connect communities and economic centers.</p>
                <h3>Global Trade</h3>
                <p>Countries exchange goods and services across borders, creating complex international supply chains.</p>
                <h3>Geography Matters</h3>
                <p>Location, distance, terrain, waterways, and infrastructure influence transportation and trade.</p>
            `
        },

        {
            id: 12,
            title: "Culture and Geography",
            content: `
                <p>Geography influences cultures, while cultures also transform places.</p>
                <h3>Language</h3>
                <p>Languages are distributed geographically and can spread through migration, trade, education, and historical connections.</p>
                <h3>Food</h3>
                <p>Local climates, crops, animals, and traditions influence cuisines.</p>
                <h3>Built Environments</h3>
                <p>Buildings, roads, farms, and cities reflect both environmental conditions and cultural choices.</p>
            `
        },

        {
            id: 13,
            title: "Natural Hazards",
            content: `
                <p>Natural hazards are natural processes that can threaten people or property.</p>
                <h3>Examples</h3>
                <p>Earthquakes, volcanic eruptions, floods, landslides, storms, droughts, and tsunamis can create hazards.</p>
                <h3>Risk</h3>
                <p>Risk depends not only on the natural event but also on exposure and vulnerability.</p>
                <h3>Preparedness</h3>
                <p>Early warning systems, strong infrastructure, planning, education, and emergency preparation can reduce disaster impacts.</p>
            `
        },

        {
            id: 14,
            title: "Human-Environment Relationships",
            content: `
                <p>Humans depend on Earth's environment while also changing it.</p>
                <h3>Environmental Modification</h3>
                <p>People transform landscapes through agriculture, construction, mining, transportation, and other activities.</p>
                <h3>Adaptation</h3>
                <p>Communities adapt to local environments through building styles, agriculture, clothing, technology, and cultural practices.</p>
                <h3>Balance</h3>
                <p>Understanding human-environment relationships can help communities make better decisions about resources and development.</p>
            `
        },

        {
            id: 15,
            title: "Our World",
            content: `
                <p>Geography connects physical landscapes with human societies.</p>
                <h3>A Connected Planet</h3>
                <p>Modern transportation, communication, migration, and trade connect people across enormous distances.</p>
                <h3>Geographic Thinking</h3>
                <p>Geographers ask where things are, why they are there, how places are connected, and how places change.</p>
                <p><strong>Understanding geography helps us understand the remarkable variety and interconnectedness of our planet.</strong></p>
            `
        }
    ]
};
