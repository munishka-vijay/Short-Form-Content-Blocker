function blockShorts() {
    // Redirect if user is on a Shorts page
    if (window.location.href.includes("youtube.com/shorts")) {
        window.location.href = "https://munishka-vijay.github.io/Mindfulness-Pages/";
    }

    // Remove Shorts from homepage feed
    document.querySelectorAll('ytd-reel-shelf-renderer, ytd-rich-section-renderer, ytd-reel-video-renderer, #shorts').forEach(el => el.remove());

    // Hide Shorts tab in sidebar
    document.querySelectorAll('ytd-guide-entry-renderer').forEach(el => {
        if (el.innerText.includes("Shorts") || el.querySelector('[aria-label="Shorts"]')) {
            el.style.display = "none"; // Instantly hides it
        }
    });
}

function blockReels() {
    // Redirect if user is on an Instagram Reels page
    if (window.location.href.includes("instagram.com/reels")) {
        window.location.href = "https://www.instagram.com/";
    }

    // Remove Reels section from Instagram feed
    document.querySelectorAll('article[role="presentation"], div[role="dialog"], div[aria-label="Reels"], div[aria-label="Explore Reels"]').forEach(el => el.remove());

    // Remove Reels tab from Instagram sidebar using JavaScript
    document.querySelectorAll('a, span').forEach(el => {
        if (el.innerText.includes("Reels")) {
            el.closest("div")?.remove();
        }
    });

    // Use CSS to prevent Reels from even appearing
    const style = document.createElement('style');
    style.innerHTML = `
        a[href*="reels"], span:contains("Reels"),
        div[aria-label="Reels"], div[aria-label="Explore Reels"] {
            display: none !important;
            visibility: hidden !important;
        }
    `;
    document.head.appendChild(style);
}

function blockLinkedInShorts() {
    // Remove LinkedIn short video sections
    document.querySelectorAll('div.video-player, div.feed-shared-update').forEach(el => el.remove());
}

// Run functions immediately
blockShorts();
blockReels();
blockLinkedInShorts();

// Continuously check every second (backup)
setInterval(() => {
    blockShorts();
    blockReels();
    blockLinkedInShorts();
}, 1000);

// Use MutationObservers to remove Shorts/Reels immediately when they load
const observer = new MutationObserver(blockShorts);
observer.observe(document.body, { childList: true, subtree: true });

const instaObserver = new MutationObserver(blockReels);
instaObserver.observe(document.body, { childList: true, subtree: true });

const linkedinObserver = new MutationObserver(blockLinkedInShorts);
linkedinObserver.observe(document.body, { childList: true, subtree: true });
