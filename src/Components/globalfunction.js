import { Flip, toast } from "react-toastify"



export const notify = (content, type) => {
    toast(content, {
        position: 'top-center',
        autoClose: 1500,
        hideProgressBar: true,
        newestOnTop: false,
        closeOnClick: true,
        rtl: false,
        pauseOnFocusLoss: true,
        draggable: true,
        pauseOnHover: false,
        // theme: "colored",
        transition: Flip,
        style: { fontFamily: 'Roboto', fontSize: 14, backgroundColor: 'white' },
        type: type
    })
}
