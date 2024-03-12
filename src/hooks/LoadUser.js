import { useEffect, useState } from 'react';
import { getUser } from '../controllers/usuario';

export default function useUser(email) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        async function load() {
            const fetchedUser = await getUser(email);
            setUser(fetchedUser);
        }
        load();
    },);

    return user;
}
