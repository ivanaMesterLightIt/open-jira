import { FC, PropsWithChildren, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Entry } from '../../interfaces';
import { EntriesContext, entriesReducer } from './';

export interface EntriesState {
   entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
   entries: [
      {
         _id: uuidv4(),
         description: 'This is a description 1',
         status: 'pending',
         createdAt: Date.now(),
      },
      {
         _id: uuidv4(),
         description: 'This is a description 2',
         status: 'in-progress',
         createdAt: Date.now() - 1000000,
      },
      {
         _id: uuidv4(),
         description: 'This is a description 3',
         status: 'finished',
         createdAt: Date.now() - 100000,
      }
   ],
}

export const EntriesProvider: FC<PropsWithChildren> = ({ children }) => {

   const [state, dispatch] = useReducer( entriesReducer , Entries_INITIAL_STATE );

   return (
      <EntriesContext.Provider value={{
           ...state,
      }}>
           { children }
      </EntriesContext.Provider>
   );
}