import { useEffect, useState } from "react";
import NewComment from './new-comments'
import commentList from "./comment-list";
function Comments(props){
    const {eventId}=props;

    const [showComments, setShowComments]=useState(false);
    const [commments,setComments]=useState([]);


    useEffect(()=>{
        if(showComments){
            fetch('/api/comments/'+eventId).then(response=>response.json()).then(data=>{
                setComments(data.comments);

            })
        }
    },[showComments]);

    function toggleCommentsHandler(){
            setShowComments((prevStatus)=>!prevStatus)
            
    }

    function addCommentHandler(commentData){
        fetch('/api/comments/'+eventId,{
            method:'POST',
            body:JSON.stringify(commentData),
            headers:{
                'Content-type':'applicaton.json'
            }
        })
        .then((response)=>response.json())
        .then((data)=>console.log(data));

    }
    return(
        <section>
            <button onClick={toggleCommentsHandler}>
                {showComments ? 'Hide':'show'} comments
            </button>
            {showComments && <NewComment onAddComment={addCommentHandler} />}
            {showComments && <commentList items={comments}/>}
        </section>
    )

}
export default Comments;