import './Test.css';
import React, { useEffect, useState } from "react";
import { ThreeDot } from "react-loading-indicators";

function Test() {
    const [loadAttempts, setLoadAttempts] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleContextMenu = (e) => {
            e.preventDefault();
        };

        const handleKeyDown = (e) => {
            if (e.ctrlKey && (e.key === 's' || e.key === 'p')) {
                e.preventDefault();
            }
        };

        const checkIframeLoaded = () => {
            const iframe = document.querySelector('.pdfViewer');
            if (iframe && iframe.contentWindow) {
                try {
                    // let pdfIframeWindow = window.frames.iframe1
                    // let elementToHide = pdfIframeWindow.document.querySelector('.ndfHFb-c4YZDc-Wrql6b')
                    // elementToHide.style.display = 'none'

                    const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
                    if (iframeDocument && iframeDocument.body && iframeDocument.body.innerHTML.length > 0) {
                        setLoaded(true);
                        setLoading(false);
                    } else {
                        throw new Error("Iframe not loaded");
                    }
                } catch (error) {
                    if (loadAttempts < 3) {
                        setLoadAttempts(prevAttempts => prevAttempts + 1);
                    }
                }
            }
        };

        const interval = setInterval(() => {
            if (!loaded) {
                checkIframeLoaded();
            } else {
                clearInterval(interval);
            }
        }, 3000); // Check every 3 seconds

        document.addEventListener('contextmenu', handleContextMenu);
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            clearInterval(interval);
            document.removeEventListener('contextmenu', handleContextMenu);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [loadAttempts, loaded]);

    useEffect(() => {
        if (loadAttempts > 0 && loadAttempts < 3) {
            setLoaded(false); // Reset loaded status if retrying
        }
    }, [loadAttempts]);

    return (
        <div className="test">
            {loading && <div className="loadingSpinner">
                <ThreeDot variant="bob" color="#32cd32" size="medium" text="" textColor="" />    
            </div>}
            <div className="iframeContainer">
                <iframe
                    name='iframe1'
                    className='pdfViewer'
                    src={`https://docs.google.com/gview?url=https://blog.faradars.org/wp-content/uploads/2018/12/Integral-CheatSheet-BFCS0009.pdf&embedded=true&attempt=${loadAttempts}`}
                    loading='lazy'
                    title='pdf'
                    sandbox="allow-scripts allow-same-origin"
                    onLoad={() => {
                        setLoaded(true);
                        setLoading(false);
                    }}
                />
            </div>
        </div>
    );
}

export default Test;
