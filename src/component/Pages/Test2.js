import './Test.css';
import React, { useEffect } from "react";


function Test() {
    useEffect(() => {
        const handleContextMenu = (e) => {
            e.preventDefault();
        };

        const handleKeyDown = (e) => {
            if (e.ctrlKey && (e.key === 's' || e.key === 'p')) {
                e.preventDefault();
            }
        };

        document.addEventListener('contextmenu', handleContextMenu);
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('contextmenu', handleContextMenu);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

  return (
    <div className="test">
        {/* <iframe className='pdfViewer' title='pdf' src="https://drive.google.com/file/d/1GIa5SEOBLcOG-6_qlTsvFQkQJ5NsbM7Q/preview"></iframe> */}
        <iframe
            // type="application/pdf"
            className='pdfViewer'
            src="https://docs.google.com/gview?url=https://blog.faradars.org/wp-content/uploads/2018/12/Integral-CheatSheet-BFCS0009.pdf&embedded=true"
            loading='lazy'
            title='pdf'
            sandbox="allow-scripts allow-same-origin"
        />
        </div>
  );
}

export default Test;
