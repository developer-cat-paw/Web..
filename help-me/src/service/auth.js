import { firebaseAuth, googleProvider } from '../Firebase';
import firebaseApp from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

class Auth {
    login(name) {
        const provider = this.getProvider(name);
        return firebaseAuth.signInWithPopup(provider);
    }
    getProvider(name) {
        switch (name) {
            case 'Google':
                return googleProvider;
            default:
                throw new Error(`${name} is unknown provider.`);
        }
    }
    onAuthChange = (callback) => {
        //여기서 callback은 위의 🌈부분이다.
        //로그아웃된 상태면 user는 null이다.
        firebaseApp.auth().onAuthStateChanged(user => {
            callback(user);
        })
    }
};
export default Auth;