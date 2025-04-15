function commentList(props){
    const {items}=props;

    return(
        <ul>
            {items.map(item=><li key={item.id}>
              
                <p>{item.text}</p>
              
            <div>
                By <address>{item.name}</address>
            </div>
        </li>)}


        </ul>
    )

}
export default commentList;