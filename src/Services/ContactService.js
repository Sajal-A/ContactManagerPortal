import axios from 'axios';

const CONTACT_API_BASE_URL = "http://localhost:8081/backend/contact"


class ContactService {
    
    
    getContact(){
        return axios.get(CONTACT_API_BASE_URL)
    }
    addContact(contact){
        return axios.post(CONTACT_API_BASE_URL,contact)
    }
    deleteContact(contactid){
        // var id = parseInt(contactid,10)
        return axios.delete(CONTACT_API_BASE_URL+'/'+contactid)
    }
    getContactById(id){
        return axios.get(CONTACT_API_BASE_URL+'/'+id);
    }
    updateContact(contactid){
        return axios.get(CONTACT_API_BASE_URL+'/'+contactid)
    }
}

export default new ContactService();