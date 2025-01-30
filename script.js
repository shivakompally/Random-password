document.getElementById('generate-btn').addEventListener('click', generatePassword);
document.getElementById('copy-btn').addEventListener('click', copyToClipboard);

function generatePassword() {
    const length = document.getElementById('length').value;
    const includeLowercase = document.getElementById('include-lowercase').checked;
    const includeUppercase = document.getElementById('include-uppercase').checked;
    const includeNumbers = document.getElementById('include-numbers').checked;
    const includeSymbols = document.getElementById('include-symbols').checked;

    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';

    let allChars = '';
    if (includeLowercase) allChars += lowercase;
    if (includeUppercase) allChars += uppercase;
    if (includeNumbers) allChars += numbers;
    if (includeSymbols) allChars += symbols;

    let password = '';
    for (let i = 0; i < length; i++) {
        password += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }

    document.getElementById('password-display').innerText = password;
}

function copyToClipboard() {
    const password = document.getElementById('password-display').innerText;
    navigator.clipboard.writeText(password).then(() => {
        alert('Password copied to clipboard!');
    });
}
