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
        <section class="bg-gray-100 p-8 rounded-lg max-w-md mx-auto shadow-lg">
            <h2 class="text-2xl font-semibold text-center text-gray-800 mb-6">Signup to stay updated!</h2>
            <form onSubmit={registrationHandler}>
                <div class="flex flex-col sm:flex-row gap-4">
                    <input 
                        type="email"
                        id="email"
                        placeholder="Your email"
                        aria-label="Your email"
                        ref={emailInputRef}
                        class="flex-grow p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <button 
                        type="submit"
                        class="bg-green-500 text-white py-3 px-6 rounded-md hover:bg-green-600 focus:ring-2 focus:ring-green-300 focus:outline-none"
                    >
                        Register
                    </button>
                </div>
            </form>
        </section>

    )
}
export default NewsletterRegistration;
