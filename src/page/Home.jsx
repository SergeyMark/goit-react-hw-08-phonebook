import { useState, useEffect } from "react";

const style = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '150px'
    },
    title: {
        fontWeight: 500,
        fontSize: 48,
        textAlign: 'center',
        textTransform: 'uppercase'
    }
};

export default function Home() {
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        const interval = setInterval(() => {
            setVisible((prevIsVisible) => !prevIsVisible);
        }, 700);

        return () => clearInterval(interval)
    }, [])


    return(
        <div style={style.container}>
            <h1 style={style.title}>Welcom to <span style={{ visibility: visible ? 'visible' : 'hidden' }}>phonebook</span></h1>
        </div>
    )
}