import { createContext } from "react";

export const PlayerContext = createContext({
    players: [],
    addPlayer: () => {},
    deletePlayer: () => {},
})