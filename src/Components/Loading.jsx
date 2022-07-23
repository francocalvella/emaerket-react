import Spinner from 'react-bootstrap/Spinner'


export function Loading(props){
    const {loading, children} = props;

    if(loading){
        return(
        <div className="main-loading">
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
        )
    }else{
        return (
            <>
            {children}
            </>
        )
    }
}