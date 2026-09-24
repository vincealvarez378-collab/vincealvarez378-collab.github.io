const economicsBook = {
    id: "economics",
    title: "Economics Made Understandable",
    category: "Economics",
    icon: "💰",
    description:
        "A beginner-friendly introduction to money, markets, supply and demand, businesses, trade, inflation, jobs, and how economies work.",

    chapters: [
        {
            id: 1,
            title: "What Is Economics?",
            content: `
                <p>Economics studies how people and societies make choices about using limited resources to satisfy needs and wants.</p>
                <h3>Scarcity</h3>
                <p>Resources are limited while human wants can be very large. This creates scarcity and requires choices.</p>
                <h3>Choices</h3>
                <p>Every choice involves deciding how to use available time, money, labor, materials, or other resources.</p>
                <p><strong>Key idea:</strong> Economics is fundamentally about choices and resources.</p>
            `
        },

        {
            id: 2,
            title: "Needs, Wants, and Resources",
            content: `
                <p>People have needs such as food, water, shelter, and basic security. Wants are things people desire but can live without.</p>
                <h3>Resources</h3>
                <p>Economic resources include land, labor, capital, and entrepreneurship.</p>
                <h3>Limited Resources</h3>
                <p>Because resources are limited, individuals, businesses, and governments must make choices about priorities.</p>
            `
        },

        {
            id: 3,
            title: "Supply and Demand",
            content: `
                <p>Supply and demand are fundamental concepts used to understand markets.</p>
                <h3>Demand</h3>
                <p>Demand describes how much of a good or service consumers are willing and able to purchase at different prices.</p>
                <h3>Supply</h3>
                <p>Supply describes how much producers are willing and able to offer at different prices.</p>
                <h3>Markets</h3>
                <p>The interaction between supply and demand influences market prices and quantities.</p>
            `
        },

        {
            id: 4,
            title: "Money",
            content: `
                <p>Money is widely accepted as a means of payment and serves several important economic functions.</p>
                <h3>Medium of Exchange</h3>
                <p>Money makes it easier to buy and sell goods without directly exchanging one product for another.</p>
                <h3>Unit of Account</h3>
                <p>Money provides a common way to measure and compare economic values.</p>
                <h3>Store of Value</h3>
                <p>Money can be saved and used later, although inflation can reduce its purchasing power.</p>
            `
        },

        {
            id: 5,
            title: "Businesses",
            content: `
                <p>Businesses organize resources to produce goods and services.</p>
                <h3>Revenue</h3>
                <p>Revenue is the money a business receives from selling goods or services.</p>
                <h3>Costs</h3>
                <p>Businesses have costs such as materials, labor, transportation, equipment, and rent.</p>
                <h3>Profit</h3>
                <p>Profit is generally the amount remaining after costs are subtracted from revenue.</p>
            `
        },

        {
            id: 6,
            title: "Labor and Jobs",
            content: `
                <p>Labor refers to human effort used to produce goods and services.</p>
                <h3>Skills</h3>
                <p>Education, training, and experience can influence workers' skills and productivity.</p>
                <h3>Wages</h3>
                <p>Workers receive compensation for their labor. Wages can vary depending on occupation, skills, location, experience, and labor market conditions.</p>
                <h3>Unemployment</h3>
                <p>Unemployment occurs when people who are available and seeking work do not have jobs.</p>
            `
        },

        {
            id: 7,
            title: "Banks and Saving",
            content: `
                <p>Banks provide financial services such as deposits, payments, and lending.</p>
                <h3>Saving</h3>
                <p>Saving means setting aside income for future use.</p>
                <h3>Loans</h3>
                <p>Banks and other financial institutions can lend money to individuals and businesses, generally charging interest.</p>
                <h3>Interest</h3>
                <p>Interest is the cost of borrowing money or the return earned on certain savings and investments.</p>
            `
        },

        {
            id: 8,
            title: "Inflation",
            content: `
                <p>Inflation is a sustained increase in the general price level of goods and services over time.</p>
                <h3>Purchasing Power</h3>
                <p>When prices rise, each unit of currency generally buys fewer goods and services than before.</p>
                <h3>Causes</h3>
                <p>Inflation can result from different combinations of changes in demand, supply, production costs, expectations, and monetary conditions.</p>
                <h3>Measuring Inflation</h3>
                <p>Economists use price indexes to measure changes in the cost of groups of goods and services.</p>
            `
        },

        {
            id: 9,
            title: "Trade",
            content: `
                <p>Trade occurs when people, businesses, or countries exchange goods and services.</p>
                <h3>Specialization</h3>
                <p>People and countries can specialize in activities where they have advantages and trade for other products.</p>
                <h3>Imports</h3>
                <p>Imports are goods and services purchased from other countries.</p>
                <h3>Exports</h3>
                <p>Exports are goods and services sold to other countries.</p>
                <p>International trade connects economies and creates complex supply chains.</p>
            `
        },

        {
            id: 10,
            title: "Taxes",
            content: `
                <p>Taxes are compulsory payments collected by governments to finance public services and government activities.</p>
                <h3>Public Services</h3>
                <p>Tax revenue can help fund infrastructure, education, healthcare, public safety, and other government programs.</p>
                <h3>Different Taxes</h3>
                <p>Taxes can be applied to income, purchases, property, businesses, imports, and other economic activities.</p>
                <p>Tax systems differ across countries and can have different economic effects.</p>
            `
        },

        {
            id: 11,
            title: "Economic Growth",
            content: `
                <p>Economic growth refers to an increase in the production of goods and services in an economy over time.</p>
                <h3>Productivity</h3>
                <p>Productivity describes how efficiently inputs such as labor and capital are transformed into output.</p>
                <h3>Technology</h3>
                <p>Technological improvements can increase productivity by allowing people and businesses to produce more with available resources.</p>
                <h3>Living Standards</h3>
                <p>Economic growth can contribute to higher living standards, although its benefits may not be distributed equally.</p>
            `
        },

        {
            id: 12,
            title: "The Global Economy",
            content: `
                <p>The global economy consists of interconnected national economies that exchange goods, services, capital, technology, and labor.</p>
                <h3>Global Supply Chains</h3>
                <p>A single product can involve raw materials, manufacturing, transportation, and services from many countries.</p>
                <h3>Economic Interdependence</h3>
                <p>Economic changes in one country can affect businesses and consumers elsewhere.</p>
                <h3>Technology</h3>
                <p>Digital communication and modern transportation have increased the speed and scale of global economic connections.</p>
            `
        },

        {
            id: 13,
            title: "Personal Finance",
            content: `
                <p>Personal finance involves managing income, spending, saving, borrowing, and financial goals.</p>
                <h3>Budgeting</h3>
                <p>A budget compares expected income with planned expenses.</p>
                <h3>Emergency Savings</h3>
                <p>Setting aside money for unexpected expenses can provide financial flexibility.</p>
                <h3>Responsible Borrowing</h3>
                <p>Borrowing money creates an obligation to repay it, often with interest. Understanding the total cost of borrowing is important.</p>
            `
        },

        {
            id: 14,
            title: "Economic Decision-Making",
            content: `
                <p>Economic decisions involve comparing benefits, costs, risks, and alternatives.</p>
                <h3>Opportunity Cost</h3>
                <p>Opportunity cost is the value of the next-best alternative given up when making a choice.</p>
                <h3>Trade-Offs</h3>
                <p>Choosing one option often means giving up another option because resources are limited.</p>
                <h3>Thinking Carefully</h3>
                <p>Economic reasoning encourages people to consider both immediate and long-term consequences.</p>
            `
        },

        {
            id: 15,
            title: "Understanding the Economy",
            content: `
                <p>Economics provides tools for understanding how people, businesses, governments, and markets make decisions.</p>
                <h3>Connected Systems</h3>
                <p>Prices, employment, production, trade, technology, and government policies can influence one another.</p>
                <h3>Economic Literacy</h3>
                <p>Understanding basic economic concepts helps people interpret financial information and make more informed decisions.</p>
                <h3>Final Thought</h3>
                <p>The economy is not simply about money. It is about people making choices with limited resources.</p>
                <p><strong>Learning economics helps us understand the systems behind the prices we pay, the jobs we do, and the goods and services around us.</strong></p>
            `
        }
    ]
};
