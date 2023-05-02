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
    return(
        <div style={style.container}>
            <h1 style={style.title}>Welcom to phonebook</h1>
        </div>
    )
}