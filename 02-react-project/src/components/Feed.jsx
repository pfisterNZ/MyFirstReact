import {
    Images,
    ImagePlay,
    ChartNoAxesCombined,
    Calendar,
} from "lucide-react";
import "../components/Feed.css";

export function Feed() {
    return (
        <div className="feed-container">
            <header className="tw-feedheader">
                <picture className="tw-feedheader-icon">
                    <img 
                    src="https://pbs.twimg.com/profile_images/1879274371400765440/je0B326O_400x400.jpg" 
                    alt="profile pic"/>
                </picture>
                <input type="text" name="feedinput" id="" placeholder="¿Qué está pasando?"/>
                <div className="tw-feedheader-icons">
                    <button>
                        <Images size={18} />
                    </button>
                    <button>
                        <ImagePlay size={18} />
                    </button>
                    <button>
                        <ChartNoAxesCombined size={18} />
                    </button>
                    <button>
                        <Calendar size={18} />
                    </button>
                </div>
            </header>
            <article className="tw-feed-article">

            </article>
        </div>
    );
}