const biologyBook = {
    id: "biology",
    title: "The Living World: Biology Made Understandable",
    category: "Biology",
    icon: "🧬",
    description:
        "A clear and fascinating journey through life, cells, DNA, plants, animals, ecosystems, evolution, and the amazing systems that make living things possible.",

    chapters: [
        {
            id: 1,
            title: "What Is Biology?",
            content: `
                <p>Biology is the branch of science that studies living things. The word biology comes from Greek words meaning "life" and "study." Biologists investigate how organisms live, grow, reproduce, interact, and change over time.</p>

                <h3>The Living World</h3>
                <p>Life can be found in many forms, from microscopic bacteria to enormous whales and towering trees. Although living things can look very different, they share important characteristics.</p>

                <h3>What Do Biologists Study?</h3>
                <p>Biologists study cells, genes, organisms, populations, ecosystems, and the relationships between living things and their environments.</p>

                <h3>Branches of Biology</h3>
                <p>Biology has many specialized fields. Botany studies plants, zoology studies animals, microbiology studies microscopic organisms, genetics studies heredity, and ecology studies relationships between organisms and their environments.</p>

                <p><strong>Key idea:</strong> Biology helps us understand life and the systems that allow living things to survive.</p>
            `
        },

        {
            id: 2,
            title: "The Characteristics of Life",
            content: `
                <p>Living things share several characteristics that distinguish them from nonliving objects.</p>

                <h3>Organization</h3>
                <p>Living organisms have organized structures. Cells are the basic units of life, and cells can work together to form tissues, organs, and organ systems.</p>

                <h3>Growth and Development</h3>
                <p>Living things grow and change throughout their lives. A seed can develop into a plant, while a young animal can grow into an adult.</p>

                <h3>Response to Stimuli</h3>
                <p>Organisms respond to changes in their environment. Plants may grow toward light, while animals may move away from danger.</p>

                <h3>Reproduction</h3>
                <p>Living organisms can produce new organisms. Reproduction allows species to continue from one generation to another.</p>

                <h3>Energy Use</h3>
                <p>Living things need energy to perform their activities. Plants capture energy from sunlight, while animals obtain energy by consuming food.</p>

                <h3>Homeostasis</h3>
                <p>Organisms regulate their internal conditions. For example, humans maintain a relatively stable body temperature even when the surrounding environment changes.</p>
            `
        },

        {
            id: 3,
            title: "Cells: The Building Blocks of Life",
            content: `
                <p>Cells are the basic structural and functional units of living organisms. Some organisms consist of only one cell, while others contain trillions of cells.</p>

                <h3>Cell Theory</h3>
                <p>Cell theory states that all living organisms are made of one or more cells, cells are the basic unit of life, and new cells come from existing cells.</p>

                <h3>Two Major Types of Cells</h3>
                <p>Prokaryotic cells are generally simpler and do not contain a nucleus surrounded by a membrane. Bacteria are examples of organisms with prokaryotic cells.</p>

                <p>Eukaryotic cells contain a nucleus and other membrane-bound structures called organelles. Plants, animals, fungi, and many other organisms have eukaryotic cells.</p>

                <h3>Why Cells Matter</h3>
                <p>Cells perform essential functions such as obtaining energy, building materials, removing waste, responding to signals, and reproducing.</p>

                <p><strong>Remember:</strong> Even the largest living organisms begin with cells.</p>
            `
        },

        {
            id: 4,
            title: "Plant Cells and Animal Cells",
            content: `
                <p>Plant and animal cells are both eukaryotic cells, but they have important differences.</p>

                <h3>Animal Cells</h3>
                <p>Animal cells contain structures such as a nucleus, cell membrane, cytoplasm, mitochondria, ribosomes, and other organelles.</p>

                <h3>Plant Cells</h3>
                <p>Plant cells contain many of the same structures as animal cells but also have a cell wall, chloroplasts, and a large central vacuole.</p>

                <h3>Cell Wall</h3>
                <p>The cell wall provides additional support and protection to plant cells.</p>

                <h3>Chloroplasts</h3>
                <p>Chloroplasts contain chlorophyll and are responsible for capturing light energy during photosynthesis.</p>

                <h3>Vacuoles</h3>
                <p>The large central vacuole in plant cells can store water and other substances and helps maintain pressure inside the cell.</p>

                <p>The differences between plant and animal cells allow them to perform specialized functions.</p>
            `
        },

        {
            id: 5,
            title: "DNA and Genetics",
            content: `
                <p>DNA, or deoxyribonucleic acid, contains genetic information that helps determine how organisms develop and function.</p>

                <h3>The Structure of DNA</h3>
                <p>DNA has a structure often described as a double helix. It is made from smaller units called nucleotides.</p>

                <h3>Genes</h3>
                <p>A gene is a segment of DNA that contains information used to produce a functional product, often a protein or functional RNA.</p>

                <h3>Chromosomes</h3>
                <p>DNA is organized into structures called chromosomes. Humans normally have 46 chromosomes in most body cells, arranged into 23 pairs.</p>

                <h3>Heredity</h3>
                <p>Genetic information can be passed from parents to offspring. This process helps explain why children can share characteristics with their parents.</p>

                <h3>Variation</h3>
                <p>Individuals of the same species can have differences in their genetic information. These differences contribute to biological variation.</p>

                <p><strong>Key idea:</strong> DNA stores biological information that helps living organisms develop and function.</p>
            `
        },

        {
            id: 6,
            title: "Photosynthesis",
            content: `
                <p>Photosynthesis is the process by which plants, algae, and some microorganisms use light energy to produce chemical energy.</p>

                <h3>The Main Ingredients</h3>
                <p>Plants use carbon dioxide from the air and water from the environment. Light energy is captured by pigments such as chlorophyll.</p>

                <h3>The Basic Equation</h3>
                <p><strong>Carbon dioxide + Water + Light Energy → Glucose + Oxygen</strong></p>

                <h3>Why Photosynthesis Matters</h3>
                <p>Photosynthesis produces organic molecules that provide energy and materials for plant growth. It also releases oxygen into the atmosphere.</p>

                <h3>Chloroplasts</h3>
                <p>In plant cells, photosynthesis takes place mainly inside chloroplasts.</p>

                <p>Photosynthesis connects sunlight, plants, animals, and ecosystems by helping provide the energy that supports many food webs.</p>
            `
        },

        {
            id: 7,
            title: "Cellular Respiration",
            content: `
                <p>Cells need usable energy to perform their activities. Cellular respiration is a collection of metabolic processes that release energy from nutrients such as glucose.</p>

                <h3>The Basic Idea</h3>
                <p>In aerobic cellular respiration, cells use oxygen to help break down glucose and transfer energy into ATP, a molecule cells can use for many processes.</p>

                <h3>The Overall Equation</h3>
                <p><strong>Glucose + Oxygen → Carbon Dioxide + Water + Energy</strong></p>

                <h3>Mitochondria</h3>
                <p>Much of aerobic cellular respiration in eukaryotic cells takes place in mitochondria.</p>

                <h3>Connection With Photosynthesis</h3>
                <p>Photosynthesis and cellular respiration are closely connected. Photosynthesis stores energy in organic molecules, while cellular respiration releases usable energy from those molecules.</p>

                <p>These processes are central to the flow of energy through living systems.</p>
            `
        },

        {
            id: 8,
            title: "Plants and How They Grow",
            content: `
                <p>Plants are living organisms capable of producing their own food through photosynthesis. They have specialized structures that help them survive and grow.</p>

                <h3>Roots</h3>
                <p>Roots anchor plants to the ground and absorb water and minerals from the soil.</p>

                <h3>Stems</h3>
                <p>Stems support leaves and transport materials throughout the plant.</p>

                <h3>Leaves</h3>
                <p>Leaves are major sites of photosynthesis. Their broad surfaces help capture sunlight.</p>

                <h3>Flowers</h3>
                <p>In flowering plants, flowers are reproductive structures that can help produce seeds.</p>

                <h3>Plant Growth</h3>
                <p>Plants need water, minerals, light, carbon dioxide, and suitable environmental conditions to grow successfully.</p>

                <h3>Responses to Light</h3>
                <p>Many plants respond to light by growing toward a light source. This response is called phototropism.</p>
            `
        },

        {
            id: 9,
            title: "Animals and Their Systems",
            content: `
                <p>Animals are multicellular organisms with specialized cells, tissues, organs, and organ systems.</p>

                <h3>Digestive System</h3>
                <p>The digestive system breaks food into smaller substances that can be absorbed and used by the body.</p>

                <h3>Respiratory System</h3>
                <p>The respiratory system allows organisms such as humans to exchange gases with their environment. Oxygen can enter the body while carbon dioxide is removed.</p>

                <h3>Circulatory System</h3>
                <p>The circulatory system transports substances throughout the body. In humans, the heart pumps blood through blood vessels.</p>

                <h3>Nervous System</h3>
                <p>The nervous system receives information, processes signals, and coordinates many responses.</p>

                <h3>Different Systems Working Together</h3>
                <p>Body systems do not work independently. They interact continuously to keep the organism alive and functioning.</p>

                <p><strong>Key idea:</strong> Complex organisms survive because many specialized systems work together.</p>
            `
        },

        {
            id: 10,
            title: "Ecosystems",
            content: `
                <p>An ecosystem includes living organisms and the nonliving components of their environment, along with the interactions between them.</p>

                <h3>Biotic Factors</h3>
                <p>Biotic factors are the living parts of an ecosystem, including plants, animals, fungi, bacteria, and other organisms.</p>

                <h3>Abiotic Factors</h3>
                <p>Abiotic factors are nonliving conditions such as sunlight, temperature, water, soil, air, and minerals.</p>

                <h3>Interactions</h3>
                <p>Organisms interact with one another through relationships such as competition, predation, cooperation, and symbiosis.</p>

                <h3>Energy Flow</h3>
                <p>Energy generally enters many ecosystems through sunlight. Producers capture energy, consumers obtain energy by eating other organisms, and decomposers help recycle matter.</p>

                <p>Ecosystems can be tiny, such as a pond, or enormous, such as a forest or ocean.</p>
            `
        },

        {
            id: 11,
            title: "Food Chains and Food Webs",
            content: `
                <p>A food chain shows how energy and matter can move from one organism to another through feeding relationships.</p>

                <h3>Producers</h3>
                <p>Producers, such as plants and algae, create organic molecules using energy from sunlight or other sources.</p>

                <h3>Consumers</h3>
                <p>Consumers obtain energy by eating other organisms. Herbivores eat plants, carnivores eat animals, and omnivores can eat both plants and animals.</p>

                <h3>Decomposers</h3>
                <p>Decomposers such as many fungi and bacteria break down dead organic material and help return nutrients to ecosystems.</p>

                <h3>Food Webs</h3>
                <p>Real ecosystems contain many connected food chains. A food web represents these multiple feeding relationships.</p>

                <h3>Energy Loss</h3>
                <p>Energy is lost as heat during biological processes, so less usable energy is generally available at higher trophic levels.</p>

                <p>Food webs help scientists understand how changes to one population can affect other organisms.</p>
            `
        },

        {
            id: 12,
            title: "Adaptation and Evolution",
            content: `
                <p>Evolution is the change in inherited characteristics of populations across generations.</p>

                <h3>Variation</h3>
                <p>Individuals within a population can have differences in their inherited characteristics. Some differences can affect survival or reproduction.</p>

                <h3>Natural Selection</h3>
                <p>Natural selection occurs when individuals with heritable traits that provide an advantage in a particular environment tend to leave more surviving offspring.</p>

                <h3>Adaptations</h3>
                <p>An adaptation is an inherited characteristic that can increase an organism's ability to survive and reproduce in a particular environment.</p>

                <h3>Examples</h3>
                <p>Camouflage can help organisms avoid detection. Thick fur can help animals survive in cold environments. Certain plant structures can reduce water loss in dry environments.</p>

                <p>Evolution occurs across populations and generations rather than because an individual simply decides to change.</p>
            `
        },

        {
            id: 13,
            title: "Microorganisms",
            content: `
                <p>Microorganisms are organisms or biological entities so small that many require microscopes to observe. They include bacteria, many fungi, protozoans, and microscopic algae. Viruses are microscopic infectious agents but are not generally considered living organisms.</p>

                <h3>Bacteria</h3>
                <p>Bacteria are single-celled prokaryotic organisms. Many are harmless or beneficial, while others can cause disease.</p>

                <h3>Fungi</h3>
                <p>Microscopic fungi include yeasts and molds. Fungi play important roles as decomposers and can also be used in food production.</p>

                <h3>Helpful Microorganisms</h3>
                <p>Microorganisms help decompose organic matter, recycle nutrients, produce foods, and support processes in biotechnology.</p>

                <h3>Harmful Microorganisms</h3>
                <p>Some microorganisms can cause infections or spoil food. Understanding how they spread helps us develop ways to prevent disease.</p>

                <p><strong>Key idea:</strong> The microscopic world has enormous effects on ecosystems, health, food, and technology.</p>
            `
        },

        {
            id: 14,
            title: "Human Reproduction",
            content: `
                <p>Reproduction is the biological process through which organisms produce offspring. In humans, reproduction involves specialized reproductive cells and organs.</p>

                <h3>Reproductive Cells</h3>
                <p>Human reproductive cells are sperm cells and egg cells. These cells contain half the usual number of chromosomes.</p>

                <h3>Fertilization</h3>
                <p>Fertilization occurs when a sperm cell joins with an egg cell, producing a zygote with genetic material from both parents.</p>

                <h3>Development</h3>
                <p>The zygote divides repeatedly and develops into an embryo. During development, cells become specialized and form tissues and organs.</p>

                <h3>Genetic Contribution</h3>
                <p>Because genetic material comes from both parents, offspring can inherit combinations of characteristics from each parent.</p>

                <p>Human reproduction involves coordinated biological processes that allow the continuation of the species.</p>
            `
        },

        {
            id: 15,
            title: "The Balance of Life",
            content: `
                <p>Life on Earth depends on complex relationships between organisms and their environments. Every species interacts with other organisms and with physical conditions around it.</p>

                <h3>Interdependence</h3>
                <p>Plants provide food and oxygen for many organisms. Animals can pollinate plants and distribute seeds. Decomposers return nutrients to the environment.</p>

                <h3>Cycles of Matter</h3>
                <p>Matter moves through ecosystems in cycles. Water, carbon, nitrogen, and other elements are continuously transferred between organisms and the environment.</p>

                <h3>Human Impact</h3>
                <p>Human activities can change ecosystems through pollution, habitat destruction, overuse of resources, and changes in land use.</p>

                <h3>Protecting Life</h3>
                <p>Conservation can help protect habitats, biodiversity, and natural resources. Understanding biology gives us the knowledge needed to make informed decisions about the living world.</p>

                <h3>Final Thought</h3>
                <p>Life is connected at many levels, from molecules inside cells to entire ecosystems.</p>

                <p><strong>When we understand how life works, we can better appreciate and protect the living world around us.</strong></p>
            `
        }
    ]
};
