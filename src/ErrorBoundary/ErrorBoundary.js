import React, {useState, useEffect} from 'react'

const withErrorBoundary = (WrappedComponent, axios) => {
    return props => {
        const [error, setError] = useState(null);
        const reqInterceptor = axios.interceptors.request.use(req => {
            setError(null);
            return req;
        })
        const resInterceptor = axios.interceptors.request.use(
            res => res,
            err => {
                setError(err)
            }
        )

        useEffect(() => {
            return () => {
                axios.interceptors.request.eject(reqInterceptor);
                axios.interceptors.response.eject(resInterceptor)
            }
        }, [reqInterceptor, resInterceptor])
        
        if(error) return (
            <>
                <p>Something goes wrong!</p>
                <WrappedComponent {...props}/>
            </>
        )
    }
};

export default withErrorBoundary;
