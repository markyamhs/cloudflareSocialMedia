import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap"

const Emoji = ({ emojiType, query, setQuery, appUser, userList, postId, children }) => {
  const isClicked = userList.includes(appUser)
  const handleClick = async (e)=> {
    const reqBody=JSON.stringify({
        username: appUser,
        reactionType: emojiType
    })
    const url = isClicked?'https://backend.markyamhs.workers.dev/posts/removeReaction/':'https://backend.markyamhs.workers.dev/posts/addReaction/'
    try{
        await fetch(`${url}${postId}`, {
            mode: 'no-cors',
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: reqBody
        })
      }catch(err){
        console.log(err)
        
      }
    setQuery(query+1)
  }
  return (
      <>
        <OverlayTrigger
        placement="bottom"
        overlay={
            <Tooltip id={`tooltip-bottom}`}>
            <p>{userList.length} user(s) gave this reaction.</p>
            {userList.map((u,index)=>(<p key={`un-${index}`}>{u}</p>))}
            </Tooltip>
        }
        >
            <span role="img" aria-label="arrow" 
            onClick={handleClick} 
            style={{ 
                cursor: "pointer", 
                fontSize: isClicked?"1.5em":"1em"
            }}
            >
                {children}
            </span>
        </OverlayTrigger>
        <span>{userList.length}</span>
        <span>   </span>
      </>
  );
};

export default Emoji;