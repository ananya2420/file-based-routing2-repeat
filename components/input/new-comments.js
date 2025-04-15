//import { comment } from "postcss";

function sendCommentHandler(event){

    event.preventDefault();

    const enteredEmail =emailInputRef.current.value;
    const enteredName = nameInputRef.current.value;
    const enteredComment =commentInputRef.current.value;

 if(!enteredEmail || enteredEmail.trim()===''||
        !enteredEmail.includes('@') ||
        !enteredName || enteredName.trim()==='' ||
        !enteredComment ||
        enteredComment.trim()===''){
    setIsInValid(true);
    return;

}
    

props.onAddComment({
    email:enteredEmail,
    name:enteredName,
    text:enteredComment,
})
}
return(
    <form onSubmit={sendCommentHandler}>
        <div>
            <div>
                <label htmlFor="email">Your Email</label>
                <input type='email' id='email' ref={emailInputRef} />
            </div>
            <div>
            <label htmlFor="name">Your Name</label>
            <input type='name' id='name' ref={nameInputRef} />
            </div>
            <div>
            <label htmlFor="cmment">Your Comment</label>
                <input type='comment' id='comment' ref={commentInputRef} />
                </div>
        </div>


    </form>

)
export default sendCommentHandler;