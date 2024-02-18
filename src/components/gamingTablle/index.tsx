import React, {ReactNode} from 'react';
import {GameTable} from "./styles";
function GamingTable({children}:{children:ReactNode}) {
    return (
        <GameTable>{children}</GameTable>
    );
}

export default GamingTable;