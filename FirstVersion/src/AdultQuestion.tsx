import { FC } from "react"; // Работает с стрелочными функциями поэтому мы переписали AdultOrNot с function 
                            //FC-Функциональный компонент

type AdultOrNotProps = {
    setIsAdult: (value: boolean) => any; //Пропс принимает бул и возвращает все что угодно
}

const AdultOrNot : FC<AdultOrNotProps> = ({ setIsAdult }) => {
    const yesHandler = () => {
        setIsAdult(true); 
    };

    const noHandler = () => {
        setIsAdult(false);
    };

    return (
        <div>
            Вам Есть 18?
            <button onClick={yesHandler}>Да</button>
            <button onClick={noHandler}>Нет</button>
        </div>
    )
  }
  
  export default AdultOrNot;
  