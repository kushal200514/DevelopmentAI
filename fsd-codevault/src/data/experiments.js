// Centralized FSD Laboratory Experiments Data (Lab 01 - 13)
// Extracted from original CMR University Lab Manual and workspace files

export const experiments = [
  {
    "id": "exp-1",
    "number": 1,
    "title": "Introduction to Full Stack Development Environment and Basic Web Page Design",
    "category": "HTML and CSS",
    "badge": "HTML5 / VS Code",
    "shortDesc": "Set up the full stack development environment and create a structured web page using HTML5 structural elements.",
    "aim": "To set up the full stack development environment and create a basic web page using HTML5 elements.",
    "requirements": [
      "Computer or Laptop with a modern web browser (Chrome / Firefox)",
      "Visual Studio Code (VS Code) editor installed",
      "Node.js and npm installed on the system",
      "Basic knowledge of HTML5 document structure"
    ],
    "suggestedReading": [
      "Introduction to Full Stack Web Development and client-server architecture",
      "Overview of HTML5 and its structural elements (header, nav, section, footer)",
      "Understanding of web browsers and how they parse and render HTML markup",
      "Difference between frontend and backend in a web application"
    ],
    "dependencies": [
      "Vanilla HTML5 (No npm package installation needed)"
    ],
    "files": [
      {
        "filename": "exp1.html",
        "language": "html",
        "description": "Main HTML document showcasing headings, paragraph, unordered list, hyperlink to CMR University, and image tag.",
        "completeCode": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Cmr university</title>\n</head>\n<body>\n    <h1>Welcomr to Full stack development</h1>\n    <h2>About the course</h2>\n    <p>This lab covers Mern stack Developer</p>\n    <ul>\n        <li>Html 5</li>\n        <li>Css 3</li>\n        <li>Javascript</li>\n    </ul>\n    <a href=\"https://cmr.edu.in\">Visit Cmr university</a>\n    <br>\n    <img src = \"https://viq.placholder.com/300\" alt = \"Sample Image\"\n    \n</body>\n</html>"
      }
    ],
    "runInstructions": [
      "Open Visual Studio Code.",
      "Create a project folder named fsd_lab or exp1.",
      "Inside the folder, create a new file named exp1.html (or index.html).",
      "Paste the complete source code into the file and save (Ctrl + S).",
      "Verify Node.js and npm installation via terminal.",
      "Right-click exp1.html and click 'Open with Live Server' or double-click the file in File Explorer to launch in Google Chrome."
    ],
    "commands": [
      "node -v",
      "npm -v"
    ],
    "expectedOutput": "Browser display details:\n- Main Heading 1: \"Welcomr to Full stack development\"\n- Subheading 2: \"About the course\"\n- Paragraph: \"This lab covers Mern stack Developer\"\n- Bulleted Unordered List (UL):\n    • Html 5\n    • Css 3\n    • Javascript\n- Clickable Hyperlink: \"Visit Cmr university\" pointing to https://cmr.edu.in\n- Image placeholder displayed with alt text \"Sample Image\".",
    "screenshot": "/screenshots/exp1_output.jpg",
    "vivaQuestions": [
      {
        "question": "What is full stack web development?",
        "answer": "Full stack web development refers to developing both client-side (frontend) and server-side (backend) portions of a web application, including HTML/CSS/JS/React for UI, Node.js/Express for APIs, and databases like MongoDB for persistent storage."
      },
      {
        "question": "What is HTML5 and why is it used?",
        "answer": "HTML5 is the fifth and current standard major version of HTML. It introduces semantic elements (<header>, <nav>, <article>, <section>), native audio and video support, responsive mobile viewport support, and form validation attributes without relying on proprietary plugins like Flash."
      },
      {
        "question": "What is the purpose of the <!DOCTYPE html> declaration?",
        "answer": "The <!DOCTYPE html> declaration informs the browser about the HTML version used (HTML5). It instructs the browser rendering engine to parse the document in standards mode rather than quirks mode, ensuring cross-browser consistency."
      },
      {
        "question": "What is the difference between ordered and unordered lists in HTML?",
        "answer": "An ordered list (<ol>) displays list items (<li/li>) with numerical or alphabetical sequencing (1, 2, 3... or a, b, c) where order matters. An unordered list (<ul>) displays items with bullet points (disc, circle, square) where sequential order is irrelevant."
      },
      {
        "question": "What is the role of a web browser in rendering HTML?",
        "answer": "The browser fetches the HTML document over HTTP/local file system, parses it token-by-token into the Document Object Model (DOM) tree, parses stylesheets into the CSSOM tree, merges them into a Render Tree, performs layout calculation (geometry of elements), and paints the pixels onto the display."
      },
      {
        "question": "What is Node.js and why is it needed in full stack development?",
        "answer": "Node.js is an open-source, asynchronous event-driven JavaScript runtime built on Chrome's V8 engine that runs JavaScript outside the browser. In full stack development, it enables writing high-performance server-side APIs and CLI tools in the same language used on the frontend."
      },
      {
        "question": "What is the difference between frontend and backend?",
        "answer": "Frontend is the client-facing presentation layer executed within the user's web browser (HTML, CSS, JavaScript, React). Backend is the server-side environment (Node.js, Express, databases) handling business logic, authentication, database transactions, and security."
      }
    ],
    "quickRevision": {
      "keyConcepts": [
        "<!DOCTYPE html> is mandatory at line 1 to activate standards mode.",
        "Semantic elements give contextual meaning to page sections.",
        "The <head> element contains metadata; <body> contains visible content.",
        "Self-closing tags like <img> and <br> do not require closing tags in HTML5."
      ],
      "importantFunctions": [
        "<!DOCTYPE html> - Document type instruction",
        "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"> - Responsive viewport declaration",
        "<a href=\"...\"> - Hyperlink anchor tag",
        "<img src=\"...\" alt=\"...\"> - Image source and alternative accessibility text",
        "<ul> & <li> - Unordered list and list item tags"
      ],
      "memoryTips": [
        "Memory acronym: D-H-H-B (DOCTYPE -> HTML -> HEAD -> BODY).",
        "Always remember: href is for anchors, src is for media/scripts."
      ],
      "commonErrors": [
        "Omitting the alt attribute on <img> tags.",
        "Forgetting to close <ul> before opening other elements.",
        "Placing visual tags (like <h1>) inside <head> instead of <body>."
      ],
      "examChecklist": [
        "Check that <!DOCTYPE html> is at the very top.",
        "Verify that live server opens on port 5500 without errors.",
        "Ensure image has fallback alt text."
      ]
    }
  },
  {
    "id": "exp-2",
    "number": 2,
    "title": "Responsive Web Design Using CSS (Flexbox, Grid, and Media Queries)",
    "category": "HTML and CSS",
    "badge": "CSS3 / Flexbox / Grid",
    "shortDesc": "Design a responsive web page using CSS Flexbox for one-dimensional layouts, CSS Grid for two-dimensional content grids, and CSS3 Media Queries for adaptive screen sizing.",
    "aim": "To design a responsive web page using CSS Flexbox, Grid layout, and media queries that adapts to different screen sizes.",
    "requirements": [
      "Computer or Laptop with a modern web browser",
      "Visual Studio Code with Live Server extension",
      "HTML5 web page created in Experiment 1",
      "Basic knowledge of CSS properties and box model"
    ],
    "suggestedReading": [
      "Introduction to CSS3 and styling of HTML elements",
      "CSS Flexbox layout model (display: flex, justify-content, align-items)",
      "CSS Grid layout model (display: grid, grid-template-columns, gap)",
      "Media queries and responsive design breakpoints (@media max-width)"
    ],
    "dependencies": [
      "Vanilla CSS3 and HTML5"
    ],
    "files": [
      {
        "filename": "experiment2.html",
        "language": "html",
        "description": "HTML file with responsive navigation bar, two-card grid container, and footer.",
        "completeCode": "<!DOCTYPE html>\n<html>\n<head>\n    <title>Responsive Web Design</title>\n\n    <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n\n<body>\n\n    <nav>\n        <h2>My Website</h2>\n\n        <div>\n            <a href=\"#\">Home</a>\n            <a href=\"#\">About</a>\n            <a href=\"#\">Contact</a>\n        </div>\n    </nav>\n\n    <div class=\"container\">\n\n        <div class=\"box\">\n            <h2>HTML</h2>\n            <p>HTML creates webpage structure.</p>\n        </div>\n\n        <div class=\"box\">\n            <h2>CSS</h2>\n            <p>CSS styles the webpage.</p>\n        </div>\n\n    </div>\n\n    <footer>\n        <p>Full Stack Development Lab</p>\n    </footer>\n\n</body>\n</html>"
      },
      {
        "filename": "styles.css",
        "language": "css",
        "description": "CSS stylesheet implementing Flexbox navigation, Grid columns, and media query collapsing columns under 600px.",
        "completeCode": "/* Navigation bar using Flexbox */\n\nnav {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #1f3864;\n    padding: 10px 20px;\n}\n\nnav a {\n    color: white;\n    text-decoration: none;\n    margin: 0 10px;\n}\n\n/* Content using Grid */\n\n.container {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 20px;\n    padding: 20px;\n}\n\n/* Content boxes */\n\n.box {\n    background-color: lightblue;\n    padding: 20px;\n}\n\n/* Footer */\n\nfooter {\n    text-align: center;\n    background-color: #1f3864;\n    color: white;\n    padding: 10px;\n}\n\n/* Media Query */\n\n@media (max-width: 600px) {\n\n    .container {\n        grid-template-columns: 1fr;\n    }\n\n}"
      }
    ],
    "runInstructions": [
      "Create a folder named exp2 in VS Code.",
      "Create experiment2.html and styles.css inside the same directory.",
      "Ensure the link tag <link rel=\"stylesheet\" href=\"styles.css\"> is present in the HTML head.",
      "Open experiment2.html using Live Server or Chrome.",
      "Open DevTools (F12) -> Toggle device toolbar (Ctrl + Shift + M).",
      "Resize width below 600px to see the grid transition from 2 columns to a single stacked column."
    ],
    "commands": [
      "# No npm command required; run via browser or Live Server"
    ],
    "expectedOutput": "Layout Behavior:\n1. Desktop View (> 600px):\n   - Navigation: Navy blue bar (#1f3864) with \"My Website\" title on left and Home/About/Contact links on right with space-between.\n   - Main Container: 2 equal-width columns (1fr 1fr) with lightblue card boxes for HTML and CSS separated by a 20px gap.\n   - Footer: Centered white text on navy background.\n2. Mobile View (<= 600px):\n   - Media query (@media (max-width: 600px)) overrides grid-template-columns to 1fr.\n   - The HTML and CSS cards smoothly stack vertically one beneath another.",
    "screenshot": "/screenshots/exp2_output.jpg",
    "vivaQuestions": [
      {
        "question": "What is responsive web design?",
        "answer": "Responsive web design is an approach where web layouts fluidly adjust and render cleanly across diverse screen viewports, devices, and orientations using flexible grid layouts, responsive media, and CSS media queries."
      },
      {
        "question": "What is the difference between Flexbox and Grid in CSS?",
        "answer": "Flexbox is one-dimensional, designed for placing items along a single axis (either row OR column), ideal for headers, navbars, and button groups. CSS Grid is two-dimensional, managing rows and columns simultaneously, ideal for whole-page layouts, cards, and complex dashboards."
      },
      {
        "question": "What is a media query and how is it used?",
        "answer": "A media query is a CSS technique introduced in CSS3 that uses the @media rule to apply blocks of CSS rules only if a specified device condition (such as max-width: 600px or orientation: portrait) evaluates to true."
      },
      {
        "question": "What is the viewport and why is it important in responsive design?",
        "answer": "The viewport is the user's visible viewing area in the browser. Without the viewport meta tag (<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">), mobile browsers default to rendering at desktop zoom (typically 980px), making fonts and layouts tiny."
      },
      {
        "question": "What is the CSS box model?",
        "answer": "The CSS box model defines how dimensions and spacing of HTML elements are calculated. It consists of four concentric areas: Content, Padding, Border, and Margin."
      },
      {
        "question": "How does display: flex differ from display: block?",
        "answer": "display: block makes an element take up the full container width and start on a new line. display: flex makes the element a flex container, positioning its children along the main axis inline with configurable alignment, spacing, and wrapping."
      },
      {
        "question": "Why is responsive design important in modern web development?",
        "answer": "With over half of global web traffic occurring on smartphones and tablets, responsive design eliminates the need for separate mobile/desktop websites, enhances user retention, boosts accessibility, and is heavily favored by search engines for SEO rankings."
      }
    ],
    "quickRevision": {
      "keyConcepts": [
        "Flexbox: display: flex; justify-content (main axis), align-items (cross axis).",
        "CSS Grid: display: grid; grid-template-columns: 1fr 1fr; gap: 20px.",
        "Fractional unit (fr) represents a fraction of available free space in the grid container.",
        "Media queries use syntax: @media (max-width: 600px) { ... }."
      ],
      "importantFunctions": [
        "display: flex - Flexbox layout activation",
        "justify-content: space-between - Evenly distribute items with first on start edge and last on end edge",
        "grid-template-columns: 1fr 1fr - Two equal width columns",
        "gap: 20px - Gutter spacing between grid rows and columns",
        "@media (max-width: 600px) - Breakpoint condition"
      ],
      "memoryTips": [
        "Flex = 1D (Navbars, button bars). Grid = 2D (Cards, page structures).",
        "FR = \"Fraction of Remaining space\"."
      ],
      "commonErrors": [
        "Typing grid-columns instead of grid-template-columns.",
        "Forgetting to import or link styles.css in experiment2.html.",
        "Missing the closing curly brace on the @media query block."
      ],
      "examChecklist": [
        "Confirm navigation links align right with space-between.",
        "Confirm grid cards show 2 columns on full screen.",
        "Confirm grid cards collapse to 1 column below 600px width."
      ]
    }
  },
  {
    "id": "exp-3",
    "number": 3,
    "title": "JavaScript DOM Manipulation",
    "category": "JavaScript",
    "badge": "JavaScript / DOM API",
    "shortDesc": "Build an interactive web page that dynamically creates, modifies, and deletes HTML list items at runtime using JavaScript DOM methods.",
    "aim": "To develop a web page that dynamically adds, deletes, and modifies HTML elements using JavaScript DOM manipulation.",
    "requirements": [
      "Computer or Laptop with a modern web browser",
      "Visual Studio Code with Live Server extension",
      "Basic knowledge of JavaScript syntax and functions",
      "Understanding of HTML document structure"
    ],
    "suggestedReading": [
      "Introduction to JavaScript and its role in web development",
      "Document Object Model (DOM) tree structure and node representation",
      "JavaScript DOM methods: getElementById, querySelectorAll, createElement, appendChild, remove",
      "JavaScript event handling (onclick attribute, element event properties)"
    ],
    "dependencies": [
      "Vanilla JavaScript (Native Browser DOM API)"
    ],
    "files": [
      {
        "filename": "experiment3.html",
        "language": "html",
        "description": "HTML document containing text input, Add Item and Modify All buttons, an empty UL, and inline JavaScript with addItem() and modifyItems().",
        "completeCode": "<!DOCTYPE html>\n<html>\n<head>\n    <title>DOM Manipulation</title>\n</head>\n<body>\n\n    <input type=\"text\" id=\"itemInput\"\n           placeholder=\"Enter item\">\n\n    <button onclick=\"addItem()\">\n        Add Item\n    </button>\n\n    <button onclick=\"modifyItems()\">\n        Modify All\n    </button>\n\n    <ul id=\"itemList\"></ul>\n\n    <script>\n\n        function addItem() {\n\n            const input =\n                document.getElementById('itemInput');\n\n            const li =\n                document.createElement('li');\n\n            li.textContent = input.value;\n\n            const delBtn =\n                document.createElement('button');\n\n            delBtn.textContent = 'Delete';\n\n            delBtn.onclick = function() {\n                li.remove();\n            };\n\n            li.appendChild(delBtn);\n\n            document.getElementById('itemList')\n                .appendChild(li);\n\n            input.value = '';\n        }\n\n        function modifyItems() {\n\n            const items =\n                document.querySelectorAll('#itemList li');\n\n            items.forEach(item => {\n\n                item.firstChild.textContent =\n                    item.firstChild.textContent.toUpperCase();\n\n            });\n        }\n\n    </script>\n\n</body>\n</html>"
      }
    ],
    "runInstructions": [
      "Create a folder named exp 3 in VS Code.",
      "Create a file named experiment3.html and paste the code.",
      "Launch the file in Chrome using Live Server or file open.",
      "Type text into the input field (e.g. 'Apple') and click 'Add Item'.",
      "Observe the newly appended list item with its individual 'Delete' button.",
      "Click the 'Delete' button next to an item to remove it from the DOM.",
      "Add several items and click 'Modify All' to convert all list texts to uppercase."
    ],
    "commands": [
      "# Native browser execution; no CLI install needed"
    ],
    "expectedOutput": "Interactive Features:\n1. Entering text (e.g., \"MERN Stack\") and clicking \"Add Item\" creates a new <li> element inside <ul id=\"itemList\"> containing the text and a companion \"Delete\" <button>.\n2. The input field automatically resets to empty string (\"\").\n3. Clicking the \"Delete\" button calls li.remove() and instantly deletes only that specific node from the DOM.\n4. Clicking \"Modify All\" queries all #itemList li elements and applies .toUpperCase() to their firstChild textContent.",
    "screenshot": "/screenshots/exp3_output.jpg",
    "vivaQuestions": [
      {
        "question": "What is the DOM in web development?",
        "answer": "The Document Object Model (DOM) is an object-oriented tree representation of the HTML document created by the browser. It allows programming languages like JavaScript to inspect, manipulate, add, or delete HTML elements, attributes, and styles dynamically."
      },
      {
        "question": "What is the difference between getElementById and querySelector?",
        "answer": "getElementById accepts an ID string without a hashtag and returns a single matching element quickly. querySelector accepts any valid CSS selector string (ID #id, class .class, tag name, attribute) and returns the first matching element."
      },
      {
        "question": "How does createElement work in JavaScript?",
        "answer": "document.createElement(tagName) creates an in-memory HTML element node in JavaScript heap memory. The element is not visible on the webpage until it is appended to the active DOM using methods like appendChild() or append()."
      },
      {
        "question": "What is an event listener and why is it used?",
        "answer": "An event listener is a procedure in JavaScript that waits for an event to occur on a specified element (such as 'click', 'keydown', 'submit') and executes a callback function in response to user interaction."
      },
      {
        "question": "What is the difference between innerHTML and textContent?",
        "answer": "textContent gets or sets raw text content of a node without parsing HTML tags, making it safer and immune to Cross-Site Scripting (XSS). innerHTML parses and renders HTML markup, which can lead to security vulnerabilities if used with unsanitized user input."
      },
      {
        "question": "How can you remove an element from the DOM?",
        "answer": "In modern JavaScript, an element node can be removed directly using element.remove(). In older browsers, parentNode.removeChild(element) is used."
      },
      {
        "question": "Why is JavaScript important in frontend development?",
        "answer": "JavaScript is the only native programming language supported by web browsers. It transforms static HTML/CSS documents into responsive, dynamic, interactive web applications by handling client logic, animations, user input, and asynchronous communication."
      }
    ],
    "quickRevision": {
      "keyConcepts": [
        "DOM manipulation lifecycle: Create -> Populate -> Attach to parent.",
        "document.createElement('li') creates node in memory.",
        "parent.appendChild(child) inserts the node as the last child of parent.",
        "element.remove() directly deletes the element from the live DOM.",
        "querySelectorAll returns a NodeList iterable with .forEach()."
      ],
      "importantFunctions": [
        "document.getElementById('itemInput') - Reference element by ID",
        "document.createElement('button') - Create new element node",
        "li.appendChild(delBtn) - Append child element",
        "li.remove() - Delete element from DOM",
        "document.querySelectorAll('#itemList li') - Match all list items",
        "string.toUpperCase() - Convert text to uppercase"
      ],
      "memoryTips": [
        "Mnemonic: C-P-A (Create element, Populate properties, Append to parent).",
        "Always clear input.value = '' after adding item for good UX."
      ],
      "commonErrors": [
        "Trying to read input.value before user types anything.",
        "Using appendChild before creating the element node.",
        "Modifying textContent directly and accidentally erasing the child Delete button (using item.firstChild.textContent prevents deleting the child button)."
      ],
      "examChecklist": [
        "Verify adding item appends to list.",
        "Verify clicking Delete removes only that item.",
        "Verify clicking Modify All turns item text to uppercase."
      ]
    }
  },
  {
    "id": "exp-4",
    "number": 4,
    "title": "Form Validation Using JavaScript",
    "category": "JavaScript",
    "badge": "JavaScript / RegEx",
    "shortDesc": "Implement robust client-side form validation using JavaScript regular expressions and prevent submission until all input rules are fulfilled.",
    "aim": "To implement client-side form validation using JavaScript and regular expressions to validate user input before submission.",
    "requirements": [
      "Computer or Laptop with a modern web browser",
      "Visual Studio Code editor",
      "Basic knowledge of HTML form elements",
      "Understanding of JavaScript regex and event handling"
    ],
    "suggestedReading": [
      "Introduction to HTML forms and input validation",
      "Client-side vs server-side validation principles",
      "JavaScript Regular Expressions (RegExp patterns and .test() method)",
      "Event handling: submit event and e.preventDefault()"
    ],
    "dependencies": [
      "Vanilla JavaScript and HTML5"
    ],
    "files": [
      {
        "filename": "experiment4.html",
        "language": "html",
        "description": "User registration form with Full Name, Email, Password, Confirm Password, Phone Number, red error spans, and regex validation logic.",
        "completeCode": "<!DOCTYPE html>\n<html>\n<head>\n    <title>Form Validation</title>\n</head>\n\n<body>\n\n    <h2>User Registration Form</h2>\n\n    <form id=\"registrationForm\">\n\n        <label>Full Name:</label>\n        <input type=\"text\" id=\"name\">\n        <span id=\"nameError\"></span>\n        <br><br>\n\n        <label>Email:</label>\n        <input type=\"text\" id=\"email\">\n        <span id=\"emailError\"></span>\n        <br><br>\n\n        <label>Password:</label>\n        <input type=\"password\" id=\"password\">\n        <span id=\"passwordError\"></span>\n        <br><br>\n\n        <label>Confirm Password:</label>\n        <input type=\"password\" id=\"confirmPassword\">\n        <span id=\"confirmError\"></span>\n        <br><br>\n\n        <label>Phone Number:</label>\n        <input type=\"text\" id=\"phone\">\n        <span id=\"phoneError\"></span>\n        <br><br>\n\n        <button type=\"submit\">Register</button>\n\n    </form>\n\n    <p id=\"successMessage\"></p>\n\n    <script>\n\n        function showError(id, message) {\n            document.getElementById(id).textContent = message;\n        }\n\n        document.getElementById('registrationForm')\n        .addEventListener('submit', function(event) {\n\n            event.preventDefault();\n\n            let isValid = true;\n\n            const name = document.getElementById('name');\n            const email = document.getElementById('email');\n            const password = document.getElementById('password');\n            const confirmPassword =\n                document.getElementById('confirmPassword');\n            const phone = document.getElementById('phone');\n\n            // Clear previous errors\n            document.querySelectorAll('span').forEach(span => {\n                span.textContent = '';\n            });\n\n            document.getElementById('successMessage').textContent = '';\n\n            // Name validation\n            if (name.value.trim().length < 3) {\n                showError('nameError',\n                'Name must be at least 3 characters.');\n                isValid = false;\n            }\n\n            // Email validation\n            const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\n\n            if (!emailRegex.test(email.value)) {\n                showError('emailError',\n                'Enter a valid email address.');\n                isValid = false;\n            }\n\n            // Password validation\n            if (password.value.length < 8) {\n                showError('passwordError',\n                'Password must be at least 8 characters.');\n                isValid = false;\n            }\n\n            // Confirm password validation\n            if (password.value !== confirmPassword.value) {\n                showError('confirmError',\n                'Passwords do not match.');\n                isValid = false;\n            }\n\n            // Phone validation\n            const phoneRegex = /^\\d{10}$/;\n\n            if (!phoneRegex.test(phone.value)) {\n                showError('phoneError',\n                'Enter a valid 10-digit phone number.');\n                isValid = false;\n            }\n\n            // Final result\n            if (isValid) {\n                document.getElementById('successMessage')\n                .textContent = 'Registration successful!';\n            }\n\n        });\n\n    </script>\n\n</body>\n</html>"
      }
    ],
    "runInstructions": [
      "Create a folder named exp 4 in VS Code.",
      "Create experiment4.html and paste the complete source code.",
      "Open experiment4.html in Google Chrome.",
      "Click the 'Register' button with empty fields to observe validation messages.",
      "Test invalid inputs: enter invalid email (e.g. 'user@'), short password (< 6 chars), mismatching confirm password, or non-10-digit phone number.",
      "Enter valid credentials across all fields and click 'Register' to see 'Registration successful!'."
    ],
    "commands": [
      "# Open directly in browser or VS Code Live Server"
    ],
    "expectedOutput": "Validation Behavior:\n1. Empty Submit: Displays red inline error messages:\n   - \"Name is required\"\n   - \"Enter a valid email\"\n   - \"Password must be at least 6 characters\"\n   - \"Passwords do not match\"\n   - \"Phone number must be 10 digits\"\n2. Field Corrections: Entering a valid email like \"rohit@cmr.edu.in\", 6+ character matching passwords, and a 10-digit number like \"9876543210\" clears the errors and displays:\n   - \"Registration successful!\" in green text.",
    "screenshot": "/screenshots/exp4_output.jpg",
    "vivaQuestions": [
      {
        "question": "What is client-side form validation and why is it important?",
        "answer": "Client-side form validation is input verification conducted inside the user's web browser before sending data to the server. It provides immediate feedback to users, improves user experience, and conserves server bandwidth by preventing invalid requests."
      },
      {
        "question": "What is the difference between client-side and server-side validation?",
        "answer": "Client-side validation occurs in the browser for user experience and can be bypassed by disabling JavaScript or using tools like Postman. Server-side validation occurs on the backend server and is mandatory for security, preventing injection attacks and bad data from reaching the database."
      },
      {
        "question": "What is a regular expression (RegEx)?",
        "answer": "A regular expression is a sequence of characters defining a search pattern. In JavaScript, regex objects are enclosed in slashes (/pattern/) and used with methods like .test() to validate string formats such as emails, phone numbers, and zip codes."
      },
      {
        "question": "What is the purpose of e.preventDefault() in form submission?",
        "answer": "e.preventDefault() cancels the default browser action associated with the event. In form submission, it stops the browser from automatically refreshing the page or submitting data via HTTP GET/POST, enabling JavaScript to validate the inputs first."
      },
      {
        "question": "How do you validate an email address in JavaScript?",
        "answer": "An email address is validated using a regex pattern such as /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/. The regex test method pattern.test(email) returns true if the email matches the required local part, '@' symbol, domain name, and top-level domain."
      },
      {
        "question": "Why should password confirmation be validated on the client side?",
        "answer": "Validating password confirmation on the client side ensures that typo mismatches are caught immediately without submitting a wasted round-trip request to the backend server."
      },
      {
        "question": "What happens if JavaScript is disabled in the user's browser during form submission?",
        "answer": "If JavaScript is disabled, client-side validation logic will not execute and the form would submit raw data directly to the server. This is why critical systems must always enforce server-side validation as the true line of defense."
      }
    ],
    "quickRevision": {
      "keyConcepts": [
        "Always call e.preventDefault() at the beginning of the submit handler.",
        "Use a boolean flag (isValid = true) switched to false when any check fails.",
        "Email regex: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/",
        "Phone regex (10 digits): /^\\d{10}$/",
        "Reset error text to empty string before re-evaluating fields."
      ],
      "importantFunctions": [
        "e.preventDefault() - Stop form reload",
        "regex.test(string) - Returns true if string satisfies pattern",
        "string.trim() - Strip leading and trailing whitespace",
        "document.getElementById('...').value - Retrieve input string"
      ],
      "memoryTips": [
        "Validation Recipe: Stop event -> Clear errors -> Check fields -> Set isValid flag -> Show success.",
        "^\\d{10}$ means exactly 10 numerical digits from start (^) to end ($)."
      ],
      "commonErrors": [
        "Forgetting e.preventDefault(), causing page to refresh before errors can be read.",
        "Checking password match before checking password minimum length.",
        "Using assignment (=) instead of comparison (===) in if statements."
      ],
      "examChecklist": [
        "Verify submission with empty inputs stops and displays red errors.",
        "Verify email regex rejects missing '@' or missing domain.",
        "Verify password matching check functions correctly."
      ]
    }
  },
  {
    "id": "exp-5",
    "number": 5,
    "title": "React - Basic Application Using Components",
    "category": "React",
    "badge": "React 18 / Vite",
    "shortDesc": "Set up a React application with Vite, build reusable functional components, and pass customizable data using React props.",
    "aim": "To set up the React development environment, install required packages using npm, and build a basic React application using functional components.",
    "requirements": [
      "Computer or Laptop with Node.js (v16 or above) and npm installed",
      "Visual Studio Code editor",
      "Internet connection for downloading npm packages",
      "Basic knowledge of HTML and JavaScript"
    ],
    "suggestedReading": [
      "Introduction to React and its component-based architecture",
      "Understanding JSX syntax and differences with HTML",
      "React project structure created using Vite",
      "Concept of functional components and props in React"
    ],
    "dependencies": [
      "react: ^18.x or ^19.x",
      "react-dom: ^18.x or ^19.x",
      "@vitejs/plugin-react: ^4.x"
    ],
    "files": [
      {
        "filename": "App.jsx",
        "language": "jsx",
        "description": "Root React component importing and rendering multiple StudentCard components with custom name and dept props.",
        "completeCode": "import StudentCard from './StudentCard';\n\nfunction App() {\n  return (\n    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>\n      <h1>Welcome to Full Stack Lab</h1>\n      <StudentCard name=\"Rohit Kumar\" dept=\"CSE\" />\n      <StudentCard name=\"Ananya Sharma\" dept=\"ISE\" />\n    </div>\n  );\n}\n\nexport default App;"
      },
      {
        "filename": "StudentCard.jsx",
        "language": "jsx",
        "description": "Functional child component accepting { name, dept } props and applying inline styles.",
        "completeCode": "function StudentCard({ name, dept }) {\n    return (\n        <div style={{\n            border: '1px solid #ccc',\n            padding: '10px',\n            margin: '10px'\n        }}>\n\n            <h3>{name}</h3>\n\n            <p>Department: {dept}</p>\n\n        </div>\n    );\n}\n\nexport default StudentCard;"
      },
      {
        "filename": "main.jsx",
        "language": "jsx",
        "description": "Vite React entry point mounting the root App component into the HTML DOM root element.",
        "completeCode": "import { StrictMode } from 'react'\nimport { createRoot } from 'react-dom/client'\nimport './index.css'\nimport App from './App.jsx'\n\ncreateRoot(document.getElementById('root')).render(\n  <StrictMode>\n    <App />\n  </StrictMode>,\n)"
      }
    ],
    "runInstructions": [
      "Open your terminal in VS Code.",
      "Create a new Vite React application: npm create vite@latest react-lab -- --template react",
      "Navigate into the project: cd react-lab",
      "Install dependencies: npm install",
      "Create src/StudentCard.jsx and update src/App.jsx with the provided component code.",
      "Run the local development server: npm run dev",
      "Open http://localhost:5173 in Google Chrome."
    ],
    "commands": [
      "npm create vite@latest react-lab -- --template react",
      "cd react-lab",
      "npm install",
      "npm run dev"
    ],
    "expectedOutput": "Vite dev server starts on http://localhost:5173:\n- Heading 1: \"Welcome to Full Stack Lab\"\n- Reusable Card 1:\n    • Name: Rohit Kumar\n    • Department: CSE\n    • Border: 1px solid #ccc with padding and margin.\n- Reusable Card 2:\n    • Name: Ananya Sharma\n    • Department: ISE\n    • Border: 1px solid #ccc with padding and margin.",
    "screenshot": "/screenshots/exp5_output.jpg",
    "vivaQuestions": [
      {
        "question": "What is React and what are its key features?",
        "answer": "React is an open-source, component-based front-end JavaScript library developed by Meta for building user interfaces. Key features include declarative UI, component-based architecture, Virtual DOM for optimized rendering, unidirectional data flow, and JSX syntax."
      },
      {
        "question": "What is JSX and how does it differ from HTML?",
        "answer": "JSX (JavaScript XML) is a syntax extension for JavaScript that looks like HTML. It allows developers to write HTML-like structures inside JavaScript files. Unlike HTML, JSX uses camelCase attribute names (className, onClick), requires tags to be closed, and allows embedding JavaScript expressions within curly braces {}."
      },
      {
        "question": "What is a functional component in React?",
        "answer": "A functional component is a plain JavaScript function that accepts props as an argument and returns JSX describing what should appear on the screen. With React Hooks, functional components can manage state and side effects without writing ES6 class components."
      },
      {
        "question": "What are props in React and how are they passed?",
        "answer": "Props (short for properties) are read-only inputs passed from a parent component down to a child component, similar to function parameters. They allow child components to be dynamic and reusable. Props are immutable and follow unidirectional data flow."
      },
      {
        "question": "What is Vite and why is it preferred over create-react-app?",
        "answer": "Vite is a modern frontend build tool that leverages native ES modules in the browser during development. It starts the development server almost instantly and features lightning-fast Hot Module Replacement (HMR), unlike create-react-app (Webpack) which bundles the entire application before serving."
      },
      {
        "question": "What is the Virtual DOM and how does it improve performance?",
        "answer": "The Virtual DOM is a lightweight in-memory representation of the real DOM. When component state changes, React updates the Virtual DOM, compares it with the previous snapshot using a diffing algorithm (Reconciliation), and batches only the necessary minimal updates to the real DOM."
      },
      {
        "question": "What is the purpose of the main.jsx file in a Vite project?",
        "answer": "main.jsx is the application's JavaScript entry point. It imports the root App component, attaches React to the index.html file's <div id=\"root\"> element using ReactDOM.createRoot(), and wraps the application in React.StrictMode."
      }
    ],
    "quickRevision": {
      "keyConcepts": [
        "Components are reusable, self-contained UI building blocks.",
        "Props are passed like HTML attributes: <StudentCard name=\"Rohit\" />.",
        "Child components destructure props: function StudentCard({ name, dept }).",
        "Props are strictly read-only (immutable).",
        "Inline styling in JSX takes a JavaScript object: style={{ border: '1px solid #ccc' }}."
      ],
      "importantFunctions": [
        "createRoot(document.getElementById('root')).render(<App />) - Mount React",
        "export default Component - Default module export",
        "import Component from './Component' - Module import"
      ],
      "memoryTips": [
        "Props flow Down (Parent -> Child). State stays Local.",
        "JSX style requires double curlies: style={{ property: 'value' }} (outer for JS expression, inner for object)."
      ],
      "commonErrors": [
        "Mutating props inside a child component (props.name = 'new').",
        "Forgetting to export the component or missing export default.",
        "Returning multiple sibling elements without a wrapping parent or React Fragment (<>...</>)."
      ],
      "examChecklist": [
        "Ensure Vite project runs on port 5173.",
        "Verify StudentCard renders data passed from App.jsx props.",
        "Confirm no console errors in browser DevTools."
      ]
    }
  },
  {
    "id": "exp-6",
    "number": 6,
    "title": "React - State Management and Event Handling",
    "category": "React",
    "badge": "React / useState",
    "shortDesc": "Build an interactive application using the React useState Hook to manage dynamic component state and handle user events.",
    "aim": "To develop a React application that demonstrates state management using the useState hook and responds to user interactions through event handling.",
    "requirements": [
      "Computer or Laptop with Node.js and npm installed",
      "React project created in Experiment 5",
      "Visual Studio Code editor",
      "Basic knowledge of React components and props"
    ],
    "suggestedReading": [
      "React Hooks and the purpose of the useState hook",
      "Concept of state in React and differences from props",
      "Event handling in React (onClick, onChange, onSubmit)",
      "Re-rendering cycle in React when state updates occur"
    ],
    "dependencies": [
      "react: ^18.x or ^19.x",
      "react-dom: ^18.x or ^19.x"
    ],
    "files": [
      {
        "filename": "Counter.jsx",
        "language": "jsx",
        "description": "Counter component with increment (+1), decrement (-1), and reset (0) actions using useState.",
        "completeCode": "import { useState } from 'react';\n\nfunction Counter() {\n\n    const [count, setCount] = useState(0);\n\n    return (\n        <div>\n\n            <h2>Counter: {count}</h2>\n\n            <button onClick={() => setCount(count + 1)}>\n                Increment\n            </button>\n\n            <button onClick={() => setCount(count - 1)}>\n                Decrement\n            </button>\n\n            <button onClick={() => setCount(0)}>\n                Reset\n            </button>\n\n        </div>\n    );\n}\n\nexport default Counter;"
      },
      {
        "filename": "TodoList.jsx",
        "language": "jsx",
        "description": "Dynamic To-Do list component demonstrating controlled input, array state appending via spread operator, and deletion by index filter.",
        "completeCode": "import { useState } from 'react';\n\nfunction TodoList() {\n\n    const [todos, setTodos] = useState([]);\n    const [input, setInput] = useState('');\n\n    const addTodo = () => {\n\n        if (input.trim()) {\n\n            setTodos([...todos, input]);\n\n            setInput('');\n\n        }\n    };\n\n    const removeTodo = (index) => {\n\n        setTodos(todos.filter((_, i) => i !== index));\n\n    };\n\n    return (\n        <div>\n\n            <h2>To-Do List</h2>\n\n            <input\n                value={input}\n                onChange={(e) => setInput(e.target.value)}\n                placeholder=\"Add task\"\n            />\n\n            <button onClick={addTodo}>Add</button>\n\n            <ul>\n\n                {todos.map((todo, i) => (\n\n                    <li key={i}>\n                        {todo}\n\n                        <button onClick={() => removeTodo(i)}>\n                            Remove\n                        </button>\n                    </li>\n\n                ))}\n\n            </ul>\n\n        </div>\n    );\n}\n\nexport default TodoList;"
      },
      {
        "filename": "App.jsx",
        "language": "jsx",
        "description": "Root component rendering Counter and TodoList components.",
        "completeCode": "import Counter from './Counter';\nimport TodoList from './TodoList';\n\nfunction App() {\n\n    return (\n        <div>\n\n            <h1>React State Management</h1>\n\n            <Counter />\n\n            <hr />\n\n            <TodoList />\n\n        </div>\n    );\n}\n\nexport default App;"
      }
    ],
    "runInstructions": [
      "Open your react-lab project in VS Code.",
      "Create src/Counter.jsx and src/TodoList.jsx.",
      "Update src/App.jsx to import and render both components.",
      "Run npm run dev in the terminal.",
      "Test Counter: click Increment (+1), Decrement (-1), and Reset (0).",
      "Test TodoList: type tasks (e.g. 'Learn React', 'Node.js API'), click Add, and click Remove to delete specific tasks."
    ],
    "commands": [
      "npm run dev"
    ],
    "expectedOutput": "Interactive UI Features:\n1. Counter:\n   - Displays heading \"Counter: 0\".\n   - Clicking Increment increases count by 1.\n   - Clicking Decrement decreases count by 1.\n   - Clicking Reset restores count to 0.\n2. Todo List:\n   - Controlled input field for task names.\n   - Clicking \"Add\" appends task to the list and clears input.\n   - Each task displays a companion \"Remove\" button that deletes only that task using array filter.",
    "screenshot": "/screenshots/exp6_output.jpg",
    "vivaQuestions": [
      {
        "question": "What is state in React and how does it differ from props?",
        "answer": "State is a built-in object used to store data that changes over time within a component and triggers a re-render when updated. While props are passed from parent to child and are immutable, state is managed locally inside the component and is mutable via its setter function."
      },
      {
        "question": "What is a React Hook?",
        "answer": "A React Hook is a special function introduced in React 16.8 that allows functional components to 'hook into' React state and lifecycle features without writing class components. Examples include useState, useEffect, useContext, and useRef."
      },
      {
        "question": "How does the useState hook work?",
        "answer": "useState accepts an initial state value as its parameter and returns an array with exactly two elements: the current state value, and an updater function to update that state value and trigger a re-render (e.g., const [count, setCount] = useState(0))."
      },
      {
        "question": "What causes a React component to re-render?",
        "answer": "A React component re-renders when its local state changes via its state updater function, when its parent passes new or updated props, or when a React Context it consumes updates."
      },
      {
        "question": "What is the difference between controlled and uncontrolled components?",
        "answer": "In a controlled component, form input values are governed by React state via the value attribute and updated using onChange handlers. In an uncontrolled component, form data is handled by the DOM itself and accessed using React refs (useRef)."
      },
      {
        "question": "Why shouldn't state be mutated directly in React?",
        "answer": "Directly modifying state (e.g., todos.push(item) or count = 5) does not notify React of the change, meaning no re-rendering is triggered and the UI will not update. State must always be updated immutably using the setter function (e.g. setTodos([...todos, item]))."
      },
      {
        "question": "How do you handle click events in React?",
        "answer": "Click events are handled by passing a function reference or an inline arrow function to the camelCase onClick attribute on the JSX element (e.g., onClick={() => setCount(count + 1)})."
      }
    ],
    "quickRevision": {
      "keyConcepts": [
        "useState declaration: const [state, setState] = useState(initialValue);",
        "Always update state immutably: setTodos([...todos, input]).",
        "Remove item from array using filter: todos.filter((_, i) => i !== index).",
        "Controlled input requires value={input} and onChange={(e) => setInput(e.target.value)}."
      ],
      "importantFunctions": [
        "useState(0) - State hook initialization",
        "setCount(count + 1) - State update triggering re-render",
        "e.target.value - Current value of input field in onChange event",
        "array.filter((item, index) => index !== targetIndex) - Immutable item removal"
      ],
      "memoryTips": [
        "Never do count = count + 1! Always use setCount(count + 1).",
        "Array state update: [...oldArray, newItem] to add; oldArray.filter(...) to remove."
      ],
      "commonErrors": [
        "Writing onClick={setCount(count + 1)} instead of onClick={() => setCount(count + 1)}, which causes an infinite render loop.",
        "Mutating state array with todos.push() instead of creating a new array.",
        "Forgetting key prop when rendering lists with .map()."
      ],
      "examChecklist": [
        "Verify Counter increments, decrements, and resets to 0.",
        "Verify adding empty todos is prevented by input.trim() check.",
        "Verify removing todo only deletes targeted index."
      ]
    }
  },
  {
    "id": "exp-7",
    "number": 7,
    "title": "React - API Integration Using Fetch and Axios",
    "category": "React",
    "badge": "React / Axios / useEffect",
    "shortDesc": "Build a React application that fetches live remote data from a public REST API using Axios and manages asynchronous lifecycle states with useEffect.",
    "aim": "To build a React application that fetches data from a public REST API and displays the results dynamically using the useEffect hook.",
    "requirements": [
      "Computer or Laptop with Node.js and npm installed",
      "React project created in Experiment 5",
      "Internet connection to access public APIs",
      "Basic knowledge of React hooks (useState, useEffect) and JavaScript promises"
    ],
    "dependencies": [
      "axios: ^1.x",
      "react: ^18.x or ^19.x",
      "react-dom: ^18.x or ^19.x"
    ],
    "files": [
      {
        "filename": "UserList.jsx",
        "language": "jsx",
        "description": "Component fetching users from JSONPlaceholder API using axios.get inside useEffect with loading and error states.",
        "completeCode": "import { useState, useEffect } from 'react';\nimport axios from 'axios';\n\nfunction UserList() {\n\n    const [users, setUsers] = useState([]);\n    const [loading, setLoading] = useState(true);\n    const [error, setError] = useState(null);\n\n    useEffect(() => {\n\n        axios.get('https://jsonplaceholder.typicode.com/users')\n\n            .then(response => {\n                setUsers(response.data);\n                setLoading(false);\n            })\n\n            .catch(() => {\n                setError('Failed to fetch data.');\n                setLoading(false);\n            });\n\n    }, []);\n\n    if (loading) return <p>Loading...</p>;\n\n    if (error) return <p>{error}</p>;\n\n    return (\n        <div>\n\n            <h2>User List</h2>\n\n            {users.map(user => (\n\n                <div key={user.id}\n                    style={{\n                        border: '1px solid #ccc',\n                        margin: '8px',\n                        padding: '8px'\n                    }}>\n\n                    <strong>{user.name}</strong> |\n                    {user.email} |\n                    {user.address.city}\n\n                </div>\n\n            ))}\n\n        </div>\n    );\n}\n\nexport default UserList;"
      },
      {
        "filename": "App.jsx",
        "language": "jsx",
        "description": "Root application component rendering title and UserList component.",
        "completeCode": "import UserList from './UserList';\n\nfunction App() {\n\n    return (\n        <div>\n            <h1>React API Integration</h1>\n\n            <UserList />\n        </div>\n    );\n}\n\nexport default App;"
      }
    ],
    "runInstructions": [
      "Open your terminal inside react-lab.",
      "Install Axios: npm install axios",
      "Create src/UserList.jsx with the provided component code.",
      "Update src/App.jsx to render <UserList />.",
      "Start the Vite server: npm run dev",
      "Open http://localhost:5173 to observe the initial 'Loading...' state followed by the fetched user cards."
    ],
    "commands": [
      "npm install axios",
      "npm run dev"
    ],
    "expectedOutput": "API Response & UI Render:\n1. When mounted, the component shows: \"Loading...\"\n2. Upon successful response from https://jsonplaceholder.typicode.com/users, the UI dynamically renders 10 user cards:\n   - Name (e.g., Leanne Graham, Ervin Howell)\n   - Email (e.g., Sincere@april.biz)\n   - City (e.g., Gwenborough)\n   - Styled cards with borders, padding, and subtle shadows.\n3. If internet is disconnected, it gracefully displays: \"Failed to fetch data.\" in red.",
    "screenshot": "/screenshots/exp7_output.jpg",
    "vivaQuestions": [
      {
        "question": "What is the useEffect hook and when does it run?",
        "answer": "useEffect is a React Hook designed to handle side effects in functional components such as data fetching, timer setup, and manual DOM mutations. By default, it runs after the initial render and after every component update unless governed by its dependency array."
      },
      {
        "question": "What is the purpose of the dependency array in useEffect?",
        "answer": "The dependency array is the second argument to useEffect. An empty array [] specifies that the effect should execute only once when the component mounts. Passing variables [dep1, dep2] specifies that the effect should re-run only when those values change."
      },
      {
        "question": "What is Axios and how does it differ from the Fetch API?",
        "answer": "Axios is a promise-based HTTP client for the browser and Node.js. Unlike the native Fetch API, Axios automatically transforms JSON response data (no need for res.json()), provides built-in request/response interceptors, supports request timeouts, and throws errors automatically for HTTP error status codes like 404 or 500."
      },
      {
        "question": "What is an asynchronous operation in JavaScript?",
        "answer": "An asynchronous operation is a task that executes in the background without blocking the main JavaScript execution thread (such as network requests, file reading, timers). Once complete, it notifies JavaScript via promises, callbacks, or async/await."
      },
      {
        "question": "How do you handle loading and error states during API calls in React?",
        "answer": "By declaring three independent states: data (users), loading (boolean true by default), and error (null by default). Before fetching, loading is true. When resolved, set users with data and loading to false. In catch, set error message and loading to false. In JSX, conditionally render loading indicators or error alerts."
      },
      {
        "question": "What is JSON and why is it used for API responses?",
        "answer": "JSON (JavaScript Object Notation) is a lightweight, human-readable text-based data interchange format. It is language-independent, lightweight, and parses natively into JavaScript objects, making it the universal standard for REST APIs."
      },
      {
        "question": "What happens if the dependency array is omitted in useEffect?",
        "answer": "If the dependency array is omitted completely, the effect function executes after EVERY render cycle. If the effect updates state, it causes an infinite rendering loop that freezes the browser."
      }
    ],
    "quickRevision": {
      "keyConcepts": [
        "useEffect(() => { ... }, []) -> runs once on mount.",
        "Always manage 3 states: data, loading, error.",
        "Axios automatic JSON parsing: response.data contains the parsed JSON payload.",
        "Clean error handling with .catch(err => { setError(...); setLoading(false); })."
      ],
      "importantFunctions": [
        "useEffect(callback, []) - Lifecycle hook",
        "axios.get(url) - Asynchronous HTTP GET request returning promise",
        "response.data - Extracted response payload in Axios",
        "array.map(user => <div key={user.id}>...</div>) - Dynamic list rendering"
      ],
      "memoryTips": [
        "Empty array [] = 'Run once on mount'.",
        "Axios: No .json() needed, data is ready in res.data."
      ],
      "commonErrors": [
        "Omitting the dependency array [], causing an infinite API fetch loop.",
        "Forgetting the key={user.id} attribute on mapped list elements.",
        "Accessing nested data like user.company.name before data has loaded."
      ],
      "examChecklist": [
        "Ensure axios is installed via npm install axios.",
        "Check that users render with name, email, and city.",
        "Verify loading indicator appears briefly while fetching."
      ]
    }
  },
  {
    "id": "exp-8",
    "number": 8,
    "title": "Node.js - Creating a Basic HTTP Server",
    "category": "Node.js",
    "badge": "Node.js / http module",
    "shortDesc": "Create and run an HTTP server using Node.js's built-in http module with custom routing for GET and POST methods.",
    "aim": "To create and run a basic HTTP server using Node.js that handles GET and POST requests and sends appropriate responses.",
    "requirements": [
      "Computer or Laptop with Node.js installed",
      "Visual Studio Code editor",
      "Postman or a web browser for testing HTTP requests",
      "Basic knowledge of HTTP methods and Node.js modules"
    ],
    "suggestedReading": [
      "Introduction to Node.js and its event-driven, non-blocking architecture",
      "Node.js built-in http module and createServer method",
      "HTTP request (req) and response (res) objects and headers",
      "Differences between GET, POST, status codes (200, 404)"
    ],
    "dependencies": [
      "Node.js built-in modules (http) - No external npm packages"
    ],
    "files": [
      {
        "filename": "server.js",
        "language": "javascript",
        "description": "HTTP server implementation routing GET /, GET /about, GET /api/user, POST /data, and 404 fallback on port 3000.",
        "completeCode": "const http = require('http');\n\nconst server = http.createServer((req, res) => {\n\n    res.setHeader('Content-Type', 'application/json');\n\n    if (req.method === 'GET' && req.url === '/') {\n\n        res.writeHead(200);\n\n        res.end(JSON.stringify({\n            message: 'Welcome to Node.js Server!'\n        }));\n\n    } else if (req.method === 'GET' && req.url === '/about') {\n\n        res.writeHead(200);\n\n        res.end(JSON.stringify({\n            course: 'Full Stack Development',\n            lab: 'Node.js Server'\n        }));\n\n    } else if (req.method === 'POST' && req.url === '/data') {\n\n        let body = '';\n\n        req.on('data', chunk => {\n            body += chunk;\n        });\n\n        req.on('end', () => {\n\n            res.writeHead(200);\n\n            res.end(JSON.stringify({\n                received: JSON.parse(body)\n            }));\n\n        });\n\n    } else {\n\n        res.writeHead(404);\n\n        res.end(JSON.stringify({\n            error: 'Route not found'\n        }));\n\n    }\n\n});\n\nserver.listen(3000, () => {\n\n    console.log('Server running at http://localhost:3000');\n\n});"
      },
      {
        "filename": "execute",
        "language": "text",
        "description": "Original step-by-step execution guide and terminal verification instructions.",
        "completeCode": "Step 1 – Create project folder\nOpen VS Code.\n\nCreate a folder named:\n\nnode_lab\n\nOpen this folder in VS Code.\n\nStep 2 – Create JavaScript file\nInside node_lab, create:\n\nserver.js\n\nStep 3 – Open terminal\nOpen VS Code terminal using:\n\nCtrl + ~\n\nCheck your location:\npwd\n\n\nMake sure you are inside node_lab.\n\nStep 4 – Check Node.js\nRun:\nnode -v"
      }
    ],
    "runInstructions": [
      "Open VS Code terminal.",
      "Create a folder named node_lab and create server.js.",
      "Paste the complete server code.",
      "Run the server using terminal command: node server.js",
      "Confirm terminal message: Server running at http://localhost:3000/",
      "Open browser and test: http://localhost:3000/ and http://localhost:3000/about",
      "Test POST /data using Postman with a JSON body."
    ],
    "commands": [
      "node server.js"
    ],
    "expectedOutput": "Server & Route Responses:\n1. Terminal output on launch:\n   Server running at http://localhost:3000/\n2. GET http://localhost:3000/:\n   {\"message\": \"Welcome to Node.js Server!\"}\n3. GET http://localhost:3000/about:\n   {\"course\": \"Full Stack Development\", \"lab\": \"Node.js Server\"}\n4. GET http://localhost:3000/api/user:\n   {\"name\": \"Rohit Kumar\", \"dept\": \"CSE\", \"role\": \"Student\"}\n5. Any unknown route (e.g. /unknown):\n   HTTP 404: {\"error\": \"Route not found\"}",
    "screenshot": "/screenshots/exp8_output.png",
    "vivaQuestions": [
      {
        "question": "What is Node.js and what is its runtime architecture?",
        "answer": "Node.js is an open-source, single-threaded, event-driven JavaScript runtime built on Chrome's V8 engine and libuv. It utilizes an event loop and non-blocking I/O operations to handle thousands of concurrent requests efficiently without thread overhead."
      },
      {
        "question": "What is the http module in Node.js?",
        "answer": "The http module is a built-in Node.js module that provides utilities to transfer data over the Hypertext Transfer Protocol (HTTP), allowing developers to build standalone web and API servers without external web servers like Apache or Nginx."
      },
      {
        "question": "How does http.createServer() work?",
        "answer": "http.createServer() registers a request listener callback function that receives two objects: req (IncomingMessage stream) and res (ServerResponse object). It returns an HTTP server instance that listens for incoming TCP connections on a specified port."
      },
      {
        "question": "What is the difference between req and res objects?",
        "answer": "req (Request) contains information sent by the client, including HTTP method, URL, headers, and request body stream. res (Response) is used by the server to set headers, write status codes, and transmit response body data back to the client."
      },
      {
        "question": "What is the significance of the Content-Type header?",
        "answer": "Content-Type specifies the MIME type of the response payload (e.g. application/json, text/html, text/plain), instructing the client browser on how to interpret and format the returned data."
      },
      {
        "question": "How does Node.js handle non-blocking asynchronous I/O?",
        "answer": "Node.js uses the libuv event loop and thread pool. When an I/O operation (such as reading a file or waiting for network data) is initiated, Node.js offloads the operation to the operating system and continues executing other code. When ready, the callback is pushed to the event queue."
      },
      {
        "question": "What is the purpose of res.end()?",
        "answer": "res.end() signals to the server that all response headers and body data have been sent. It finalizes and closes the active HTTP response stream; omitting it leaves the client browser hanging indefinitely."
      }
    ],
    "quickRevision": {
      "keyConcepts": [
        "Built-in http module: const http = require('http');",
        "Server creation: http.createServer((req, res) => { ... });",
        "Routing via req.method ('GET', 'POST') and req.url ('/', '/about').",
        "Always call res.end() to complete and flush the HTTP response.",
        "Default Content-Type for REST is application/json."
      ],
      "importantFunctions": [
        "http.createServer(callback) - Initialize server instance",
        "res.setHeader('Content-Type', 'application/json') - Set MIME type",
        "res.writeHead(statusCode) - Write HTTP status code",
        "res.end(data) - Send payload and finalize response",
        "server.listen(port, callback) - Bind server to port"
      ],
      "memoryTips": [
        "Remember to serialize JavaScript objects to JSON: JSON.stringify(object).",
        "Without res.end(), the client waits forever (request timeout)."
      ],
      "commonErrors": [
        "Passing a raw object to res.end() without JSON.stringify().",
        "Calling res.writeHead() after res.end().",
        "Port 3000 collision if another service is already running on port 3000."
      ],
      "examChecklist": [
        "Verify node server.js outputs server running URL.",
        "Check that browser returns valid JSON on localhost:3000.",
        "Verify 404 status code on unknown path."
      ]
    }
  },
  {
    "id": "exp-9",
    "number": 9,
    "title": "Node.js - File System Operations",
    "category": "Node.js",
    "badge": "Node.js / fs module",
    "shortDesc": "Perform asynchronous file create, read, append, and delete operations using the built-in Node.js fs module.",
    "aim": "To implement file read, write, append, and delete operations using the Node.js built-in fs module.",
    "requirements": [
      "Computer or Laptop with Node.js installed",
      "Visual Studio Code editor",
      "Terminal or Command Prompt",
      "Basic knowledge of Node.js modules and callbacks"
    ],
    "suggestedReading": [
      "Node.js fs (File System) module and asynchronous I/O methods",
      "Synchronous vs asynchronous file operations",
      "Error-first callback conventions in Node.js",
      "File encoding: utf8 and buffer representations"
    ],
    "dependencies": [
      "Node.js built-in modules (fs) - No external npm packages"
    ],
    "files": [
      {
        "filename": "fileops.js",
        "language": "javascript",
        "description": "Script demonstrating fs.writeFile, fs.readFile with utf8 encoding, and fs.appendFile.",
        "completeCode": "const fs = require('fs');\n\n// Write to a file\nfs.writeFile(\n    'students.txt',\n    'Student 1: Rohit Kumar\\nStudent 2: Ananya Sharma\\n',\n    (err) => {\n        if (err) throw err;\n        console.log('File written successfully.');\n    }\n);\n\n// Read from the file\nfs.readFile('students.txt', 'utf8', (err, data) => {\n    if (err) throw err;\n    console.log('File Content:\\n' + data);\n});\n\n// Append data to the file\nfs.appendFile(\n    'students.txt',\n    'Student 3: Vikram Rao\\n',\n    (err) => {\n        if (err) throw err;\n        console.log('Data appended successfully.');\n    }\n);"
      },
      {
        "filename": "students.txt",
        "language": "text",
        "description": "Text file created, read, and appended by the fileops.js script.",
        "completeCode": "Student 1: Rohit Kumar\nStudent 2: Ananya Sharma\nStudent 3: Vikram Rao"
      }
    ],
    "runInstructions": [
      "Create a folder named exp-9 or node_lab in VS Code.",
      "Create fileops.js with the provided source code.",
      "Run the script in terminal: node fileops.js",
      "Check the terminal output confirming write, append, and file reading.",
      "Open students.txt generated in your directory to inspect the written lines."
    ],
    "commands": [
      "node fileops.js"
    ],
    "expectedOutput": "Terminal Output:\nFile written successfully.\nData appended successfully.\nFile Content:\nStudent 1: Rohit Kumar\nStudent 2: Ananya Sharma\nStudent 3: Vikram Rao\n\nGenerated File (students.txt):\nStudent 1: Rohit Kumar\nStudent 2: Ananya Sharma\nStudent 3: Vikram Rao",
    "screenshot": "/screenshots/exp9_output.png",
    "vivaQuestions": [
      {
        "question": "What is the fs module in Node.js?",
        "answer": "The fs (File System) module is a core built-in Node.js module that enables interacting with the computer's file system, providing both asynchronous (non-blocking) and synchronous methods for creating, reading, updating, and deleting files."
      },
      {
        "question": "What is the difference between synchronous and asynchronous file methods in Node.js?",
        "answer": "Synchronous methods (e.g. readFileSync) block the single JavaScript thread until the file operation completes, halting other requests. Asynchronous methods (e.g. readFile) execute non-blockingly in the background via libuv and trigger a callback upon completion."
      },
      {
        "question": "Why should synchronous methods (e.g. readFileSync) generally be avoided in production?",
        "answer": "Because Node.js runs on a single event loop thread. A slow synchronous disk read will freeze the entire server, preventing all other users from receiving responses until the read finishes."
      },
      {
        "question": "What is the purpose of the 'utf8' encoding parameter in readFile?",
        "answer": "Without the 'utf8' encoding parameter, fs.readFile returns the raw binary data as a Buffer. Providing 'utf8' tells Node.js to decode the binary bytes into a readable JavaScript text string."
      },
      {
        "question": "How does fs.appendFile differ from fs.writeFile?",
        "answer": "fs.writeFile overwrites the entire file content if the file already exists (or creates a new file if it does not). fs.appendFile adds new content to the end of the existing file without erasing previous data."
      },
      {
        "question": "How do you delete a file in Node.js using the fs module?",
        "answer": "A file is deleted asynchronously using fs.unlink(path, callback). To verify file existence before deletion, fs.access(path, fs.constants.F_OK, callback) can be used."
      },
      {
        "question": "What is an error-first callback pattern in Node.js?",
        "answer": "It is a standard Node.js callback convention where the first argument of the callback function is reserved for an error object (if an error occurred) and subsequent arguments deliver the successful result data (e.g., (err, data) => { if (err) throw err; ... })."
      }
    ],
    "quickRevision": {
      "keyConcepts": [
        "const fs = require('fs');",
        "fs.writeFile(file, data, callback) - Overwrites/creates file.",
        "fs.readFile(file, 'utf8', callback) - Reads file with string encoding.",
        "fs.appendFile(file, data, callback) - Appends content.",
        "fs.unlink(file, callback) - Deletes file from disk.",
        "Error-first pattern: (err, data) => { if (err) throw err; ... }."
      ],
      "importantFunctions": [
        "fs.writeFile(filename, content, callback)",
        "fs.readFile(filename, encoding, callback)",
        "fs.appendFile(filename, content, callback)",
        "fs.unlink(filename, callback)"
      ],
      "memoryTips": [
        "Write = Overwrite/Create. Append = Add to existing. Read with 'utf8' for string.",
        "Always check if (err) first in callbacks."
      ],
      "commonErrors": [
        "Forgetting the 'utf8' encoding parameter and getting <Buffer 53 74 75...>",
        "Expecting asynchronous operations to execute in strict order without nesting or promises (e.g. reading before write finishes).",
        "Trying to read a file that does not exist (ENOENT error)."
      ],
      "examChecklist": [
        "Check that node fileops.js executes without errors.",
        "Verify students.txt is created with 3 students.",
        "Check that terminal prints the complete file content."
      ]
    }
  },
  {
    "id": "exp-10",
    "number": 10,
    "title": "Express.js - Routing and Middleware",
    "category": "Express.js",
    "badge": "Express.js / Middleware",
    "shortDesc": "Build an Express.js backend demonstrating application routing, route parameters, query strings, and custom request logger middleware.",
    "aim": "To build a backend application using Express.js demonstrating routing mechanisms, route parameters, query strings, and custom middleware.",
    "requirements": [
      "Computer or Laptop with Node.js and npm installed",
      "Visual Studio Code editor",
      "Browser or Postman for testing routes",
      "Basic knowledge of Node.js and HTTP protocol"
    ],
    "suggestedReading": [
      "Introduction to Express.js minimalist web framework",
      "Express routing mechanisms (app.get, app.post)",
      "Middleware concepts and the next() dispatch function",
      "Handling route parameters (req.params) and query strings (req.query)"
    ],
    "dependencies": [
      "express: ^4.18.x or ^4.21.x"
    ],
    "files": [
      {
        "filename": "app.js",
        "language": "javascript",
        "description": "Express application with JSON middleware, custom timestamp logger middleware, root route, parameterized route, and search query route on port 3001.",
        "completeCode": "const express = require('express');\n\nconst app = express();\n\napp.use(express.json());\n\n// Logger middleware\napp.use((req, res, next) => {\n\n    console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);\n\n    next();\n\n});\n\n// Home route\napp.get('/', (req, res) => {\n\n    res.json({\n        message: 'Welcome to Express.js Lab!'\n    });\n\n});\n\n// Route with parameter\napp.get('/students/:id', (req, res) => {\n\n    res.json({\n        studentId: req.params.id,\n        message: 'Student details fetched'\n    });\n\n});\n\n// Route with query string\napp.get('/search', (req, res) => {\n\n    const { name, dept } = req.query;\n\n    res.json({\n        search: { name, dept },\n        message: 'Search results'\n    });\n\n});\n\n// Start server\napp.listen(3001, () =>\n\n    console.log('Express server running on port 3001')\n\n);"
      },
      {
        "filename": "package.json",
        "language": "json",
        "description": "NPM configuration file specifying express dependency and start script.",
        "completeCode": "{\n  \"name\": \"exp-10\",\n  \"version\": \"1.0.0\",\n  \"description\": \"\",\n  \"main\": \"Node.js\",\n  \"scripts\": {\n    \"test\": \"echo \\\"Error: no test specified\\\" && exit 1\"\n  },\n  \"keywords\": [],\n  \"author\": \"\",\n  \"license\": \"ISC\",\n  \"dependencies\": {\n    \"express\": \"^5.3.0\"\n  }\n}"
      }
    ],
    "runInstructions": [
      "Open your terminal in VS Code inside exp-10.",
      "Install express if not already installed: npm install express",
      "Run the Express server: node app.js",
      "Confirm console output: Express server running on port 3001",
      "Test routes in browser or Postman:",
      "  1. GET http://localhost:3001/",
      "  2. GET http://localhost:3001/students/101",
      "  3. GET http://localhost:3001/search?name=Rohit&dept=CSE",
      "Observe the terminal window logging method, URL, and ISO timestamp for every request."
    ],
    "commands": [
      "npm init -y",
      "npm install express",
      "node app.js"
    ],
    "expectedOutput": "Terminal Logger Output:\nExpress server running on port 3001\nGET / - 2026-11-04T01:30:00.123Z\nGET /students/101 - 2026-11-04T01:30:15.456Z\nGET /search?name=Rohit&dept=CSE - 2026-11-04T01:30:28.789Z\n\nBrowser / Postman JSON Responses:\n1. GET /:\n   {\"message\": \"Welcome to Express.js Lab!\"}\n2. GET /students/101:\n   {\"studentId\": \"101\", \"message\": \"Student details fetched\"}\n3. GET /search?name=Rohit&dept=CSE:\n   {\"search\": {\"name\": \"Rohit\", \"dept\": \"CSE\"}, \"message\": \"Search results\"}",
    "screenshot": "/screenshots/exp10_output.jpg",
    "vivaQuestions": [
      {
        "question": "What is Express.js and why is it preferred over vanilla Node.js http module?",
        "answer": "Express.js is a fast, unopinionated, minimalist web framework for Node.js. It simplifies server development by providing built-in routing, middleware chaining, simple JSON handling, query parsing, and robust error management, which require extensive boilerplate in vanilla http."
      },
      {
        "question": "What is middleware in Express.js?",
        "answer": "Middleware functions are functions that have access to the request object (req), response object (res), and the next middleware function (next) in the application's request-response cycle. They can execute code, modify req/res objects, end request-response cycles, or pass control to the next handler."
      },
      {
        "question": "What is the role of the next() function in middleware?",
        "answer": "The next() function passes execution control to the next middleware or route handler in the pipeline stack. If a middleware neither sends a response (res.send/res.json) nor calls next(), the request remains stalled and hangs."
      },
      {
        "question": "What is the difference between route parameters (req.params) and query strings (req.query)?",
        "answer": "Route parameters are named URL segments defined with colons (e.g., /students/:id) captured in req.params (e.g. req.params.id), used to identify specific resources. Query strings appear after a question mark (e.g., /search?name=Rohit) captured in req.query, used for optional filtering, sorting, or searching."
      },
      {
        "question": "What does app.use(express.json()) do?",
        "answer": "express.json() is a built-in Express middleware based on body-parser. It intercepts incoming requests with Content-Type: application/json, parses the JSON body stream, and exposes the resulting object on req.body."
      },
      {
        "question": "What are the different types of middleware in Express.js?",
        "answer": "Express features 5 main types of middleware: Application-level middleware (app.use), Router-level middleware (router.use), Built-in middleware (express.json, express.static), Third-party middleware (cors, morgan), and Error-handling middleware (functions with 4 arguments: (err, req, res, next))."
      },
      {
        "question": "How do you handle 404 routes in Express.js?",
        "answer": "A 404 handler is placed at the very bottom of all routes: app.use((req, res) => { res.status(404).json({ error: 'Route not found' }); });. It catches any request that did not match preceding route handlers."
      }
    ],
    "quickRevision": {
      "keyConcepts": [
        "const express = require('express'); const app = express();",
        "Middleware signature: (req, res, next) => { ... next(); }",
        "Route params (:id) -> req.params.id",
        "Query strings (?name=val) -> req.query.name",
        "JSON response helper: res.json({ key: 'val' })",
        "app.listen(3001, () => ...)"
      ],
      "importantFunctions": [
        "app.use(express.json()) - Parse JSON body",
        "app.use(middleware) - Mount application-level middleware",
        "app.get(path, handler) - Register HTTP GET route",
        "next() - Pass control to subsequent handler",
        "res.status(code).json(body) - Send status code and JSON"
      ],
      "memoryTips": [
        "Params = Path segments (/students/:id). Query = Question mark (?key=val).",
        "Always call next() inside middleware unless sending the response."
      ],
      "commonErrors": [
        "Forgetting to call next() in custom middleware, causing client to hang.",
        "Defining middleware AFTER route definitions (middleware must precede routes).",
        "Accessing req.body without app.use(express.json())."
      ],
      "examChecklist": [
        "Verify node app.js runs on port 3001.",
        "Confirm logger middleware prints timestamp in terminal for every request.",
        "Verify req.params.id and req.query.name behave properly."
      ]
    }
  },
  {
    "id": "exp-11",
    "number": 11,
    "title": "Express.js - RESTful API with CRUD Operations",
    "category": "Express.js",
    "badge": "Express.js / REST API",
    "shortDesc": "Design and implement a full-fledged RESTful API supporting Create, Read, Update, and Delete (CRUD) operations with HTTP status codes and JSON responses.",
    "aim": "To design and implement a fully functional RESTful API using Express.js that supports Create, Read, Update, and Delete (CRUD) operations with proper HTTP status codes and JSON responses.",
    "requirements": [
      "Computer or Laptop with Node.js and npm installed",
      "Express.js project created in Experiment 10",
      "Postman for testing API endpoints",
      "Basic knowledge of REST API principles and HTTP methods"
    ],
    "suggestedReading": [
      "REST API architectural constraints and resource naming",
      "Mapping CRUD operations to HTTP methods (POST, GET, PUT, DELETE)",
      "Standard HTTP status codes (200 OK, 201 Created, 404 Not Found)",
      "In-memory data operations using JavaScript array methods (find, filter, findIndex)"
    ],
    "dependencies": [
      "express: ^4.18.x or ^4.21.x"
    ],
    "files": [
      {
        "filename": "crud_api.js",
        "language": "javascript",
        "description": "Complete REST API managing student records with in-memory array supporting GET /students, GET /students/:id, POST /students, PUT /students/:id, and DELETE /students/:id.",
        "completeCode": "const express = require('express');\n\nconst app = express();\n\napp.use(express.json());\n\nlet students = [\n    { id: 1, name: 'Rohit Kumar', dept: 'CSE' },\n    { id: 2, name: 'Ananya Sharma', dept: 'ISE' }\n];\n\n// GET all students\napp.get('/students', (req, res) => {\n\n    res.status(200).json(students);\n\n});\n\n// GET student by ID\napp.get('/students/:id', (req, res) => {\n\n    const student = students.find(\n        s => s.id === parseInt(req.params.id)\n    );\n\n    if (!student)\n        return res.status(404).json({\n            message: 'Student not found'\n        });\n\n    res.status(200).json(student);\n\n});\n\n// POST - Create student\napp.post('/students', (req, res) => {\n\n    const newStudent = {\n        id: students.length + 1,\n        ...req.body\n    };\n\n    students.push(newStudent);\n\n    res.status(201).json(newStudent);\n\n});\n\n// PUT - Update student\napp.put('/students/:id', (req, res) => {\n\n    const index = students.findIndex(\n        s => s.id === parseInt(req.params.id)\n    );\n\n    if (index === -1)\n        return res.status(404).json({\n            message: 'Student not found'\n        });\n\n    students[index] = {\n        ...students[index],\n        ...req.body\n    };\n\n    res.status(200).json(students[index]);\n\n});\n\n// DELETE student\napp.delete('/students/:id', (req, res) => {\n\n    students = students.filter(\n        s => s.id !== parseInt(req.params.id)\n    );\n\n    res.status(200).json({\n        message: 'Student deleted successfully'\n    });\n\n});\n\n// Start server\napp.listen(3002, () =>\n    console.log('CRUD API running on port 3002 http://localhost:3002/students')\n);"
      },
      {
        "filename": "package.json",
        "language": "json",
        "description": "NPM package definition for the CRUD API.",
        "completeCode": "{\n  \"name\": \"exp-11\",\n  \"version\": \"1.0.0\",\n  \"description\": \"\",\n  \"main\": \"index.js\",\n  \"scripts\": {\n    \"test\": \"echo \\\"Error: no test specified\\\" && exit 1\"\n  },\n  \"keywords\": [],\n  \"author\": \"\",\n  \"license\": \"ISC\",\n  \"dependencies\": {\n    \"express\": \"^5.3.0\"\n  }\n}"
      }
    ],
    "runInstructions": [
      "Open terminal in the exp-11 folder.",
      "Install express if needed: npm install express",
      "Start the API server: node crud_api.js",
      "Confirm server log: CRUD API running on port 3002 http://localhost:3002/students",
      "Open Postman or Thunder Client and test all 5 endpoints:",
      "  1. GET http://localhost:3002/students (Fetch all)",
      "  2. GET http://localhost:3002/students/1 (Fetch student 1)",
      "  3. POST http://localhost:3002/students with Body -> raw JSON: {\"name\": \"Vikram Rao\", \"dept\": \"CSE\"}",
      "  4. PUT http://localhost:3002/students/1 with Body -> raw JSON: {\"name\": \"Rohit K\"}",
      "  5. DELETE http://localhost:3002/students/2 (Delete student 2)"
    ],
    "commands": [
      "node crud_api.js"
    ],
    "expectedOutput": "Postman Testing Responses & Status Codes:\n1. GET /students -> HTTP 200 OK:\n   [\n     { \"id\": 1, \"name\": \"Rohit Kumar\", \"dept\": \"CSE\" },\n     { \"id\": 2, \"name\": \"Ananya Sharma\", \"dept\": \"ISE\" }\n   ]\n2. GET /students/1 -> HTTP 200 OK:\n   { \"id\": 1, \"name\": \"Rohit Kumar\", \"dept\": \"CSE\" }\n3. POST /students with {\"name\":\"Vikram Rao\",\"dept\":\"CSE\"} -> HTTP 201 Created:\n   { \"id\": 3, \"name\": \"Vikram Rao\", \"dept\": \"CSE\" }\n4. PUT /students/1 with {\"name\":\"Rohit K\"} -> HTTP 200 OK:\n   { \"id\": 1, \"name\": \"Rohit K\", \"dept\": \"CSE\" }\n5. DELETE /students/2 -> HTTP 200 OK:\n   { \"message\": \"Student deleted successfully\" }\n6. GET /students/999 -> HTTP 404 Not Found:\n   { \"message\": \"Student not found\" }",
    "screenshot": "",
    "vivaQuestions": [
      {
        "question": "What is a RESTful API?",
        "answer": "A RESTful API (Representational State Transfer) is an architectural style for networked applications. It uses standard stateless HTTP requests to access and manipulate resources identified by URLs, utilizing standard HTTP verbs (GET, POST, PUT, DELETE) and standard representations (JSON/XML)."
      },
      {
        "question": "What are the four HTTP methods used in CRUD operations?",
        "answer": "The four HTTP methods are: POST for Create (create new resource), GET for Read (retrieve resources), PUT for Update (replace/update existing resource), and DELETE for Delete (remove resource)."
      },
      {
        "question": "What is the difference between PUT and PATCH?",
        "answer": "PUT is used for full replacement of a resource; any fields not included in the payload may be removed or overwritten with defaults. PATCH is used for partial update, modifying only the specific fields provided in the request payload."
      },
      {
        "question": "What are HTTP status codes and what do 200, 201, and 404 represent?",
        "answer": "HTTP status codes are standard 3-digit response codes issued by a server: 200 OK means the request succeeded; 201 Created means the request succeeded and a new resource was successfully created; 404 Not Found means the requested resource does not exist on the server."
      },
      {
        "question": "What is the purpose of express.json() middleware?",
        "answer": "express.json() parses incoming HTTP request streams containing JSON formatting and populates req.body with the parsed JavaScript object. Without it, req.body is undefined on POST and PUT requests."
      },
      {
        "question": "What is the difference between req.params and req.body?",
        "answer": "req.params contains route parameters parsed from the URL path (e.g. /students/:id -> req.params.id). req.body contains the submitted payload sent in the HTTP request body (e.g. student name, department) sent via POST or PUT."
      },
      {
        "question": "Why is Postman used for API testing?",
        "answer": "Standard web browsers can only perform GET requests through their URL bar. Postman allows developers to construct, execute, and inspect POST, PUT, DELETE, and PATCH requests with headers, query parameters, authorization tokens, and JSON payloads."
      }
    ],
    "quickRevision": {
      "keyConcepts": [
        "CRUD mapping: POST -> Create, GET -> Read, PUT -> Update, DELETE -> Delete.",
        "Status codes: 200 (OK), 201 (Created), 404 (Not Found), 500 (Internal Error).",
        "Parse IDs with parseInt(req.params.id) since URL params are strings.",
        "Use students.find() for reading, findIndex() for updating, filter() for deleting.",
        "Spread operator ({ ...students[index], ...req.body }) for shallow merges."
      ],
      "importantFunctions": [
        "app.post('/students', handler) - Create route",
        "app.get('/students', handler) - Read all route",
        "app.get('/students/:id', handler) - Read single route",
        "app.put('/students/:id', handler) - Update route",
        "app.delete('/students/:id', handler) - Delete route",
        "res.status(201).json(data) - Send 201 Created"
      ],
      "memoryTips": [
        "POST = 201 Created. Everything else typically 200 OK.",
        "Always check if (!student) return res.status(404).json(...)."
      ],
      "commonErrors": [
        "Comparing string req.params.id directly with numeric s.id without parseInt().",
        "Forgetting app.use(express.json()), leading to req.body being undefined.",
        "Missing return statement before res.status(404), causing headers already sent error."
      ],
      "examChecklist": [
        "Start node crud_api.js on port 3002.",
        "Test GET /students in browser or Postman.",
        "Verify POST creates new student with ID 3 and returns 201 status."
      ]
    }
  },
  {
    "id": "exp-12",
    "number": 12,
    "title": "MongoDB - CRUD Operations Using MongoDB Shell and Compass",
    "category": "MongoDB",
    "badge": "MongoDB / mongosh / Compass",
    "shortDesc": "Perform document Create, Read, Update, and Delete operations on collections using the MongoDB Shell (mongosh) and GUI Compass.",
    "aim": "To perform Create, Read, Update, and Delete operations on MongoDB collections using the MongoDB shell and MongoDB Compass.",
    "requirements": [
      "Computer or Laptop with MongoDB Community Edition installed",
      "MongoDB Compass GUI tool installed",
      "MongoDB Shell (mongosh) available",
      "Basic knowledge of NoSQL database concepts"
    ],
    "suggestedReading": [
      "Introduction to NoSQL databases and MongoDB document architecture",
      "MongoDB databases, collections, and BSON documents",
      "MongoDB shell commands for CRUD (insertMany, find, updateOne, deleteOne)",
      "Differences between SQL tables/rows and NoSQL collections/documents"
    ],
    "dependencies": [
      "MongoDB Community Server",
      "MongoDB Shell (mongosh)",
      "MongoDB Compass"
    ],
    "files": [
      {
        "filename": "commands for mongodb",
        "language": "javascript",
        "description": "MongoDB Shell commands for database selection, multiple insertions, querying, field updating with $set, and document deletion.",
        "completeCode": "// 1. Select database\nuse fsdDB\n\n// 2. Insert multiple records\ndb.students.insertMany([...])\n\n// 3. Read all records\ndb.students.find().pretty()\n\n// 4. Read with condition\ndb.students.find({ dept: \"CSE\" })\n\n// 5. Update record\ndb.students.updateOne(\n    { student_id: 1 },\n    { $set: { marks: 92 } }\n)\n\n// 6. Delete record\ndb.students.deleteOne({ student_id: 3 })"
      }
    ],
    "runInstructions": [
      "Start the MongoDB daemon service in terminal if not running: mongod",
      "Open a new terminal window and connect to the MongoDB Shell: mongosh",
      "Switch to or create the laboratory database: use fsdDB",
      "Insert student documents into the students collection: db.students.insertMany([...])",
      "Query and format all documents: db.students.find().pretty()",
      "Query students in CSE department: db.students.find({ dept: \"CSE\" })",
      "Update student marks: db.students.updateOne({ student_id: 1 }, { $set: { marks: 92 } })",
      "Delete student record: db.students.deleteOne({ student_id: 3 })",
      "Launch MongoDB Compass, connect to mongodb://localhost:27017, and visually inspect fsdDB -> students."
    ],
    "commands": [
      "mongod",
      "mongosh",
      "use fsdDB",
      "db.students.find().pretty()"
    ],
    "expectedOutput": "MongoDB Shell (mongosh) Session:\ntest> use fsdDB\nswitched to db fsdDB\n\nfsdDB> db.students.insertMany([\n  { student_id: 1, name: \"Rohit Kumar\", dept: \"CSE\", marks: 85 },\n  { student_id: 2, name: \"Ananya Sharma\", dept: \"ISE\", marks: 90 },\n  { student_id: 3, name: \"Vikram Rao\", dept: \"CSE\", marks: 78 }\n])\n{\n  acknowledged: true,\n  insertedIds: {\n    '0': ObjectId('6724a1b2c3d4e5f6a7b8c9d0'),\n    '1': ObjectId('6724a1b2c3d4e5f6a7b8c9d1'),\n    '2': ObjectId('6724a1b2c3d4e5f6a7b8c9d2')\n  }\n}\n\nfsdDB> db.students.updateOne({ student_id: 1 }, { $set: { marks: 92 } })\n{ acknowledged: true, insertedId: null, matchedCount: 1, modifiedCount: 1, upsertedCount: 0 }\n\nfsdDB> db.students.deleteOne({ student_id: 3 })\n{ acknowledged: true, deletedCount: 1 }\n\nfsdDB> db.students.find().pretty()\n[\n  { _id: ObjectId('...'), student_id: 1, name: 'Rohit Kumar', dept: 'CSE', marks: 92 },\n  { _id: ObjectId('...'), student_id: 2, name: 'Ananya Sharma', dept: 'ISE', marks: 90 }\n]",
    "screenshot": "",
    "vivaQuestions": [
      {
        "question": "What is MongoDB and how does it differ from a relational database?",
        "answer": "MongoDB is a leading document-oriented NoSQL database. Unlike relational databases (RDBMS) which store structured data in fixed tables with rows and columns, MongoDB stores semi-structured data as flexible BSON (Binary JSON) documents in collections without requiring rigid schemas or SQL joins."
      },
      {
        "question": "What is a document in MongoDB?",
        "answer": "A document is the basic unit of data in MongoDB, composed of field-value pairs similar to JSON objects. Documents support nested objects, arrays, and can have varying structures within the same collection. Every document receives a unique 12-byte _id primary key."
      },
      {
        "question": "What is the difference between insertOne and insertMany?",
        "answer": "insertOne() accepts a single JavaScript document object and inserts it into the collection. insertMany() accepts an array of document objects and inserts them in a single batch operation, returning an acknowledged object with insertedIds."
      },
      {
        "question": "What is the purpose of the $set operator in an update query?",
        "answer": "The $set operator replaces the value of a specified field with the given value. Crucially, without $set, passing an object into an update operation in MongoDB will completely replace the entire document rather than just updating specific fields."
      },
      {
        "question": "What is the difference between updateOne and updateMany?",
        "answer": "updateOne() searches the collection and updates only the FIRST document that matches the query filter. updateMany() updates ALL documents in the collection that satisfy the query filter criteria."
      },
      {
        "question": "What is MongoDB Compass used for?",
        "answer": "MongoDB Compass is the official graphical user interface (GUI) tool for MongoDB. It allows developers to visually explore database schemas, query and inspect documents, create indexes, analyze performance, and execute CRUD operations without typing shell commands."
      },
      {
        "question": "What is the default port on which MongoDB runs?",
        "answer": "The default port for MongoDB standalone instances is 27017 (connection string: mongodb://localhost:27017 or mongodb://127.0.0.1:27017)."
      }
    ],
    "quickRevision": {
      "keyConcepts": [
        "RDBMS vs MongoDB: Database -> Database, Table -> Collection, Row -> Document, Column -> Field.",
        "Default port: 27017.",
        "use <dbname> selects or creates the database lazily.",
        "db.<collection>.find() queries documents.",
        "Always wrap updates in atomic operators like { $set: { marks: 92 } }."
      ],
      "importantFunctions": [
        "use fsdDB - Switch active database",
        "db.students.insertMany([...]) - Batch document insert",
        "db.students.find().pretty() - Formatted document query",
        "db.students.find({ dept: 'CSE' }) - Filter query",
        "db.students.updateOne(filter, { $set: updates }) - Single document field update",
        "db.students.deleteOne(filter) - Single document delete"
      ],
      "memoryTips": [
        "Remember: Always use $set when updating fields!",
        "Compass connects by default to mongodb://localhost:27017."
      ],
      "commonErrors": [
        "Forgetting the $set operator in update queries.",
        "Running mongosh when mongod service is stopped (connection refused error).",
        "Forgetting quotes around string values in shell queries."
      ],
      "examChecklist": [
        "Ensure mongod is active.",
        "Execute insertMany in mongosh and check acknowledged: true.",
        "Open MongoDB Compass and view the 2 remaining students in fsdDB."
      ]
    }
  },
  {
    "id": "exp-13",
    "number": 13,
    "title": "MongoDB with Node.js Using Mongoose",
    "category": "Mongoose",
    "badge": "Node.js / Mongoose / Express",
    "shortDesc": "Connect a Node.js Express application to MongoDB using Mongoose ODM, define validated schemas/models, and implement async CRUD endpoints.",
    "aim": "To connect a Node.js application to a MongoDB database using the Mongoose ODM, define schemas and models, and perform database operations through model methods.",
    "requirements": [
      "Computer or Laptop with Node.js, npm, and MongoDB installed",
      "Visual Studio Code editor",
      "MongoDB server running on the system",
      "Basic knowledge of Node.js, Express.js, and MongoDB"
    ],
    "suggestedReading": [
      "Introduction to Mongoose Object Data Modeling (ODM) library",
      "Mongoose Schema definitions, data types, and validation constraints",
      "Mongoose Model methods: save, find, findByIdAndUpdate, findByIdAndDelete",
      "Asynchronous JavaScript with async/await and MongoDB connection pooling"
    ],
    "dependencies": [
      "express: ^4.18.x or ^4.21.x",
      "mongoose: ^8.x or ^7.x"
    ],
    "files": [
      {
        "filename": "db.js",
        "language": "javascript",
        "description": "MongoDB connection establishment file connecting to mongodb://localhost:27017/fsdDB with promise handlers.",
        "completeCode": "const mongoose = require('mongoose');\n\nmongoose.connect('mongodb://localhost:27017/fsdDB')\n\n    .then(() => console.log('MongoDB connected successfully'))\n\n    .catch(err => console.error('Connection error:', err));\n\nmodule.exports = mongoose;"
      },
      {
        "filename": "Student.js",
        "language": "javascript",
        "description": "Mongoose schema and model definition with validation rules (student_id unique, required fields, marks min/max).",
        "completeCode": "const mongoose = require('mongoose');\n\nconst studentSchema = new mongoose.Schema({\n\n    student_id: {\n        type: Number,\n        required: true,\n        unique: true\n    },\n\n    name: {\n        type: String,\n        required: true\n    },\n\n    dept: {\n        type: String,\n        default: 'CSE'\n    },\n\n    marks: {\n        type: Number,\n        min: 0,\n        max: 100\n    }\n\n});\n\nmodule.exports = mongoose.model('Student', studentSchema);"
      },
      {
        "filename": "app.js",
        "language": "javascript",
        "description": "Express server mounting db.js, importing Student model, and exposing async POST, GET, PUT, and DELETE routes on port 3003.",
        "completeCode": "require('./db');\n\nconst express = require('express');\n\nconst Student = require('./Student');\n\nconst app = express();\n\napp.use(express.json());\n\n// CREATE\napp.post('/students', async (req, res) => {\n\n    const student = new Student(req.body);\n\n    await student.save();\n\n    res.status(201).json(student);\n\n});\n\n// READ ALL\napp.get('/students', async (req, res) => {\n\n    const students = await Student.find();\n\n    res.json(students);\n\n});\n\n// UPDATE\napp.put('/students/:id', async (req, res) => {\n\n    const student = await Student.findByIdAndUpdate(\n        req.params.id,\n        req.body,\n        { new: true }\n    );\n\n    res.json(student);\n\n});\n\n// DELETE\napp.delete('/students/:id', async (req, res) => {\n\n    await Student.findByIdAndDelete(req.params.id);\n\n    res.json({\n        message: 'Deleted successfully'\n    });\n\n});\n\n// START SERVER\napp.listen(3003, () =>\n\n    console.log('Mongoose app running on port 3003')\n\n);"
      }
    ],
    "runInstructions": [
      "Ensure the local MongoDB service is running (mongod).",
      "Open terminal in the exp-13 folder in VS Code.",
      "Install dependencies if needed: npm install express mongoose",
      "Start the application: node app.js",
      "Confirm console messages:",
      "  - MongoDB connected successfully",
      "  - Mongoose app running on port 3003",
      "Test routes in Postman:",
      "  1. POST http://localhost:3003/students with JSON body {\"student_id\": 101, \"name\": \"Rohit Kumar\", \"dept\": \"CSE\", \"marks\": 95}",
      "  2. GET http://localhost:3003/students (Fetch all documents from MongoDB)",
      "  3. PUT http://localhost:3003/students/<mongo_id> with {\"marks\": 98}",
      "  4. DELETE http://localhost:3003/students/<mongo_id>"
    ],
    "commands": [
      "npm init -y",
      "npm install express mongoose",
      "node app.js"
    ],
    "expectedOutput": "Application Startup & API Responses:\n1. Terminal Startup:\n   Mongoose app running on port 3003\n   MongoDB connected successfully\n2. POST /students with {\"student_id\": 101, \"name\": \"Rohit Kumar\", \"dept\": \"CSE\", \"marks\": 95} -> HTTP 201:\n   {\n     \"_id\": \"6724fa0e21a4f3b6c8e90123\",\n     \"student_id\": 101,\n     \"name\": \"Rohit Kumar\",\n     \"dept\": \"CSE\",\n     \"marks\": 95,\n     \"__v\": 0\n   }\n3. GET /students -> HTTP 200:\n   Returns array of all student documents persisted inside MongoDB fsdDB.\n4. PUT /students/:id with { new: true } -> Returns updated document.\n5. DELETE /students/:id -> {\"message\": \"Deleted successfully\"}",
    "screenshot": "",
    "vivaQuestions": [
      {
        "question": "What is Mongoose and why is it used?",
        "answer": "Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a structured schema-based solution to model application data, enforcing strict data types, field validations, default values, middleware hooks, and business logic over raw schemaless MongoDB."
      },
      {
        "question": "What is an ODM in the context of databases?",
        "answer": "An Object Data Modeling (ODM) library translates between JavaScript objects in an application and document representations in a NoSQL database (like MongoDB), providing high-level abstraction, type casting, validation, and query building."
      },
      {
        "question": "What is a Mongoose Schema?",
        "answer": "A Mongoose Schema is a configuration blueprint that defines the structure of documents within a MongoDB collection, including field names, data types (String, Number, Date, Boolean), validation constraints (required, unique, min, max), and default values."
      },
      {
        "question": "What is the difference between Schema and Model in Mongoose?",
        "answer": "A Schema defines the document structure and rules. A Model is a compiled constructor compiled from the Schema (mongoose.model('Student', studentSchema)) that provides the direct programming interface for querying, inserting, updating, and deleting documents in the collection."
      },
      {
        "question": "What does the required property do in a Mongoose schema?",
        "answer": "The required: true validator ensures that a document cannot be saved into the database if the specified field is missing or null, throwing a Mongoose ValidationError before the write operation reaches the database."
      },
      {
        "question": "What is async/await and why is it used with Mongoose?",
        "answer": "async/await is modern JavaScript syntax for writing asynchronous code that looks and behaves synchronously. Because database network calls return promises, using await Student.find() pauses function execution until the query completes, making code cleaner and easier to read without callback hell."
      },
      {
        "question": "What is the purpose of { new: true } in findByIdAndUpdate?",
        "answer": "By default, findByIdAndUpdate returns the original document AS IT WAS before the update occurred. Passing the option { new: true } instructs Mongoose to return the newly modified document instead."
      }
    ],
    "quickRevision": {
      "keyConcepts": [
        "Connection: mongoose.connect('mongodb://localhost:27017/fsdDB').",
        "Schema defines rules; Model performs database queries.",
        "Compile model: mongoose.model('Student', studentSchema).",
        "Always use async/await with Mongoose model operations.",
        "In findByIdAndUpdate, include { new: true } to receive updated data."
      ],
      "importantFunctions": [
        "mongoose.connect(url) - Connect to MongoDB database",
        "new mongoose.Schema({ ... }) - Create schema blueprint",
        "mongoose.model('Student', schema) - Compile model constructor",
        "student.save() - Insert new document",
        "Student.find() - Fetch all collection documents",
        "Student.findByIdAndUpdate(id, data, { new: true }) - Update and return new doc",
        "Student.findByIdAndDelete(id) - Remove document by MongoDB _id"
      ],
      "memoryTips": [
        "Schema = Blueprint. Model = Query engine.",
        "Always remember { new: true } when updating or you'll get the old document back."
      ],
      "commonErrors": [
        "Forgetting require('./db') in app.js, resulting in unhandled connection errors.",
        "Omitting await before Mongoose operations, resulting in empty responses or unhandled promises.",
        "Passing invalid MongoDB ObjectId strings to findByIdAndUpdate."
      ],
      "examChecklist": [
        "Check MongoDB daemon is running locally.",
        "Verify node app.js prints 'MongoDB connected successfully'.",
        "Test POST /students and verify document is created in MongoDB."
      ]
    }
  }
];

export const categories = [
  'All',
  'HTML and CSS',
  'JavaScript',
  'React',
  'Node.js',
  'Express.js',
  'MongoDB',
  'Mongoose'
];

export const getTotalProgramsCount = () => {
  return experiments.reduce((acc, exp) => acc + (exp.files ? exp.files.length : 0), 0);
};
