import './Loading.css';

interface LoadingProps {
    width?: number;
    height?: number;
    message?: string;
}

export default function Loading({ message = "", width = 40, height = 40 }: LoadingProps) {
    return (
        <>
            <div className="loading-spinner">
                <div className="spinner mb-2" style={{ width: `${width}px`, height: `${height}px` }}></div>
                {message}
            </div>
        </>
    );
}