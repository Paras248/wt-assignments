export class Modal {
    constructor() {
        this.modalContainer = document.createElement("div");
        this.modalContent = document.createElement("div");
    }

    getModalContainer() {
        return this.modalContainer;
    }

    renderModal(element) {
        mapStyleWithStyles(this.modalContainer, modalContainerStyles);
        mapStyleWithStyles(this.modalContent, modalContentStyles);

        this.modalContent.innerHTML = element;
        this.modalContainer.appendChild(this.modalContent);
        document.body.appendChild(this.modalContainer);
    }

    removeModal() {
        this.modalContainer.remove();
    }
}

const mapStyleWithStyles = (element, styles) => {
    for (const property in styles) {
        element.style[property] = styles[property];
    }
};

const modalContentStyles = {
    top: "50%",
    left: "50%",
    width: "auto",
    height: "20%",
    background: "white",
    position: "absolute",
    transform: "translate(-50%, -50%)",
    padding: "20px 30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
};

const modalContainerStyles = {
    top: "0%",
    left: "0%",
    width: "100vw",
    height: "100vh",
    position: "absolute",
    background: "rgba(0, 0, 0, 0.5)",
};
