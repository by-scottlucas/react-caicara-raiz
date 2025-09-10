import "./ShareButton.css";

import { useState } from "react";
import { Share2, Copy, Facebook, Twitter, Linkedin, MessageCircle } from "lucide-react";

interface ShareButtonProps {
    post: { title: string } | null;
    postId: string;
}

export default function ShareButton({ post, postId }: ShareButtonProps) {
    const [open, setOpen] = useState(false);

    const currentURL = encodeURIComponent(`${window.location.origin}/posts/${postId}`);
    const title = encodeURIComponent(post?.title || "Confira este conteúdo!");

    const handleCopy = async () => {
        await navigator.clipboard.writeText(`${window.location.origin}/posts/${postId}`);
        alert("Link copiado!");
    };

    const shareOptions = [
        {
            name: "Facebook",
            url: `https://www.facebook.com/sharer/sharer.php?u=${currentURL}`,
            icon: <Facebook className="w-5 h-5" />,
        },
        {
            name: "Twitter",
            url: `https://twitter.com/intent/tweet?url=${currentURL}&text=${title}`,
            icon: <Twitter className="w-5 h-5" />,
        },
        {
            name: "LinkedIn",
            url: `https://www.linkedin.com/shareArticle?mini=true&url=${currentURL}&title=${title}`,
            icon: <Linkedin className="w-5 h-5" />,
        },
        {
            name: "WhatsApp",
            url: `https://api.whatsapp.com/send?text=${title}%20${currentURL}`,
            icon: <MessageCircle className="w-5 h-5" />,
        },
    ];

    return (
        <div className="share-button">
            <button
                className="share-button__trigger"
                onClick={() => setOpen((prev) => !prev)}
                aria-label="Compartilhar"
            >
                <Share2 size={25} />
            </button>

            {open && (
                <div className="share-button__menu">
                    <button
                        className="share-button__item"
                        onClick={handleCopy}
                        aria-label="Copiar link"
                    >
                        <Copy className="w-5 h-5" />
                        <span>Copiar Link</span>
                    </button>

                    {shareOptions.map((opt) => (
                        <a
                            key={opt.name}
                            href={opt.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="share-button__item"
                            aria-label={`Compartilhar no ${opt.name}`}
                        >
                            {opt.icon}
                            <span>{opt.name}</span>
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
}
