export function baseUrl():string{
    const lang=localStorage.getItem('lang');
    let  base="https://shamsacademy-backend.wassalha.net/en/api/";
    if(lang){
        base=`https://shamsacademy-backend.wassalha.net/${lang}/api/`;
    }
    return base;
}



