import './LoginModal.scss';
export default function LoginModal({ auth }) {

  return (
    auth ? (
      <div className="auth-container">
        <div className="authModal">
          MODAL
          <span>X</span>
        </div>
      </div>
    ) : (false)
  )
}
