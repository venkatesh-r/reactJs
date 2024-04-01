import { useRouteError} from "react-router-dom"

const Error = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <>
         <h2>Error Went something wrong!</h2>
         <h3>{error.status} - {error.statusText}</h3>
        </>
    )
}

export default Error;