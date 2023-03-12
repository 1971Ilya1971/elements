const openModalButton = document.getElementById('open_modal');
 
openModalButton.addEventListener('click', () => {
     
    const wrapper = document.createElement('div');
    wrapper.className = 'modalWrapper';


    const backdrop = document.createElement('div');
    backdrop.className = 'backdrop';

    backdrop.addEventListener('click', () => {
        closeModal();
    })

    wrapper.appendChild(backdrop);

    const modalContainer = document.createElement('div');
    modalContainer.className = 'modal';

    const cross = createModalButton('modalCross', 'X', closeModal);

    const buttonOk = createModalButton('modalOkButton', 'Ok', closeModal);

    const buttonCancel = createModalButton('modalCancelButton', 'Отмена', closeModal);

    modalContainer.appendChild(cross);
    modalContainer.appendChild(buttonOk);
    modalContainer.appendChild(buttonCancel);
    
    wrapper.appendChild(modalContainer);

    document.body.appendChild(wrapper);

    function createModalButton(className, text, func) {
        const button = document.createElement('button');
        button.setAttribute('type', 'button');
        button.className = className;
        button.innerText = text;
        button.addEventListener('click', () => {
            func();
        })
        return button;
    }

    function closeModal() {
        const modal = document.querySelector('.modalWrapper');
        if (!modal) {
            console.error('Wrong');
            return;
        } 

        modal.remove();
    }
})