import "./TwitterFollowCard.css"
import { useState } from "react"

export function TwitterFollowCard({ formatUserName, userName, name, isFollowing = false }) {
    
    const [isFollowingState, setIsFollowingState] = useState(isFollowing)

    const handleClick = () => {
        setIsFollowingState(!isFollowingState)
    }

    const buttonClassName = isFollowingState 
        ? 'tw-followCard-button tw-followCard-button--isFollowing' 
        : 'tw-followCard-button'

    const text = isFollowingState ? 'Siguiendo' : 'Seguir'

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-avatar' 
                    src={`https://unavatar.io/${userName}`} 
                    alt="Avatar" />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span>@{formatUserName ? formatUserName(userName) : userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>
    )
}
