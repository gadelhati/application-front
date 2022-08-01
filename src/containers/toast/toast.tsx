import { toastInterface } from "./toast.interface";

export const Toast = (toast: toastInterface) => {
    return (
        <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 11 }}>
            <div id="liveToast" className="toast hide" role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-header">
                    {/* <img src="..." className="rounded me-2" alt="..."> */}
                    <strong className="me-auto">{toast.title}</strong>
                    <small>{toast?.image}</small>
                    <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div className="toast-body">
                    {toast.body}
                </div>
            </div>
        </div>
    );
}