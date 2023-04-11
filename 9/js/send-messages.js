const failMessageTemplate = document.querySelector('#error').content.querySelector('.error');
const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
let failMessageClone;
let successMessageClone;

const onDocumentKeydown = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      if (failMessageClone) {
        closeFailMessage();
        return}
    } 
    closeSuccessMessage();
};

function onSuccesMessageButtonClick (evt) {
    evt.preventDefault();
    closeSuccessMessage();
};

function onErrorMessageButtonClick (evt) { 
    closeFailMessage();
};

const closeFailMessage = () => {
    failMessageClone.remove();
    document.removeEventListener('keydown', onDocumentKeydown)
    failMessageClone = '';
};

const closeSuccessMessage = () => {
    successMessageClone.remove();
    document.removeEventListener('keydown', onDocumentKeydown)
    successMessageClone = '';
    
};

const renderFailMessage = () => {
failMessageClone = failMessageTemplate.cloneNode(true);
 document.body.append(failMessageClone);
 document.addEventListener('keydown', onDocumentKeydown);
 successMessageClone.querySelector('.error__button').addEventListener('click', onErrorMessageButtonClick)
 
};

const renderSeccussMessage = () => {
    successMessageClone = successMessageTemplate.cloneNode(true);
    document.body.append(successMessageClone);
    document.addEventListener('keydown', onDocumentKeydown);
    successMessageClone.querySelector('.success__button').addEventListener('click', onSuccesMessageButtonClick)
};

export {renderFailMessage, renderSeccussMessage}