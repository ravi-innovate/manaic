export default function ImageSubstitute({ text }: { text: string }) {
    return <>
        <div className="flex justify-center items-center text-2xl font-bold bg-center rounded-lg mb-4 text-center p-3" style={{
            backgroundImage: "url('images/blog-basic-image.png')", backgroundSize: "100% 100%", backgroundPosition: "center", minHeight: "165px", color: "#0a000d",
            textShadow: "0px 1px 2px #ffdd06, -1px 1px 2px #00e3e8, -2px -1px 2px #ff4273"
        }}>
            {text}
        </div>
    </>
}
