import Alert from 'react-bootstrap/Alert'

export function AlertCustom(props){
    const {variant, text} = props;
    
    return(
        <div className="p-4 p-sm-3" style={{margin: '8px'}}>
            <Alert key={variant} variant={variant}>
                {text}
            </Alert>
        </div>
    )
}