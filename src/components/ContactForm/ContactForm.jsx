import './ContactForm.css'

export default function contactForm() {
    return (
        <main class="contactForm">
            <div class="contact-form">
                <form action="https://formspree.io/f/xnqwejpj" method="POST">
                    <div class="form-control">
                        <label for="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="sender-name"
                            placeholder="Enter Your Name"
                            class="input-field"
                            required
                        />
                    </div>
                    <div class="form-control">
                        <label for="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="sender-email"
                            placeholder="Enter Your Email"
                            class="input-field"
                            required
                        />
                    </div>
                    <div class="form-control">
                        <label for="message">Message</label>
                        <textarea
                            id="message"
                            cols="60"
                            rows="10"
                            placeholder="Enter Your Message"
                            name="message"
                            class="input-field"
                            required
                        ></textarea>
                    </div>
                    <input
                        type="submit"
                        value="Submit"
                        id="submitBtn"
                        class="submitBtn"
                    />
                </form>
            </div>
        </main>
    )
}