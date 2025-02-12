function blockShorts() {
    // Redirect if user is on a Shorts page
    if (window.location.href.includes("youtube.com/shorts")) {
        window.location.href = "https://munishka-vijay.github.io/Mindfulness-Pages/"; // Replace with your actual page URL
    }

    // Completely remove Shorts from the homepage feed
    document.querySelectorAll('ytd-reel-shelf-renderer, ytd-rich-section-renderer, ytd-reel-video-renderer, #shorts').forEach(el => el.remove());
}

function blockReels() {
    // Redirect if user is on an Instagram Reels page
    if (window.location.href.includes("instagram.com/reels")) {
        window.location.href = "https://www.instagram.com/";
    }

    // Remove Reels section from Instagram feed
    document.querySelectorAll('article[role="presentation"], div[role="dialog"], div[aria-label="Reels"], div[aria-label="Explore Reels"]').forEach(el => el.remove());
}

function blockLinkedInShorts() {
    // Remove LinkedIn short video sections
    document.querySelectorAll('div.video-player, div.feed-shared-update').forEach(el => el.remove());
}

// Continuously check for Shorts, Reels, and LinkedIn short videos every second
setInterval(() => {
    blockShorts();
    blockReels();
    blockLinkedInShorts();
}, 1000);

// Also use MutationObserver to remove Shorts immediately when they load
const observer = new MutationObserver(() => {
    blockShorts();
});
observer.observe(document.body, { childList: true, subtree: true });

const instaObserver = new MutationObserver(() => {
    blockReels();
});
instaObserver.observe(document.body, { childList: true, subtree: true });

const linkedinObserver = new MutationObserver(() => {
    blockLinkedInShorts();
});
linkedinObserver.observe(document.body, { childList: true, subtree: true });
