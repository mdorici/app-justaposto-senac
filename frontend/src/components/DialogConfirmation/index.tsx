import ButtonInverse from "../ButtonInverse";
import ButtonPrimary from "../ButtonPrimary";

type Props = {
    id: number;
    message: string;
    // eslint-disable-next-line @typescript-eslint/ban-types
    onDialogAnswer: Function;
}

export default function DialogConfirmation({id, message, onDialogAnswer} : Props) {

    return(
        <div className="jp-dialog-background" onClick={() => onDialogAnswer(false, id)}>
            <div className="jp-dialog-box" onClick={(event) => event.stopPropagation()}>
                <h2>{message}</h2>
                <div className="jp-dialog-btn-container" >
                    <div onClick={() => onDialogAnswer(false, id)}>
                        <ButtonInverse text="Não"/>
                    </div>
                    <div onClick={() => onDialogAnswer(true, id)}>
                        <ButtonPrimary text="Sim"/>
                    </div>    
                </div>
            </div>
        </div>
    )
}