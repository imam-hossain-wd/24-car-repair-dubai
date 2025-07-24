import { HashLoader } from "react-spinners";

export default function Loading() {
    return (
        <div className="flex justify-center items-center -mt-28 h-screen"><HashLoader
            color="#003053"
            size={50}
        /></div>
    )
}
