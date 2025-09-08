import "./CardPost.css";

import { Link } from "react-router-dom";
import { Post } from "../../models/Post";
import { formatPostDate, getPostImage } from "../../utils/postUtils";

interface CardPostProps {
    post: Post;
}

export default function CardPost({ post }: CardPostProps) {
    return (
        <article className="card-post">
            <div className="card-post__image-wrapper">
                <img
                    alt={post.title}
                    src={getPostImage(post)}
                    className="card-post__image"
                />
            </div>

            <span className="card-post__date">
                {formatPostDate(post.date)}
            </span>

            <h2 className="card-post__title">
                <Link
                    className="card-post__link"
                    to={`/posts/${post.ID}`}
                    dangerouslySetInnerHTML={{ __html: post.title }}
                />
            </h2>

            <Link
                to={`/posts/${post.ID}`}
                className="card-post__button"
            >
                Continue lendo
            </Link>
        </article>
    );
}
