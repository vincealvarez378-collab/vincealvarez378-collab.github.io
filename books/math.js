const mathBook = {
    id: "mathematics",
    title: "Mathematics Made Understandable",
    category: "Mathematics",
    icon: "🔢",
    description:
        "A clear and engaging journey through numbers, algebra, geometry, patterns, probability, statistics, and the mathematics we use every day.",

    chapters: [
        {
            id: 1,
            title: "What Is Mathematics?",
            content: `
                <p>Mathematics is the study of numbers, patterns, shapes, quantities, relationships, and logical ideas. It is much more than memorizing formulas. Mathematics helps us describe the world, solve problems, make predictions, and understand relationships between things.</p>

                <h3>Mathematics Is Everywhere</h3>
                <p>We use mathematics when we count money, measure ingredients, tell time, calculate distances, compare prices, build structures, design machines, and even play games. Engineers use mathematics to design bridges, scientists use it to analyze experiments, and computers depend heavily on mathematical logic.</p>

                <h3>Patterns and Relationships</h3>
                <p>One of the most important ideas in mathematics is recognizing patterns. For example, the sequence 2, 4, 6, 8, 10 follows a pattern because each number increases by 2. Finding patterns allows us to predict what comes next and create mathematical rules.</p>

                <h3>Problem Solving</h3>
                <p>Mathematics teaches us to break difficult problems into smaller steps. Instead of guessing, we can identify what we know, determine what we need to find, choose a method, and check whether our answer makes sense.</p>

                <p><strong>Key idea:</strong> Mathematics is a language for describing quantities, patterns, structures, and relationships.</p>
            `
        },

        {
            id: 2,
            title: "Numbers and Number Systems",
            content: `
                <p>Numbers allow us to describe quantities and positions. Different kinds of numbers are useful for different situations.</p>

                <h3>Natural Numbers</h3>
                <p>Natural numbers are the counting numbers: 1, 2, 3, 4, and so on. They are commonly used when counting objects.</p>

                <h3>Whole Numbers</h3>
                <p>Whole numbers include zero along with the natural numbers: 0, 1, 2, 3, 4, and so on.</p>

                <h3>Integers</h3>
                <p>Integers include positive numbers, negative numbers, and zero. Examples include -5, -2, 0, 3, and 10. Negative numbers are useful when representing temperatures below zero, debts, or positions below a reference point.</p>

                <h3>Rational Numbers</h3>
                <p>A rational number can be written as a fraction of two integers, as long as the denominator is not zero. Examples include 1/2, -3/4, 5, and 0.25.</p>

                <h3>Real Numbers</h3>
                <p>Real numbers include rational numbers and irrational numbers. Numbers such as π and √2 are irrational because they cannot be written exactly as a fraction of two integers.</p>

                <p><strong>Remember:</strong> Different number systems give mathematics the tools needed to describe different kinds of quantities.</p>
            `
        },

        {
            id: 3,
            title: "Fractions, Decimals, and Percentages",
            content: `
                <p>Fractions, decimals, and percentages are three different ways of representing quantities. Understanding how they connect is an important mathematical skill.</p>

                <h3>Fractions</h3>
                <p>A fraction has a numerator and denominator. In the fraction 3/4, the 3 tells us how many parts we have, while the 4 tells us how many equal parts make up the whole.</p>

                <h3>Decimals</h3>
                <p>Decimals represent parts of a whole using place value. For example, 0.5 means five tenths and is equal to 1/2.</p>

                <h3>Percentages</h3>
                <p>A percentage means "per hundred." Therefore, 25% means 25 out of 100, which is equal to 25/100 or 1/4.</p>

                <h3>Converting Between Forms</h3>
                <p>To convert a fraction into a decimal, divide the numerator by the denominator. To convert a decimal into a percentage, multiply it by 100 and add the percent symbol.</p>

                <p>For example, 0.75 = 75% = 3/4.</p>

                <h3>Everyday Uses</h3>
                <p>Percentages are commonly used for discounts, grades, taxes, statistics, and financial calculations.</p>
            `
        },

        {
            id: 4,
            title: "Ratios and Proportions",
            content: `
                <p>A ratio compares two or more quantities. For example, if a box contains 2 red balls and 3 blue balls, the ratio of red balls to blue balls is 2:3.</p>

                <h3>Equivalent Ratios</h3>
                <p>Ratios can be multiplied or divided by the same nonzero number without changing the relationship. The ratios 2:3 and 4:6 represent the same relationship.</p>

                <h3>Proportions</h3>
                <p>A proportion states that two ratios are equal. For example, 2/3 = 4/6 is a proportion.</p>

                <h3>Cross Multiplication</h3>
                <p>When solving a proportion such as x/5 = 6/10, we can cross multiply: 10x = 30. Dividing by 10 gives x = 3.</p>

                <h3>Real-Life Applications</h3>
                <p>Ratios and proportions are useful when adjusting recipes, comparing prices, reading maps, calculating speed, mixing materials, and scaling drawings.</p>

                <p><strong>Key idea:</strong> A proportion helps us determine an unknown quantity when two relationships are equivalent.</p>
            `
        },

        {
            id: 5,
            title: "Algebra: Finding the Unknown",
            content: `
                <p>Algebra uses letters and symbols to represent unknown or changing quantities. Instead of solving only one numerical problem, algebra allows us to create general rules.</p>

                <h3>Variables</h3>
                <p>A variable is a symbol, usually a letter, that represents a number. In the expression x + 5, x is the variable.</p>

                <h3>Expressions</h3>
                <p>An algebraic expression combines numbers, variables, and operations. Examples include 3x + 2, 5a - 7, and x² + 4.</p>

                <h3>Equations</h3>
                <p>An equation states that two expressions are equal. For example, x + 4 = 10. To solve it, we want to isolate x.</p>

                <p>Subtracting 4 from both sides gives x = 6.</p>

                <h3>The Balance Idea</h3>
                <p>An equation can be imagined as a balanced scale. Whatever operation we perform on one side must also be performed on the other side to keep the equation balanced.</p>

                <p><strong>Remember:</strong> Solving algebra is often about undoing operations in the correct order.</p>
            `
        },

        {
            id: 6,
            title: "Equations and Inequalities",
            content: `
                <p>Equations tell us that two quantities are equal. Inequalities compare quantities using symbols such as &lt;, &gt;, ≤, and ≥.</p>

                <h3>Solving Equations</h3>
                <p>Consider 2x + 3 = 11. First subtract 3 from both sides: 2x = 8. Then divide by 2: x = 4.</p>

                <h3>Inequalities</h3>
                <p>An inequality such as x &gt; 5 means that x can be any number greater than 5.</p>

                <h3>Important Rule</h3>
                <p>When multiplying or dividing both sides of an inequality by a negative number, the inequality symbol reverses direction.</p>

                <p>For example, if -2x &gt; 8, dividing by -2 gives x &lt; -4.</p>

                <h3>Why They Matter</h3>
                <p>Equations and inequalities are used in budgeting, engineering, science, business, and many other fields where conditions and limits must be described mathematically.</p>
            `
        },

        {
            id: 7,
            title: "Patterns and Sequences",
            content: `
                <p>A sequence is an ordered list of numbers or objects that follows a pattern or rule.</p>

                <h3>Arithmetic Sequences</h3>
                <p>An arithmetic sequence changes by the same amount each time. For example: 2, 5, 8, 11, 14. The common difference is 3.</p>

                <p>A common formula for an arithmetic sequence is:</p>

                <p><strong>aₙ = a₁ + (n - 1)d</strong></p>

                <p>Here, a₁ is the first term, n is the term number, and d is the common difference.</p>

                <h3>Geometric Sequences</h3>
                <p>A geometric sequence is created by multiplying each term by the same number. For example: 3, 6, 12, 24.</p>

                <h3>Why Patterns Matter</h3>
                <p>Patterns help us make predictions. Scientists, programmers, engineers, and mathematicians all use patterns to understand systems and develop rules.</p>
            `
        },

        {
            id: 8,
            title: "Geometry and Shapes",
            content: `
                <p>Geometry is the branch of mathematics that studies shapes, sizes, positions, distances, and properties of space.</p>

                <h3>Basic Shapes</h3>
                <p>Common two-dimensional shapes include triangles, squares, rectangles, circles, pentagons, and hexagons.</p>

                <h3>Perimeter</h3>
                <p>Perimeter is the total distance around a shape. For a rectangle, the formula is:</p>

                <p><strong>P = 2l + 2w</strong></p>

                <h3>Area</h3>
                <p>Area measures the amount of surface inside a two-dimensional shape. The area of a rectangle is:</p>

                <p><strong>A = lw</strong></p>

                <h3>Three-Dimensional Shapes</h3>
                <p>Solid shapes include cubes, spheres, cylinders, cones, and rectangular prisms. These objects have properties such as volume and surface area.</p>

                <p>Geometry is essential in architecture, construction, art, engineering, computer graphics, and design.</p>
            `
        },

        {
            id: 9,
            title: "Angles and Measurement",
            content: `
                <p>An angle is formed when two rays meet at a common endpoint called the vertex.</p>

                <h3>Types of Angles</h3>
                <p>An acute angle measures less than 90°. A right angle measures exactly 90°. An obtuse angle measures more than 90° but less than 180°. A straight angle measures 180°.</p>

                <h3>Measuring Angles</h3>
                <p>Angles are commonly measured in degrees. A complete turn around a point measures 360°.</p>

                <h3>Angle Relationships</h3>
                <p>Complementary angles add to 90°, while supplementary angles add to 180°.</p>

                <h3>Real-World Applications</h3>
                <p>Angles are important in construction, navigation, sports, architecture, robotics, photography, and mechanical design.</p>

                <p>Understanding angles allows us to describe direction and the relationship between lines and surfaces.</p>
            `
        },

        {
            id: 10,
            title: "Coordinate Geometry",
            content: `
                <p>Coordinate geometry combines algebra and geometry by using numbers to describe positions on a plane.</p>

                <h3>The Coordinate Plane</h3>
                <p>A coordinate plane has a horizontal x-axis and a vertical y-axis. They meet at the origin, written as (0, 0).</p>

                <h3>Ordered Pairs</h3>
                <p>A point is represented by an ordered pair (x, y). The first number tells us how far to move horizontally, while the second tells us how far to move vertically.</p>

                <h3>Quadrants</h3>
                <p>The coordinate plane is divided into four quadrants. The signs of x and y tell us which quadrant contains a point.</p>

                <h3>Distance</h3>
                <p>The distance between points can be calculated using the distance formula:</p>

                <p><strong>d = √[(x₂ - x₁)² + (y₂ - y₁)²]</strong></p>

                <p>Coordinate geometry is used in maps, computer graphics, physics, engineering, and navigation.</p>
            `
        },

        {
            id: 11,
            title: "Functions and Graphs",
            content: `
                <p>A function describes a relationship in which each input has exactly one output. Functions are powerful tools for representing relationships between quantities.</p>

                <h3>Inputs and Outputs</h3>
                <p>Imagine a function as a machine. You put an input into the machine, the rule is applied, and an output comes out.</p>

                <p>For example, if f(x) = 2x + 1 and x = 3:</p>

                <p>f(3) = 2(3) + 1 = 7.</p>

                <h3>Graphs</h3>
                <p>A graph allows us to see how two variables are related. A straight-line graph often represents a constant rate of change.</p>

                <h3>Real-Life Functions</h3>
                <p>Functions can describe distance over time, temperature changes, money earned, population growth, and many other relationships.</p>

                <p><strong>Key idea:</strong> Functions turn relationships into mathematical rules that can be analyzed and predicted.</p>
            `
        },

        {
            id: 12,
            title: "Probability and Chance",
            content: `
                <p>Probability measures how likely an event is to happen. It allows us to describe uncertainty mathematically.</p>

                <h3>Probability Scale</h3>
                <p>A probability of 0 means an event is impossible. A probability of 1 means an event is certain. Probabilities can also be expressed as fractions, decimals, or percentages.</p>

                <h3>Simple Probability</h3>
                <p>If a fair six-sided die is rolled, there are six possible outcomes. The probability of rolling a 4 is 1/6 because there is one favorable outcome out of six possible outcomes.</p>

                <h3>Experimental Probability</h3>
                <p>Experimental probability is based on actual results. If a coin is flipped many times, the observed proportion of heads gives an estimate of its probability.</p>

                <h3>Applications</h3>
                <p>Probability is used in games, weather forecasting, medicine, insurance, science, statistics, and risk analysis.</p>
            `
        },

        {
            id: 13,
            title: "Statistics and Data",
            content: `
                <p>Statistics is the study of collecting, organizing, analyzing, interpreting, and presenting data.</p>

                <h3>Mean</h3>
                <p>The mean is found by adding all values and dividing by the number of values. For example, the mean of 4, 6, and 8 is 6.</p>

                <h3>Median</h3>
                <p>The median is the middle value when data is arranged in order.</p>

                <h3>Mode</h3>
                <p>The mode is the value that occurs most frequently.</p>

                <h3>Data Displays</h3>
                <p>Data can be displayed using tables, bar graphs, line graphs, pie charts, and scatter plots.</p>

                <h3>Why Statistics Matters</h3>
                <p>Statistics helps us understand information and identify patterns. It is used in science, business, sports, education, economics, and everyday decision-making.</p>

                <p>Good statistical thinking also requires asking whether the data was collected fairly and whether the conclusions are supported by the evidence.</p>
            `
        },

        {
            id: 14,
            title: "Mathematics in Real Life",
            content: `
                <p>Mathematics is not limited to classrooms. It is part of almost every modern activity.</p>

                <h3>Money</h3>
                <p>We use arithmetic, percentages, and algebra when budgeting, comparing prices, calculating discounts, and managing savings.</p>

                <h3>Construction</h3>
                <p>Builders use measurements, geometry, ratios, angles, and calculations to create safe and accurate structures.</p>

                <h3>Technology</h3>
                <p>Computers rely on mathematical logic. Digital images, games, animations, encryption, and artificial intelligence all depend on mathematical concepts.</p>

                <h3>Science</h3>
                <p>Scientists use mathematics to measure quantities, analyze experiments, create models, and describe natural phenomena.</p>

                <h3>Daily Decisions</h3>
                <p>Even simple choices can involve mathematics. Comparing travel times, calculating fuel consumption, planning a budget, or determining how much food is needed all require quantitative reasoning.</p>

                <p><strong>Mathematics is a practical tool for understanding and shaping the world around us.</strong></p>
            `
        },

        {
            id: 15,
            title: "The Power of Mathematical Thinking",
            content: `
                <p>Mathematics develops more than calculation skills. It trains us to reason carefully, recognize patterns, test ideas, and solve problems.</p>

                <h3>Logical Thinking</h3>
                <p>Mathematical reasoning requires us to connect facts and follow logical steps. This way of thinking can be useful far beyond mathematics.</p>

                <h3>Persistence</h3>
                <p>Some mathematical problems cannot be solved immediately. Working through mistakes, trying another method, and checking results teaches persistence.</p>

                <h3>Creative Problem Solving</h3>
                <p>There is often more than one way to solve a problem. Different strategies can lead to the same answer, encouraging creativity and flexible thinking.</p>

                <h3>Mathematics and the Future</h3>
                <p>Mathematical ideas are increasingly important in technology, engineering, data science, artificial intelligence, economics, medicine, and scientific research.</p>

                <h3>Final Thought</h3>
                <p>Learning mathematics is not simply about getting the right answer. It is about learning how to understand problems, ask useful questions, find patterns, and build logical solutions.</p>

                <p><strong>When you learn to think mathematically, you gain a powerful tool for understanding the world.</strong></p>
            `
        }
    ]
};
