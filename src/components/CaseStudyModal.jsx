function CaseStudyModal({
    isOpen,
    image,
    title,
    onClose,
}) {
    if (!isOpen || !image) {
        return null;
    }

    return (
        <div
            className="case-study-modal"
            role="dialog"
            aria-modal="true"
            aria-label={`${title} full case study`}
            onClick={onClose}
        >
            <div
                className="case-study-modal__content"
                onClick={(event) => event.stopPropagation()}
            >
                <button
                    type="button"
                    className="case-study-modal__close"
                    onClick={onClose}
                    aria-label="Close full case study"
                >
                    <i
                        className="bi bi-x-lg"
                        aria-hidden="true"
                    ></i>
                </button>

                <img
                    src={image}
                    alt={`${title} complete UX case study`}
                    className="case-study-modal__image"
                />
            </div>
        </div>
    );
}

export default CaseStudyModal;