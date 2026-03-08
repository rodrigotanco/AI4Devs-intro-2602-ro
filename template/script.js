// String Reverser Application
(function() {
    'use strict';

    // Utility function to reverse a string
    function reverseString(str) {
        return str.split('').reverse().join('');
    }

    // Create the main container
    const container = document.createElement('div');
    container.style.cssText = `
        font-family: Arial, sans-serif;
        max-width: 500px;
        margin: 40px auto;
        padding: 20px;
    `;

    // ========== VERSION 1: WITH BUTTON ==========
    const buttonVersionSection = document.createElement('div');
    buttonVersionSection.style.cssText = `
        background: #f5f5f5;
        padding: 20px;
        border-radius: 8px;
        margin-bottom: 30px;
    `;

    const buttonVersionTitle = document.createElement('h2');
    buttonVersionTitle.textContent = 'Version 1: With Button';
    buttonVersionTitle.style.cssText = 'margin-top: 0; color: #333;';

    const buttonVersionDesc = document.createElement('p');
    buttonVersionDesc.textContent = 'Button activates when text is more than 3 characters.';
    buttonVersionDesc.style.cssText = 'color: #666; font-size: 14px;';

    const inputWithButton = document.createElement('input');
    inputWithButton.type = 'text';
    inputWithButton.placeholder = 'Enter text (min 4 characters)';
    inputWithButton.style.cssText = `
        width: 100%;
        padding: 10px;
        font-size: 16px;
        border: 2px solid #ddd;
        border-radius: 4px;
        box-sizing: border-box;
        margin-bottom: 10px;
    `;

    const reverseButton = document.createElement('button');
    reverseButton.textContent = 'Reverse String';
    reverseButton.disabled = true;
    reverseButton.style.cssText = `
        padding: 10px 20px;
        font-size: 16px;
        background: #ccc;
        color: #666;
        border: none;
        border-radius: 4px;
        cursor: not-allowed;
        transition: all 0.3s ease;
    `;

    const buttonOutput = document.createElement('div');
    buttonOutput.style.cssText = `
        margin-top: 15px;
        padding: 10px;
        background: #fff;
        border-radius: 4px;
        min-height: 20px;
    `;

    // Enable/disable button based on input length
    inputWithButton.addEventListener('input', function() {
        const isValid = this.value.length > 3;
        reverseButton.disabled = !isValid;
        reverseButton.style.cssText = isValid ? `
            padding: 10px 20px;
            font-size: 16px;
            background: #4CAF50;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            transition: all 0.3s ease;
        ` : `
            padding: 10px 20px;
            font-size: 16px;
            background: #ccc;
            color: #666;
            border: none;
            border-radius: 4px;
            cursor: not-allowed;
            transition: all 0.3s ease;
        `;
    });

    // Reverse string on button click
    reverseButton.addEventListener('click', function() {
        const reversed = reverseString(inputWithButton.value);
        buttonOutput.innerHTML = `
            <strong>Input:</strong> ${inputWithButton.value}<br>
            <strong>Output:</strong> <span style="color: #4CAF50; font-weight: bold;">${reversed}</span>
        `;
    });

    buttonVersionSection.appendChild(buttonVersionTitle);
    buttonVersionSection.appendChild(buttonVersionDesc);
    buttonVersionSection.appendChild(inputWithButton);
    buttonVersionSection.appendChild(reverseButton);
    buttonVersionSection.appendChild(buttonOutput);

    // ========== VERSION 2: BUTTONLESS (REAL-TIME) ==========
    const buttonlessSection = document.createElement('div');
    buttonlessSection.style.cssText = `
        background: #e8f5e9;
        padding: 20px;
        border-radius: 8px;
    `;

    const buttonlessTitle = document.createElement('h2');
    buttonlessTitle.textContent = 'Version 2: Buttonless (Real-time)';
    buttonlessTitle.style.cssText = 'margin-top: 0; color: #333;';

    const buttonlessDesc = document.createElement('p');
    buttonlessDesc.textContent = 'Reversed string appears instantly as you type.';
    buttonlessDesc.style.cssText = 'color: #666; font-size: 14px;';

    const inputButtonless = document.createElement('input');
    inputButtonless.type = 'text';
    inputButtonless.placeholder = 'Start typing...';
    inputButtonless.style.cssText = `
        width: 100%;
        padding: 10px;
        font-size: 16px;
        border: 2px solid #4CAF50;
        border-radius: 4px;
        box-sizing: border-box;
        margin-bottom: 10px;
    `;

    const buttonlessOutput = document.createElement('div');
    buttonlessOutput.style.cssText = `
        padding: 15px;
        background: #fff;
        border-radius: 4px;
        font-size: 18px;
        min-height: 25px;
    `;
    buttonlessOutput.innerHTML = '<span style="color: #999;">Reversed text will appear here...</span>';

    // Real-time reverse on input
    inputButtonless.addEventListener('input', function() {
        if (this.value.length === 0) {
            buttonlessOutput.innerHTML = '<span style="color: #999;">Reversed text will appear here...</span>';
        } else {
            const reversed = reverseString(this.value);
            buttonlessOutput.innerHTML = `
                <strong>Input:</strong> ${this.value}<br>
                <strong>Output:</strong> <span style="color: #2196F3; font-weight: bold; font-size: 20px;">${reversed}</span>
            `;
        }
    });

    buttonlessSection.appendChild(buttonlessTitle);
    buttonlessSection.appendChild(buttonlessDesc);
    buttonlessSection.appendChild(inputButtonless);
    buttonlessSection.appendChild(buttonlessOutput);

    // Append all sections to container
    container.appendChild(buttonVersionSection);
    container.appendChild(buttonlessSection);

    // Append container to body
    document.body.appendChild(container);
})();
