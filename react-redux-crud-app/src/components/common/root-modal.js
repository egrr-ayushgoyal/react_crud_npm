import EditEmployeeModal from '../views/edit-employee-modal';
import React,{Component} from 'react';
import { connect } from 'react-redux';


const MODAL_COMPONENTS = {
    'EDIT_EMPLOYEE': EditEmployeeModal
}

const ModalRoot = ({ modalType, modalProps }) => {
    if (!modalType) {
        return null;
    }

    const SpecificModal = MODAL_COMPONENTS[modalType]
    return <SpecificModal {...modalProps} />
}

export default connect(
    state => state.modal
)(ModalRoot)