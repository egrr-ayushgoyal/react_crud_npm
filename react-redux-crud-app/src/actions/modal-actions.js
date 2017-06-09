import * as types from './action-types'

export function openModal(modalType, modalProps){
    return {
        type: types.SHOW_MODAL,
        modalType: modalType,
        modalProps: modalProps
    };
}

export function hideModal(){
    return {
        type: types.HIDE_MODAL
    };
}
