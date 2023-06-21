import "../assets/styles/contact.css"

export const Contact = () => {
    return (
        <div className="contact-container">
            <section className="social-info">
            <ul>
                <li><a href="https://www.facebook.com/ivan.kameyha.7" target="_blank"><i class="fa-brands fa-square-facebook"></i></a></li>
                <li><a href="https://instagram.com/ivankameyha?igshid=MzNlNGNkZWQ4Mg==" target="_blank"><i class="fa-brands fa-instagram"></i></a></li>
                <li><a href="https://github.com/Ivan-Kameyha" target="_blank"><i class="fa-brands fa-github"></i></a></li>
                <li><a href="https://www.linkedin.com/in/ivan-kameyha/" target="_blank"><i class="fa-brands fa-linkedin"></i></a></li>
            </ul>
            </section>
            <section className="contact-info">
                <h1>Let's work <span>together.</span></h1>
                <form action="https://formsubmit.co/iv.kameyha@gmail.com" method="POST">
                    <input type="text" name="name" placeholder="Nombre *" required/> <br />

                    <input type="email" name="email" placeholder="Email *" required/> <br />

                    <input type="text" name="subject" placeholder="Asunto *" required/> <br />

                    <textarea class="no-resize" name="message" id="" rows="5" placeholder="Mensaje *" required></textarea> <br />

                    <input className="btn-send" type="submit" value="Enviar"/>
                </form>
            </section>
        </div>
    )
}