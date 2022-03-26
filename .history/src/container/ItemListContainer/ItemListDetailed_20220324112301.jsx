
    const getFetchApi = async () => {
        try {
            const query = await fetch('/assets/DATA.json')// por defecto va un verbo tipo get
            const queryParse = await query.json()
            console.log(queryParse)
        } catch (error) {
            console.log(error)
        }
        
    }