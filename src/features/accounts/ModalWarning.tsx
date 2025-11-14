interface ModalWarningProps {
 children: React.ReactNode;
}

const ModalWarning = ({ children }: ModalWarningProps) => {
 return (
   <div style={{ border: 'solid 1px blue', padding: "50px", display: "block", margin: "0 auto" }}>
     {children}
   </div>
 );
}

export default ModalWarning;