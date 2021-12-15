import {createContext,useState} from 'react';

export default ({ children }) =>{
    const [characters, setCharacters] = useState([]);
    const [editInfo, setEditInfo] = useState([]);
    return (            
            <AppContext.Provider value={[characters, setCharacters], [editInfo, setEditInfo]}>
                {children}
            </AppContext.Provider>  
    );
}

export const AppContext = createContext();