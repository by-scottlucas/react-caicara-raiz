import "./InputField.css";

export const InputField = ({
    id,
    label,
    type = "text",
    placeholder,
    value,
    error,
    onChange,
}: {
    id: string;
    label: string;
    type?: string;
    placeholder: string;
    value: string;
    error?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}) => (
    <div className="contact__field">
        <label htmlFor={id} className="contact__label">{label}</label>
        {type === "textarea" ? (
            <textarea
                id={id}
                name={id}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`contact__textarea ${error ? "contact__input--error" : ""}`}
            />
        ) : (
            <input
                id={id}
                name={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`contact__input ${error ? "contact__input--error" : ""}`}
            />
        )}
        {error && <p className="contact__error">{error}</p>}
    </div>
);