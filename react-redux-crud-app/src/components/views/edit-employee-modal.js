import React,{Component} from 'react';
import * as employeeApi from '../../api-call/employee-api';
import { hideModal } from '../../actions/modal-actions'
import {
    Modal,
    ModalHeader,
    ModalTitle,
    ModalClose,
    ModalBody,
    ModalFooter
} from 'react-modal-bootstrap';

const EditEmployeeModal = (props) => (
    <Modal isOpen={true} backdropClosesModal>
        <ModalHeader text="Live Demo" showCloseButton onClose={this.toggleModal} />
            <ModalBody>
                Modal body
            </ModalBody>
            <ModalFooter>
                modal footer
            </ModalFooter>
    </Modal>
)

/*export default connect(
    (state, ownProps) => ({
        post: state.postsById[ownProps.postId]
    })
)(DeletePostModal)*/


export default EditEmployeeModal;

