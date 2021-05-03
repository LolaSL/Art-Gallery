import eventsData from './events.json';
import bookingsData from './bookings.json'
import artsData from './arts.json';
import usersData from './users.json';

export const mockData = () => {

    const eventsCollection = {
        async getEvents(language) {
            return mimicAsyncCall(eventsData.filter(event => event.language === language));
        },
    }

    const artsCollection = {
        async getArtById(id, language) {
            return mimicAsyncCall(artsData.find(art => art.id === id && art.language === language));
        },
        async getArts(language) {
            return mimicAsyncCall(artsData.filter(art => art.language === language));
        }
    }

    const bookingsCollection = {
        async getBooking(language) {
            return mimicAsyncCall(bookingsData.find(key => key.language === language));
        }
    }

    const userCollection = {
        async getUserById(id, language) {
            return mimicAsyncCall(usersData.find(user => user.id === id && user.language === language));
        }
    }
    //   @post('/users')
    //     function(user, callback) {
    //         userCollection.getUserById(user)
    //         return response.status(200).json(user);
    //     }

    //   useEffect(() => {
    //         const subscription = userCollection.subscribe();
    //         return () => {
    //             subscription.unsubscribe();
    //         };
    //     },
    //     [userCollection]
    //     );
    // USERS COLLECTION
    // some functions to mimic subscribe of a user
    // for example: 
    // userCollection.subscribe / userCollection.getUsers / userCollection.getUserById

    return {
        eventsCollection,
        bookingsCollection,
        artsCollection,
        userCollection
    }
}

const mimicAsyncCall = (data) => new Promise((resolve, reject) => {
    if (!data) reject("Data wasn't recived");
    else setTimeout(() => resolve(data), 1000);
})