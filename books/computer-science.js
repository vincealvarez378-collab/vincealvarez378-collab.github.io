const computerScienceBook = {
    id: "computer-science",
    title: "Computer Science Made Understandable",
    category: "Computer Science",
    icon: "💻",
    description:
        "A beginner-friendly journey through computers, hardware, software, programming, algorithms, the internet, cybersecurity, artificial intelligence, and the future of technology.",

    chapters: [
        {
            id: 1,
            title: "What Is Computer Science?",
            content: `
                <p>Computer science is the study of computation, information, algorithms, and the systems used to process information. It is not simply the study of computers. It also involves logical thinking, problem solving, programming, data, and the design of computational systems.</p>

                <h3>What Do Computer Scientists Do?</h3>
                <p>Computer scientists create algorithms, develop software, analyze data, study artificial intelligence, design computer systems, and solve problems using computational methods.</p>

                <h3>Computer Science Everywhere</h3>
                <p>Computer science is used in phones, websites, games, hospitals, transportation, banking, education, entertainment, science, and many other fields.</p>

                <h3>Problem Solving</h3>
                <p>A major part of computer science is learning how to break complicated problems into smaller steps that can be understood and solved.</p>

                <p><strong>Key idea:</strong> Computer science is about understanding information and designing logical ways to solve problems.</p>
            `
        },

        {
            id: 2,
            title: "How Computers Work",
            content: `
                <p>A computer is a machine that receives input, processes information, stores data, and produces output.</p>

                <h3>Input</h3>
                <p>Input is information provided to a computer. Examples include typing on a keyboard, clicking a mouse, touching a screen, or speaking into a microphone.</p>

                <h3>Processing</h3>
                <p>The computer processes instructions using components such as the central processing unit, commonly called the CPU.</p>

                <h3>Storage</h3>
                <p>Computers store information using devices such as solid-state drives, hard disk drives, and memory.</p>

                <h3>Output</h3>
                <p>Output is the information produced by a computer. A monitor displaying an image or speakers playing sound are examples of output.</p>

                <p>This input-process-output cycle is fundamental to how computing systems operate.</p>
            `
        },

        {
            id: 3,
            title: "Hardware and Software",
            content: `
                <p>Computers contain both physical components and programs. These are commonly divided into hardware and software.</p>

                <h3>Hardware</h3>
                <p>Hardware refers to the physical parts of a computer. Examples include the CPU, motherboard, RAM, keyboard, mouse, monitor, and storage devices.</p>

                <h3>Software</h3>
                <p>Software consists of instructions and programs that tell hardware what to do. Examples include operating systems, web browsers, games, and productivity applications.</p>

                <h3>How They Work Together</h3>
                <p>Hardware provides the physical machinery, while software provides instructions. A computer needs both to perform useful tasks.</p>

                <p><strong>Remember:</strong> Hardware is what you can physically interact with, while software is the collection of instructions running on the system.</p>
            `
        },

        {
            id: 4,
            title: "The CPU and Memory",
            content: `
                <p>The CPU is one of the most important components in a computer. It executes instructions and performs calculations.</p>

                <h3>The CPU</h3>
                <p>The central processing unit reads instructions, performs operations, and coordinates many activities inside a computer.</p>

                <h3>RAM</h3>
                <p>Random access memory, or RAM, temporarily stores information that programs are actively using. More available RAM can allow a system to work with more tasks at the same time.</p>

                <h3>Storage</h3>
                <p>Storage devices keep information even when the computer is turned off. Files, programs, photos, and videos can be stored there.</p>

                <h3>Different Roles</h3>
                <p>CPU, RAM, and storage perform different jobs. The CPU processes instructions, RAM provides temporary working space, and storage keeps information for longer periods.</p>
            `
        },

        {
            id: 5,
            title: "Binary Numbers",
            content: `
                <p>Computers represent information using electrical and electronic states. A fundamental representation system used in computing is binary.</p>

                <h3>Binary Digits</h3>
                <p>Binary uses only two digits: 0 and 1. Each binary digit is called a bit.</p>

                <h3>Bits and Bytes</h3>
                <p>Eight bits make one byte. Larger amounts of digital information are commonly described using units such as kilobytes, megabytes, gigabytes, and terabytes.</p>

                <h3>Why Binary?</h3>
                <p>Electronic circuits can reliably represent two distinct states, making binary a useful system for digital computing.</p>

                <h3>Representing Information</h3>
                <p>Numbers, text, images, sound, and video can all be represented digitally using combinations of bits.</p>

                <p><strong>Key idea:</strong> Behind the complex interfaces we see, digital computers ultimately work with patterns of information represented using bits.</p>
            `
        },

        {
            id: 6,
            title: "Programming",
            content: `
                <p>Programming is the process of creating instructions that computers can execute.</p>

                <h3>Programming Languages</h3>
                <p>Programmers use languages such as Python, JavaScript, Java, C++, and many others to express instructions.</p>

                <h3>Variables</h3>
                <p>A variable is a named location used to store a value. A program might use a variable to store a person's age, a score, or the current temperature.</p>

                <h3>Conditions</h3>
                <p>Programs can make decisions using conditions. For example, a program could perform one action if a player's score is greater than 100 and another action otherwise.</p>

                <h3>Loops</h3>
                <p>Loops allow a program to repeat instructions. They are useful when the same operation needs to happen many times.</p>

                <p>Programming combines logical thinking with creativity to create useful software and solve problems.</p>
            `
        },

        {
            id: 7,
            title: "Algorithms",
            content: `
                <p>An algorithm is a sequence of steps designed to solve a problem or accomplish a task.</p>

                <h3>Everyday Algorithms</h3>
                <p>A recipe is similar to an algorithm because it provides ordered steps for producing a result.</p>

                <h3>Computer Algorithms</h3>
                <p>Computers use algorithms to search data, sort information, process images, calculate results, recommend content, and perform countless other tasks.</p>

                <h3>Efficiency</h3>
                <p>Two algorithms may solve the same problem but require different amounts of time or memory. Computer scientists study efficiency to determine how well algorithms perform.</p>

                <h3>Clear Instructions</h3>
                <p>A useful algorithm should have clear steps and produce the intended result for appropriate inputs.</p>

                <p><strong>Key idea:</strong> Algorithms turn problem-solving ideas into organized procedures that can be followed or implemented by computers.</p>
            `
        },

        {
            id: 8,
            title: "Data Structures",
            content: `
                <p>Data structures are ways of organizing and storing information so that programs can use it efficiently.</p>

                <h3>Arrays</h3>
                <p>An array stores multiple values in an organized sequence. Arrays are useful when a program needs to work with a collection of related items.</p>

                <h3>Lists</h3>
                <p>Lists are commonly used to store collections of values that can be accessed and modified by a program.</p>

                <h3>Stacks</h3>
                <p>A stack follows the idea of last in, first out. The most recently added item is removed first.</p>

                <h3>Queues</h3>
                <p>A queue generally follows first in, first out. The earliest item added is handled first.</p>

                <p>Choosing an appropriate data structure can make programs easier to design and more efficient.</p>
            `
        },

        {
            id: 9,
            title: "The Internet",
            content: `
                <p>The internet is a global network of interconnected computer networks that communicate using standardized protocols.</p>

                <h3>Networks</h3>
                <p>A computer network connects devices so they can exchange information and share resources.</p>

                <h3>Packets</h3>
                <p>Information sent across networks is commonly divided into smaller units called packets. These packets can travel through networks and be reassembled at their destination.</p>

                <h3>IP Addresses</h3>
                <p>Devices communicating on a network can use Internet Protocol addresses to identify destinations.</p>

                <h3>Websites</h3>
                <p>The World Wide Web is a system of interconnected documents and resources accessed through the internet using technologies such as HTTP and HTTPS.</p>

                <p>The internet allows computers around the world to communicate and exchange information at enormous scale.</p>
            `
        },

        {
            id: 10,
            title: "Websites and Web Development",
            content: `
                <p>Web development involves creating websites and web applications that run through web browsers.</p>

                <h3>HTML</h3>
                <p>HTML, or HyperText Markup Language, provides the structure and meaning of content on a webpage.</p>

                <h3>CSS</h3>
                <p>CSS, or Cascading Style Sheets, controls the visual appearance and layout of webpages.</p>

                <h3>JavaScript</h3>
                <p>JavaScript allows webpages to become interactive and respond to user actions.</p>

                <h3>Frontend and Backend</h3>
                <p>Frontend development focuses on what users interact with in a browser. Backend development handles server-side logic, databases, authentication, and other processes behind the interface.</p>

                <p>Modern websites often combine many technologies to create interactive digital experiences.</p>
            `
        },

        {
            id: 11,
            title: "Databases",
            content: `
                <p>A database is an organized collection of information that can be stored, searched, updated, and managed by computer systems.</p>

                <h3>Why Databases Matter</h3>
                <p>Websites and applications often need to store information such as user accounts, products, messages, scores, or educational content.</p>

                <h3>Tables</h3>
                <p>Relational databases commonly organize information into tables made of rows and columns.</p>

                <h3>Queries</h3>
                <p>A query is a request for information from a database. Database systems can use queries to find, filter, sort, and modify information.</p>

                <h3>Database Applications</h3>
                <p>Online stores, social networks, banking systems, schools, hospitals, and many other services rely on databases.</p>

                <p>Databases allow large amounts of information to be organized and accessed efficiently.</p>
            `
        },

        {
            id: 12,
            title: "Cybersecurity",
            content: `
                <p>Cybersecurity is the practice of protecting computer systems, networks, applications, and information from unauthorized access, damage, disruption, or misuse.</p>

                <h3>Strong Passwords</h3>
                <p>Using long, unique passwords can reduce the risk of unauthorized account access. Password managers can help users manage many unique passwords.</p>

                <h3>Multi-Factor Authentication</h3>
                <p>Multi-factor authentication adds another verification step beyond a password, providing an additional layer of protection.</p>

                <h3>Phishing</h3>
                <p>Phishing attempts trick people into revealing sensitive information or performing unsafe actions. Suspicious links and unexpected messages should be examined carefully.</p>

                <h3>Software Updates</h3>
                <p>Keeping software updated can help protect systems against known security vulnerabilities.</p>

                <p><strong>Key idea:</strong> Cybersecurity involves both technical protections and careful human behavior.</p>
            `
        },

        {
            id: 13,
            title: "Artificial Intelligence",
            content: `
                <p>Artificial intelligence, or AI, refers to computational systems designed to perform tasks that can involve abilities such as recognizing patterns, making predictions, generating content, or interpreting information.</p>

                <h3>Machine Learning</h3>
                <p>Machine learning is an approach in which algorithms learn patterns from data rather than being explicitly programmed with every possible rule.</p>

                <h3>Training Data</h3>
                <p>Many machine-learning systems learn from examples. The quality and characteristics of the data can strongly affect the resulting system.</p>

                <h3>AI Applications</h3>
                <p>AI can be used for language processing, image analysis, recommendation systems, scientific research, robotics, accessibility tools, and many other applications.</p>

                <h3>Responsible AI</h3>
                <p>AI systems should be developed and used thoughtfully. Issues such as privacy, fairness, reliability, security, and the impact of automated decisions are important considerations.</p>

                <p>AI is an important area of modern computer science, but it remains a tool created and used by people.</p>
            `
        },

        {
            id: 14,
            title: "Operating Systems",
            content: `
                <p>An operating system is core software that manages computer hardware and provides services for applications.</p>

                <h3>Managing Hardware</h3>
                <p>The operating system helps manage processors, memory, storage, displays, keyboards, network connections, and other hardware.</p>

                <h3>Files</h3>
                <p>Operating systems provide ways to create, organize, access, move, and delete files and folders.</p>

                <h3>Applications</h3>
                <p>Applications use services provided by the operating system to interact with hardware and perform tasks.</p>

                <h3>Examples</h3>
                <p>Common operating systems include Windows, macOS, Linux, Android, and iOS.</p>

                <p>Without an operating system, using modern general-purpose computers would be much more difficult.</p>
            `
        },

        {
            id: 15,
            title: "The Future of Computing",
            content: `
                <p>Computing continues to change rapidly. New technologies are being developed to process information, connect devices, and solve increasingly complex problems.</p>

                <h3>Cloud Computing</h3>
                <p>Cloud computing allows people and organizations to access computing resources, storage, and services through networks instead of relying entirely on local hardware.</p>

                <h3>Robotics</h3>
                <p>Robots combine computing, sensors, software, and mechanical systems to perform tasks in environments ranging from factories to hospitals and homes.</p>

                <h3>Quantum Computing</h3>
                <p>Quantum computers use principles of quantum physics to process information in ways fundamentally different from traditional computers. Researchers are exploring their potential for specialized problems.</p>

                <h3>Human Creativity</h3>
                <p>Technology can provide powerful tools, but humans remain responsible for deciding how those tools should be designed and used.</p>

                <h3>Final Thought</h3>
                <p>Computer science is not only about machines. It is about ideas, logic, creativity, information, and solving problems.</p>

                <p><strong>Understanding computer science gives us the ability to become creators of technology instead of only consumers of it.</strong></p>
            `
        }
    ]
};
