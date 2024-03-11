import { useEffect, useState,} from "react";
import {getClubGroups} from "../controllers/group"

export default function useGroup() {
    const [groups, setGroups] = useState(null);
    useEffect(()=>{
        async function load(){
            const groups = await getClubGroups();
            setGroups(groups);
        }
        load();
    }, []);
    return groups;
}