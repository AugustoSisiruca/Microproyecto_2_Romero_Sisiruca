import { useEffect, useState,} from "react";


export default function useGroup() {
    const [groups, setGroups] = useState(null);
    useEffect(()=>{
        async function load(){
            const groups = await searchClubGroupByNumber(id);
            setGroups(groups);
        }
        load();
    }, []);
    return groups;
}