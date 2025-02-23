export default function Input({type , onChange , name , className , placeHolder , value , required=true}) {
    return <input type={type} name={name} value={value} onChange={onChange} className={className} placeholder={placeHolder} required={required} />
}