export default function ImageSubstitute({ text }: { text: string }) {
    return <>
        <div className="flex justify-center items-center text-3xl font-bold bg-center rounded-lg mb-4 text-center p-3" style={{ backgroundImage: "url('images/blog-basic-image.png')", backgroundSize: "100% 100%", backgroundPosition: "center", minHeight: "185px", color: "var(--link-text)" }}>
            {text}
        </div>
    </>
}
