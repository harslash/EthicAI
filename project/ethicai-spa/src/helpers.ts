export const registerPageAsCompleted = (moduleName: string, modulePageRoute: string) => {
    const expires = new Date();
    expires.setTime(expires.getTime() - 1); 

    const cookieValue = document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${moduleName}ModuleState=`));

    const cookieValueCopy = cookieValue;

    // expire exisiting cookie
    document.cookie = `${moduleName}ModuleState=; expires=${expires.toUTCString()}; path=/`;

    if (cookieValueCopy) {
        const storedArrayString = cookieValueCopy.split('=')[1];
        const storedArray: {[key: string]: boolean}[] = JSON.parse(storedArrayString);

        storedArray.forEach(obj => {
            if (obj[modulePageRoute] !== undefined) {
                obj[modulePageRoute] = true;
            }
        })

        const newExpires = new Date();
        newExpires.setTime(expires.getTime() + 7 * 24 * 60 * 60 * 1000); 

        const updatedCookieValue = `${moduleName}ModuleState=${JSON.stringify(storedArray)}; expires=${newExpires.toUTCString()}; path=/`;
        
        //insert new cookie with same name
        document.cookie = updatedCookieValue;
    }
}