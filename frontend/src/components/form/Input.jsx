export default function Input({type , onChange , name , className , placeHolder , value , required=true , ref=null}) {
    return <input ref={ref} type={type} name={name} value={value} onChange={onChange} className={className} placeholder={placeHolder} required={required} />
}