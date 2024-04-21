import ButtonPrimary from "../ButtonPrimary";

type Props = {
    message: string;
    // eslint-disable-next-line @typescript-eslint/ban-types
    onDialogClose: Function;
}

export default function DialogInfo({message, onDialogClose} : Props) {

    return(
        <div className="jp-dialog-background" onClick={() => onDialogClose()}>
            <div className="jp-dialog-box" onClick={(event) => event.stopPropagation()}>
                <h2>{message}</h2>
                <div className="jp-dialog-btn" onClick={() => onDialogClose()}>
                    <ButtonPrimary text="Ok"/>
                </div>
            </div>
        </div>
    )
}