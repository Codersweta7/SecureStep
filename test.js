const questions = [
    {
        'que': 'Does making your password a mix of special characters and uppercase and lowercase letters make it more secure than just making the password longer?',
        'a': 'Yes, mixing characters makes it more secure',
        'b': 'No, making the password longer is better',
        'c': 'It depends on the website',
        'd': 'None of the above',
        'correct': 'b',
        'explanation': 'Making your password longer is actually more effective for security. Longer passwords are harder to guess because there are more possible combinations. It\'s like using a longer key for a lock—it takes longer to break!'
    },
    {
        'que': 'How risky is it to visit websites with lots of pop-up ads or ones that use "HTTP" instead of "HTTPS"?',
        'a': 'Not risky at all',
        'b': 'Moderately risky, but safe enough',
        'c': 'Very risky, they might steal your personal information or trick you into downloading harmful software',
        'd': 'None of the above',
        'correct': 'c',
        'explanation': 'These types of sites can be dangerous because they might trick you into clicking on something harmful, like downloading a virus or giving away your personal information. Always look for "HTTPS" in the web address, as it indicates a safer connection.'
    },
    {
        'que': 'When you get an email asking you to click on a link or give away personal information, what should you do?',
        'a': 'Click the link to see what it’s about, just in case',
        'b': 'Ignore the email completely, it’s probably just spam',
        'c': 'Delete the email and report it as suspicious',
        'd': 'Share the information if it seems important',
        'correct': 'c',
        'explanation': 'Emails like this could be attempts to trick you into giving away personal details, a practice known as phishing. Always delete emails from unknown senders, and report them if you’re unsure.'
    },
    {
        'que': 'Is it safe to use the same password for all of your accounts?',
        'a': 'Yes, it’s easier to remember',
        'b': 'No, if someone finds your password, they can access all your accounts',
        'c': 'It’s okay if you change it often',
        'd': 'None of the above',
        'correct': 'b',
        'explanation': 'Using the same password for all accounts makes them all vulnerable. If one account gets hacked, all your accounts could be at risk. It’s better to use unique passwords for each account.'
    },
    {
        'que': 'What should you do if you find a public Wi-Fi network with a password that’s easy to guess, like "12345"?',
        'a': 'It’s fine to use it, nothing will happen',
        'b': 'Avoid using it because someone could hack into your device and steal your information',
        'c': 'You can use it if you don’t do anything sensitive online',
        'd': 'None of the above',
        'correct': 'b',
        'explanation': 'Public Wi-Fi networks with weak passwords are often targets for hackers. They can intercept your online activity and steal your information. It’s best to avoid using them, especially for online banking or shopping.'
    },
    {
        'que': 'If a website asks for your phone number or home address, should you always give it?',
        'a': 'Yes, it’s required for most websites',
        'b': 'Only if you trust the website and are sure it’s secure',
        'c': 'Never give out this kind of information unless you’re sure you know the website is safe',
        'd': 'None of the above',
        'correct': 'c',
        'explanation': 'You should only provide personal information to websites you trust. Always check if the website has "HTTPS" in the web address, and make sure it’s a reputable site before sharing anything personal.'
    },
    {
        'que': 'How can you tell if a website is secure before making a purchase?',
        'a': 'If it has a good-looking design, it’s probably safe',
        'b': 'Look for "HTTPS" in the website address and a small lock symbol next to it',
        'c': 'Check the website’s social media pages for reviews',
        'd': 'None of the above',
        'correct': 'b',
        'explanation': 'A secure website will have "HTTPS" in its web address and a lock symbol in front of the URL. This means your personal information will be encrypted, making it harder for hackers to steal.'
    },
    {
        'que': 'Is it safe to download apps from unknown sources on your phone?',
        'a': 'Yes, they might be useful even if they aren’t from the app store',
        'b': 'No, they could contain viruses or malware',
        'c': 'It’s okay if they don’t ask for any permissions',
        'd': 'None of the above',
        'correct': 'b',
        'explanation': 'Apps from unknown sources can contain harmful software that might damage your phone or steal your personal information. Always download apps from trusted sources, like the official app store.'
    },
    {
        'que': 'What is the safest way to handle your social media accounts?',
        'a': 'Use the same password for all accounts, it’s easier to remember',
        'b': 'Keep your profiles public so people can find you easily',
        'c': 'Use strong, unique passwords for each account and adjust your privacy settings',
        'd': 'None of the above',
        'correct': 'c',
        'explanation': 'It’s important to use strong passwords and adjust privacy settings on social media to protect your personal information. Make sure your profiles are only visible to people you trust.'
    },
    {
        'que': 'How should you respond if you get a pop-up message asking for your credit card details on a website you don’t recognize?',
        'a': 'It’s probably harmless, so you should fill it out',
        'b': 'Close the pop-up immediately and avoid using the website',
        'c': 'Ask your friends if they’ve used the website before',
        'd': 'None of the above',
        'correct': 'b',
        'explanation': 'Pop-up messages asking for credit card information on unknown websites could be scams trying to steal your money. Close the pop-up and avoid the site if you’re unsure about its safety.'
    }
    // You can continue adding more questions here as needed
];

let currentQuestionIndex = 0;
let score = 0;

const queBox = document.getElementById('queBox');
const options = document.querySelectorAll('input[name="option"]');
const result = document.getElementById('claim');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('pre');
const submitButton = document.getElementById('btn');
const scorePage = document.getElementById('scorePage');
const scoreText = document.getElementById('scoreText');
const retryButton = document.getElementById('retry');

const loadQuestion = () => {
    const question = questions[currentQuestionIndex];
    queBox.innerText = question.que; // Set the question text
    document.querySelector('label[for="option1"]').innerText = question.a;
    document.querySelector('label[for="option2"]').innerText = question.b;
    document.querySelector('label[for="option3"]').innerText = question.c;
    document.querySelector('label[for="option4"]').innerText = question.d;
    result.innerHTML = ''; // Clear previous result
    options.forEach(option => (option.checked = false)); // Reset selected options
};

const checkAnswer = (answer) => {
    const question = questions[currentQuestionIndex];
    if (answer === question.correct) {
        score++;
        result.innerHTML = `<span class="badge">Correct!</span> ${question.explanation}`;
    } else {
        result.innerHTML = `<span class="badge">Incorrect!</span> ${question.explanation}`;
    }
};

const handleOptionClick = (event) => {
    checkAnswer(event.target.value);
};

const moveToNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    }
};

const moveToPrevious = () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
};

const displayScorePage = () => {
    document.querySelector('.quiz-container').style.display = 'none'; // Hide quiz container
    scorePage.style.display = 'block'; // Show score page
    scoreText.innerText = `You scored ${score} out of ${questions.length}.`;
};

const resetQuiz = () => {
    currentQuestionIndex = 0;
    score = 0;
    scorePage.style.display = 'none';
    document.querySelector('.quiz-container').style.display = 'block';
    loadQuestion();
};

// Add event listeners
options.forEach(option => {
    option.addEventListener('click', handleOptionClick);
});

nextButton.addEventListener('click', moveToNext);
prevButton.addEventListener('click', moveToPrevious);
submitButton.addEventListener('click', displayScorePage);
retryButton.addEventListener('click', resetQuiz);

// Initialize quiz
loadQuestion();