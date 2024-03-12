import { useEffect, useState,} from "react";
import { searchClubGroupByNumber } from "../controllers/group";

export default function useGroup(id) {
    const [groups, setGroups] = useState(null);
    useEffect(()=>{async function load(){
            const groups = await searchClubGroupByNumber(id);
            setGroups(groups);}
        load();
    }); return groups;
}