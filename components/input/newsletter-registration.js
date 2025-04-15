import { useRef } from "react";


function NewsletterRegistration(){
    const emailInputRef = useRef();
    function registrationHandler(event){
        event.preventDefault();

        const enteredEmail = emailInputRef.current.value;

        fetch('/api/newsletter',{
            method:'POST',
            body: JSON.stringify({email:enteredEmail}),
            headers:{
                    'Content-type':'application/json',
            }
        }).then(response=>response.json())
        .then(data=>console.log(data))

    }

    return(
        <section>
            <h2>Signup to stay updated!</h2>
            <form onSubmit={registrationHandler}>
                <div>
                    <input type="email"
                    id="email"
                    placeholder="Your email"
                    aria-label="Your email"
                    ref={emailInputRef}
                    />
                    <button>Register</button>
                    
                </div>
            </form>
        </section>
    )
}
export default NewsletterRegistration;
