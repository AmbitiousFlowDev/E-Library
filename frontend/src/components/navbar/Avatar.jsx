export default function Avatar({username , size}) {
    return <div className={`bg-neutral text-center text-neutral-content w-${size} rounded-full`}>
        <span className="text-md">{username ? username.charAt(0).toUpperCase() : "?"}</span>
</div>
}