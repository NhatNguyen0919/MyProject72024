const Appvideo = () => {
    return (
        <div style={{
            maxWidth: 1920
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }} >
                <h2 style={{
                    zIndex: 1000,
                    position: 'absolute',
                    color: 'white',
                    textTransform: 'uppercase',
                    fontSize: 45,
                }}>Welcome to Vesper</h2>
                <video src="/video/mainvideo.mp4" muted loop autoPlay
                    style={{
                        zIndex: 0,
                        width: "100%",
                        objectFit: "cover",
                        height: 700

                    }}
                />
            </div>
        </div>

    );
}

export default Appvideo;