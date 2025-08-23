interface BootstrapButtonProps {
  buttonText: string;
}

function BootstrapButton({buttonText}: BootstrapButtonProps) {
    return <button type="button" className="btn btn-success">{buttonText}</button>
}

export default BootstrapButton;