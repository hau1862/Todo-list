const Lib = {
    classNames(...classNames) {
        let result = "";
    
        for(const className of classNames) {
            if(typeof className == "object") {
                for(const key in className) {
                    if(className[key] === true) {
                        result += key + " ";
                    }
                }
            }
            else {
                result += className + " ";
            }
        }
    
        result = result.trim();
        return result;
    },
}

export default Lib;