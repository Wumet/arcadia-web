import Modal from "../Modal";

function LogIn({ isOpen, onClose }) {
  return (
    <>
      <title>Login</title>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title="Welcome Back!"
        subtitle="Input details to access dashboard"
      >
        <form></form>
      </Modal>
    </>
  );
}

export default LogIn;
