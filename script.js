function getHead() {
    document.write(`
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="PIMTECH - The personal portfolio of Paolo Ibanez. Showing IT, business, cybersecurity, and web development/python projects.">
        <meta name="keywords" content="Paolo Ibanez, IT, business, cybersecurity, web development, Python, programming, e-commerce">
        <meta name="author" content="Paolo Ibanez Medina">

        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&family=Lora:wght@400;700&display=swap">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
        <link href="./styles.css" rel="stylesheet">
    `);
}

function getHeader() {
    document.write(`
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <a class="navbar-brand" href="index.html">PIMTECH</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
                        <li class="nav-item"><a class="nav-link" href="https://github.com/PaoloIbanez?tab=repositories">Projects</a></li>
                        <li class="nav-item"><a class="nav-link" href="newsletter.html">Newsletter</a></li>                 
                        <li class="nav-item"><a class="nav-link" href="experience.html">Experience</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    `);
}

function getFooter() {
    document.write(`
        <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 footer-section">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="https://github.com/PaoloIbanez?tab=repositories">Projects</a></li>
                            <li><a href="newsletter.html">Newsletter</a></li>
                            <li><a href="experience.html">Experience</a></li>
                        </ul>
                    </div>

                    <div class="col-md-6 footer-section">
                        <h4>Contact</h4>
                        <p>Email: <a href="mailto:paolochamba@gmail.com">paolochamba@gmail.com</a></p>
                        <div class="social-icons">
                            <a href="https://www.linkedin.com/in/paolo-ibáñez-medina" target="_blank">LinkedIn</a>
                            <a href="https://github.com/PaoloIbanez" target="_blank">GitHub</a>
                        </div>
                    </div>
                </div>
                <p class="text-center">&copy; 2025 PIMTECH | Built by Paolo Ibanez</p>
            </div>
        </footer>
    `);
}
