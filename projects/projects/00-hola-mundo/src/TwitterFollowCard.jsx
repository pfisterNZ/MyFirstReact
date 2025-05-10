import "./TwitterFollowCard.css"


export function TwitterFollowCard({userName, name, isFollowing}) {

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-avatar' 
                    src={'https://unavatar.io/' + userName} 
                    alt="Avatar" />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span>@pfisterNaz</span>
                </div>
            </header>
            <aside>
                <button className='tw-followCard-button'>
                    Seguir
                </button>
            </aside>
        </article>
    )
}