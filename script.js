// ========================================
// PART 1: Variables, Data Types, and Conditionals
// ========================================

// Variables and data types
let userName = "Student";
const currentYear = 2024;
let isLoggedIn = false;

// Function to check age category using conditionals
function checkAge() {
    const age = parseInt(document.getElementById('ageInput').value);
    const resultElement = document.getElementById('ageResult');
    
    // Conditional logic
    if (age < 13) {
        resultElement.textContent = `Age ${age}: You are a child.`;
        resultElement.style.color = 'blue';
    } else if (age < 20) {
        resultElement.textContent = `Age ${age}: You are a teenager.`;
        resultElement.style.color = 'green';
    } else if (age < 60) {
        resultElement.textContent = `Age ${age}: You are an adult.`;
        resultElement.style.color = 'orange';
    } else {
        resultElement.textContent = `Age ${age}: You are a senior.`;
        resultElement.style.color = 'purple';
    }
    
    console.log(`User entered age: ${age}`);
}

// ========================================
// PART 2: Functions - Reusable Code Blocks
// ========================================

// Function 1: Calculate sum of two numbers
function calculateSum(a, b) {
    return a + b;
}

// Function 2: Format text (capitalize and add prefix)
function formatString(text) {
    return `✨ ${text.toUpperCase()} ✨`;
}

// Wrapper functions for DOM interaction
function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value) || 0;
    const num2 = parseFloat(document.getElementById('num2').value) || 0;
    const result = calculateSum(num1, num2);
    
    document.getElementById('calcResult').textContent = `Sum: ${result}`;
    console.log(`Calculated: ${num1} + ${num2} = ${result}`);
}

function formatText() {
    const text = document.getElementById('textInput').value;
    const formatted = formatString(text);
    
    document.getElementById('textResult').textContent = formatted;
    console.log(`Formatted text: ${formatted}`);
}

// ========================================
// PART 3: Loops - Power of Repetition
// ========================================

// Loop 1: For loop to generate a list
function generateList() {
    const listElement = document.getElementById('numberList');
    listElement.innerHTML = ''; // Clear existing content
    
    // For loop to create list items
    for (let i = 1; i <= 5; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = `Item ${i}: ${i * i} squared`;
        listElement.appendChild(listItem);
    }
    
    console.log('Generated number list using for loop');
}

// Loop 2: While loop for countdown
function startCountdown() {
    const countdownElement = document.getElementById('countdown');
    let count = 5;
    
    // While loop for countdown
    const countdownInterval = setInterval(() => {
        if (count > 0) {
            countdownElement.textContent = `Countdown: ${count}`;
            count--;
        } else {
            countdownElement.textContent = '🎉 Countdown Complete!';
            clearInterval(countdownInterval);
        }
    }, 1000);
    
    console.log('Started countdown using while loop logic');
}

// ========================================
// PART 4: DOM Manipulation - Making Pages Interactive
// ========================================

// DOM Interaction 1: Toggle theme (event listener)
document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('toggleBtn');
    
    toggleBtn.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        const isDark = document.body.classList.contains('dark-theme');
        toggleBtn.textContent = isDark ? 'Light Theme' : 'Dark Theme';
        console.log(`Theme toggled to: ${isDark ? 'dark' : 'light'}`);
    });
});

// DOM Interaction 2: Add dynamic elements
function addElement() {
    const container = document.getElementById('dynamicContent');
    const newElement = document.createElement('div');
    const timestamp = new Date().toLocaleTimeString();
    
    newElement.innerHTML = `<p>Element created at: ${timestamp}</p>`;
    newElement.style.background = '#e3f2fd';
    newElement.style.padding = '10px';
    newElement.style.margin = '5px 0';
    newElement.style.borderRadius = '4px';
    
    container.appendChild(newElement);
    console.log(`New element added at ${timestamp}`);
}

// DOM Interaction 3: Initialize page with welcome message
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded successfully!');
    console.log('JavaScript fundamentals demo is ready.');
    
    // Change page title dynamically
    document.title = `JS Demo - ${new Date().toLocaleDateString()}`;
});

// Additional array demonstration with forEach loop
const colors = ['red', 'blue', 'green', 'yellow', 'purple'];
console.log('Available colors:');
colors.forEach((color, index) => {
    console.log(`${index + 1}. ${color}`);
});
