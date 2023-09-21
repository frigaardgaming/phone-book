export default function Form(props) {
    return (

        <div style={{
            backgroundColor: props.color,
        }}
        
        
        className="form">
            {props.message}
        </div>
    )
}