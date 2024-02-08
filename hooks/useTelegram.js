const tg = window.Telegram.WebApp;

export function useTelegram(){
    const oneClose = ()=>{
        tg.close();
    }

    const onTogleButton = () =>{
        if (tg.MainButton.isVisible){
            tg.MainButton.hide();
        }else{
            tg.MainButton.show();
        }
    }

    return{
        oneClose,
        onTogleButton,
        tg,
        user:tg.initDataUnsafe?.user,
    }
}