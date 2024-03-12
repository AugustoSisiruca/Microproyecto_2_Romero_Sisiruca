import { useEffect, useState } from 'react';
import { useUser } from '../context/user';
import {changeUserGroupByEmail, getUserByEmail} from '../controllers/usuario'
import { searchClubGroupByNumber } from '../controllers/group';


export default function CardGroup(id){
    const [group, setGroup] = useState(null);
    const [userGroups, setUserGroups] = useState(null);
    const currentUser = useUser();
    const [visible, setVisible] = useState(true); 

    const handleUnsubscribe = () => {
        console.log(userGroups);
        let index = userGroups.indexOf(id.id);
        userGroups.splice(index, 1);
        changeUserGroupByEmail(currentUser.email, userGroups);
        setVisible(false);
    };

    useEffect(() => {
        async function load() {
            const groupDetails = await searchClubGroupByNumber(id.id);
            setGroup(groupDetails);
        }
        load();});

    useEffect(() => {
        if (currentUser) {
            const fetchUserGroups = async () => {
                const user = await getUserByEmail(currentUser.email);
                setUserGroups(user.groups);};
            fetchUserGroups();}}, [currentUser]);

    return (
        <div>
            <section>
                {visible && group ? (<div>{group}</div>):""}
                {visible ? (<button onClick={handleUnsubscribe}>Desuscribirse</button>):null}
            </section>
        </div>
    );
}

