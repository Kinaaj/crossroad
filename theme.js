/* filename: theme.js */

document.addEventListener("DOMContentLoaded", () => {

    // Find all <pre> tags with the class "pretty-code"
    document.querySelectorAll('pre.pretty-code').forEach(pre => {

        // 1. Create the wrapper
        const wrapper = document.createElement('div');
        wrapper.className = 'code-block';

        // 2. Create the header
        const header = document.createElement('div');
        header.className = 'code-header';

        // 3. Get the language title (default to 'Code')
        const titleText = pre.getAttribute('data-title') || 'Code';
        const label = document.createElement('span');
        label.className = 'lang-label';
        label.innerText = titleText;

        // 4. Create the Copy Button (SVG)
        const icon = document.createElement('div');
        // This SVG is the "Clipboard" icon
        icon.innerHTML = `<svg class="copy-icon" viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`;

        // Add click functionality
        icon.onclick = () => {
            navigator.clipboard.writeText(pre.innerText);

            // Visual feedback: Change color to Pink for 1 second
            // (Assumes you are using the theme variables, or just hardcode a color)
            const svg = icon.querySelector('svg');
            const originalColor = svg.style.color;
            svg.style.color = "#eb6f92"; // Rose color

            setTimeout(() => {
                svg.style.color = originalColor;
            }, 1000);
        };

        // 5. Assemble the HTML
        header.appendChild(label);
        header.appendChild(icon);

        // Insert the wrapper before the <pre>
        pre.parentNode.insertBefore(wrapper, pre);

        // Move the <pre> inside the wrapper
        wrapper.appendChild(header);
        wrapper.appendChild(pre);

        // Clean up styling
        pre.classList.remove('pretty-code');
        pre.style.margin = "0";
    });

});