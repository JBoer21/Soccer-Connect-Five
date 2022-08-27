import FlashMessage from 'react-flash-message';

function flashmessage ({message}) { // inside render
    return (<FlashMessage duration={5000} persistOnHover={true}>
        <p>{message}</p>
        </FlashMessage>
        )

}

export default flashmessage