import Heading from "../components/Heading";

function Contact() {
    return <>
       <Heading text=" Контакты" />
     
      

            <div>
                <h1> CONTACT US </h1>
                <form id="contact-form" method="POST">
                    <label htmlFor="name"> Full Name </label>
                    <input name="name" placeholder="Enter full name..." type="text" />
                    <label htmlFor="email"> Email </label>
                    <input name="email" placeholder="Enter email..." type="email" />
                    <label htmlFor="message"> Message </label>
                    <textarea
                        rows="6"
                        placeholder="Enter message..."
                        name="message"
                        required
                    >
                    </textarea>
                    <button type="submit"> Send Message </button>
                </form>
            </div>
       
            </>
}

export default Contact