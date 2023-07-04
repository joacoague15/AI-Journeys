const Loader = ({style}) => {
    return (
            <div style={{ border: '16px solid #000', borderTop: '16px solid #f3f3f3',  borderRadius: '50%', width: 120, height: 120, animation: 'spin 2s linear infinite', ...style }}></div>
    )
}

export default Loader;