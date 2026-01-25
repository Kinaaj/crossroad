/* filename: theme.js */

document.addEventListener("DOMContentLoaded", () => {
    // Icons (SVG Strings)
    const ICON_CLIPBOARD = `<svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2-2v1"></path></svg>`;
    const ICON_CHECK = `<svg viewBox="0 0 24 24" width="16" height="16" stroke="#9ccfd8" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;

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

        // 4. Create the Copy Button
        const btn = document.createElement('button');
        btn.className = 'copy-btn';
        btn.setAttribute('aria-label', 'Copy code');
        btn.innerHTML = ICON_CLIPBOARD; // Default State

        // Add click functionality
        btn.onclick = () => {
            // Write text to clipboard
            navigator.clipboard.writeText(pre.innerText)
                .then(() => {
                    // SUCCESS: Switch to Checkmark
                    btn.innerHTML = ICON_CHECK;

                    // Optional: Add a class for CSS animations
                    btn.classList.add('copied');

                    // Revert back after 2 seconds
                    setTimeout(() => {
                        btn.innerHTML = ICON_CLIPBOARD;
                        btn.classList.remove('copied');
                    }, 2000);
                })
                .catch(err => {
                    console.error('Failed to copy!', err);
                });
        };

        // 5. Assemble the HTML
        header.appendChild(label);
        header.appendChild(btn);

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