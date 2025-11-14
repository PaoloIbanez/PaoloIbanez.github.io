function getHead() {
    document.write(`
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="PIMTECH - Paolo Ibanez's cyberpunk-inspired portfolio uniting IT, cybersecurity, and business innovation.">
        <meta name="keywords" content="Paolo Ibanez, cyberpunk portfolio, IT, cybersecurity, business strategy, web development, Python, automation">
        <meta name="author" content="Paolo Ibanez Medina">
        <meta name="theme-color" content="#0FF4C6">

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700&family=Rajdhani:wght@300;400;600&display=swap">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
        <link href="./styles.css" rel="stylesheet">
    `);
}

function getHeader() {
    document.write(`
        <nav class="navbar navbar-expand-lg navbar-dark cyber-nav">
            <div class="container">
                <a class="navbar-brand" href="index.html">PIMTECH</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
                        <li class="nav-item"><a class="nav-link" href="index.html#projects">Projects</a></li>
                        <li class="nav-item"><a class="nav-link" href="index.html#palette">Palette</a></li>
                        <li class="nav-item"><a class="nav-link" href="newsletter.html">Newsletter</a></li>
                        <li class="nav-item"><a class="nav-link" href="experience.html">Experience</a></li>
                        <li class="nav-item"><a class="nav-link" href="interests.html">Interests</a></li>
                        <li class="nav-item"><a class="nav-link" href="tracker.html">Goal Tracker</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    `);
}

function getFooter() {
    document.write(`
        <footer class="footer">
            <div class="container footer-grid">
                <div>
                    <h4 class="footer-title">PIMTECH</h4>
                    <p class="footer-text">Cyberpunk-inspired personal innovation lab by Paolo Ibanez. Building immersive experiences with security, strategy, and heart.</p>
                </div>
                <div>
                    <h4 class="footer-title">Navigation</h4>
                    <ul class="footer-links">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="index.html#projects">Projects</a></li>
                        <li><a href="index.html#palette">Color Palette</a></li>
                        <li><a href="newsletter.html">Newsletter</a></li>
                        <li><a href="experience.html">Experience</a></li>
                        <li><a href="interests.html">Interests</a></li>
                        <li><a href="tracker.html">Goal Tracker</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="footer-title">Contact</h4>
                    <ul class="footer-links">
                        <li><a href="mailto:paolochamba@gmail.com">paolochamba@gmail.com</a></li>
                        <li><a href="https://www.linkedin.com/in/paolo-ib%C3%A1%C3%B1ez-medina" target="_blank" rel="noopener">LinkedIn</a></li>
                        <li><a href="https://github.com/PaoloIbanez" target="_blank" rel="noopener">GitHub</a></li>
                    </ul>
                </div>
            </div>
            <p class="footer-copyright">&copy; 2025 PIMTECH &mdash; Designed and built by Paolo Ibanez.</p>
        </footer>
    `);
}
