interface ModalWarningProps {
 children: React.ReactNode;
}

const ModalWarning = ({ children }: ModalWarningProps) => {
 return (
   <p style={{ color: 'red' }}>
     {children}
   </p>
 );
}

export default ModalWarning;