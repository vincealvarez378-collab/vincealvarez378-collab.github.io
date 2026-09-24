const healthScienceBook = {
    id: "health-science",
    title: "Health Science Made Understandable",
    category: "Health Science",
    icon: "🩺",
    description:
        "An educational introduction to the human body, nutrition, exercise, disease prevention, hygiene, mental well-being, first aid, and healthy living.",

    chapters: [
        {
            id: 1,
            title: "What Is Health Science?",
            content: `
                <p>Health science is the study and application of knowledge related to human health, disease, prevention, treatment, and well-being.</p>
                <h3>Many Fields</h3>
                <p>Health science includes medicine, nursing, nutrition, public health, physical therapy, laboratory science, and many other fields.</p>
                <h3>Prevention</h3>
                <p>Health science is not only about treating illness. Preventing disease and promoting healthy behaviors are also important.</p>
                <p><strong>Key idea:</strong> Health science uses scientific knowledge to understand and improve human health.</p>
            `
        },

        {
            id: 2,
            title: "The Human Body",
            content: `
                <p>The human body is an organized system of cells, tissues, organs, and organ systems that work together.</p>
                <h3>Organ Systems</h3>
                <p>Major systems include the nervous, circulatory, respiratory, digestive, skeletal, muscular, immune, and reproductive systems.</p>
                <h3>Working Together</h3>
                <p>Body systems depend on one another. For example, the respiratory and circulatory systems work together to deliver oxygen to cells.</p>
                <h3>Homeostasis</h3>
                <p>Homeostasis refers to maintaining relatively stable internal conditions despite changes in the environment.</p>
            `
        },

        {
            id: 3,
            title: "Nutrition",
            content: `
                <p>Nutrition is the process through which the body obtains and uses nutrients needed for energy, growth, repair, and normal function.</p>
                <h3>Major Nutrients</h3>
                <p>Carbohydrates, proteins, and fats provide energy and building materials. Vitamins and minerals support many biological processes.</p>
                <h3>Water</h3>
                <p>Water is essential for temperature regulation, chemical reactions, transportation of substances, and many other functions.</p>
                <h3>Balanced Eating</h3>
                <p>A varied diet containing appropriate amounts of different food groups can help provide the nutrients the body needs.</p>
            `
        },

        {
            id: 4,
            title: "Exercise and Fitness",
            content: `
                <p>Physical activity supports many aspects of health.</p>
                <h3>Cardiovascular Fitness</h3>
                <p>Aerobic activities such as walking, running, cycling, and swimming can improve cardiovascular endurance.</p>
                <h3>Strength</h3>
                <p>Resistance exercise can strengthen muscles and support bone health.</p>
                <h3>Flexibility and Balance</h3>
                <p>Activities that improve flexibility and balance can support movement and reduce some risks of injury.</p>
                <p>Regular physical activity should be appropriate for a person's age, abilities, and health circumstances.</p>
            `
        },

        {
            id: 5,
            title: "Sleep",
            content: `
                <p>Sleep is an important biological process that supports physical and mental functioning.</p>
                <h3>Why Sleep Matters</h3>
                <p>Sleep supports memory, learning, immune function, metabolism, mood, and physical recovery.</p>
                <h3>Sleep Habits</h3>
                <p>A consistent sleep schedule, a comfortable sleep environment, and limiting stimulating activities near bedtime can support healthy sleep habits.</p>
                <h3>Different Needs</h3>
                <p>Sleep requirements vary with age and individual circumstances.</p>
            `
        },

        {
            id: 6,
            title: "Hygiene and Disease Prevention",
            content: `
                <p>Hygiene includes practices that help maintain cleanliness and reduce the spread of infectious diseases.</p>
                <h3>Handwashing</h3>
                <p>Washing hands with soap and water can reduce the spread of many germs.</p>
                <h3>Food Safety</h3>
                <p>Proper food storage, preparation, and cooking can reduce the risk of foodborne illness.</p>
                <h3>Respiratory Hygiene</h3>
                <p>Covering coughs and sneezes and staying home when sick when appropriate can reduce the spread of respiratory infections.</p>
            `
        },

        {
            id: 7,
            title: "The Immune System",
            content: `
                <p>The immune system protects the body from many harmful organisms and abnormal cells.</p>
                <h3>First Defenses</h3>
                <p>The skin and other barriers provide important first lines of defense against pathogens.</p>
                <h3>White Blood Cells</h3>
                <p>Different types of immune cells recognize and respond to foreign substances and infected cells.</p>
                <h3>Vaccination</h3>
                <p>Vaccines train the immune system to recognize specific pathogens or their components, helping prepare the body for future exposure.</p>
                <p>The immune system is complex and works through many coordinated mechanisms.</p>
            `
        },

        {
            id: 8,
            title: "Infectious Diseases",
            content: `
                <p>Infectious diseases are caused by pathogens such as viruses, bacteria, fungi, or parasites.</p>
                <h3>Transmission</h3>
                <p>Pathogens can spread through different routes, including respiratory droplets or aerosols, contaminated food or water, direct contact, or vectors such as mosquitoes.</p>
                <h3>Prevention</h3>
                <p>Vaccination, hygiene, safe food and water, vector control, and appropriate medical care can reduce disease transmission and severity.</p>
                <h3>Antibiotics</h3>
                <p>Antibiotics are medicines used against certain bacterial infections. They do not treat viral infections.</p>
            `
        },

        {
            id: 9,
            title: "Mental Well-Being",
            content: `
                <p>Mental well-being involves emotional, psychological, and social aspects of health.</p>
                <h3>Healthy Habits</h3>
                <p>Sleep, physical activity, social connection, meaningful activities, and healthy routines can support well-being.</p>
                <h3>Stress</h3>
                <p>Stress is a normal response to challenges, but persistent or overwhelming stress can interfere with daily life.</p>
                <h3>Seeking Support</h3>
                <p>Talking with trusted people or qualified health professionals can be helpful when difficulties become persistent or interfere with daily functioning.</p>
            `
        },

        {
            id: 10,
            title: "First Aid Basics",
            content: `
                <p>First aid consists of immediate assistance provided to someone who is injured or suddenly ill until professional medical care is available.</p>
                <h3>Safety First</h3>
                <p>Before helping, make sure the environment is safe for both the injured person and the responder.</p>
                <h3>Emergency Help</h3>
                <p>Serious injuries and medical emergencies require professional emergency services.</p>
                <h3>Basic Response</h3>
                <p>First-aid training can teach people how to respond to bleeding, burns, choking, and other emergencies safely.</p>
                <p>Formal first-aid training is the best way to learn practical emergency skills.</p>
            `
        },

        {
            id: 11,
            title: "Heart and Circulation",
            content: `
                <p>The cardiovascular system circulates blood throughout the body.</p>
                <h3>The Heart</h3>
                <p>The heart is a muscular organ that pumps blood through blood vessels.</p>
                <h3>Blood</h3>
                <p>Blood transports oxygen, nutrients, hormones, waste products, and immune cells.</p>
                <h3>Healthy Circulation</h3>
                <p>Regular physical activity, avoiding tobacco, balanced nutrition, and managing health conditions can support cardiovascular health.</p>
            `
        },

        {
            id: 12,
            title: "The Respiratory System",
            content: `
                <p>The respiratory system allows the body to exchange gases with the environment.</p>
                <h3>Breathing</h3>
                <p>Air enters the lungs, where oxygen can move into the blood and carbon dioxide can move out.</p>
                <h3>Gas Exchange</h3>
                <p>Gas exchange occurs mainly in tiny structures called alveoli within the lungs.</p>
                <h3>Protecting the Lungs</h3>
                <p>Avoiding smoking and exposure to harmful pollutants can help protect respiratory health.</p>
            `
        },

        {
            id: 13,
            title: "Public Health",
            content: `
                <p>Public health focuses on protecting and improving the health of populations rather than only treating individual patients.</p>
                <h3>Prevention</h3>
                <p>Public health programs can include vaccination, sanitation, health education, disease surveillance, and environmental protections.</p>
                <h3>Communities</h3>
                <p>Health is influenced by factors such as housing, clean water, education, nutrition, healthcare access, and environmental conditions.</p>
                <p>Public health combines science, policy, education, and community action.</p>
            `
        },

        {
            id: 14,
            title: "Healthy Habits",
            content: `
                <p>Healthy habits are repeated behaviors that can support physical and mental well-being.</p>
                <h3>Daily Choices</h3>
                <p>Examples include eating a varied diet, being physically active, sleeping adequately, practicing good hygiene, and avoiding harmful substances.</p>
                <h3>Consistency</h3>
                <p>Health is influenced by patterns over time rather than one isolated decision.</p>
                <h3>Individual Differences</h3>
                <p>Health needs vary between people. Medical conditions and other circumstances can affect what is appropriate.</p>
            `
        },

        {
            id: 15,
            title: "Understanding Health",
            content: `
                <p>Health is influenced by biology, behavior, environment, society, healthcare, and many other factors.</p>
                <h3>Science-Based Choices</h3>
                <p>Reliable health information should come from evidence and qualified sources rather than rumors or unsupported claims.</p>
                <h3>Prevention</h3>
                <p>Many health problems can be reduced through prevention, early detection, appropriate treatment, and healthy environments.</p>
                <h3>Final Thought</h3>
                <p>Understanding health science gives people knowledge they can use to care for themselves, support others, and make informed choices.</p>
                <p><strong>Good health is not simply the absence of illness. It involves the many systems that allow people to live, function, and participate in their communities.</strong></p>
            `
        }
    ]
};
