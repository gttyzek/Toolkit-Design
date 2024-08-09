// JavaScript code can be added here to handle dynamic interactions

function submitPreAssessment() {
    const form = document.getElementById('pre-assessment-form');
    const formData = new FormData(form);
    let score = 0;

    if (formData.get('q1') === 'A') score++;
    if (formData.get('q2') === 'B') score++;

    alert(`You scored ${score} out of 2`);
}

// Example of more interactive elements and page transitions

function navigateToPage(page) {
    window.location.href = page;
}

// Example of handling login and registration
function handleLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulate login (in a real application, you would check credentials with the server)
    if (username === 'user' && password === 'password') {
        alert('Login successful');
        navigateToPage('dashboard.html');
    } else {
        alert('Invalid username or password');
    }
}

function handleRegister() {
    const username = document.getElementById('reg-username').value;
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;

    // Simulate registration (in a real application, you would save the user data to the server)
    alert(`User registered with username: ${username} and email: ${email}`);
    navigateToPage('login.html');
}













// JavaScript code to handle dynamic interactions

function submitPreAssessment() {
    const form = document.getElementById('pre-assessment-form');
    const formData = new FormData(form);
    let score = 0;

    if (formData.get('q1') === 'A') score++;
    if (formData.get('q2') === 'B') score++;

    alert(`You scored ${score} out of 2`);
}

// Example of more interactive elements and page transitions

function navigateToPage(page) {
    window.location.href = page;
}

// Example of handling login and registration
function handleLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulate login (in a real application, you would check credentials with the server)
    if (username === 'user' && password === 'password') {
        alert('Login successful');
        navigateToPage('dashboard.html');
    } else {
        alert('Invalid username or password');
    }
}

function handleRegister() {
    const username = document.getElementById('reg-username').value;
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;

    // Simulate registration (in a real application, you would save the user data to the server)
    alert(`User registered with username: ${username} and email: ${email}`);
    navigateToPage('login.html');
}

// Function to update progress (example)
function updateProgress(module, status) {
    const progressElement = document.querySelector(`.progress ul li[data-module="${module}"] span`);
    if (progressElement) {
        progressElement.textContent = status;
    }
}

// Example function to save resources
function saveResource(resource) {
    const savedResourcesList = document.querySelector('.saved-resources ul');
    const resourceItem = document.createElement('li');
    resourceItem.innerHTML = `<a href="${resource.url}">${resource.title}</a>`;
    savedResourcesList.appendChild(resourceItem);
}







function submitPreAssessment() {
    const form = document.getElementById('pre-assessment-form');
    const formData = new FormData(form);
    let score = 0;

    if (formData.get('q1') === 'A') score++;
    if (formData.get('q2') === 'B') score++;

    alert(`You scored ${score} out of 2`);
}





function handleLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulate login (in a real application, you would check credentials with the server)
    if (username === 'user' && password === 'password') {
        alert('Login successful');
        navigateToPage('dashboard.html');
    } else {
        alert('Invalid username or password');
    }
}

function handleRegister() {
    const username = document.getElementById('reg-username').value;
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;

    // Simulate registration (in a real application, you would save the user data to the server)
    alert(`User registered with username: ${username} and email: ${email}`);
    navigateToPage('login.html');
}

function navigateToPage(page) {
    window.location.href = page;
}





function handleLogin() {
    navigateToPage('dashboard.html');
}

function handleRegister() {
    navigateToPage('login.html');
}

function navigateToPage(page) {
    window.location.href = page;
}




function submitPreAssessment() {
    const form = document.getElementById('pre-assessment-form');
    const formData = new FormData(form);
    let score = 0;

    if (formData.get('q1') === 'A') score++;
    if (formData.get('q2') === 'B') score++;
    if (formData.get('q3') === 'A') score++;
    if (formData.get('q4') === 'B') score++;
    if (formData.get('q5') === 'C') score++;
    if (formData.get('q6') === 'A') score++;
    if (formData.get('q7') === 'B') score++;
    if (formData.get('q8') === 'A') score++;

    navigateToPage(`assessment-result.html?score=${score}`);
}

function navigateToPage(page) {
    window.location.href = page;
}



function submitPostAssessment() {
    const form = document.getElementById('post-assessment-form');
    const formData = new FormData(form);
    let score = 0;

    if (formData.get('q1') === 'A') score++;
    if (formData.get('q2') === 'C') score++;
    if (formData.get('q3') === 'A') score++;
    if (formData.get('q4') === 'A') score++;
    if (formData.get('q5') === 'B') score++;
    if (formData.get('q6') === 'A') score++;
    if (formData.get('q7') === 'A') score++;
    if (formData.get('q8') === 'A') score++;

    window.location.href = `assessment-result.html?score=${score}`;
}



